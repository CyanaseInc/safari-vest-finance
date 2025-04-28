
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const WhatWeDo = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#252859] mb-6">What we do</h2>
            <p className="text-gray-600 text-lg mb-8">
              At Cyanase, we simplify access to global investment opportunities by aggregating diverse asset classes from different fund managers into one platform. With our mobile app, individuals can easily download and start investing, while fintechs can integrate our API to offer investment services in their apps without the hassle of managing regulations and compliance.
            </p>
            <Button className="bg-[rgb(247,169,45)] hover:bg-[#252859] text-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 lg:mt-0">
            <img src="/investment-platform.svg" alt="Investment Platform" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
