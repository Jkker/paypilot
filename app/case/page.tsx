'use client';
import ClientOnly from '@/components/ClientOnly';
import { type Case } from '@/lib';
import { fetchCases } from '@/lib/fetchCaseData';
import { toTitleCase } from '@/lib/text';
import { ProCard, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, message, Tooltip } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const statusMap = {
  ACKNOWLEDGED: 'Success',
  PENDING: 'Warning',
  CLOSED: 'Default',
  OPEN: 'Processing',
};

export default function Page() {
  const [data, setData] = useState<Case[]>([]);

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
              valueEnum: data.reduce(
                (acc, row) => {
                  acc[row.status] = {
                    text: toTitleCase(row.status),
                    status: statusMap[row.status] ?? 'processing',
                  };
                  return acc;
                },
                {} as Record<string, { text: string; status: string }>,
              ),
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
          request={async (params) => {
            const data = await fetchCases();
            setData(data);
            return {
              data,
              success: true,
            };
          }}
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
