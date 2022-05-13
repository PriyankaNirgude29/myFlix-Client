import React from 'react';
import axios from 'axios';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
constructor(){ 
    super();
    this.state = {
    movies: [],
    selectedMovies:null,
    user: null,
    registered: null
  };
}

componentDidMount(){
    axios.get('https://my-movie-api29.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

setSelectedMovie(newSelectedMovie) { 
     this.setState({selectedMovie: newSelectedMovie });
     }

     onLoggedIn(user) {
        this.setState({
          user
        });
      }

      onRegister(registered) {
        this.setState({
          registered,
        });
      }

render() {
    const { movies, selectedMovie, user, registered } = this.state;
    
    if (registered) {
      return <RegistrationView onRegister={(bool) => this.onRegister(bool)} />;
    }  
 
  if (!user) return (
  <LoginView onLoggedIn={user => this.onLoggedIn(user)}
             onRegister={(bool) => this.onRegister(bool)} />
  );

    if (movies.length === 0) return <div className="main-view" />;

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
      <Row className="main-view justify-content-md-center">
      {selectedMovie
        ? (
          <Col md={8}>
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          </Col>

        )
        : movies.map(movie => (
          <Col md={3}>
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          </Col>
        ))
      }
    </Row>
</Container>
        );
    }

}
        
export default MainView;
