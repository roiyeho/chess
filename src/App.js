import './App.css';
import { Chess } from 'chess.js';
import Board from './components/Board';
import playRandomGame from './logic/ChessLogic';

const chess = new Chess();

function App() {  
  return (
    <Board
      chess={chess}
    />
  );
}

export default App;
