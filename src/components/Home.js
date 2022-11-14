import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useUsername } from '../hooks/useUsername';
import TimeControls from '../model/timecontrols';

function Home({ timeControl, setTimeControl }) {
  const { username } = useUsername();
  
  function handleCardClick(index) {
    setTimeControl(index); 
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
          <Link to='/game'>
            <Button variant="primary">Play with a friend</Button>
          </Link>          
          <Button variant="primary">Play with the computer</Button>
          <Button variant="primary">Play with a friend online</Button>
        </div>
      </div>
    </div>   
  );
}

export default Home;