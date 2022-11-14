import Piece from './Piece';
import './Square.css';

function Square({row, column, pieceType, color, highlight, onClick}) {  
  return (
    <div 
      className={`square ${(row + column) % 2 === 0 ? 'even' : 'odd'} `+ 
        `${highlight ? 'highlight' : ''}`}     
      onClick={onClick}>
      {pieceType && <Piece pieceType={pieceType} color={color} row={row} column={column} />}
    </div>
  );  
}

export default Square;