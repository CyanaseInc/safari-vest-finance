
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-500 text-center">
          Have questions? We're here to help
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1"
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
}
