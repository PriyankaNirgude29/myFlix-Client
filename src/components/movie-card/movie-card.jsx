import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

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