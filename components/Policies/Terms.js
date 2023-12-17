import React from 'react'

const Terms = () => {
    const email = process.env.NEXT_PUBLIC_CONTACTEMAIL
  return (
    <div>
        <h1>Terms of Service</h1>

        <p><strong>1. Acceptance of Terms</strong></p>
        <p>By accessing or using our services, including but not limited to in-game purchases and interactions with our website, you agree to comply with and be bound by the following terms and conditions.</p>

        <p><strong>2. User Accounts</strong></p>
        <p>2.1. You may need to create an account to access certain features of our services.<br/>
        2.2. You are responsible for maintaining the confidentiality of your account information.<br/>
        2.3. You are responsible for all activities that occur under your account.</p>

        <p><strong>3. In-Game Purchases</strong></p>
        <p>3.1. All purchases made through our services are subject to our payment and refund policies.<br/>
        3.2. You agree to provide accurate and current payment information.<br/>
        3.3. We reserve the right to change prices and availability of in-game items without prior notice.</p>

        <p><strong>4. User Conduct</strong></p>
        <p>4.1. You agree not to engage in any activity that may interfere with the proper functioning of our services.<br/>
        4.2. You agree not to attempt to gain unauthorized access to any part of our services.</p>

        <p><strong>5. Termination</strong></p>
        <p>We reserve the right to terminate or suspend your account and access to our services for any reason, including violation of these terms.</p>

        <p><strong>6. Changes to Terms</strong></p>
        <p>We reserve the right to modify or update these terms at any time without prior notice. It is your responsibility to review these terms periodically.</p>

        <p><strong>7. Contact Information</strong></p>
        <p>For questions regarding these terms, please contact us at <b>{email}</b>.</p>

    </div>
  )
}

export default Terms