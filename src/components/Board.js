import { Chess } from 'chess.js';
import { useState } from 'react';
import Square from './Square';
import './Board.css';

const BOARD_SIZE = 8

function Board(props) {
  /** @type {Chess} */
  const chess = props.chess;    
  const [board, setBoard] = useState(chess.board());
  const [fromSquare, setFromSquare] = useState(null);

  function posToSAN(row, column) {
    const columnLetter = String.fromCharCode('a'.charCodeAt(0) + column);
    return `${columnLetter}${BOARD_SIZE - row}`;
  }
  
  function handleClick(row, column) {
    if (fromSquare === null) {      
      setFromSquare(posToSAN(row, column));
    } else {
      const toSquare = posToSAN(row, column);
      chess.move({from: fromSquare, to: toSquare});
      setBoard(chess.board());
      setFromSquare(null);
    }  
  }
  
  const rows = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    const squares = [];
    for (let j = 0; j < BOARD_SIZE; j++) {
      const square = (
        <Square
          pieceType={board[i][j] ? board[i][j].type : null}
          color={board[i][j] ? board[i][j].color : null}
          key={`(${i},${j})`}
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