import './Timer.css';
import { TimeControls } from "../model/time-controls";
import { useEffect, useState } from 'react';

function Timer({timeControl, active, isGameOver, lostOnTime}) {  
  const gameDuration = TimeControls[timeControl][0];  
  const [remainingSeconds, setRemainingSeconds] = useState(gameDuration * 60 / 6);  
  const [timer, setTimer] = useState(null); 
  // need to save the timer in the state, so it can be cancelled when time runs out
  // (otherwise it won't survive the render cycle)
 
  function countDown() { 
    setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
  }

  useEffect(() => {
    if (active) {
      const timer = setInterval(countDown, 1000);
      setTimer(timer);
      return () => clearInterval(timer);
    } else {
      clearInterval(timer);
    }    
  }, [active]);

  if (!isGameOver && remainingSeconds === 0) {
    clearInterval(timer); 
    lostOnTime();
  }
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');

  return (
    <div className="Timer">
      {minutes}<span className="sep">:</span>{seconds}      
    </div>
  );
}

export default Timer;