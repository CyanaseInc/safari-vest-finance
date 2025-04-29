
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
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
      <Footer />
    </div>
  )
}

export default Blog
