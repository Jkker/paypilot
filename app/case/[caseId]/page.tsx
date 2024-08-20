import { CaseDetails } from './CaseDetails';
import { MessageHistory } from './MessageHistory';
import { fetchOneCase } from './fetchCaseData';

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
  return (
    <main className='grid grid-cols-1 gap-4'>
      <h3 className='text-lg font-semibold text-gray-800'>Case Details</h3>
      <CaseDetails data={data} />
      <h3 className='text-lg font-semibold text-gray-800'>
        Communication History
      </h3>
      <MessageHistory messages={messages} data={data} />
    </main>
  );
}
