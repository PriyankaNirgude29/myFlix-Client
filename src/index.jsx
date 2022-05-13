import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './index.scss';

class MyFlixApplication extends React.Component {
  render() {
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
      <MainView />
      </Container>
    );
  }
}

const container = document.getElementsByClassName('app-container')[0];
ReactDOM.render(React.createElement(MyFlixApplication), container);