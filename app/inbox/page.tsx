'use client';
import ClientOnly from '@/components/ClientOnly';
import { EmailList } from '@/components/EmailCard';
import type { Email } from '@/lib';
const emails = [
  {
    subject: 'Request for DBA Name Change',
    body: 'Dear Team, we are in the process of rebranding, and we need to update our Doing Business As (DBA) name in your records. Please advise on the next steps to proceed with this change.',
    from: 'sarah@example.com',
    senderName: 'Sarah Thompson',
    to: 'support@example.com',
    recipientName: 'Customer Support',
    date: '2024-08-18T09:30:00Z',
  },
  {
    subject: 'Reopen Closed Account',
    body: 'Hello, we recently closed our account with your services, but we would like to reopen it. Could you please guide us through the process and inform us of any associated fees?',
    from: 'michael@example.com',
    senderName: 'Michael Lee',
    to: 'reopen@example.com',
    recipientName: 'Account Reopening Team',
    date: '2024-08-19T10:45:00Z',
  },
  {
    subject: 'Request for Updated Service Agreement',
    body: 'Hi, our company has undergone several changes, and we would like to update our service agreement to reflect these. Could you provide us with the necessary documentation?',
    from: 'jessica@example.com',
    senderName: 'Jessica Parker',
    to: 'contracts@example.com',
    recipientName: 'Contracts Department',
    date: '2024-08-20T13:00:00Z',
  },
  {
    subject: 'Inquiry About Bulk Order Discount',
    body: 'Dear Sales Team, we are planning to place a bulk order for our upcoming project. Could you provide us with the discount rates available for large volume purchases?',
    from: 'david@example.com',
    senderName: 'David Kim',
    to: 'sales@example.com',
    recipientName: 'Sales Department',
    date: '2024-08-21T11:20:00Z',
  },
  {
    subject: 'Termination of Service Request',
    body: 'Hello, we regret to inform you that we need to terminate our services with your company. Please let us know the process for closing our account and settling any remaining balances.',
    from: 'laura@example.com',
    senderName: 'Laura Green',
    to: 'termination@example.com',
    recipientName: 'Service Termination Team',
    date: '2024-08-22T14:35:00Z',
  },
];

export default function Page() {
  return (
    <ClientOnly>
      <EmailList emails={emails} />
    </ClientOnly>
  );
}
