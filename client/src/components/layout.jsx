import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './header.jsx';
import { AuthProvider } from './pages/authcontext.jsx';

const layout = () => {
  return (
    <AuthProvider>
        <Header />
        <Outlet />
    </AuthProvider>
  );
}

export default layout;