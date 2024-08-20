'use client';
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

const leads = [
  {
    id: 1,
    name: 'Lead 1',
    description: 'This is lead 1',
    contact: 'John Doe',
    email: 'john@example.com',
    status: 'New',
  },
  {
    id: 2,
    name: 'Lead 2',
    description: 'This is lead 2',
    contact: 'Jane Smith',
    email: 'jane@example.com',
    status: 'Contacted',
  },
];

export default function LeadsDetails({ query }) {
  const lead = leads.find((lead) => lead.id === parseInt(query.id)) || leads[0];

  return (
    <>
      <h1 style={pageTitleStyle}>Sales AI - Lead Details</h1>
      <LeadDetails lead={lead} />
    </>
  );
}

const pageTitleStyle = {
  fontSize: '28px',
  color: '#0070d2',
  marginBottom: '20px',
};
