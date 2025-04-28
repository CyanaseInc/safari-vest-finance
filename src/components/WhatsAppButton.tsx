
import { MessageCircle } from "lucide-react"

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
