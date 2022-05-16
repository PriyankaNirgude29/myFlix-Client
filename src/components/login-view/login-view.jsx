import React, { useState } from 'react';
import axios from 'axios';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my-movie-api29.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };

 // const handleRegistration = (e) => {
  //  e.preventDefault()
   // props.onRegister(true)
//}

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
    
    </form>
  );
}