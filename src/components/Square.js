import Piece from './Piece';
import './Square.css';
import { useDrop } from 'react-dnd';

function Square({row, column, pieceType, color, highlight, onClick, movePiece, currentPlayer}) {  
  const [, drop] = useDrop(
    () => ({
      accept: 'piece',
      drop: (fromSquare) => {        
        movePiece(fromSquare, {row, column});        
      }
    }),
    [row, column, currentPlayer]
  );

  return (
    <div 
      ref={drop}
      className={`square ${(row + column) % 2 === 0 ? 'even' : 'odd'} `+ 
        `${highlight ? 'highlight' : ''}`}     
      onClick={onClick}>
      {pieceType && <Piece pieceType={pieceType} color={color} row={row} column={column} />}
    </div>
  );  
}

export default Square;