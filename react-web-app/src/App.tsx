import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import SuperAdminPage from './pages/SuperAdmin';
import WorkspaceAdminPage from './pages/WorkspaceAdmin';
import EmployeePage from './pages/Employee';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './utils/Protected'; // Ensure this is correctly defined

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/super-admin" element={<ProtectedRoute component={SuperAdminPage} />} />
          <Route path="/workspace-admin" element={<ProtectedRoute component={WorkspaceAdminPage} />} />
          <Route path="/employee" element={<ProtectedRoute component={EmployeePage} />} />
          <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
