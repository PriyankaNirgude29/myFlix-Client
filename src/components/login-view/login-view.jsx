import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

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
    <Row className="d-flex justify-content-center">
        <Col xs={4} md={4} >
          <Form className="d-flex flex-column justify-content-between align-items-center border border-black ">
          <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
          </Form.Group>


          <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </Form.Group><br></br>

    
          <Button variant="primary" type="submit" onClick={handleSubmit}>
               Already User-LogIn
          </Button><br></br>

          <Button variant="primary"
              type="submit"
              onClick={handleRegistration}
          >
             New User-Register Here
            </Button>
        </Form>
      </Col>
    </Row>
  );
}