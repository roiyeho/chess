import './Game.css';
import Board from "./Board";
import GameControls from "./GameControls";
import { useState } from 'react';
import Player from '../model/players';

function Game({timeControl}) {
  const [currentPlayer, setCurrentPlayer] = useState(Player.White);

  return (
    <div className="Game">
      <Board 
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
      <GameControls 
        timeControl={timeControl}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}

export default Game;