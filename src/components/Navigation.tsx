
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const linkClass = (path: string) => 
    `text-gray-700 hover:text-[#252859] px-3 py-2 transition-colors ${
      isActive(path) ? 'text-[#252859] font-semibold border-b-2 border-[rgb(247,169,45)]' : ''
    }`

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Cyanase" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/students" className={linkClass("/students")}>Students</Link>
            <Link to="/fund-managers" className={linkClass("/fund-managers")}>Sectors</Link>
            <Link to="/api" className={linkClass("/api")}>API</Link>
            <Link to="/social-app" className={linkClass("/social-app")}>Social App</Link>
            <Link to="/goal-based-investing" className={linkClass("/goal-based-investing")}>Goal-Based Investing</Link>
            <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
            <Link to="/contact">
              <Button variant="default" className="bg-[rgb(247,169,45)] hover:bg-[#252859] text-white">
                Contact Us
              </Button>
            </Link>
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
              <Link to="/students" className={linkClass("/students")}>Students</Link>
              <Link to="/fund-managers" className={linkClass("/fund-managers")}>Sectors</Link>
              <Link to="/api" className={linkClass("/api")}>API</Link>
              <Link to="/social-app" className={linkClass("/social-app")}>Social App</Link>
              <Link to="/goal-based-investing" className={linkClass("/goal-based-investing")}>Goal-Based Investing</Link>
              <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
              <Link to="/contact">
                <Button variant="default" className="w-full mt-4 bg-[rgb(247,169,45)] hover:bg-[#252859] text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
