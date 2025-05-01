
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  MessageCircle, 
  Share2, 
  Users2, 
  Wallet, 
  PiggyBank, 
  BookOpen, 
  TrendingUp, 
  ChevronRight 
} from "lucide-react"
import { Footer } from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const SocialApp = () => {
  // Define animation variants
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
        {/* Hero Section - Clean and Minimal */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <Badge 
                  className="px-3 py-1 text-xs font-semibold tracking-wider" 
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  COMMUNITY FINANCE
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Community-Powered Finance</h1>
                <p className="text-xl mb-8 text-gray-600">
                  Digitizing village savings groups for the mobile generation. Save, invest, 
                  and grow together through technology designed for African communities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full" style={{ backgroundColor: primaryColor, color: "white" }}>
                    Download App <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="rounded-full border-2">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
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
                  {/* Phone Frame with Shadow and Refined Border */}
                  <div className="relative rounded-[2rem] overflow-hidden border-8 border-black shadow-[0_0_40px_rgba(155,135,245,0.2)]">
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
                  {/* Add decorative elements */}
                  <div className="absolute -z-10 w-64 h-64 bg-[#9b87f5]/10 rounded-full -bottom-10 -right-10"></div>
                  <div className="absolute -z-10 w-32 h-32 bg-[#7E69AB]/10 rounded-full -top-5 -left-5"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section - Clean with Card Design */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge 
                className="px-3 py-1 text-xs font-semibold tracking-wider mb-4" 
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                HOW IT WORKS
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Savings App Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bringing the traditional village savings model to the digital era, with added security,
                transparency, and growth opportunities.
              </p>
            </div>
            
            {/* Feature 1: Group-Centric Design with Card */}
            <motion.div 
              className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${primaryColor}20` }}>
                      <Users2 size={24} style={{ color: primaryColor }} />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: secondaryColor }}>Group-Centric Design</h3>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Like WhatsApp for Finance</h3>
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
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src="/group-management.jpg" 
                    alt="Group Management" 
                    className="rounded-lg shadow-md max-h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=Group+Management";
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Feature 2: In-App Communication with Card */}
            <motion.div 
              className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gray-100 flex items-center justify-center p-8 order-2 md:order-1">
                  <img 
                    src="/in-app-communication.jpg" 
                    alt="In-App Communication" 
                    className="rounded-lg shadow-md max-h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=In-App+Communication";
                    }}
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${primaryColor}20` }}>
                      <MessageCircle size={24} style={{ color: primaryColor }} />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: secondaryColor }}>In-App Communication</h3>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Social Finance Experience</h3>
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
                </div>
              </div>
            </motion.div>
            
            {/* Feature 3: Mobile Money Integration with Card */}
            <motion.div 
              className="mb-24 bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${primaryColor}20` }}>
                      <Wallet size={24} style={{ color: primaryColor }} />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ color: secondaryColor }}>Mobile Money Integration</h3>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Seamless African Transactions</h3>
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
                </div>
                <div className="bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src="/mobile-money.jpg" 
                    alt="Mobile Money Integration" 
                    className="rounded-lg shadow-md max-h-80 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/600x400/9b87f5/ffffff?text=Mobile+Money";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Additional Features in Cards Grid */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge 
                className="px-3 py-1 text-xs font-semibold tracking-wider mb-4" 
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                FEATURES
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform offers comprehensive tools for community financial growth and inclusion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature Card 1 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${primaryColor}20` }}>
                  <PiggyBank style={{ color: primaryColor }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Group Wallet & Earnings</h3>
                <p className="text-gray-600 mb-4">Deposited money is stored in a unit trust (a regulated investment fund), earning interest for the group.</p>
                <p className="text-gray-600">Admins can view group earnings, set targets (e.g., buy land, start a business), and track progress.</p>
              </motion.div>
              
              {/* Feature Card 2 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${primaryColor}20` }}>
                  <TrendingUp style={{ color: primaryColor }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Loans Inside Groups</h3>
                <p className="text-gray-600 mb-4">Members can apply for loans from the group savings.</p>
                <p className="text-gray-600">Loan approvals are based on group rules, and repayments are shared transparently.</p>
              </motion.div>
              
              {/* Feature Card 3 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${primaryColor}20` }}>
                  <Users2 style={{ color: primaryColor }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Gamified Financial Inclusion</h3>
                <p className="text-gray-600 mb-4">Groups that save more or stay consistent are rewarded with re-grants or bonuses (e.g., save UGX 2M, get 500k more).</p>
                <p className="text-gray-600">This motivates saving behavior, especially in low-literacy environments.</p>
              </motion.div>
              
              {/* Feature Card 4 */}
              <motion.div 
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${primaryColor}20` }}>
                  <BookOpen style={{ color: primaryColor }} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Education & Support</h3>
                <p className="text-gray-600 mb-4">Through WhatsApp channels, influencers, and in-app tips, Cyanase educates users on financial literacy.</p>
                <p className="text-gray-600">Customer support is tailored for village-level understanding, ensuring no one is left out.</p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* CTA Section with Clean Design */}
        <div className="py-20" style={{ backgroundColor: primaryColor }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="px-3 py-1 text-xs font-semibold tracking-wider mb-6 bg-white text-[#7E69AB]">
                GET STARTED
              </Badge>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Saving Together?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of communities across Africa who are saving, investing,
                and growing their money together through the power of group finance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#7E69AB] hover:bg-gray-100 font-medium rounded-full">
                  Download App <Share2 className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full border-2">
                  Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default SocialApp
