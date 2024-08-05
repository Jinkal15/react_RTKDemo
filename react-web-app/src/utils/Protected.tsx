// utils/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
