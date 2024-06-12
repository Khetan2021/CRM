

// import Login from './login';
// import Dashboard from './Dashboard';
// import CreateAudience from './CreateAudience';
// import ProtectedRoute from './protected';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Protected from './protected';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
};

export default App;


