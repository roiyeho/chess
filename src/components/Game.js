import './Game.css';
import { Chess } from 'chess.js';
import Board from "./Board";
import GameControls from "./GameControls";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { chessGames } from '../model/games';

function Game() {  
  const [/** @type {Chess} */ chess] = useState(new Chess()); 
  const [currentGame, setCurrentGame] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isGameOver, setGameOver] = useState(false);
  const { gameId } = useParams();

  useEffect(() => {
    if (chessGames.has(gameId)) {
      const currentGame = chessGames.get(gameId);
      setCurrentGame(chessGames.get(gameId));
      setCurrentPlayer(currentGame.whitePlayer);  
    }       
  }, [gameId]);
  
  function switchPlayers() {  
    if (currentPlayer === currentGame.whitePlayer) {
      setCurrentPlayer(currentGame.blackPlayer);
    } else {
      setCurrentPlayer(currentGame.whitePlayer);
    }
  }

  function handleGameOver() {
    setGameOver(true);    
    alert(`${currentPlayer.username} has won the game`);    
  }

  function lostOnTime() {
    setGameOver(true);    
    alert(`${currentPlayer.username} has lost on time`);
  }

  if (currentGame) {
    const whitePlayer = currentGame.whitePlayer;
    const blackPlayer = currentGame.blackPlayer;  
    const timeControl = currentGame.timeControl;

    return (      
      <div className="Game">
        <Board
          chess={chess}
          currentPlayer={currentPlayer}
          switchPlayers={switchPlayers}
          isGameOver={isGameOver}
          handleGameOver={handleGameOver}
        />
        <GameControls
          whitePlayer={whitePlayer}
          blackPlayer={blackPlayer}
          timeControl={timeControl}
          currentPlayer={currentPlayer}
          isGameOver={isGameOver}
          lostOnTime={lostOnTime}
        />      
      </div>      
    );
  } else {
    return (      
      <div>Game not found</div>
    );
  } 
}

export default Game;