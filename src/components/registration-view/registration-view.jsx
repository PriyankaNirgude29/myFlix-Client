import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegister(false);
  };

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
          </Form.Group>

          <Form.Group controlId="formEmailID">
          <Form.Label>EmailID:</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" placeholder="Birthdate" onChange={e => setPassword(e.target.value)} />
          </Form.Group><br></br>

         <Button variant="primary" type="submit" onClick={handleSubmit}>
             Submit
          </Button>
       </Form>
    </Col>
  </Row>

  );
}