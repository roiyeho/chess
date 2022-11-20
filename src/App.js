import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUsername } from './hooks/useUsername';
import Home from './components/Home';
import Login from './components/Login';
import Game from './components/Game';

function App() {
  const { username, setUsername } = useUsername();

  if (!username) {
    return (
      <div className="App">
        <Login setUsername={setUsername} />
      </div>
    );
  }
  
  return (
    <div className="App">
      <Router>        
        <Routes>        
          <Route path="/" element={<Home/>} />
          <Route path="/game/:gameId" element={<Game/>} />        
        </Routes>      
      </Router>   
    </div>
  );
}

export default App;
