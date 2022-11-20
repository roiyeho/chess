import { useState } from 'react';
import Square from './Square';
import './Board.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const BOARD_SIZE = 8

function Board({chess, currentPlayer, switchPlayers, isGameOver, handleGameOver}) {
  const [board, setBoard] = useState(chess.board());
  const [fromSquare, setFromSquare] = useState(null);
  const [toSquare, setToSquare] = useState(null);

  function movePiece(source, destination, useAnimation=false) {    
    // Check if it is a legal move    
    if (chess.move({from: squareToSAN(source), to: squareToSAN(destination)})) {
      // Update the board state
      setBoard(chess.board());
      setFromSquare(null);
      setToSquare(destination);  

      // If the game is not over, then switch players
      if (chess.isGameOver()) {
        handleGameOver();
      } else {        
        switchPlayers();        
      }        
      return true;
    }
    return false;
  }
  
  function handleSquareClick(row, column) { 
    if (isGameOver) {
      return;
    }
    
    if (fromSquare === null) {
      // Check that the square has a piece in the current player's color      
      if (board[row][column] && board[row][column].color === currentPlayer.color) {
        setFromSquare({row, column});
        setToSquare(null);      
      }      
    } else {      
      // Check if the same square was clicked twice
      if (row !== fromSquare.row || column !== fromSquare.column) {       
        // Move the piece to the destination
        const destination = {row, column}; 

        if (!movePiece(fromSquare, destination, true)) {
          // If the move was not legal, check if we can choose the destination as a new source square
          if (board[row][column] && board[row][column].color === currentPlayer.color) {
            setFromSquare({row, column});
          }
        }           
      } else {
        // Cancel the choice of the first square
        setFromSquare(null);
      }                 
    }  
  }

  function squareToSAN(square) {
    const columnLetter = String.fromCharCode('a'.charCodeAt(0) + square.column);
    return `${columnLetter}${BOARD_SIZE - square.row}`;
  }
   
  const squares = [];
  for (let i = 0; i < BOARD_SIZE; i++) {    
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
          onClick={() => handleSquareClick(i, j)}
          movePiece={movePiece}
          currentPlayer={currentPlayer}
        />
      )
      squares.push(square);
    }    
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Board">
        {squares}
      </div>
    </DndProvider>    
  );
}

export default Board;