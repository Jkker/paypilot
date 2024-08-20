import type { Article } from '@/app/knowledge/page';

export const IrelandAddressValidationArticle: Article = {
  title: 'Validating Addresses for Ireland Customers',
  icon: 'FaMapMarkerAlt',
  content: `When dealing with addresses in Ireland, it's essential to ensure accuracy due to unique formatting rules. Follow these steps:

1. **Check for Eircode**: Ensure that the address includes a valid Eircode. You can use the Eircode to verify it.
2. **Verify Street Names**: Cross-reference street names with the customer-provided address using Google Maps or an official postal service.
3. **Confirm Postal Town**: Ensure that the postal town matches the Eircode and street information.
4. **Update CRM**: Once the address is validated, update the customer's profile in the CRM.

### Tips
- Always ask the customer to provide their Eircode first to avoid errors.
- If in doubt, contact the local post office for clarification.

  `,
  tags: ['Ireland', 'Address Validation', 'Customer Support'],
};

export const ReopenAccountArticle: Article = {
  title: 'Procedures to Reopen a Closed Account',
  icon: 'FaRedoAlt',
  content: `If a customer requests to reopen a closed account, follow these procedures:

1. **Verify Account Closure Reason**: Check the account notes to understand why the account was closed.
2. **Authenticate the Customer**: Ensure the customer is the account holder by verifying their identity.
3. **Review Closure Conditions**: Determine if the account was closed due to violations of terms or if it can be reopened without issue.
4. **Notify Relevant Departments**: Inform finance or compliance departments if their approval is needed.
5. **Reopen the Account**: Use the account management tool to reopen the account, ensuring all previous settings are intact.
6. **Confirm with the Customer**: Send a confirmation email to the customer detailing the reopening and any necessary next steps.

### Tips
- Ensure all legal and compliance checks are passed before reopening.
- Record all actions taken in the CRM.

  `,
  tags: ['Account Reopening', 'Customer Support', 'Procedures'],
};

export const PaymentDisputesArticle: Article = {
  title: 'Handling Payment Disputes',
  icon: 'FaCreditCard',
  content: `When a customer disputes a payment, it's crucial to handle the situation delicately and efficiently. Follow these steps:

1. **Acknowledge the Dispute**: Listen to the customer's concerns and acknowledge the issue.
2. **Collect Information**: Gather details such as the transaction ID, date, and amount.
3. **Review Payment Records**: Check the payment gateway and CRM for records of the disputed transaction.
4. **Initiate Investigation**: If necessary, escalate the dispute to the finance or fraud investigation team.
5. **Resolve the Dispute**: Based on findings, either refund the customer, provide further clarification, or escalate the issue to higher authorities.
6. **Follow Up**: Ensure the customer is informed of the outcome and update the CRM with all details.

### Tips
- Always maintain a calm and professional tone during disputes.
- Document every step taken during the dispute resolution process.

  `,
  tags: ['Payment Disputes', 'Customer Support', 'Finance'],
};

export const ResetPasswordArticle: Article = {
  title: "Resetting a Customer's Password",
  icon: 'FaKey',
  content: `If a customer needs to reset their password, follow these steps to ensure their account security:

1. **Verify Identity**: Confirm the customer's identity by asking for security questions or using two-factor authentication.
2. **Initiate Password Reset**: Use the customer support tool to send a password reset link to the customer's registered email.
3. **Guide the Customer**: If the customer has trouble, walk them through the process of resetting their password using the link.
4. **Test Access**: Once the password is reset, ask the customer to log in to verify everything works correctly.
5. **Update CRM**: Note the password reset request and completion in the customer's profile.

### Tips
- Encourage customers to choose a strong, unique password.
- Remind customers not to share their password with anyone.

  `,
  tags: ['Password Reset', 'Customer Support', 'Security'],
};

export const EscalationProceduresArticle: Article = {
  title: 'Escalation Procedures for Unresolved Issues',
  icon: 'FaExclamationTriangle',
  content: `When an issue cannot be resolved at the initial support level, it must be escalated properly. Here’s how:

1. **Determine Escalation Necessity**: If the issue cannot be resolved within the standard time frame or requires specialized knowledge, prepare to escalate.
2. **Collect All Information**: Gather all relevant details, including case history, customer communications, and any attempted solutions.
3. **Notify the Customer**: Inform the customer that their issue is being escalated and provide an estimated response time.
4. **Escalate to Appropriate Team**: Use the CRM to escalate the case to the relevant department (e.g., technical support, billing).
5. **Follow Up**: Monitor the escalated case and follow up with the responsible team to ensure timely resolution.
6. **Close the Loop**: Once resolved, communicate the outcome to the customer and update the CRM.

### Tips
- Always keep the customer informed during escalations.
- Document all escalation steps thoroughly.

  `,
  tags: ['Escalation Procedures', 'Customer Support', 'Problem Resolution'],
};

const articles = [
  IrelandAddressValidationArticle,
  ReopenAccountArticle,
  PaymentDisputesArticle,
  ResetPasswordArticle,
  EscalationProceduresArticle,
];
export default articles;
