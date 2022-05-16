import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

export function RegistrationView(props) {
  const [ Username, setUsername ] = useState('');
  const [ Password, setPassword ] = useState('');
  const [ Email, setEmail ] = useState('');
  const [ Birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      axios
        .post("https://my-movie-api29.herokuapp.com/users", {
          username: Username,
          password: Password,
          email: Email,
          birthday: Birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful, please login!");
          window.open("/", "_self");
          //open in the current tab
        })
        .catch((response) => {
          console.error(response);
          alert("error registering the user");
        });
    
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
          <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control type="date" placeholder="Birthdate" onChange={e => setBirthday(e.target.value)} />
          </Form.Group><br></br>

         <Button variant="primary" type="submit" onClick={handleSubmit}>
             Submit
          </Button>
       </Form>
    </Col>
  </Row>

  );
}
