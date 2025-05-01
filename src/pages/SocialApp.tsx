
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle, Share2, Users2, Wallet, PiggyBank, BookOpen, TrendingUp } from "lucide-react"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const SocialApp = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  // Define primary and secondary colors
  const primaryColor = "#9b87f5";
  const secondaryColor = "#7E69AB";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section - removed gradient */}
        <div className={`bg-${primaryColor} text-white`} style={{ backgroundColor: primaryColor }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Community-Powered Finance</h1>
                <p className="text-xl mb-8 text-white">
                  Digitizing village savings groups for the mobile generation. Save, invest, 
                  and grow together through technology designed for African communities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-[#7E69AB] hover:bg-gray-100 hover:text-[#9b87f5] font-medium">
                    Download App <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                className="relative mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                  {/* Phone Frame */}
                  <div className="relative rounded-[2rem] overflow-hidden border-8 border-black shadow-2xl">
                    <img 
                      src="/social-app-screenshot.jpg" 
                      alt="Social Savings App" 
                      className="w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/300x600/9b87f5/ffffff?text=Cyanase+Social+App";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Features Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Social Savings App Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bringing the traditional village savings model to the digital era, with added security,
              transparency, and growth opportunities.
            </p>
          </div>
          
          {/* Feature 1: Group-Centric Design */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`bg-${primaryColor}/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max`} style={{ backgroundColor: `${primaryColor}20` }}>
                <div className={`bg-${primaryColor} text-white p-2 rounded-lg`} style={{ backgroundColor: primaryColor }}>
                  <Users2 size={24} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: secondaryColor }}>Group-Centric Design</h3>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Like WhatsApp for Finance</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Users create savings or investment groups (e.g., church groups, SACCOs, village groups)</p>
                </div>
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Each group has an admin who manages members, contributions, and financial goals</p>
                </div>
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Members can join a group via a shared link or invitation</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/group-management.jpg" 
                alt="Group Management" 
                className="rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=Group+Management";
                }}
              />
            </motion.div>
          </div>
          
          {/* Feature 2: In-App Communication */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/in-app-communication.jpg" 
                alt="In-App Communication" 
                className="rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=In-App+Communication";
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#9b87f5]/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max">
                <div className="bg-[#9b87f5] text-white p-2 rounded-lg">
                  <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#7E69AB]">In-App Communication</h3>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Finance Experience</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Members interact, set group goals, and discuss financial plans together</p>
                </div>
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>The app feels social — with conversations and peer motivation around saving and investing</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Feature 3: Mobile Money Integration */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#9b87f5]/10 p-4 rounded-lg flex items-center gap-4 mb-6 w-max">
                <div className="bg-[#9b87f5] text-white p-2 rounded-lg">
                  <Wallet size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#7E69AB]">Mobile Money Integration</h3>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Seamless African Transactions</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Members deposit money directly into the group using MTN, Airtel, or other mobile money platforms</p>
                </div>
                <div className="flex gap-3">
                  <Check className="text-green-500 mt-1 flex-shrink-0" />
                  <p>Transactions are seamless and familiar for users in Africa</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/mobile-money.jpg" 
                alt="Mobile Money Integration" 
                className="rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=Mobile+Money";
                }}
              />
            </motion.div>
          </div>
          
          {/* Additional Features in a Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {/* Feature 4: Group Wallet & Earnings */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-[#9b87f5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <PiggyBank className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Group Wallet & Earnings</h3>
              <p className="text-gray-600 mb-4">Deposited money is stored in a unit trust (a regulated investment fund), earning interest for the group.</p>
              <p className="text-gray-600">Admins can view group earnings, set targets (e.g., buy land, start a business), and track progress.</p>
            </motion.div>
            
            {/* Feature 5: Loans Inside Groups */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#9b87f5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Loans Inside Groups</h3>
              <p className="text-gray-600 mb-4">Members can apply for loans from the group savings.</p>
              <p className="text-gray-600">Loan approvals are based on group rules, and repayments are shared transparently.</p>
            </motion.div>
            
            {/* Feature 6: Gamified Financial Inclusion */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#9b87f5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Gamified Financial Inclusion</h3>
              <p className="text-gray-600 mb-4">Groups that save more or stay consistent are rewarded with re-grants or bonuses (e.g., save UGX 2M, get 500k more).</p>
              <p className="text-gray-600">This motivates saving behavior, especially in low-literacy environments.</p>
            </motion.div>
            
            {/* Feature 7: Education & Support */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-[#9b87f5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-[#9b87f5]" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Education & Support</h3>
              <p className="text-gray-600 mb-4">Through WhatsApp channels, influencers, and in-app tips, Cyanase educates users on financial literacy.</p>
              <p className="text-gray-600">Customer support is tailored for village-level understanding, ensuring no one is left out.</p>
            </motion.div>
          </div>
        </div>
        
        {/* CTA Section - removed gradient */}
        <div className="bg-[#9b87f5] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Saving Together?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of communities across Africa who are saving, investing,
              and growing their money together through the power of group finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#7E69AB] hover:bg-gray-100 font-medium">
                Download App <Share2 className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#7E69AB]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default SocialApp
