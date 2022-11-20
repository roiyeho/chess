import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useUsername } from '../hooks/useUsername';
import { TimeControls } from '../model/time-controls';
import { useState } from 'react';
import PlayWithFriendDialog from './PlayWithFriendDialog';
import { nanoid } from 'nanoid';
import { chessGames } from '../model/games';
import { PlayerColor, PlayerType } from '../model/players';

function Home() {
  const { username } = useUsername();
  const [timeControl, setTimeControl] = useState(0);
  const [showPlayWithFriendDialog, setShowPlayWithFriendDialog] = useState(false);
  const navigate = useNavigate();
    
  function handleCardClick(index) {
    setTimeControl(index); 
  }

  function handlePlayWithFriend() {
    setShowPlayWithFriendDialog(true);
  }

  function startGameWithFriend(opponentUsername) {
    // Generate game id
    const gameId = nanoid();
    
    // Create a game object
    const game = { 
      gameId,
      whitePlayer: {
        username,
        color: PlayerColor.White,
        type: PlayerType.Human
      },
      blackPlayer: {
        username: opponentUsername,
        color: PlayerColor.Black,
        type: PlayerType.Human
      },      
      timeControl
    };

    // Save the game object in the games map
    chessGames.set(gameId, game);

    // Redirect to the game page    
    navigate(`/game/${gameId}`);
  }

  const timeControlCards = TimeControls.map(([minutes, gameType], index) => (
    <Card 
      bg={index === timeControl ? 'info' : ''}
      className="card"      
      key={index}
      onClick={() => handleCardClick(index)}>      
      <Card.Body>
        <Card.Title>{gameType}</Card.Title>
        <Card.Text>
          {minutes > 0 ? `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}` : ''}          
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <div className="Home">
        <header>
          <div className="username">Welcome {username}</div>
          <h1>
            Chess with Friends
          </h1>
        </header>
        
        <div className="wrapper">      
          <div className="time-control">          
            {timeControlCards}
          </div>
          <div className="player-type">            
            <Button variant="primary" onClick={handlePlayWithFriend}>Play with a friend</Button>
            <Button variant="primary">Play with the computer</Button>
            <Button variant="primary">Play with a friend online</Button>
          </div>
        </div>
      </div>
      <PlayWithFriendDialog 
        show={showPlayWithFriendDialog}
        setShow={setShowPlayWithFriendDialog}
        startGameWithFriend={startGameWithFriend}
      />
    </>  
  );
}

export default Home;