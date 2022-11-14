import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUsername } from './hooks/useUsername';
import Home from './components/Home';
import Login from './components/Login';

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
          <Route path="/" element={<Home />} />          
        </Routes>      
      </Router>    
      {/* <Home />     */}
      {/* <Board chess={chess} />    */}
    </div>
  );
}

export default App;
