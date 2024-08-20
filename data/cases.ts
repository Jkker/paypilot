export const cases = [
  {
    caseId: '42082613',
    caseType: 'ADDRESS_CHANGE',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Address update: Caseid: 42082613',
    createdAt: '2024-08-20T15:34:29.399495400',
    data: 'SSB3b3VsZCBsaWtlIHRvIGNoYW5nZSB0aGUgYWRkcmVzcyBvbiB0aGUgZmlsZSB0byBiZWxvdy4gTUlEOiA0NjYwMTE4OSAgTmV3IEFkZHJlc3MgPT09PT09PT09PT09PT09PSAxNTAgVyBNYWluIFN0LCBBcHQgMjcyLCBXYXVrZXNoYSBXSSAtIDUzMTg2ICBUaGFua3MgQXJ2aW5kIEI=',
    status: 'ACCEPTED',
    assignedTo: 'Lee Chambers',
    workFlow: {
      id: 'd97cddf2-2fa0-4737-a0fb-458004578d05',
      name: 'CASE_MANAGEMENT_FLOW',
      works: [
        {
          id: '777dfad7-d4bd-4326-977a-40bedb2c2f04',
          name: 'ADVISE_CASE_PRE_SCREEN',
          workResult: {
            name: 'ADVISE_CASE_PRE_SCREEN',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: [
                'Solicitor role validated: ADMIN',
                'Merchant status validated: OPEN',
              ],
              clearances: [],
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '6409e986-c183-4a82-8f25-12a3a2bbb4dd',
          name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
          workResult: {
            name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: null,
              clearances: null,
              caseType: 'ADDRESS_CHANGE',
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '78ecd241-9746-4e9b-bbf7-d8ec34ff77a3',
          name: 'ADVISE_ADDRESS_CHANGE_FLOW',
          works: [
            {
              id: '63f7107c-06f5-4256-a8f6-022951a17f0d',
              name: 'ADVISE_ADDRESS_CHANGE',
              workResult: {
                name: 'ADVISE_ADDRESS_CHANGE',
                extensions: {
                  caseId: null,
                  status: 'PROCEED',
                  validations: [
                    'Address validation passed: Contains Town/City, House/Building Number, Street Name, Country, Zipcode.',
                    'Country validation passed: Address is not in Turkey or Belarus.',
                  ],
                  clearances: null,
                },
                status: 'COMPLETED',
                results: [],
              },
            },
          ],
        },
        {
          id: '96eda7de-fbcc-458e-bfd4-76c7cd8618c8',
          name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE_FLOW',
          works: [
            {
              id: '7df66196-0256-4708-ac1b-74ab70d7adae',
              name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE',
              workResult: null,
            },
          ],
        },
      ],
    },
    clearances: [],
  },
  {
    caseId: '51238606',
    caseType: 'ADDRESS_CHANGE',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Address update',
    createdAt: '2024-08-20T15:35:28.655430300',
    data: 'SSB3b3VsZCBsaWtlIHRvIGNoYW5nZSB0aGUgYWRkcmVzcyBvbiB0aGUgZmlsZSB0byBiZWxvdy4gTUlEOiA0NjYwMTE4OSAgTmV3IEFkZHJlc3MgPT09PT09PT09PT09PT09PSAxNTAgVyBNYWluIFN0LCBBcHQgMjcyLCBXYXVrZXNoYSBXSSAtIDUzMTg2ICBUaGFua3MgQXJ2aW5kIEI=',
    status: 'ACCEPTED',
    assignedTo: 'Lincoln Hickman',
    workFlow: {
      id: '312a30ef-e054-45f7-ac05-db7f58fa4c07',
      name: 'CASE_MANAGEMENT_FLOW',
      works: [
        {
          id: '278b4778-7f3f-4e92-aba5-2521d92a6eea',
          name: 'ADVISE_CASE_PRE_SCREEN',
          workResult: {
            name: 'ADVISE_CASE_PRE_SCREEN',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: [
                'Solicitor role evaluated: ADMIN',
                'Merchant status evaluated: OPEN',
              ],
              clearances: [],
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: 'af46542d-e46f-4434-bc81-3f80081ec54c',
          name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
          workResult: {
            name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: null,
              clearances: null,
              caseType: 'ADDRESS_CHANGE',
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: 'a90a4928-accc-4741-9e4f-2e64ad7dabe0',
          name: 'ADVISE_ADDRESS_CHANGE_FLOW',
          works: [
            {
              id: '4f779e72-e257-44c5-a81c-ce9b42e44340',
              name: 'ADVISE_ADDRESS_CHANGE',
              workResult: {
                name: 'ADVISE_ADDRESS_CHANGE',
                extensions: {
                  caseId: null,
                  status: 'PROCEED',
                  validations: [
                    'New address specified: 150 W Main St, Apt 272, Waukesha WI - 53186',
                    'Address contains Town or City: Waukesha',
                    'Address contains House or Building Number: Apt 272',
                    'Address contains Street Name: 150 W Main St',
                    'Address contains Country: United States (Implicit by WI state code)',
                    'Address contains Zipcode: 53186',
                    'Address change not to restricted countries (Turkey or Belarus)',
                  ],
                  clearances: null,
                },
                status: 'COMPLETED',
                results: [],
              },
            },
          ],
        },
        {
          id: '5210b779-2fdf-4f6b-b186-4432af642e91',
          name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE_FLOW',
          works: [
            {
              id: '3d23a3ea-1468-46f7-af71-cce7a7e6df39',
              name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE',
              workResult: null,
            },
          ],
        },
      ],
    },
    clearances: [],
  },
  {
    caseId: '38185406',
    caseType: 'ADDRESS_CHANGE',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Address update: Caseid: 42082613',
    createdAt: '2024-08-20T15:47:29.443509',
    data: 'SSB3b3VsZCBsaWtlIHRvIGNoYW5nZSB0aGUgYWRkcmVzcyBvbiB0aGUgZmlsZSB0byBiZWxvdy4gTUlEOiA0NjYwMTE4OSAgTmV3IEFkZHJlc3MgPT09PT09PT09PT09PT09PSAxNTAgVyBNYWluIFN0LCBBcHQgMjcyLCBXYXVrZXNoYSBXSSAtIDUzMTg2ICBUaGFua3MgQXJ2aW5kIEI=',
    status: 'ACCEPTED',
    assignedTo: 'Lee Chambers',
    workFlow: {
      id: '6eec53c4-f05f-4587-82cd-d8abfdf83763',
      name: 'CASE_MANAGEMENT_FLOW',
      works: [
        {
          id: '72e12f0d-07ea-46cd-b175-619e775a7382',
          name: 'ADVISE_CASE_PRE_SCREEN',
          workResult: {
            name: 'ADVISE_CASE_PRE_SCREEN',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: [
                "Solicitor's role validated: ADMIN",
                'Merchant status validated: OPEN',
              ],
              clearances: [],
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '491e9352-1923-414f-8d41-f247a7c4597b',
          name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
          workResult: {
            name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: null,
              clearances: null,
              caseType: 'ADDRESS_CHANGE',
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '4853705a-917e-4cd6-9f2a-67948beb8a75',
          name: 'ADVISE_ADDRESS_CHANGE_FLOW',
          works: [
            {
              id: '8a895901-41cb-4386-971c-49ab0dc32ed6',
              name: 'ADVISE_ADDRESS_CHANGE',
              workResult: {
                name: 'ADVISE_ADDRESS_CHANGE',
                extensions: {
                  caseId: null,
                  status: 'PROCEED',
                  validations: [
                    'Address change request validated successfully. Address details are complete and not directed to restricted countries (Turkey or Belarus).',
                  ],
                  clearances: null,
                },
                status: 'COMPLETED',
                results: [],
              },
            },
          ],
        },
        {
          id: '055eae71-ad3c-4781-8813-60db2e4332d6',
          name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE_FLOW',
          works: [
            {
              id: '87bd7501-4334-4d13-b228-b65926a21780',
              name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE',
              workResult: null,
            },
          ],
        },
      ],
    },
    clearances: [],
  },
  {
    caseId: '47704361',
    caseType: 'MERCHANT_ACCOUNT_STATUS_CHANGE',
    solicitorId: 'barvind88@gmail.com',
    subject: 'Fw: Account status change',
    createdAt: '2024-08-20T15:49:24.844767700',
    data: 'SGkgVGVhbSAgUGxlYXNlIHJlb3BlbiBteSBhY2NvdW50LiBNSUQ6ICA0NDEzMzY1NiAgdGhhbmtzIEFydmluZCBC',
    status: 'HOLD',
    assignedTo: 'Lee Chambers',
    workFlow: {
      id: '0667cb64-cde4-41df-a1e8-5566c1f08856',
      name: 'CASE_MANAGEMENT_FLOW',
      works: [
        {
          id: '805de139-07c3-4f50-99ef-7822c5ee7c39',
          name: 'ADVISE_CASE_PRE_SCREEN',
          workResult: {
            name: 'ADVISE_CASE_PRE_SCREEN',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: [
                "Solicitor's role verified as ADMIN.",
                'Merchant status evaluated as CLOSED.',
              ],
              clearances: [],
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '7bedd9c2-7ca7-4e2a-aeb7-6cfa3c8035ff',
          name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
          workResult: {
            name: 'ADVISE_CATEGORIZE_SYSTEM_CHANGE',
            extensions: {
              caseId: null,
              status: 'PROCEED',
              validations: null,
              clearances: null,
              caseType: 'MERCHANT_ACCOUNT_STATUS_CHANGE',
            },
            status: 'COMPLETED',
            results: [],
          },
        },
        {
          id: '51c9b21b-7784-4e6d-b3c0-e0e1f5ed318b',
          name: 'ADVISE_ADDRESS_CHANGE_FLOW',
          works: [
            {
              id: '766ecb11-1142-436b-ac01-baea5e8edc83',
              name: 'ADVISE_ADDRESS_CHANGE',
              workResult: null,
            },
          ],
        },
        {
          id: '1b2bd5d2-404c-42da-8bdf-368d0fd187a0',
          name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE_FLOW',
          works: [
            {
              id: 'dfb70a24-3acb-402d-aca8-103a2331a5b3',
              name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE',
              workResult: {
                name: 'ADVISE_MERCHANT_ACCOUNT_STATUS_CHANGE',
                extensions: {
                  caseId: null,
                  status: 'STOP',
                  validations: [
                    'Merchant details retrieved: Merchant ID: 44133656, Status: CLOSED, Reason for closure: FR.',
                    'Reopening request cannot proceed without approval from the department that requested the closure. Email sent to COLLECTIONS department for review.',
                  ],
                  clearances: null,
                },
                status: 'FAILED',
                results: [],
              },
            },
          ],
        },
      ],
    },
    clearances: [],
  },
];
