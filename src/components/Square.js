import './Square.css';

function Square(props) {
  function getImagePath(pieceType, color) {
    const imagePath = `images/${color}${pieceType.toUpperCase()}.png`;
    return imagePath;
  }
  
  let imagePath = null;
  if (props.pieceType) {
     imagePath = getImagePath(props.pieceType, props.color); 
  }

  return (
    <div 
      className={`square ${(props.row + props.column) % 2 === 0 ? 'even' : 'odd'} `+ 
        `${props.highlight ? 'highlight' : ''}`}     
      onClick={props.onClick}>
      {imagePath ? <img src={imagePath} /> : null}
    </div>
  );  
}

export default Square;