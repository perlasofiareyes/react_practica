import React from "react";
import { Link } from "react-router-dom";

const User = ({ user, delUser }) => (
  <tr>
    <Link to={"/users/" + user.username + "?react=889"}>{user.name}</Link>
    <td>{user.username}</td>
    <td><button onClick={()=> delUser(user._id)}>X</button></td>
  </tr>
);

export default User;
