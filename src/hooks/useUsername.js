import { useState } from 'react';

export function useUsername() { 
  const [username, setUsername] = useState(getUsername);

  function getUsername() {
    return sessionStorage.getItem('username');
  }
  
  function saveUsername(username) {
    sessionStorage.setItem('username', username);
    setUsername(username);
  }

  return {
    username,
    setUsername: saveUsername
  }
}