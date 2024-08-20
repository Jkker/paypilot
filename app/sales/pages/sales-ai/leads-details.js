// /pages/sales-ai/leads-details.js
import React from 'react';
import Layout from '../../components/Layout';
import LeadDetails from '../../components/LeadDetails';

const leads = [
  { id: 1, name: 'Lead 1', description: 'This is lead 1', contact: 'John Doe', email: 'john@example.com', status: 'New' },
  { id: 2, name: 'Lead 2', description: 'This is lead 2', contact: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
];

export default function LeadsDetails({ query }) {
  const lead = leads.find((lead) => lead.id === parseInt(query.id)) || leads[0];

  return (
    <Layout>
      <h1 style={pageTitleStyle}>Sales AI - Lead Details</h1>
      <LeadDetails lead={lead} />
    </Layout>
  );
}

const pageTitleStyle = {
  fontSize: '28px',
  color: '#0070d2',
  marginBottom: '20px',
};

LeadsDetails.getInitialProps = async ({ query }) => {
  return { query };
};