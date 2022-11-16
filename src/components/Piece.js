// import { useEffect, useState, useRef } from 'react';

// import React from "react";

// function Piece({pieceType, color, row, column}) {
//   const [pieceStyle, setPieceStyle] = useState([]); 
//   const divRef = useRef();
//   const imagePath = `images/${color}${pieceType.toUpperCase()}.png`;

//   useEffect(() => {    
//     console.log(`row: ${row}, column: ${column}`);
//   }, [row, column]);

//   return (
//     <div style={pieceStyle} ref={divRef}>
//       <img src={imagePath} alt={`${color}${pieceType}`} /> 
//     </div>       
//   )
// }

// class Piece extends React.Component {
//   constructor(props) {
//     super(props);    
//     this.state = {row: this.props.row, column: this.props.column};
//   }  

//   render() {
//     const imagePath = `images/${this.props.color}${this.props.pieceType.toUpperCase()}.png`;
//     return (
//       <div>
//         <img src={imagePath} alt={`${this.props.color}${this.props.pieceType}`} /> 
//       </div>       
//     )
//   }
// }

import { useDrag } from "react-dnd";

function Piece({pieceType, color, row, column}) {  
  const imagePath = `images/${color}${pieceType.toUpperCase()}.png`;
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'piece',
    item: { row, column },
    collect: monitor => ({
      isDragging: !monitor.isDragging
    })
  }));

  return (
    <div   
      ref={drag}   
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: 'translate(0, 0)',
        cursor: 'move'
      }}
      >
      <img src={imagePath} alt={`${color}${pieceType}`} /> 
    </div>       
  )
}

export default Piece;