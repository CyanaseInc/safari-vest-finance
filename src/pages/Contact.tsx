
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { MapPin, Mail, Phone } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#252859] mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about investing? Our team is here to help you navigate your financial journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#252859]/10 rounded-full mb-4">
                <MapPin className="h-7 w-7 text-[#252859]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600 text-center">Kampala, Uganda</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#252859]/10 rounded-full mb-4">
                <Mail className="h-7 w-7 text-[#252859]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-center">info@cyanase.com</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#252859]/10 rounded-full mb-4">
                <Phone className="h-7 w-7 text-[#252859]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-center">+256 123 456 789</p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
