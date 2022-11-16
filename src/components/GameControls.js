import Player from '../model/players';
import TimeControls from '../model/timecontrols';
import './GameControls.css';
import Timer from "./Timer";

function GameControls({timeControl, currentPlayer, isGameOver, lostOnTime}) {
  const gameDuration = TimeControls[timeControl][0];

  return (
    <div className="GameControls">
      {gameDuration !== 0 && 
      <Timer 
        timeControl={timeControl}
        active={currentPlayer === Player.Black && !isGameOver}
        isGameOver={isGameOver}
        lostOnTime={lostOnTime}
      />}
      <div>
        User1
      </div>
      <div>
        User2
      </div>
      {gameDuration !== 0 && 
      <Timer 
        timeControl={timeControl}         
        active={currentPlayer === Player.White && !isGameOver}
        isGameOver={isGameOver}
        lostOnTime={lostOnTime}
      />}
    </div>
  );
}

export default GameControls;