import './Game.css';
import { Chess } from 'chess.js';
import Board from "./Board";
import GameControls from "./GameControls";
import { useState } from 'react';
import Player from '../model/players';

function Game({timeControl}) {  
  const [/** @type {Chess} */ chess] = useState(new Chess());
  const [currentPlayer, setCurrentPlayer] = useState(Player.White);
  const [isGameOver, setGameOver] = useState(false);

  function handleGameOver() {
    setGameOver(true);    
    alert(`${currentPlayer} has won the game`);    
  }

  function lostOnTime() {
    setGameOver(true);
    alert(`${currentPlayer} has lost on time`);
  }

  return (
    <div className="Game">
      <Board
        chess={chess}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameOver={isGameOver}
        handleGameOver={handleGameOver}
      />
      <GameControls 
        timeControl={timeControl}
        currentPlayer={currentPlayer}
        isGameOver={isGameOver}
        lostOnTime={lostOnTime}
      />
    </div>
  );
}

export default Game;