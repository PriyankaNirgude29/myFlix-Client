import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  //Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');


  const validate = () => {
    let isReq = true; 
    if(!username){
      setUsernameErr('Create Username');
      isReq = false; 
    } else if(username.length < 5){
      setUsernameErr('Username must be 5 characters long');
      isReq = false;
    }
    if(!password){
      setPasswordErr('Create Password(Min 6 characters)');
      isReq=false;
    }else if (password.length < 6){
      setPasswordErr('Password must be 6 characters long');
      isReq=false;
    }
    if(!email){
      setEmailErr('Add Email');
      isReq = false;
    } else if(email.indexOf('@') === -1){
      setEmail('Invalid Email');
      isReq = false; 
    }
   
    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq){
      axios.post("https://my-movie-api29.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday
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
      }
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
          <p> Already have an account?</p>
                <Link to={`/`}>
                  <Button
                    variant="primary"
                    className="custom-btn"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </Link>
       </Form>
    </Col>
  </Row>

  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }),
};