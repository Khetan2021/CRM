import React, { useContext } from 'react';
import AuthContext from './context';
import { Button } from '@mui/material';

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div>
      <h2>Login</h2>
      <Button variant="contained" color="primary" onClick={() => login()}>
        Login with Google
      </Button>
    </div>
  );
};

export default Login;



