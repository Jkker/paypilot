'use client';
import { EmailList, EmailCard } from '@/components/EmailCard';
import type { Email } from '@/lib';
const emails: Email[] = [
  {
    subject: 'Meeting Reminder',
    body: 'This is a reminder for our meeting scheduled at 10 AM tomorrow.',
    from: 'alice@example.com',
    senderName: 'Alice Johnson',
    to: 'bob@example.com',
    recipientName: 'Bob Smith',
    date: '2023-10-01T09:00:00Z',
  },
  {
    subject: 'Project Update',
    body: 'The project is on track and we have completed the initial phase.',
    from: 'carol@example.com',
    senderName: 'Carol Williams',
    to: 'dave@example.com',
    recipientName: 'Dave Brown',
    date: '2023-10-02T14:30:00Z',
  },
  {
    subject: 'Invoice Attached',
    body: 'Please find the attached invoice for the services rendered last month.',
    from: 'eve@example.com',
    senderName: 'Eve Davis',
    to: 'frank@example.com',
    recipientName: 'Frank Miller',
    date: '2023-10-03T11:15:00Z',
  },
  {
    subject: 'Welcome to the Team',
    body: 'We are excited to have you on board. Welcome to the team!',
    from: 'grace@example.com',
    senderName: 'Grace Lee',
    to: 'hank@example.com',
    recipientName: 'Hank Wilson',
    date: '2023-10-04T08:45:00Z',
  },
];
export default function Page() {
  return (
    <>
      <EmailList emails={emails} />
    </>
  );
}
