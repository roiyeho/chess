import './ChallengeToGame.css';

function ChallengeToGame() {
  return (
    <div className="ChallengeToGame">      
      <h1>Challenge to a game</h1>      
      <div>
        <p>To invite someone to play, give this URL:</p>
        <p><span className="game-link">https://mydomain.com/game/C3L0QvHf</span>
        <img className="copy-link" src="images/copy-link.png" width="40"/></p>
        <p>The first person to come to this URL will play with you.</p>
      </div>
    </div> 
  )
}

export default ChallengeToGame;