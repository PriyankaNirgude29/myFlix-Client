import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import axios from "axios";
import "./profile-view.scss";
import { Nav } from "react-bootstrap";

import { UserData } from "./user-data";
import { UpdateUserForm } from "./update-user";
import { FavoriteMovies } from "./favourite-movies";

export function ProfileView(props) {
  
  const [userdata, setUserdata] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
 

  let token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const getUserData = (cancelToken, username) => {
    axios.get(`https://my-movie-api29.herokuapp.com/users/${username}`, {
      cancelToken: cancelToken
    })
      .then(response => {
        setUserdata(response.data);
        setUpdatedUser(response.data);
        setFavoriteMoviesList(props.movies.filter(m => response.data.FavoriteMovies.includes(m._id)));
      })
      .catch(err => {
          console.log(err);
      })
  }

  useEffect(() => {
    let source = axios.CancelToken.source();

    if (token !== null) {
      getUserData(source.token, props.user);
    } else {
      console.log('Not Authorized');
    }

    return() => {
      source.cancel();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://my-movie-api29.herokuapp.com/users/${userdata.Username}`, updatedUser)
    .then(response => {
      setUserdata(response.data);
      alert('Profile updated');
    })
    .catch(e => {
      console.log(e);
    });
  }

  const handleUpdate = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  }

  const deleteProfile = (e) => {
    axios
      .delete(`https://my-movie-api29.herokuapp.com/users/${userdata.Username}`)
      .then((response) => {
        alert("Your profile has beeen deleted");
        localStorage.removeItem('user');
      localStorage.removeItem('token');

        window.open("/", "_self");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeFav = (id) => {
    axios.delete(`https://my-movie-api29.herokuapp.com/users/${userdata.Username}/movies/${id}`)
    .then(() => {
        // Change state of favoriteMovieList to render component
        setFavoriteMoviesList(favoriteMoviesList.filter(movie => movie._id != id));
    })
    .catch(e => {
        console.log(e);
    });
  };

  return (
    <Container className="app-container">
      <Row>
        <Col med={4}>
          <div className="mt-4">
            {/* Display userdata */}
            <UserData userdata={userdata} />
          </div>

          {/* List of favorite movies */}
          <div className="mb-2">
            <FavoriteMovies
              favoriteMoviesList={favoriteMoviesList}
              removeFav={removeFav}
            />
          </div>

          {/* Form to update user data */}
          <UpdateUserForm
            userdata={userdata}
            handleSubmit={handleSubmit}
            handleUpdate={handleUpdate}
          />

          {/* Button to delete user */}
          <div className="d-flex flex-row p-2 border gap-4 my-4 justify-content-center align-items-center">
            <Button variant="danger" type="submit" onClick={deleteProfile}>
              Delete Profile
            </Button>
            <Nav.Link href="/">Back to Movies</Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}