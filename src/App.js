import './App.css';
import { Chess } from 'chess.js';
import Board from './components/Board';
import ChallengeToGame from './components/ChallengeToGame';
import Home from './components/Home';

const chess = new Chess();

function App() {  
  return (
    <div className="App">
      {/* <Home />     */}
      <Board chess={chess} />   
    </div>
  );
}

export default App;
