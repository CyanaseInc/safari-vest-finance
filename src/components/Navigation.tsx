
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu } from "lucide-react"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-purple-700">Cyanase</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#students" className="text-gray-700 hover:text-purple-700 px-3 py-2 transition-colors">Students</a>
            <a href="#partners" className="text-gray-700 hover:text-purple-700 px-3 py-2 transition-colors">Fund Managers</a>
            <a href="#api" className="text-gray-700 hover:text-purple-700 px-3 py-2 transition-colors">API</a>
            <a href="#app" className="text-gray-700 hover:text-purple-700 px-3 py-2 transition-colors">Social App</a>
            <a href="#investing" className="text-gray-700 hover:text-purple-700 px-3 py-2 transition-colors">Goal-Based Investing</a>
            <Button variant="default" className="bg-purple-700 hover:bg-purple-800">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#students" className="block text-gray-700 hover:text-purple-700 px-3 py-2">Students</a>
              <a href="#partners" className="block text-gray-700 hover:text-purple-700 px-3 py-2">Fund Managers</a>
              <a href="#api" className="block text-gray-700 hover:text-purple-700 px-3 py-2">API</a>
              <a href="#app" className="block text-gray-700 hover:text-purple-700 px-3 py-2">Social App</a>
              <a href="#investing" className="block text-gray-700 hover:text-purple-700 px-3 py-2">Goal-Based Investing</a>
              <Button variant="default" className="w-full mt-4 bg-purple-700 hover:bg-purple-800">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
