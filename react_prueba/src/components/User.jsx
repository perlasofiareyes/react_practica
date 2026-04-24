

const User = ({ user, delUser }) => (
  <tr>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td>{user.username}</td>
  </tr>
);

export default User;
