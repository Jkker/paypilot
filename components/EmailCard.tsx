import type { Email } from '@/lib';
import dayjs from '@/lib/dayjs';
import { Button, Card } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Avvvatars from 'avvvatars-react';
import { FaMagic, FaRegFile, FaReply } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { SubTitle } from './Text';

export const EmailCard = ({ subject, body, ...email }: Email) => {
  return (
    <Card>
      <article className='space-y-4'>
        <SubTitle>{subject}</SubTitle>
        <header className='flex gap-3 items-center'>
          <Avvvatars value={email.from} />

          <div className='flex flex-col'>
            <div className='font-semibold'>
              {email.senderName ?? email.from}
            </div>
            {email.senderName && (
              <div className='text-gray-600'>{email.from}</div>
            )}
          </div>
          <div className='text-gray-600 ml-auto mb-auto text-right text-sm'>
            {dayjs(email.date).format('LL')}
            <br />
            {dayjs(email.date).fromNow()}
          </div>
        </header>
        <p className='text-gray-900'>{body}</p>
        <TextArea
          className='border border-gray-300 p-2 rounded-md w-full'
          placeholder='Reply to this email'
        />
        <div className='flex gap-2'>
          <Button danger icon={<FaRegTrashCan />}>
            Delete
          </Button>
          <Button type='default' icon={<FaRegFile />}>
            Draft
          </Button>
          <div className='ml-auto flex gap-2'>
            <Button icon={<FaMagic />}>Generate</Button>
            <Button type='primary' icon={<FaReply />}>
              Reply
            </Button>
          </div>
        </div>
      </article>
    </Card>
  );
};

export const EmailList = ({ emails }: { emails: Email[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {emails.map((email, index) => (
        <EmailCard key={index} {...email} />
      ))}
    </div>
  );
};
