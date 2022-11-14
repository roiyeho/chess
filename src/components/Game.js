import './Game.css';
import Board from "./Board";
import GameControls from "./GameControls";

function Game({ timeControl }) {
  return (
    <div className="Game">
      <Board />
      <GameControls timeControl={timeControl} />
    </div>
  );
}

export default Game;