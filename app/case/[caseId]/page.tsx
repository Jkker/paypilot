import { CaseDetails } from '@/components/CaseDetails';
import { EmailList } from '@/components/EmailCard';
import { SubTitle } from '@/components/Text';
import { WorkflowView } from '@/components/WorkflowView';
import { fetchOneCase } from '@/lib/fetchCaseData';
import { Empty } from 'antd';
import { FaProjectDiagram, FaRegFolder } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';

export default async function Page({ params }: { params: { caseId: string } }) {
  const data = await fetchOneCase(params);

  // console.log(`🚀 ~ file: page.tsx:27 ~ Page ~ data:`, data);
  if (!data) {
    return <Empty />;
  }
  return (
    <main className='grid grid-cols-1 gap-4'>
      <SubTitle icon={<FaRegFolder />}>Case Details</SubTitle>
      <CaseDetails data={data} />

      {data.workFlow && (
        <>
          <SubTitle icon={<FaProjectDiagram />}>Workflow</SubTitle>
          <WorkflowView workflow={data.workFlow} />
        </>
      )}
      <SubTitle icon={<FaRegMessage />}>Messages</SubTitle>
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
        data={data}
      />
    </main>
  );
}
export const dynamic = 'force-static';
