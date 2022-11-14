import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { useUsername } from '../hooks/useUsername';

function Home() {
  const { username } = useUsername();

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
            <Card className="card">      
              <Card.Body>
                <Card.Title>Bullet</Card.Title>
                <Card.Text>
                  1 minute
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">      
              <Card.Body>
                <Card.Title>Blitz</Card.Title>
                <Card.Text>
                  3 minutes
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">      
              <Card.Body>
                <Card.Title>Blitz</Card.Title>
                <Card.Text>
                  5 minutes
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">      
              <Card.Body>
                <Card.Title>Rapid</Card.Title>
                <Card.Text>
                  10 minutes
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">      
              <Card.Body>
                <Card.Title>Classical</Card.Title>
                <Card.Text>
                  30 minutes
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">      
              <Card.Body>
                <Card.Title>No time limit</Card.Title>
                <Card.Text>
                  &nbsp;
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        <div className="player-type">          
          <Button variant="primary">Play with a friend</Button>
          <Button variant="primary">Play with the computer</Button>
          <Button variant="primary">Play with a friend online</Button>
        </div>
      </div>
    </div>   
  );
}

export default Home;