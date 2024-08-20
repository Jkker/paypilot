// export * from './types';
import { components } from './types';
export { client } from './client';

export type Case = components['schemas']['Case'];
export type User = components['schemas']['User'];
export type Merchant = components['schemas']['Merchant'];
export type WorkFlow = components['schemas']['WorkFlow'];
export type WorkItem = components['schemas']['WorkItem'];

export type WorkflowStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'STOP'
  | 'PROCEED'
  | 'ACKNOWLEDGED'
  | 'HOLD'
  | 'ACCEPTED'
  | 'PROCESSED';

export interface Email {
  /** The sender's email address */
  from: string;

  /** The sender's name */
  senderName?: string;

  /** The recipient's email address */
  to: string;

  /** The recipient's name */
  recipientName?: string;

  /** The subject of the email */
  subject: string;

  /** The body content of the email */
  body: string;

  /** An optional date when the email was sent */
  date?: string;
}

export interface EmailWorkItem extends WorkItem {
  workId: 'ADVISE_SEND_EMAIL_DRAFT';
  workResult: {
    name: string;
    status: string;
    results: unknown[];
    extensions: {
      caseId?: string;
      status: 'SUCCESS' | 'FAILURE';
      validations?: string[];
      changeType?: string;
      draftEmail: Email;
    };
  };
}
