import React, { useState } from 'react';
import { Form, Button, Navbar, Nav, Row, Container } from 'react-bootstrap';

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
    <Container fluid>
      <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">My-Flix</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="./login-view.jsx">LogIn</Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
      </Nav>
      </Navbar.Collapse>
   </Navbar>
    <Form>
    <Row className="justify-content-md-center">
    <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
    </Form.Group>
    </Row><br></br>
    <Row className="justify-content-md-center">
    <Form.Group controlId="formPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    </Row><br></br>
    <Row className="justify-content-md-center">
    <Form.Group controlId="formEmailID">
      <Form.Label>EmailID:</Form.Label>
      <Form.Control type="email" placeholder="Email" onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    </Row><br></br>
    <Row className="justify-content-md-center">
    <Form.Group controlId="formBirthday">
      <Form.Label>Birthday:</Form.Label>
      <Form.Control type="date" placeholder="Birthdate" onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    </Row><br></br>
    <Row className="justify-content-md-center">
     <Button variant="primary" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
    </Row>
  </Form>
  </Container>
  );
}