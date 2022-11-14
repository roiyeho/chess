import './Login.css';
import { useState } from 'react';

function Login(props) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.setUsername(username);
  }

  return (
    <div className="Login">      
      <h1>Chess with Friends</h1>               
      <form className="login-form" onSubmit={handleSubmit}>   
        <h2>Sign In</h2>     
        <div>
          <label htmlFor="username">Username:</label>          
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus 
            required />
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>    
  )
}

export default Login;