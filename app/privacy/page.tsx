import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>
              At Food Hub, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our website or mobile application.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, place an
              order, or contact our customer support. This may include your name, email address, phone number, delivery
              address, and payment information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, process your orders,
              communicate with you, and personalize your experience.
            </p>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We may share your information with restaurants to fulfill your orders, with delivery partners to deliver
              your food, and with service providers who perform services on our behalf. We may also disclose your
              information in response to legal requirements.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information.
            </p>

            <h2>5. Your Choices</h2>
            <p>
              You can access, update, or delete your account information at any time by logging into your account
              settings. You can also opt-out of marketing communications.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@foodhub.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

