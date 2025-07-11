
import { Link } from "react-router-dom"
import { Briefcase, LineChart, Shield } from "lucide-react"
import { useEffect } from "react"

export const InvestmentClasses = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
    });
    
    const elements = document.querySelectorAll('.investment-class-item');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#252859] mb-12">Investment Classes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 investment-class-item" style={{transitionDelay: '0ms'}}>
            <Shield className="h-12 w-12 text-[rgb(247,169,45)] mb-4" />
            <h3 className="text-xl font-semibold text-[#252859] mb-3">Conservative</h3>
            <p className="text-gray-600 mb-4">Low-risk investments focused on capital preservation and steady returns.</p>
            <Link to="/investment-classes" className="text-[rgb(247,169,45)] hover:text-[#252859] font-medium">
              Learn More →
            </Link>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 investment-class-item" style={{transitionDelay: '200ms'}}>
            <Briefcase className="h-12 w-12 text-[rgb(247,169,45)] mb-4" />
            <h3 className="text-xl font-semibold text-[#252859] mb-3">Balanced</h3>
            <p className="text-gray-600 mb-4">Mix of stocks and bonds for moderate growth with reduced volatility.</p>
            <Link to="/investment-classes" className="text-[rgb(247,169,45)] hover:text-[#252859] font-medium">
              Learn More →
            </Link>
          </div>
          
          <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 investment-class-item" style={{transitionDelay: '400ms'}}>
            <LineChart className="h-12 w-12 text-[rgb(247,169,45)] mb-4" />
            <h3 className="text-xl font-semibold text-[#252859] mb-3">Aggressive</h3>
            <p className="text-gray-600 mb-4">High-growth potential investments for long-term wealth building.</p>
            <Link to="/investment-classes" className="text-[rgb(247,169,45)] hover:text-[#252859] font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
