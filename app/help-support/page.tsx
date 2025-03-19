import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpSupportPage() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse restaurants, select your items, add them to your cart, and proceed to checkout. You can pay online or choose cash on delivery.",
    },
    {
      question: "What if I have issues with my order?",
      answer:
        "If you have any issues with your order, please contact our customer support team immediately. You can use the 'Help' option in the app or website to report problems.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is confirmed, you can track it in real-time using the 'Track Order' feature in the app or website. You'll see updates on your order status and the location of your delivery partner.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "Our delivery hours depend on the operating hours of our restaurant partners. Most restaurants are available from 10 AM to 11 PM, but exact timings may vary.",
    },
    {
      question: "How do I cancel my order?",
      answer:
        "You can cancel your order through the app or website as long as the restaurant hasn't started preparing your food. Go to your active orders and select the 'Cancel Order' option if available.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Help & Support</h1>
          <p className="mb-8 text-lg text-gray-600">
            Find answers to common questions or get in touch with our support team.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold">Still need help?</h2>
            <p className="mb-4">Our customer support team is available 24/7 to assist you.</p>
            <button className="rounded bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Contact Support</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

