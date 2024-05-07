import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAdmin, ...rest }) => {
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate('/login');
    return null;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
