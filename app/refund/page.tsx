import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Refund Policy</h1>
          <div className="prose max-w-none">
            <p>
              At Food Hub, we strive to ensure your satisfaction with every order. However, we understand that sometimes
              issues may arise. This Refund Policy outlines the circumstances under which we offer refunds and the
              process for requesting one.
            </p>

            <h2>1. Eligibility for Refunds</h2>
            <p>We may provide refunds in the following situations:</p>
            <ul>
              <li>The order was not delivered</li>
              <li>The food quality was unsatisfactory</li>
              <li>The order was incorrect or incomplete</li>
              <li>The food was damaged during delivery</li>
            </ul>

            <h2>2. Refund Process</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Log into your Food Hub account</li>
              <li>Go to your order history</li>
              <li>Select the order in question</li>
              <li>Click on "Report an Issue" and provide details about the problem</li>
              <li>Our customer support team will review your request and respond within 24 hours</li>
            </ol>

            <h2>3. Refund Methods</h2>
            <p>
              Refunds will be processed to the original payment method used for the order. The time it takes for the
              refund to appear in your account may vary depending on your payment provider.
            </p>

            <h2>4. Partial Refunds</h2>
            <p>In some cases, we may offer partial refunds if only part of the order was affected.</p>

            <h2>5. Non-Refundable Items</h2>
            <p>
              Delivery fees and service charges are generally non-refundable unless the entire order is being refunded
              due to non-delivery.
            </p>

            <h2>6. Time Limit for Refund Requests</h2>
            <p>Refund requests must be submitted within 24 hours of the order delivery time.</p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact our customer support team at
              support@foodhub.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

