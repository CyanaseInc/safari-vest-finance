
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/investment/ProductCard";
import { ReturnCard } from "@/components/investment/ReturnCard";
import { HeroSection } from "@/components/investment/HeroSection";
import { 
  TrendingUp, 
  BarChart3, 
  Building, 
  Briefcase, 
  PiggyBank,
  Diamond
} from "lucide-react";

const InvestmentProducts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section with animation */}
        <HeroSection />
        
        {/* Investment returns overview */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ReturnCard 
                percentage="+5%" 
                title="Treasury Bills" 
                description="Low-risk investment with guaranteed returns."
                delay={0.1}
              />
              <ReturnCard 
                percentage="+5%" 
                title="Real Estate" 
                description="Invest in properties and grow your wealth."
                delay={0.2}
              />
              <ReturnCard 
                percentage="+12%" 
                title="Stocks" 
                description="High-risk, high-reward market investments."
                delay={0.3}
              />
              <ReturnCard 
                percentage="+20%" 
                title="Local and Global products" 
                description="We partner with fund managers around the globe for easy access."
                delay={0.4}
              />
            </div>
          </div>
        </div>
        
        {/* Detailed product offerings */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-cyanase-primary mb-4">Investment Products</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our diverse range of investment options designed to help you achieve your financial goals.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="text-cyanase-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Equities</h3>
                  <p className="text-gray-600 mb-6">
                    Invest in company stocks to achieve long-term growth. Equities represent ownership in a company, allowing you to benefit from its growth and profits.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <PiggyBank className="text-cyanase-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Fixed Income</h3>
                  <p className="text-gray-600 mb-6">
                    Enjoy stable and predictable returns by investing in fixed-income instruments like Treasury Bills and Bonds, which provide consistent income and lower risk.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
              </div>
              
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Building className="text-cyanase-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Real Estate</h3>
                  <p className="text-gray-600 mb-6">
                    Diversify your portfolio with real estate investments, offering opportunities for consistent rental income and long-term value appreciation.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Diamond className="text-cyanase-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Commodities</h3>
                  <p className="text-gray-600 mb-6">
                    Invest in physical goods like gold, oil, and agricultural products to hedge against inflation and diversify your investment portfolio.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
              </div>
              
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="text-cyanase-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Mutual Funds</h3>
                  <p className="text-gray-600 mb-6">
                    Pool your money with other investors to access a professionally managed portfolio of stocks, bonds, and other assets, including Unit Trusts for diversified investments.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full"
                >
                  <div className="bg-cyanase-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="text-cyanase-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyanase-primary">Exchange-Traded Funds (ETFs)</h3>
                  <p className="text-gray-600 mb-6">
                    Trade diversified portfolios of assets like stocks and bonds on the stock exchange, combining the benefits of mutual funds and individual stock investments.
                  </p>
                  <button className="text-cyanase-secondary font-medium hover:underline flex items-center">
                    Invest now <span className="ml-1">→</span>
                  </button>
                </motion.div>
              </div>

              {/* Alternative Investments - Full width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-cyanase-primary to-cyanase-primary-dark p-6 rounded-xl shadow-md text-white"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center">
                      <Diamond className="text-cyanase-secondary h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alternative Investments</h3>
                    <p className="mb-4 text-white/90 max-w-3xl">
                      Explore opportunities like private equity, hedge funds, and venture capital to achieve high returns, often with a higher risk-reward profile.
                    </p>
                    <a href = 'https://invest.cynase.com'>
                    <button className="text-cyanase-secondary bg-white px-4 py-2 rounded-md font-medium hover:bg-cyanase-secondary hover:text-white transition-colors">
                      Invest now 
                    </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      
        <Footer />
      </div>
    </div>
  );
};

export default InvestmentProducts;
