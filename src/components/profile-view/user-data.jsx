import React, { Fragment } from "react";

export function UserData(props) {
  const userdata = props.userdata;

  return (
    <Fragment>
      <h6 className="text-primary">Hello {userdata.Username} !!</h6>
      <p>Email: {userdata.Email}</p>
    </Fragment>
  );
}