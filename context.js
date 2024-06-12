
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Implement Google login logic here
    setUser({ name: 'John Doe' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext as default, AuthContextProvider };

