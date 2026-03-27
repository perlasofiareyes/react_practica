import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/profile'); // redirige a Profile
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '15px'
      }}
    >
      <h2>Login</h2>

       <TextField label="User" variant="outlined" />
       <TextField label="Password" type="password" variant="outlined" />

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;


