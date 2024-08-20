'use client';

import type { Case } from '@/lib';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';

export function CaseDetails({ data }: { data: Case }) {
  'use client';
  return (
    <ProCard title={data.subject}>
      <ProDescriptions
        column={2}
        columns={[
          {
            title: 'Case ID',
            dataIndex: 'caseId',
            copyable: true,
          },
          {
            title: 'Solicitor ID',
            dataIndex: 'solicitorId',
            copyable: true,
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
            render: (text) =>
              typeof text === 'string' && new Date(text).toLocaleString(),
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
