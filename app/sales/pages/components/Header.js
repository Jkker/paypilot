// /components/Header.js
import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header style={headerStyle}>
      <nav>
        <button onClick={() => router.push('/sales-ai/leads-list')} style={buttonStyle}>
          Leads List
        </button>
        <button onClick={() => router.push('/sales-ai/leads-details')} style={buttonStyle}>
          Leads Details
        </button>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#0070d2',
  padding: '10px 20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#0070d2',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '0 10px',
};

export default Header;