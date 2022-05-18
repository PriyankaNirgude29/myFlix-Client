import React, { Fragment } from "react";

export function UserData(props) {
  const userdata = props.userdata;

  return (
    <Fragment>
      <h1 className="text-primary">{userdata.username}</h1>
      <p>Email: {userdata.email}</p>
      <p>Birthday: {userdata.birthday}</p>
    </Fragment>
  );
}