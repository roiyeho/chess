import { TimeControls } from '../model/time-controls';
import './GameControls.css';
import Timer from "./Timer";
import UserInfo from './UserInfo';

function GameControls({whitePlayer, blackPlayer, timeControl, currentPlayer, isGameOver, lostOnTime}) {
  const gameDuration = TimeControls[timeControl][0];
  
  return (
    <div className="GameControls">
      {gameDuration !== 0 && 
      <Timer 
        className="upperTimer"
        timeControl={timeControl}
        active={currentPlayer === blackPlayer && !isGameOver}
        isGameOver={isGameOver}
        lostOnTime={lostOnTime}
      />}
      <UserInfo username={blackPlayer.username} />
      <div className="mainSection">
      </div>
      <UserInfo username={whitePlayer.username} />
      {gameDuration !== 0 && 
      <Timer 
        className="lowerTimer"
        timeControl={timeControl}         
        active={currentPlayer === whitePlayer && !isGameOver}
        isGameOver={isGameOver}
        lostOnTime={lostOnTime}
      />}
    </div>
  );
}

export default GameControls;