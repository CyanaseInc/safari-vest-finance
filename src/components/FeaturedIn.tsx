
export const FeaturedIn = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-600 mb-8">Featured In</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img src="/techcrunch.svg" alt="TechCrunch" className="h-8 grayscale hover:grayscale-0 transition-all" />
          <img src="/forbes.svg" alt="Forbes" className="h-8 grayscale hover:grayscale-0 transition-all" />
          <img src="/bloomberg.svg" alt="Bloomberg" className="h-8 grayscale hover:grayscale-0 transition-all" />
          <img src="/reuters.svg" alt="Reuters" className="h-8 grayscale hover:grayscale-0 transition-all" />
        </div>
      </div>
    </div>
  )
}
