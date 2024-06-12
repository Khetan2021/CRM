import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './context';

const Protected = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Protected Page</h2>
      <p>Welcome, {user.name}!</p>
    </div>
  );
};

export default Protected;


