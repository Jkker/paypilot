'use client';
import type { WorkFlow } from '@/lib';
import { ProCard } from '@ant-design/pro-components';
import { WorkflowView } from '../WorkflowView';
const wf: WorkFlow = {
  name: 'CASE_MANAGEMENT',
  works: [
    {
      name: 'ADVISE_CASE_PRE_SCREEN',
      workResult: {
        name: 'ADVISE_CASE_PRE_SCREEN',
        extensions: {
          caseId: null,
          status: 'PROCEED',
          validations: [
            "Solicitor's role verified as ADMIN.",
            'Merchant status verified as NONE.',
          ],
        },
        status: 'COMPLETED',
        results: [],
      },
    },
    {
      name: 'ADVISE_CATEGORIZE_CHANGE',
      workResult: {
        name: 'ADVISE_CATEGORIZE_CHANGE',
        extensions: {
          caseId: null,
          status: 'PROCEED',
          validations: null,
          changeType: 'ADDRESS_CHANGE',
        },
        status: 'COMPLETED',
        results: [],
      },
    },
    {
      name: 'ADVISE_ADDRESS_CHANGE_CONDITION',
      works: [
        {
          name: 'ADVISE_ADDRESS_CHANGE',
          workResult: {
            name: 'ADVISE_ADDRESS_CHANGE',
            extensions: {
              caseId: null,
              status: 'STOP',
              validations: [
                'New address country is Turkey which is not allowed.',
              ],
            },
            status: 'FAILED',
            results: [],
          },
        },
      ],
      workResult: {
        name: '',
        extensions: {
          caseId: '',
          status: '',
          validations: [],
          changeType: '',
        },
        status: '',
        results: [],
      },
    },
  ],
};
const wf2 = {
  name: 'CASE_MANAGEMENT',
  works: [
    {
      name: 'ADVISE_CASE_PRE_SCREEN',
      workResult: {
        name: 'ADVISE_CASE_PRE_SCREEN',
        extensions: {
          caseId: null,
          status: 'PROCEED',
          validations: [
            "Solicitor's role validated as ADMIN.",
            'Merchant ID 44133656 status checked as CLOSED.',
          ],
        },
        status: 'COMPLETED',
        results: [],
      },
    },
    {
      name: 'ADVISE_CATEGORIZE_CHANGE',
      workResult: {
        name: 'ADVISE_CATEGORIZE_CHANGE',
        extensions: {
          caseId: null,
          status: 'PROCEED',
          validations: null,
          changeType: 'ACCOUNT_STATUS_CHANGE',
        },
        status: 'COMPLETED',
        results: [],
      },
    },
    {
      name: 'ADVISE_ADDRESS_CHANGE_CONDITION',
      works: [
        {
          name: 'ADVISE_ADDRESS_CHANGE',
          workResult: null,
        },
      ],
    },
  ],
};

export default function WorkflowPage() {
  return (
    <ProCard>
      <WorkflowView workflow={wf2} />
    </ProCard>
  );
}
