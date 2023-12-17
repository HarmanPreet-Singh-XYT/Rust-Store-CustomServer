import React from 'react'

const Privacy = () => {
    const email = process.env.NEXT_PUBLIC_CONTACTEMAIL
  return (
    <div>
        <h1>Privacy Policy</h1>

        <p><strong>1. Information Collection</strong></p>
        <p><strong>1.1. Payment Information:</strong></p>
        <p>We collect and store information related to payment transactions, including invoices, transaction IDs, and payment amounts.<br/>
        We do not store or have access to your payment credentials, such as credit card numbers or bank account details.</p>

        <p><strong>2. Use of Information</strong></p>
        <p><strong>2.1. Payment Transactions:</strong></p>
        <p>The information collected is used solely for the purpose of processing and recording payment transactions.<br/>
        Payment information is utilized to generate invoices, confirm transactions, and maintain accurate financial records.</p>

        <p><strong>3. Information Sharing</strong></p>
        <p><strong>3.1. Third-Party Services:</strong></p>
        <p>We may use third-party payment processors to facilitate transactions. Please review their privacy policies for information on how they handle your data.</p>

        <p><strong>4. Security</strong></p>
        <p><strong>4.1. Data Security:</strong></p>
        <p>We employ industry-standard security measures to protect the confidentiality and integrity of payment-related information.<br/>
        We do not store sensitive payment credentials on our servers.</p>

        <p><strong>5. Data Retention</strong></p>
        <p><strong>5.1. Retention Period:</strong></p>
        <p>Payment transaction information is retained for as long as necessary to comply with legal obligations and for record-keeping purposes.<br/>
        Once no longer necessary, payment information will be securely deleted.</p>

        <p><strong>6. Your Rights</strong></p>
        <p><strong>6.1. Access and Correction:</strong></p>
        <p>You have the right to access and correct your payment information held by us.<br/>
        For any requests related to your data, please contact us at <b>{email}</b>.</p>

        <p><strong>7. Changes to the Privacy Policy</strong></p>
        <p><strong>7.1. Updates:</strong></p>
        <p>We reserve the right to update or modify this privacy policy at any time. Changes will be effective immediately upon posting.</p>

        <p><strong>8. Contact Information</strong></p>
        <p><strong>8.1. Questions:</strong></p>
        <p>For questions or concerns regarding this privacy policy, please contact us at <b>{email}</b>.</p>
    </div>
  )
}

export default Privacy