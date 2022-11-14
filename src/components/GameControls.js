import './GameControls.css';
import Timer from "./Timer";

function GameControls({ timeControl }) {
  return (
    <div className="GameControls">
      <Timer timeControl={timeControl} />
      <div>
        User1
      </div>
      <div>
        User2
      </div>
      <Timer timeControl={timeControl} />
    </div>
  );
}

export default GameControls;