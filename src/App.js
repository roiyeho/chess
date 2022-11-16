import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUsername } from './hooks/useUsername';
import Home from './components/Home';
import Login from './components/Login';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const { username, setUsername } = useUsername();
  const [timeControl, setTimeControl] = useState(5);

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
          <Route path="/" element={
            <Home 
              timeControl={timeControl}
              setTimeControl={setTimeControl}
            />} 
          />
          <Route path="/game" element={
            <Game 
              timeControl={timeControl}            
            />} 
          />        
        </Routes>      
      </Router>    
      {/* <Home />     */}
      {/* <Board chess={chess} />    */}
    </div>
  );
}

export default App;
