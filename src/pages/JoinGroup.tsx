
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Calendar } from "lucide-react";

const JoinGroup = () => {
  // Mock group data - in a real app this would come from URL params or API
  const groupData = {
    name: "Future Builders Investment Group",
    slogan: "Building wealth together, one step at a time",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    totalMembers: 247,
    totalSaved: 85420,
    currency: "UGX",
    createdDate: "March 2024"
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Header Section with Image and Basic Info */}
              <div className="relative bg-gradient-to-r from-[#252859] to-[#353A80] text-white p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Group Image */}
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
                    <img
                      src={groupData.image}
                      alt={groupData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Group Info */}
                  <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">{groupData.name}</h1>
                    <p className="text-xl text-white/90 mb-6">{groupData.slogan}</p>
                    
                    {/* Join Button - Primary */}
                    <Button 
                      size="lg"
                      className="bg-[#F7A92D] hover:bg-[#F7A92D]/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Join This Group
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Total Members */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 transition-transform duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-[#252859] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-[#252859] mb-2">{groupData.totalMembers}</div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Total Members</div>
                      <p className="text-xs text-gray-500">Active savers</p>
                    </div>
                  </div>

                  {/* Total Saved */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 transition-transform duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-[#F7A92D] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <DollarSign className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-[#F7A92D] mb-2">
                        {formatCurrency(groupData.totalSaved)}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Total Saved</div>
                      <p className="text-xs text-gray-500">Collective savings</p>
                    </div>
                  </div>

                  {/* Group Age */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 transition-transform duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {groupData.createdDate}
                      </div>
                      <div className="text-sm font-medium text-gray-600 mb-1">Group Age</div>
                      <p className="text-xs text-gray-500">Since creation</p>
                    </div>
                  </div>
                </div>

                {/* Secondary Join Button */}
                <div className="text-center mt-8">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#252859] text-[#252859] hover:bg-[#252859] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                  >
                    Learn More & Join
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinGroup;
