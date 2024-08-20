'use client';

import type { Case } from '@/lib';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';

export function CaseDetails({ data }: { data: Case }) {
  'use client';
  return (
    <ProCard
      title={data.subject}
      extra={<div className='text-gray-700'>Case # {data.caseId}</div>}
    >
      <ProDescriptions
        columns={[
          {
            title: 'Solicitor ID',
            dataIndex: 'solicitorId',
          },
          {
            title: 'Subject',
            dataIndex: 'subject',
            copyable: true,
            ellipsis: true,
          },
          {
            title: 'Created At',
            dataIndex: 'createdAt',
            valueType: 'dateTime',
          },

          {
            title: 'Status',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum: {
              ACKNOWLEDGED: { text: 'Acknowledged', status: 'Success' },
              PENDING: { text: 'Pending', status: 'Warning' },
              CLOSED: { text: 'Closed', status: 'Default' },
            },
          },
          {
            title: 'Assigned To',
            dataIndex: 'assignedTo',
          },
        ]}
        dataSource={data}
      />
    </ProCard>
  );
}
