'use client';
import ClientOnly from '@/components/ClientOnly';
import { type Case } from '@/lib';
import { fetchCases } from '@/lib/fetchCaseData';
import { ProCard, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, message, Tooltip } from 'antd';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

export default function Page() {
  return (
    <ClientOnly>
      <ProCard>
        <ProTable<Case>
          scroll={{ x: 'max-content' }}
          columns={[
            {
              title: 'Case ID',
              dataIndex: 'caseId',
              width: 120,
              render: (text, row) => (
                <Tooltip title='Open in new page'>
                  <Link href={`/case/${row.caseId}`} className='font-semibold'>
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
          request={async (params) => ({
            data: await fetchCases(),
            success: true,
          })}
          pagination={{
            pageSizeOptions: ['20', '50', '100'],
            defaultPageSize: 20,
            hideOnSinglePage: true,
          }}
          rowKey='caseId'
          dateFormatter='string'
          headerTitle='Query Table'
          toolBarRender={() => [
            <Button key='3' type='primary' disabled>
              <FaPlus />
              New
            </Button>,
          ]}
        />
      </ProCard>
    </ClientOnly>
  );
}
