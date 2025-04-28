
import { Link } from "react-router-dom"
import { ArrowRight, Briefcase, FileBarChart, PieChart, Users } from "lucide-react"
import { useEffect, useRef } from "react"

export const ProductOffering = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      icon: <PieChart className="h-12 w-12 text-[rgb(247,169,45)]" />,
      title: "Investment Classes",
      description: [
        "Explore stocks, bonds, and mutual funds tailored to your goals.",
        "Choose from conservative to aggressive strategies.",
        "Build a balanced portfolio for growth and stability."
      ],
      link: "/investment-classes"
    },
    {
      icon: <FileBarChart className="h-12 w-12 text-[rgb(247,169,45)]" />,
      title: "API Integration",
      description: [
        "Seamlessly embed investment features in your platform.",
        "Access secure, scalable endpoints with real-time data.",
        "Simplify compliance and portfolio management."
      ],
      link: "/api"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[rgb(247,169,45)]" />,
      title: "Goal-Based Investing",
      description: [
        "Invest for specific goals like a home or retirement.",
        "Get personalized plans based on your risk level.",
        "Track progress and adjust contributions easily."
      ],
      link: "/goal-based-investing"
    },
    {
      icon: <Users className="h-12 w-12 text-[rgb(247,169,45)]" />,
      title: "Fund Managers",
      description: [
        "Partner with licensed, experienced fund managers.",
        "Enjoy diversified portfolios tailored to your goals.",
        "Benefit from active monitoring to maximize returns."
      ],
      link: "/fund-managers"
    }
  ]

  return (
    <div className="bg-gray-50 py-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#252859] mb-4 animate-on-scroll opacity-0">Our Product Offering</h2>
          <p className="text-xl text-gray-600 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            Discover smart, seamless investing with Cyanase—tailored solutions to grow your wealth effortlessly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-on-scroll opacity-0"
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-[#252859] mb-4">{product.title}</h3>
              <ul className="space-y-2 mb-6">
                {product.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[rgb(247,169,45)] mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={product.link}
                className="text-[rgb(247,169,45)] hover:text-[#252859] font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
