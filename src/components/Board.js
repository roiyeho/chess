import { Chess } from 'chess.js';
import { useState } from 'react';
import Square from './Square';
import './Board.css';
import Player from '../model/players';

const BOARD_SIZE = 8

function Board(props) {
  /** @type {Chess} */
  const chess = new Chess();
  const [board, setBoard] = useState(chess.board());
  const [currentPlayer, setCurrentPlayer] = useState(Player.White);
  const [fromSquare, setFromSquare] = useState(null);
  const [toSquare, setToSquare] = useState(null);

  function handleClick(row, column) {    
    if (fromSquare === null) {
      // Check that the square has a piece in the current player's color
      if (board[row][column] && board[row][column].color === currentPlayer) {
        setFromSquare({row, column});
        setToSquare(null);      
      }      
    } else {      
      if (row !== fromSquare.row || column !== fromSquare.column) {
        const toSquare = {row, column};
        // Check if it is a legal move
        if (chess.move({from: squareToSAN(fromSquare), to: squareToSAN(toSquare)})) {
          setBoard(chess.board());
          setToSquare(toSquare);
          switchPlayers();
          setFromSquare(null);
        } else {
          if (board[row][column] && board[row][column].color === currentPlayer) {
            setFromSquare({row, column});
          }
        }
      } else {
        setFromSquare(null);
      }                 
    }  
  }

  function squareToSAN(square) {
    const columnLetter = String.fromCharCode('a'.charCodeAt(0) + square.column);
    return `${columnLetter}${BOARD_SIZE - square.row}`;
  }

  function switchPlayers() {
    if (currentPlayer === Player.White) {
      setCurrentPlayer(Player.Black);
    } else {
      setCurrentPlayer(Player.White);
    }
  }
  
  const rows = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    const squares = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      const square = (
        <Square
          key={`(${i},${j})`}
          row={i}
          column={j}
          pieceType={board[i][j] ? board[i][j].type : null}
          color={board[i][j] ? board[i][j].color : null}
          highlight={(fromSquare && i === fromSquare.row && j === fromSquare.column) ||
            (toSquare && i === toSquare.row && j === toSquare.column)}          
          onClick={() => handleClick(i, j)}
        />
      )
      squares.push(square);
    }
    const row = (
      <div className='board-row' key={`row-${i}`}>
        {squares}
      </div>
    );
    rows.push(row);
  }
  return (
    <div>
      {rows}
    </div>
  );
}

export default Board;