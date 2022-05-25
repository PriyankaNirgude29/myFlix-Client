import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-fliter/visibility-filter';
import { MovieCard } from '../movie-card/movie-card';

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;

    if (visibilityFilter !== '') {
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!movies) return <div className="main-view"/>;

    return (
        <Fragment>
        <Col md={12} style={{ marginBottom: "1em" }}>
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Col>
        {filteredMovies.map((m) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ marginBottom: "1em" }}
            key={m._id}
          >
            <MovieCard
              movie={m}
            />
          </Col>
        ))}
      </Fragment>
    )
}

export default connect(mapStateToProps)(MoviesList);