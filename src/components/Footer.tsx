
import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-[#252859] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cyanase</h3>
            <p className="text-gray-300">
              Empowering African communities with modern financial tools.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/students" className="text-gray-300 hover:text-[rgb(247,169,45)]">
                  Students
                </Link>
              </li>
              <li>
                <Link to="/fund-managers" className="text-gray-300 hover:text-[rgb(247,169,45)]">
                  Fund Managers
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-300 hover:text-[rgb(247,169,45)]">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/social-app" className="text-gray-300 hover:text-[rgb(247,169,45)]">
                  Social App
                </Link>
              </li>
              <li>
                <Link to="/goal-based-investing" className="text-gray-300 hover:text-[rgb(247,169,45)]">
                  Goal-Based Investing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[rgb(247,169,45)]" />
                <span className="text-gray-300">Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[rgb(247,169,45)]" />
                <span className="text-gray-300">+256 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[rgb(247,169,45)]" />
                <span className="text-gray-300">info@cyanase.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Cyanase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
