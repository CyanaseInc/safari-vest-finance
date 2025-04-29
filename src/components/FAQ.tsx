
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export const FAQ = () => {
  const faqs = [
    {
      question: "How do I start investing with Cyanase?",
      answer: "Starting with Cyanase is easy. Simply create an account, complete your profile, deposit funds, and choose your investment options. Our platform will guide you through each step."
    },
    {
      question: "What are the minimum investment amounts?",
      answer: "Our minimum investment starts at just $10, making investing accessible to everyone regardless of their financial situation."
    },
    {
      question: "How secure is my investment?",
      answer: "At Cyanase, security is our priority. We employ bank-level encryption and security measures. Additionally, our investment options are carefully vetted to minimize risks."
    },
    {
      question: "What returns can I expect?",
      answer: "Returns vary depending on your chosen investment strategy. Our fixed-income options typically yield 8-15% per annum, while equity investments may offer higher potential returns with corresponding risk."
    },
    {
      question: "Can I withdraw my investment at any time?",
      answer: "Yes, most of our investment options allow for flexible withdrawals. Some investment types may have specific lock-in periods which are clearly indicated before you invest."
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#252859]/10 mb-4">
            <HelpCircle className="h-7 w-7 text-[#252859]" />
          </div>
          <h2 className="text-3xl font-bold text-[#252859]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about investing with Cyanase
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="divide-y border-t border-b animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="py-2">
                <AccordionTrigger className="text-left font-medium text-lg text-[#252859]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
