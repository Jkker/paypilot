export const cases = [
  {
    caseId: '72367240',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Change Address',
    createdAt: '2024-08-19T17:39:43.844845600',
    data: 'SSB3b3VsZCBsaWtlIHRvIG1ha2UgdGhlIGZvbGxvd2luZyBjaGFuZ2UgdG8gdGhlIGFkZHJlc3Mgb24gbXkgcHJvZmlsZS4gQWNjb3VudCBOdW1iZXI6IDQyMzQzMjQzMjQzICBDdXJyZW50IEFkZHJlc3MgPT09PT09PT09PT09PT09PSAxNDAgSGFyZGltb250IFJvYWQsIFJhbGVpZ2guIE5DIC0gMjc2MDkgIE5ldyBBZGRyZXNzID09PT09PT09PT09PT09PT0gMTUwIFcgTWFpbiBTdCwgV2F1a2VzaGEsIFR1cmtleSAtIDE1NTI0ICB0aGFua3MgQXJ2aW5kIEI=',
    status: 'ACKNOWLEDGED',
    assignedTo: 'Lee Chambers',
    workFlow: {
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
        },
      ],
    },
  },
  {
    caseId: '92534270',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Address change request',
    createdAt: '2024-08-15T14:41:01.042547100',
    data: 'I would like to change the address on the file to below. MerchantID: 0014729993358974971\n\nNew Address\n=================\n150 W Main St, Apt 3, Waukesha, WI - 53186.\n\nThanks\nArvind B',
    status: 'ACKNOWLEDGED',
    assignedTo: 'Lee Chambers',
    workFlow: {
      name: 'Initial Review',
    },
  },
  {
    caseId: '92534271',
    solicitorId: 'johndoe@example.com',
    subject: 'Re: Contract Review',
    createdAt: '2024-08-16T10:30:00.000Z',
    data: 'Some contract details here.',
    status: 'PENDING',
    assignedTo: 'Jane Smith',
    workFlow: {
      name: 'Contract Review',
    },
  },
  {
    caseId: '92534272',
    solicitorId: 'janedoe@example.com',
    subject: 'Inquiry about case status',
    createdAt: '2024-08-17T09:15:00.000Z',
    data: 'Please provide the status of my case.',
    status: 'CLOSED',
    assignedTo: 'Michael Brown',
    workFlow: {
      name: 'Status Inquiry',
    },
  },
  {
    caseId: '92534273',
    solicitorId: 'alice@example.com',
    subject: 'Request for additional documents',
    createdAt: '2024-08-18T11:45:00.000Z',
    data: 'We need additional documents for this case.',
    status: 'ACKNOWLEDGED',
    assignedTo: 'Chris Johnson',
    workFlow: {
      name: 'Document Request',
    },
  },
  {
    caseId: '92534274',
    solicitorId: 'bob@example.com',
    subject: 'Follow-up on previous request',
    createdAt: '2024-08-19T14:00:00.000Z',
    data: 'Follow-up on previous request.',
    status: 'PENDING',
    assignedTo: 'Emily Davis',
    workFlow: {
      name: 'Follow-up',
    },
  },
  {
    caseId: '92534275',
    solicitorId: 'charlie@example.com',
    subject: 'Urgent: Case update needed',
    createdAt: '2024-08-20T16:20:00.000Z',
    data: 'Urgent case update needed.',
    status: 'ACKNOWLEDGED',
    assignedTo: 'David Wilson',
    workFlow: {
      name: 'Urgent Update',
    },
  },
];
