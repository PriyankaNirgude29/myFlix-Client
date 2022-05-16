import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

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
   // registered: null
  };
}

componentDidMount(){
  let accessToken = localStorage.getItem('token');
  if(accessToken!==null){
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
    }
  }

//setSelectedMovie(newSelectedMovie) { 
    // this.setState({selectedMovie: newSelectedMovie });
//    }

     onLoggedIn(authData) {
      console.log(authData);
      this.setState({
        user: authData.user.Username
      });
    
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
      }

      getMovies(token){
        axios.get('https://my-movie-api29.herokuapp.com/movies',{
              headers: { Authorization: `Bearer ${ token }`}
           })
        .then(response => {
                this.setState({
                movies: response.data
             });
          })
         .catch(error => {
              console.log(error);
          });
      }

   //   onRegister(registered) {
    //    this.setState({
     //     registered,
      //  });
     // }

render() {
    const { movies, selectedMovie, user, registered } = this.state;

   // if (registered) {
    //    return <RegistrationView onRegister={(bool) => this.onRegister(bool)} />;
     // }  
   
    if (!user) return (
    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
    );
    
    if (registered) {
      return <RegistrationView onRegister={(bool) => this.onRegister(bool)} />;
    }  
 
  if (!user) return (
  <LoginView onLoggedIn={user => this.onLoggedIn(user)}
             onRegister={(bool) => this.onRegister(bool)} />
  );


    if (movies.length === 0) return <div className="main-view" />;

    return (

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
        );
    }

}
        
export default MainView;
