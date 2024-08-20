import type { Case } from '@/lib';
import type { ProColumns } from '@ant-design/pro-components';

export const columns: ProColumns<Case>[] = [
  {
    title: 'Case ID',
    dataIndex: 'caseId',
    width: 120,
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
    hidden: true,
  },
];
