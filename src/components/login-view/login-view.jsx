import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { Form, Button, Card } from 'react-bootstrap';
import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
//declare hook for each input
const [usernameErr, setUsernameErr] = useState("");
const [passwordErr, setPasswordErr] = useState("");

//validate user inputs
const validate = () => {
  let isReq = true;
  if (!username) {
    setUsernameErr("Username is required!");
    isReq = false;
  } else if (username.length < 2) {
    setUsernameErr("Username must be 2 characters long!");
    isReq = false;
  }
  if (!password) {
    setPasswordErr("Password is required!");
    isReq = false;
  } else if (password.length < 6) {
    setPassword("Password must be 6 characters long!");
    isReq = false;
  }
  return isReq;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
          axios.post("https://my-movie-api29.herokuapp.com/login", {
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
    }
  };

  return (
    <div className="app-container login-container">
        <Card className='justify-content-center' 
        style={{ width: "30vw" }}>
        <Card.Body>
          <Card.Title className="fw-bolder">Login</Card.Title>
          <Form>
          <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          </Form.Group>


          <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </Form.Group><br></br>

          <div className="mt-2">
            <Button
              variant="primary"
             type="submit"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
 
          
        </Form>
       </Card.Body>
       </Card>
    </div>
  );
}

LoginView.propTypes = {
  
   onLoggedIn: PropTypes.func.isRequired,
};