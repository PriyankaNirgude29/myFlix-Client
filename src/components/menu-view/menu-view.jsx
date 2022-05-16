import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './menu-view.scss';

export function Menu(){
    let user = localStorage.getItem("user");
    const onLoggedOut = () =>{
        localStorage.clear();
        window.open("/","_self");
    }

    const isAuth = () =>{
        if( typeof window == "undefined" ){
            return false;
        }
        if( localStorage.getItem("token")){
            return localStorage.getItem("token");
        } else {
            return false;
        }
    }
    return(
            
                  <Navbar className='nav_main' >
                      <Navbar.Brand  className="logo_navbar" as={Link} to={"/"}>My-Flix</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      { isAuth() && (  
                      <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
                      ) }
                      { isAuth() && (  
                      <Button variant='link' onClick={() =>{ this.onLoggedOut() }}>Logout</Button>
                      ) }
                      { !isAuth() && (  
                      <Nav.Link href="/">Sign-in</Nav.Link>
                      ) }
                     { !isAuth() && (  
                      <Nav.Link href="/register">Sign-Up</Nav.Link>
                      ) }
                   
                  </Nav>
                </Navbar.Collapse>
        
        </Navbar>
                  
                  
    );
}