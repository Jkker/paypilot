'use client';
import { CaseDetails } from '@/components/CaseDetails';
import { EmailList } from '@/components/EmailCard';
import { SubTitle } from '@/components/Text';
import { WorkflowView } from '@/components/WorkflowView';
import type { Case } from '@/lib';
import { fetchOneCase } from '@/lib/fetchCaseData';
import { Empty, message, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { FaProjectDiagram, FaRegFolder } from 'react-icons/fa';
import { FaRegMessage } from 'react-icons/fa6';
import KnowledgeBase from '@/app/knowledge/page';
export default function Page({ params }: { params: { caseId: string } }) {
  const [data, setData] = useState<Case>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOneCase(params)
      .then((d) => setData(d))
      .catch((e) => message.error(e.message))
      .finally(() => setIsLoading(false));
  }, [params]);
  if (!data) {
    return <Empty />;
  }
  return (
    <Skeleton loading={isLoading}>
      <div className='flex gap-4 items-start justify-between relative h-full'>
        <main className='grid grid-cols-1 gap-4 w-full overflow-y-auto pb-8 relative'>
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
        <div className='max-w-[370px] w-full h-[90%] overflow-y-auto sticky top-0 right-0 hide-scrollbar flex flex-col'>
          <KnowledgeBase />
        </div>
      </div>
    </Skeleton>
  );
}
