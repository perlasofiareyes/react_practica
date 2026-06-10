import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Admin = () => {
  const { users, addUser, delUser } = useOutletContext();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    if (!name || !username || !password) return;
    await addUser({ name, username, password });
    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Administración de Usuarios</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField label="Nombre" variant="outlined" size="small" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Usuario" variant="outlined" size="small" value={username} onChange={e => setUsername(e.target.value)} />
        <TextField label="Contraseña" type="password" variant="outlined" size="small" value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" onClick={handleAdd}>Agregar</Button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Nombre</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Usuario</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Link to={"/users/" + u.username}>{u.name}</Link>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{u.username}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <Button variant="contained" color="error" size="small" onClick={() => delUser(u._id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
