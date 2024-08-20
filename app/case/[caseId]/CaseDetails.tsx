'use client';

import type { Case } from '@/lib';
import {
  ProCard,
  ProDescriptions,
  type ProDescriptionsItemProps,
} from '@ant-design/pro-components';
import { columns } from '../spec';

export function CaseDetails({ data }: { data: Case }) {
  'use client';
  return (
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
      />
    </ProCard>
  );
}
