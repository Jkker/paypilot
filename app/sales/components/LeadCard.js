'use client';
import Link from 'next/link';
// /components/LeadCard.js
import React from 'react';
// import { useRouter } from 'next/router';

const LeadCard = ({ lead }) => {
  // const router = useRouter();

  const handleClick = () => {
    // router.push(`/sales-ai/leads-details?id=${lead.id}`);
  };

  return (
    <Link href={`/sales/leads-details?id=${lead.id}`} style={cardStyle}>
      <h2 style={titleStyle}>{lead.name}</h2>
      <p style={descriptionStyle}>{lead.description}</p>
    </Link>
  );
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  marginBottom: '20px',
};

const titleStyle = {
  margin: '0 0 10px 0',
  fontSize: '20px',
  color: '#0070d2',
};

const descriptionStyle = {
  margin: '0',
  fontSize: '16px',
  color: '#555',
};

export default LeadCard;
