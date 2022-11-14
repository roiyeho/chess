// import { useEffect, useState, useRef } from 'react';

import React from "react";

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

class Piece extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.row, this.props.column);
    this.state = {row: this.props.row, column: this.props.column};
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    const imagePath = `images/${this.props.color}${this.props.pieceType.toUpperCase()}.png`;
    return (
      <div>
        <img src={imagePath} alt={`${this.props.color}${this.props.pieceType}`} /> 
      </div>       
    )
  }
}

export default Piece;