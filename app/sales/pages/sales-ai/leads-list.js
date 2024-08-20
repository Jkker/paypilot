// /pages/sales-ai/leads-list.js
import React from 'react';
import Layout from '../../components/Layout';
import LeadCard from '../../components/LeadCard';

const leads = [
  { id: 1, name: 'Lead 1', description: 'This is lead 1', contact: 'John Doe', email: 'john@example.com', status: 'New' },
  { id: 2, name: 'Lead 2', description: 'This is lead 2', contact: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
];

export default function LeadsList() {
  return (
    <Layout>
      <h1 style={pageTitleStyle}>Sales AI - Leads List</h1>
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </Layout>
  );
}

const pageTitleStyle = {
  fontSize: '28px',
  color: '#0070d2',
  marginBottom: '20px',
};