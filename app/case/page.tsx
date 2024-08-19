'use client';
import { type Case } from '@/lib';
import { PlusOutlined } from '@ant-design/icons';
import { ProCard, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, message, Tooltip } from 'antd';

export default function Page() {
  return (
    <ProCard>
      <ProTable<Case>
        columns={[
          {
            title: 'Case ID',
            dataIndex: 'caseId',
            width: 120,
            render: (text, row) => (
              <Tooltip title='Open in new page'>
                <Link
                  href={`/case/${row.caseId}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold'
                >
                  {text}
                </Link>
              </Tooltip>
            ),
          },
          {
            title: 'Solicitor ID',
            dataIndex: 'solicitorId',
            width: 180,
          },
          {
            title: 'Subject',
            dataIndex: 'subject',
            copyable: true,
            ellipsis: true,
            search: false,
          },
          {
            title: 'Created At',
            dataIndex: 'createdAt',
            valueType: 'dateTime',
          },
          {
            title: 'Data',
            dataIndex: 'data',
            hidden: true,
            render: (_, row) => {
              const decodedData = row.data ? atob(row.data) : '';
              return <pre>{decodedData}</pre>;
            },
          },
          {
            title: 'Status',
            dataIndex: 'status',
            filters: true,
            onFilter: true,
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
          {
            title: 'Workflow',
            dataIndex: ['workFlow', 'name'],
          },
          {
            title: 'Option',
            valueType: 'option',
            dataIndex: 'id',
            render: (text, row) => [
              <TableDropdown
                key='more'
                onSelect={(key) => message.info(key)}
                menus={[
                  { key: 'copy', name: 'Copy' },
                  { key: 'delete', name: 'Delete' },
                ]}
              />,
            ],
          },
        ]}
        request={async (params = {} as Record<string, any>) => {
          // const { data, error } = await client.GET('/cases');
          // if (error) {
          //   throw new Error(`Failed to fetch cases: ${error}`);
          // }
          // return { data: [data], success: !error };
          return {
            data: caseData.map((item) => ({
              ...item,
              data: btoa(item.data),
            })),
            success: true,
          };
        }}
        pagination={{
          pageSize: 5,
        }}
        rowKey='caseId'
        dateFormatter='string'
        headerTitle='Query Table'
        toolBarRender={() => [
          <Button key='3' type='primary'>
            <PlusOutlined />
            New
          </Button>,
        ]}
      />
    </ProCard>
  );
}

import { caseData } from './caseData';
import Link from 'next/link';
