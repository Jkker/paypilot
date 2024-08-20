// import { client } from '@/lib';
import { type Case } from '@/lib';
import { cases } from '@/data/cases';

const client = {
  GET: async (path: string) => {
    return { data: cases, error: null };
  },
};

export const decodedCaseData = (caseData: Case) => ({
  ...caseData,
  data: atob(caseData.data),
});

export const ensureCaseArray = (data: Case | Case[]) => {
  if (Array.isArray(data)) {
    return data;
  }
  return [data];
};

export async function fetchOneCase(params: { caseId?: string }) {
  const { data, error } = await client.GET('/cases');
  if (error) {
    throw new Error(error);
  }
  const cases = ensureCaseArray(data);
  if (params.caseId) {
    const targetedCase = cases.find((c) => c.caseId === params.caseId);
    if (!targetedCase) return;
    return decodedCaseData(targetedCase);
  }
}

export async function fetchCases() {
  const { data, error } = await client.GET('/cases');
  if (error) {
    throw new Error(error);
  }
  return ensureCaseArray(data).map(decodedCaseData);
}
