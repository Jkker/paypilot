'use client';
// /components/LeadDetails.js
import React from 'react';

const LeadDetails = ({ lead }) => {
  return (
    <div style={detailsStyle}>
      <h1 style={titleStyle}>{lead.name}</h1>
      <p style={descriptionStyle}>{lead.description}</p>
      <p style={infoStyle}>Contact: {lead.contact}</p>
      <p style={infoStyle}>Email: {lead.email}</p>
      <p style={infoStyle}>Status: {lead.status}</p>
    </div>
  );
};

const detailsStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  margin: '0 0 10px 0',
  fontSize: '24px',
  color: '#0070d2',
};

const descriptionStyle = {
  margin: '0 0 20px 0',
  fontSize: '18px',
  color: '#555',
};

const infoStyle = {
  margin: '0 0 10px 0',
  fontSize: '16px',
  color: '#333',
};

export default LeadDetails;
