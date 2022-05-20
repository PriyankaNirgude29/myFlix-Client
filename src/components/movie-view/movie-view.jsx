import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import { ListGroup, Button, Row, Col, Image} from 'react-bootstrap';
import './movie-view.scss';

export class MovieView extends React.Component {
  
  keypressCallback(event) {
    console.log(event.key);
  }
  //Add Keypress event listener

  componentDidMount() {
    document.addEventListener("keypress", this.keypressCallback);
  }
  //Unmount event listener

  componentWillUnmount() {
    document.removeEventListener("keypress", this.keypressCallback);
  }

  
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Row className="w-100 justify-content-around mx-auto">
        <Col sm={5}> 
        	<Image className="poster" src={movie.ImagePath} crossOrigin="anonymous" onClick={() => onMovieClick(movie)}/>
        </Col>

        <Col sm={6}>   
			<ListGroup>
				<ListGroup.Item><h3>{movie.Title}</h3></ListGroup.Item>
        <ListGroup.Item>Description: {movie.Description}</ListGroup.Item>
				<ListGroup.Item>Genre: {movie.Genre.Name}</ListGroup.Item>
        <ListGroup.Item>Director: {movie.Director.Name}</ListGroup.Item>
			
				<div>
					

            <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>
            
					
				</div>
				
			</ListGroup> 
        </Col>
	
    </Row>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,
};