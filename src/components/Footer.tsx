
import { Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-cyanase-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                <Link to="/students" className="text-gray-300 hover:text-cyanase-secondary">
                  Students
                </Link>
              </li>
              <li>
                <Link to="/fund-managers" className="text-gray-300 hover:text-cyanase-secondary">
                  Fund Managers
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-300 hover:text-cyanase-secondary">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/social-app" className="text-gray-300 hover:text-cyanase-secondary">
                  Table investing
                </Link>
              </li>
              <li>
                <Link to="/goal-based-investing" className="text-gray-300 hover:text-cyanase-secondary">
                  Goal-Based Investing
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-cyanase-secondary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-cyanase-secondary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-cyanase-secondary">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-cyanase-secondary" />
                <span className="text-gray-300">Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-cyanase-secondary" />
                <span className="text-gray-300">+256 705 640 852</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-cyanase-secondary" />
                <span className="text-gray-300">support@cyanase.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center mb-4">
            <p className="text-xs md:text-sm text-gray-400 bg-cyanase-primary/50 p-3 rounded-md inline-block">
              Cyanase is a financial technology company, not a bank or an investment company. Investment services are provided by our partners, the licensed &amp; regulated fund managers.
            </p>
          </div>
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Cyanase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
