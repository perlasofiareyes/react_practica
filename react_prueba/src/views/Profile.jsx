import { useOutletContext } from 'react-router-dom';

const Profile = () => {
  const { users } = useOutletContext();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Usuarios registrados</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Nombre</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{u.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{u.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
