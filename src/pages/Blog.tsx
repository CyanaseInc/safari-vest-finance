
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquareText } from "lucide-react"
import { Link } from "react-router-dom"

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Our Journey in Democratizing Investment in Africa",
    description: "How we started Cyanase with a mission to make investing accessible to everyone in Africa.",
    image: "/placeholder.svg",
    date: "April 15, 2025",
    category: "Company"
  },
  {
    id: 2,
    title: "Understanding Investment Options in East Africa",
    description: "A breakdown of the different investment options available to individuals and businesses in East Africa.",
    image: "/placeholder.svg",
    date: "April 10, 2025",
    category: "Investment"
  },
  {
    id: 3,
    title: "The Future of FinTech in Africa",
    description: "How technology is reshaping financial services across the continent and creating new opportunities.",
    image: "/placeholder.svg",
    date: "April 5, 2025",
    category: "Technology"
  },
  {
    id: 4,
    title: "Student Investment Strategies",
    description: "How students can start building wealth with minimal capital and maximize returns over time.",
    image: "/placeholder.svg",
    date: "March 29, 2025",
    category: "Education"
  },
  {
    id: 5,
    title: "The Impact of Social Investing",
    description: "How community-based investment approaches are changing wealth creation in African communities.",
    image: "/placeholder.svg",
    date: "March 22, 2025",
    category: "Social Impact"
  },
  {
    id: 6,
    title: "API Integration: A Developer's Guide",
    description: "Technical insights on integrating investment services into your applications using our API.",
    image: "/placeholder.svg",
    date: "March 15, 2025",
    category: "Development"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#252859] mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and stories about investing in Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-[rgb(247,169,45)]">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl text-[#252859]">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {post.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-[#252859] hover:text-[rgb(247,169,45)]">
                    Read more <MessageSquareText className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-[#252859]">
              Want to learn more about our journey?
            </p>
            <p className="text-gray-600 mt-2 mb-8">
              Check out our detailed story on how we're transforming investing in Africa.
            </p>
            <Link to="/blog/our-journey">
              <Button className="bg-[#252859] hover:bg-[#252859]/90">
                Read Our Full Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Journey blog page content preserved */}
      <div className="hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#252859] mb-6">Our Journey</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Cyanase, we're on a mission to make investing accessible, affordable, and convenient for everyone in Africa. 
              Our journey began with a simple insight: traditional investment options were too complex, 
              expensive, and out of reach for the average person.
            </p>

            <h2 className="text-2xl font-semibold text-[#252859] my-4">The Beginning</h2>
            <p className="mb-6">
              Founded in 2021, Cyanase started as a small team with a big vision: to democratize access to wealth-building 
              opportunities across the African continent. We identified core barriers that kept everyday citizens from 
              investing: high minimum amounts, complex procedures, lack of education, and limited accessibility.
            </p>

            <h2 className="text-2xl font-semibold text-[#252859] my-4">Our Growth</h2>
            <p className="mb-6">
              From our humble beginnings, we've grown to serve over 4,000 users across 5 countries, processing more than 
              $4.3 million in transactions. Our platform has evolved from a simple investment app to a comprehensive 
              financial ecosystem offering multiple investment classes, integration capabilities, and purpose-driven 
              investment options.
            </p>

            <h2 className="text-2xl font-semibold text-[#252859] my-4">Media Recognition</h2>
            <p className="mb-6">
              Our innovative approach to investment democratization has caught the attention of major financial and technology 
              publications. We've been featured in TechCrunch, Forbes, Bloomberg, and Reuters, validating our mission and 
              expanding our reach to new communities across Africa.
            </p>

            <h2 className="text-2xl font-semibold text-[#252859] my-4">Looking Forward</h2>
            <p className="mb-6">
              As we continue to grow, our focus remains on innovation, accessibility, and financial inclusion. We're committed 
              to developing new features, expanding to more countries, and creating opportunities for wealth building that 
              were previously unavailable to millions of Africans.
            </p>

            <p className="text-lg font-medium text-[rgb(247,169,45)]">
              Join us on our mission to transform how Africa invests and builds wealth for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
