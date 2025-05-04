import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const featuredLogos = [
  {
    name: "TechCrunch",
    src: "/partner6.png",
    alt: "google Logo",
  },
  {
    name: "Forbes",
    src: "/partner3.png",
    alt: "africa tech",
  },
  {
    name: "Bloomberg",
    src: "/partner2.png",
    alt: "hipipo logo",
  },
  {
    name: "Reuters",
    src: "/partner4.png",
    alt: "ayoba",
  },
  {
    name: "Reuters",
    src: "/partner.png",
    alt: "ayoba",
  },
  {
    name: "Reuters",
    src: "/partner7.png",
    alt: "international trade center",
  },
  {
    name: "Reuters",
    src: "/partner5.svg",
    alt: "oac",
  },
  {
    name: "miic",
    src: "/partner8.png",
    alt: "makerere university incubation center",
  },
]

export const FeaturedIn = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-center text-2xl font-semibold text-[#252859] mb-4">Featured In</h2>
          <p className="text-lg text-[20px] mb-4 font-bold text-[#71717A99]">
            We're on a mission to make investing cheap and accessible.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-[rgb(247,169,45)] hover:text-[#252859] font-medium transition-colors"
          >
            ___Read more about our journey <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {featuredLogos.map((logo, index) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="h-8 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.2}s both`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
