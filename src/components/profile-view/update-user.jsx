import React, { Fragment } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function UpdateUserForm(props) {
 const userdata = props.userdata;
const { handleUpdate, handleSubmit } = props;
  
  return (
    <Fragment>
      <h4>Update profile information</h4>
      <Form className="mb-3">
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="Username"
            value={userdata.username}
            onInput={(e) => handleUpdate(e)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            value={userdata.email}
            onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>

        <Form.Group controlId="formBirthday" className="mb-3">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            name="Birthday"
            value={userdata.birthday}
            onChange={(e) => handleUpdate(e)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Update Profile
        </Button>
      </Form>
    </Fragment>
  );
}