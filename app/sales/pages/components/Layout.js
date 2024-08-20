// /components/Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>{children}</main>
    </div>
  );
};

const mainStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

export default Layout;