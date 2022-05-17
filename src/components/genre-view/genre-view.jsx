import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class GenreView extends React.Component {
  render() {
    const { genre, movie, onBackClick } = this.props;

    return (
        <Row className="w-100 justify-content-center">

            <Col className="d-sm-flex justify-content-between justify-content-xl-start">
                <ListGroup>
              <ListGroup.Item><h3>Genre:{genre.Name}</h3></ListGroup.Item>
              <ListGroup.Item>Description:{genre.Description}</ListGroup.Item>
              <ListGroup.Item>
          
          <Container className="d-flex justify-content-between">
               <Button
                    className="custom-btn"
                    type="submit"
                    onClick={() => {
                    onBackClick();
                   }}
               >
              Go back
            </Button>

            <Link to={`/`}>
                 <Button className="custom-btn" type="submit">
                     Back to List
                 </Button>
            </Link>

          </Container>
        </ListGroup.Item>
      </ListGroup>
    </Col>
</Row>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};