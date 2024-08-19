'use client';
import type { Case } from '@/lib';
import {
  ProCard,
  ProDescriptions,
  type ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import { caseData } from '../caseData';
import { columns } from '../spec';
import TextArea from 'antd/es/input/TextArea';
import Meta from 'antd/es/card/Meta';
import { Avatar, Card } from 'antd';

export default function Page({ params }: { params: { caseId: string } }) {
  const currCaseData =
    caseData.find((c) => c.caseId === params.caseId) ?? caseData[0];
  const data = {
    ...currCaseData,
    data: btoa(currCaseData.data),
  };
  const messages = [
    {
      sender: 'Client',
      time: '12:00 PM',
      message: atob(data.data),
    },
    {
      sender: 'Agent',
      message: 'I need help with my case.',
    },
    {
      sender: 'Client',
      message: 'Sure, I can help you with that.',
    },
  ];
  return (
    <main className='grid grid-cols-1 gap-4'>
      <h3 className='text-lg font-semibold text-gray-800'>Case Details</h3>
      <ProCard
        title={data.subject}
        extra={<div className='text-gray-700'>Case # {data.caseId}</div>}
      >
        <ProDescriptions
          columns={
            columns.filter(
              (column) =>
                !['data', 'caseId'].includes(column.dataIndex as string),
            ) as ProDescriptionsItemProps<Case>[]
          }
          dataSource={data}
          // request={async (params) => {
          //   return {
          //     ...caseData[0],
          //     data: btoa(caseData[0].data),
          //   };
          // }}
        />
      </ProCard>
      <h3 className='text-lg font-semibold text-gray-800'>
        Communication History
      </h3>
      <div>
        <div className='grid grid-cols-1 gap-4'>
          {messages.map((message, index) => (
            <Card
              key={index}
              // title={message.sender}
              // subTitle={currCaseData.solicitorId}
            >
              <Meta
                avatar={<Avatar>{message.sender[0]}</Avatar>}
                title={message.sender}
                description={currCaseData.solicitorId}
              />
              <p className='text-md text-gray-900 py-4 whitespace-pre-wrap'>
                {message.message}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
