import Player from '../model/players';
import './GameControls.css';
import Timer from "./Timer";

function GameControls({ timeControl, currentPlayer }) {
  return (
    <div className="GameControls">
      <Timer timeControl={timeControl} active={currentPlayer === Player.Black} />
      <div>
        User1
      </div>
      <div>
        User2
      </div>
      <Timer timeControl={timeControl} active={currentPlayer === Player.White} />
    </div>
  );
}

export default GameControls;