import { cases } from '@/data/cases';

export async function fetchCaseData(params: { caseId: string }) {
  const currentCase = cases.find((c) => c.caseId === params.caseId) ?? cases[0];
  const data = {
    ...currentCase,
    data: currentCase.data,
  };

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { data };
}
