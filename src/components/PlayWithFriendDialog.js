import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import './PlayWithFriendDialog.css';

function PlayWithFriendDialog({show, setShow, startGameWithFriend}) {
  const [opponentUsername, setOpponentUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    startGameWithFriend(opponentUsername);
  }

  function handleClose() {    
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <form className="opponent-form" onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Play with a friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <label htmlFor="opponentUsername">Enter opponent username:</label>          
          <input 
            type="text" 
            id="opponentUsername" 
            value={opponentUsername}
            onChange={e => setOpponentUsername(e.target.value)}
            autoFocus 
            required />           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Start Game
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default PlayWithFriendDialog;