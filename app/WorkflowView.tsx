'use client';
import { type WorkFlow, type WorkItem } from '@/lib';
import { toTitleCase } from '@/lib/text';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { Steps } from 'antd';
import type { StepProps } from 'antd/lib';

type WorkflowStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'STOP'
  | 'PROCEED'
  | 'ACKNOWLEDGED'
  | 'HOLD'
  | 'ACCEPTED'
  | 'PROCESSED';

const WorkflowStatusValueEnum = {
  COMPLETED: { text: 'Completed', status: 'Success' },
  FAILED: { text: 'Failed', status: 'Error' },
  STOP: { text: 'Stopped', status: 'Error' },
  PROCEED: { text: 'Proceed', status: 'Processing' },
  ACKNOWLEDGED: { text: 'Acknowledged', status: 'Success' },
  HOLD: { text: 'Hold', status: 'Warning' },
  ACCEPTED: { text: 'Accepted', status: 'Success' },
  PROCESSED: { text: 'Processed', status: 'Success' },
};

const workflowStatusMap = {
  COMPLETED: 'finish',
  FAILED: 'error',
  STOP: 'error',
  PROCEED: 'process',
  ACKNOWLEDGED: 'finish',
  HOLD: 'wait',
  ACCEPTED: 'finish',
  PROCESSED: 'finish',
} satisfies Record<WorkflowStatus, StepProps['status']>;

const mapWorkItemToStep = (workItem: WorkItem): StepProps[] => {
  const { name, workResult, works } = workItem;
  const { extensions, status } = workResult;

  const description = (
    <ProDescriptions<WorkItem['workResult']['extensions']>
      column={2}
      columns={[
        {
          title: 'Status',
          dataIndex: 'status',
          valueEnum: WorkflowStatusValueEnum,
        },
        {
          title: 'Change Type',
          dataIndex: 'changeType',
          render: (changeType: string) => toTitleCase(changeType),
        },
        {
          title: 'Validations',
          dataIndex: 'validations',
          span: 2,
          render: (validations: string[]) =>
            !!validations && (
              <ul>
                {validations?.map((validation, index) => (
                  <li key={index}>{validation}</li>
                ))}
              </ul>
            ),
        },
      ]}
      dataSource={extensions}
    />
  );

  const step: StepProps = {
    title: toTitleCase(name),
    description,
    status: workflowStatusMap[status as WorkflowStatus],
  };

  const nestedSteps = works ? works.flatMap(mapWorkItemToStep) : [];

  return [step, ...nestedSteps];
};

export const WorkflowView = ({ workflow }: { workflow: WorkFlow }) => {
  const stepItems = workflow?.works?.flatMap(mapWorkItemToStep) || [];

  return (
    <ProCard>
      <Steps
        direction='vertical'
        current={0} // Adjust this as needed
        items={stepItems}
      />
    </ProCard>
  );
};
