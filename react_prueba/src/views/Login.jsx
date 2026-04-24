import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useOutletContext();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      navigate('/profile');
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '15px' }}>
      <h2>Login</h2>
      <TextField label="Usuario" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Contraseña" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button variant="contained" onClick={handleLogin}>Entrar</Button>
    </div>
  );
};

export default Login;
