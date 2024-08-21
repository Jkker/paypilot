'use client';
import { client, type Case, type Email } from '@/lib';
import dayjs from '@/lib/dayjs';
import { Button, Card, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Avvvatars from 'avvvatars-react';
import { useState } from 'react';
import { FaMagic, FaReply, FaUndoAlt } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import Markdown from 'react-markdown';
import { SubTitle } from './Text';

const sendEmail = async (email: Pick<Email, 'subject' | 'body' | 'to'>) => {
  // @ts-expect-error new api
  const { data, error } = await client.POST('/emails', {
    body: email,
  });

  if (error) {
    throw new Error(error);
  }

  console.log(`🚀 ~ file: EmailCard.tsx:24 ~ sendEmail ~ data:`, data);
  message.success('Email sent successfully');
  return data;
};

export const EmailCard = ({
  email,
  data: caseData,
}: {
  email: Email;
  data?: Case;
}) => {
  const [reply, setReply] = useState('');
  const [prev, setPrev] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const draft = async () => {
    setIsLoading(true);
    setPrev(reply);

    const content = `Given the details for case #${caseData?.caseId}, draft an email for the following content: ${reply}`;
    const { data, error } = await client.POST('/chats', {
      body: {
        message: content,
      },
    });

    setIsLoading(false);
    if (error) {
      throw new Error(error);
    }
    setReply(data.message);
    // return data.message;
  };
  const clear = () => {
    if (reply) {
      setPrev(reply);
      setReply('');
    } else {
      setPrev(undefined);
    }
  };

  const revert = () => {
    setReply(prev || '');
    setPrev(undefined);
  };

  const send = async () => {
    setIsLoading(true);

    await sendEmail({
      subject: `Re: ${email.subject}`,
      body: reply,
      to: email.from,
    });

    setIsLoading(false);
    // if (error) {
    // throw new Err/or(error);
    // }
    // setReply('');
    // return data.message;
  };

  return (
    <Card>
      <article className='space-y-4'>
        <SubTitle>{email.subject}</SubTitle>
        <header className='flex gap-3 items-center'>
          <Avvvatars value={email.from} />
          <div className='flex flex-col'>
            <div className='font-semibold'>
              {email.senderName ?? email.from.split('@')[0]}
            </div>
            <div className='text-gray-600'>{email.from}</div>
          </div>
          <div className='text-gray-600 ml-auto mb-auto text-right text-sm flex flex-col gap-0.5'>
            {dayjs(email.date).toDate().toLocaleDateString()}
            <br />
            {dayjs(email.date).fromNow()}
          </div>
        </header>
        <Markdown className='prose whitespace-pre-wrap'>{email.body}</Markdown>
        {caseData && (
          <>
            <TextArea
              autoSize={{ minRows: 4 }}
              className='border border-gray-300 p-2 rounded-md w-full'
              placeholder='Reply to this email'
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <div className='flex gap-2'>
              <Button
                type='primary'
                icon={<FaMagic />}
                onClick={draft}
                loading={isLoading}
              >
                Draft
              </Button>
              {prev && (
                <Button onClick={revert} icon={<FaUndoAlt />}>
                  Revert
                </Button>
              )}

              <div className='ml-auto flex gap-2'>
                {/* <Button icon={<FaMagic />}>Generate</Button> */}
                <Button danger icon={<FaRegTrashCan />} onClick={clear}>
                  Clear
                </Button>

                <Button icon={<FaReply />} onClick={send}>
                  Send
                </Button>
              </div>
            </div>
          </>
        )}
      </article>
    </Card>
  );
};

export const EmailList = ({
  emails,
  data,
}: {
  emails: Email[];
  data?: Case;
}) => {
  return (
    <div className='flex flex-col gap-4'>
      {emails.map((email, index) => (
        <EmailCard key={index} email={email} data={data} />
      ))}
    </div>
  );
};
