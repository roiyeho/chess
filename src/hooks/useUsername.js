import { useState } from 'react';

export function useUsername() { 
  const [username, setUsername] = useState(getUsername);

  function getUsername() {
    return localStorage.getItem('username');
  }
  
  function saveUsername(username) {
    localStorage.setItem('username', username);
    setUsername(username);
  }

  return {
    username,
    setUsername: saveUsername
  }
}