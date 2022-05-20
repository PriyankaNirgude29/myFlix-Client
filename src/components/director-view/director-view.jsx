import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

export class DirectorView extends React.Component {
  render() {
    const { director, movie, onBackClick } = this.props;

    return (
        <Row className="w-100 justify-content-center">

        <Col className="d-sm-flex justify-content-between justify-content-xl-start">
        <ListGroup>
          <ListGroup.Item><h3>Director: {director.Name}</h3></ListGroup.Item>
          <ListGroup.Item>Bio: {director.Bio}</ListGroup.Item>
          <ListGroup.Item>Birth Year: {director.Birth}</ListGroup.Item>
          
          {director.Death && ( <ListGroup.Item>Death Year: {director.Death}</ListGroup.Item> )}
       
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
          </ListGroup>
          </Col>
       </Row>
    );
  }
}
DirectorView.propTypes = {
    director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired
    }).isRequired,
  
    onBackClick: PropTypes.func.isRequired,
  };