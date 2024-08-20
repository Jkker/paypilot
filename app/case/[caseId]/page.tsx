import { CaseDetails } from '@/components/CaseDetails';
import { EmailList } from '@/components/EmailCard';
import { MessageHistory } from '@/components/MessageHistory';
import { SubTitle } from '@/components/Text';
import { WorkflowView } from '@/components/WorkflowView';
import { fetchOneCase } from '@/lib/fetchCaseData';
import { Empty } from 'antd';

export default async function Page({ params }: { params: { caseId: string } }) {
  const data = await fetchOneCase(params);
  const messages = [
    {
      sender: 'Client',
      time: '12:00 PM',
      message: data.data,
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
  console.log(`🚀 ~ file: page.tsx:27 ~ Page ~ data:`, data);
  if (!data) {
    return <Empty />;
  }
  return (
    <main className='grid grid-cols-1 gap-4'>
      <SubTitle icon='📂'>Case Details</SubTitle>
      <CaseDetails data={data} />

      {data.workFlow && (
        <>
          <SubTitle icon='🔄'>Workflow</SubTitle>
          <WorkflowView workflow={data.workFlow} />
        </>
      )}
      <SubTitle icon='📝'>Messages</SubTitle>
      <EmailList
        emails={[
          {
            subject: data.subject,
            body: data.data,
            from: data.solicitorId,
            to: 'MFM Support',
            date: data.createdAt,
          },
        ]}
      />
    </main>
  );
}
export const dynamic = 'force-static';
