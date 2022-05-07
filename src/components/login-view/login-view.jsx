import React, { useState } from 'react';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  const handleRegistration = (e) => {
    e.preventDefault()
    props.onRegister(true)
}

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label><br></br>
      <button type="submit" onClick={handleSubmit}>Already User-LogIn Here</button><br></br>
      <button
        type="submit"
        onClick={handleRegistration}
      >
       New User-Register Here
      </button>
    </form>
  );
}