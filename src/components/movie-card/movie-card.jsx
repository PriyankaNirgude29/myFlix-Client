import React from "react";
import { useState, useEffect }  from "react";
import PropTypes from "prop-types";
import './movie-card.scss';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from 'axios';

import { Link } from 'react-router-dom';
export class MovieCard extends React.Component {
constructor() {
  super();

  this.state = {
    FavoriteMovies: []
  };
}

onAddFavorite = (movie) => {
  const Username = localStorage.getItem('user');
  const token = localStorage.getItem('token');

  axios.post(
    `https://my-movie-api29.herokuapp.com/users/${Username}/movies/${movie._id}`,
    {
      FavoriteMovies: this.state.FavoriteMovies
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      this.setState({
        FavoriteMovies: response.data.FavoriteMovies
      });
      console.log(response);
      alert("Movie Added to favorities!!");
    })
    .catch(function (error) {
      console.log(error);
    });
};

 render() {
    const { movie, onAddFavorite } = this.props;

    return( 
     
     
      <Card>
         <Link to={`/movies/${movie._id}`}>
           <Card.Img className='movie-image' variant="top" src={movie.ImagePath} crossOrigin="true" width="300" height="500"/>
          </Link>
      <Card.Body>
        <Card.Title className='movie-title'>{movie.Title}</Card.Title>
        <Card.Text className='movie-description'>{movie.Description}</Card.Text>
        <Link to={`/movies/${movie._id}`}>
        <Button className='open-button' variant="link">Open</Button>
        {!this.state.favourite && (
            <Button
              variant="outline-secondary"
              onClick={() => this.onAddFavorite(movie)}
            >
              Add to favourite
            </Button>
          )}
      </Link>
      </Card.Body>
    </Card>
    

    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,

};