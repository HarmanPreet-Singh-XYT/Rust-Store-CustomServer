import React from 'react'

const Refund = () => {
    const email = process.env.NEXT_PUBLIC_CONTACTEMAIL
  return (
    <div>
        <h1>Cancellation and Refund Policy</h1>

        <p><strong>1. Cancellation</strong></p>
        <p><strong>1.1. Cancellation Window:</strong></p>
        <p>Cancellations are allowed within a specified period after the purchase is made, but before the in-game items are delivered.</p>

        <p><strong>1.2. Request Process:</strong></p>
        <p>To initiate a cancellation, please contact our customer support at <b>{email}</b>.<br/>
        Cancellations requested after the delivery of in-game items will not be accepted.</p>

        <p><strong>2. Refund</strong></p>
        <p><strong>2.1. Eligibility:</strong></p>
        <p>Refunds are eligible only if the purchased in-game items have not been delivered to the user.</p>

        <p><strong>2.2. Refund Process:</strong></p>
        <p>To request a refund, contact our customer support within the specified cancellation window.<br/>
        Refund requests made after the delivery of in-game items will not be considered.</p>

        <p><strong>2.3. Refund Method:</strong></p>
        <p>Refunds, if approved, will be processed using the original payment method.</p>

        <p><strong>3. Exceptions</strong></p>
        <p><strong>3.1. Exceptions to Refunds:</strong></p>
        <p>Refunds will not be provided for in-game items that have already been delivered and are in the user's possession.<br/>
        Refunds will not be granted for violations of our Terms of Service.</p>

        <p><strong>4. Contact Information</strong></p>
        <p><strong>4.1. Questions:</strong></p>
        <p>For questions or concerns regarding the cancellation and refund policy, please contact us at <b>{email}</b>.</p>
    </div>
  )
}

export default Refund