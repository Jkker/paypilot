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
export const RefundProcessingArticle: Article = {
  title: 'Processing Refunds for Customers',
  icon: 'FaMoneyCheckAlt',
  content: `Refund requests need to be handled promptly and accurately to maintain customer satisfaction. Follow these steps:

1. **Verify Refund Eligibility**: Check the customer’s order history and the company's refund policy to ensure the purchase is eligible for a refund.
2. **Confirm Payment Method**: Verify the original payment method and determine how the refund will be processed (e.g., credit card, PayPal).
3. **Initiate Refund**: Use the payment gateway or CRM tool to process the refund, ensuring that the amount matches the customer’s request.
4. **Notify the Customer**: Send a confirmation email to the customer with details about the refund, including the amount and expected time frame for the funds to appear.
5. **Update CRM**: Log the refund transaction in the customer’s profile, including any relevant notes.

### Tips
- Ensure all refunds comply with the company’s policies.
- If a customer has multiple refund requests, handle them in one transaction to avoid confusion.

  `,
  tags: ['Refunds', 'Customer Support', 'Finance'],
};
export const HandlingChargebacksArticle: Article = {
  title: 'Handling Chargebacks',
  icon: 'FaBalanceScale',
  content: `Chargebacks can be a complex issue, requiring careful documentation and communication. Follow these steps:

1. **Acknowledge the Chargeback**: Receive the chargeback notification from the payment processor and review the details.
2. **Gather Evidence**: Collect all relevant documentation, including transaction records, customer communications, and proof of delivery or service.
3. **Submit a Response**: Use the payment processor’s platform to submit a formal response with all gathered evidence within the required time frame.
4. **Monitor the Outcome**: Track the chargeback status and be prepared to provide additional information if necessary.
5. **Update CRM**: Record the chargeback details and any correspondence in the customer’s profile.

### Tips
- Stay calm and professional when dealing with chargebacks.
- Keep a template ready for common chargeback responses to speed up the process.

  `,
  tags: ['Chargebacks', 'Customer Support', 'Finance'],
};
export const AccountVerificationProcessArticle: Article = {
  title: 'Account Verification Process',
  icon: 'FaUserCheck',
  content: `Verifying customer accounts is crucial for security and compliance. Here's the process:

1. **Request Verification Documents**: Ask the customer to provide necessary identification documents (e.g., government ID, utility bill) via secure upload.
2. **Verify Documents**: Cross-check the provided documents with the information in the customer's profile. Ensure that the documents are valid and unaltered.
3. **Update Account Status**: Once verified, change the customer’s account status to “Verified” in the CRM.
4. **Notify the Customer**: Send a confirmation email to the customer, informing them that their account has been successfully verified.
5. **Record Verification**: Log the verification details and documents in the CRM for future reference.

### Tips
- Ensure that the document submission process is secure to protect customer information.
- Have a standard checklist for verifying different types of documents.

  `,
  tags: ['Account Verification', 'Customer Support', 'Security'],
};
export const HandlingCustomerComplaintsArticle: Article = {
  title: 'Handling Customer Complaints',
  icon: 'FaFrown',
  content: `Customer complaints should be managed with care and efficiency. Follow these steps:

1. **Listen to the Complaint**: Allow the customer to fully explain their issue without interruption, showing empathy and understanding.
2. **Acknowledge the Issue**: Confirm that you understand the problem and validate the customer’s feelings.
3. **Investigate the Issue**: Look into the complaint by reviewing relevant records, communicating with involved departments, and identifying the root cause.
4. **Provide a Solution**: Offer a solution that aligns with company policy and meets the customer’s needs.
5. **Follow Up**: After resolving the issue, follow up with the customer to ensure their satisfaction and to prevent future occurrences.

### Tips
- Keep a positive and helpful tone, even in difficult situations.
- Use complaints as opportunities to improve service and processes.

  `,
  tags: ['Customer Complaints', 'Customer Support', 'Problem Resolution'],
};
export const ManagingCustomerDataRequestsArticle: Article = {
  title: 'Managing Customer Data Requests',
  icon: 'FaDatabase',
  content: `Handling customer data requests must be done in compliance with data protection regulations. Follow these steps:

1. **Receive the Request**: Acknowledge receipt of the customer’s data request and confirm the type of data they need (e.g., account history, personal information).
2. **Verify Identity**: Ensure the request is coming from the account holder by verifying their identity through security questions or ID verification.
3. **Gather Data**: Compile the requested data from the CRM and other relevant systems, ensuring completeness and accuracy.
4. **Review for Compliance**: Check that the data complies with all relevant data protection laws (e.g., GDPR, CCPA) before sharing it with the customer.
5. **Deliver the Data**: Send the compiled data to the customer securely, ensuring encryption if necessary.
6. **Log the Request**: Record the data request and fulfillment in the CRM for future reference.

### Tips
- Always prioritize customer privacy and data security.
- Be aware of legal time frames for fulfilling data requests.

  `,
  tags: ['Customer Data', 'Customer Support', 'Compliance'],
};

const articles = [
  IrelandAddressValidationArticle,
  ReopenAccountArticle,
  PaymentDisputesArticle,
  ResetPasswordArticle,
  EscalationProceduresArticle,
  RefundProcessingArticle,
  HandlingChargebacksArticle,
  AccountVerificationProcessArticle,
  HandlingCustomerComplaintsArticle,
  ManagingCustomerDataRequestsArticle,
];
export default articles;
