
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Combined Card */}
          <Card className="p-8">
            <CardContent className="text-center space-y-8">
              {/* Group Header */}
              <div>
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={groupData.image}
                    alt={groupData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-[#252859] mb-2">{groupData.name}</h1>
                <p className="text-lg text-gray-600">{groupData.slogan}</p>
              </div>

              {/* Group Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-[#252859] mr-2" />
                    <span className="text-sm font-medium text-gray-600">Total Members</span>
                  </div>
                  <div className="text-3xl font-bold text-[#252859]">{groupData.totalMembers}</div>
                  <p className="text-xs text-gray-500">Active savers</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-[#F7A92D] mr-2" />
                    <span className="text-sm font-medium text-gray-600">Total Saved</span>
                  </div>
                  <div className="text-3xl font-bold text-[#F7A92D]">
                    {formatCurrency(groupData.totalSaved)}
                  </div>
                  <p className="text-xs text-gray-500">Collective savings</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-[#252859] mr-2" />
                    <span className="text-sm font-medium text-gray-600">Group Age</span>
                  </div>
                  <div className="text-3xl font-bold text-[#252859]">
                    {groupData.createdDate}
                  </div>
                  <p className="text-xs text-gray-500">Since creation</p>
                </div>
              </div>

              {/* Join Button */}
              <div>
                <Button className="bg-[#F7A92D] hover:bg-[#F7A92D]/90 text-white px-8 py-3 text-lg">
                  Join This Group
                </Button>
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
