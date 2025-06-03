
import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, DollarSign, Calendar } from "lucide-react";

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
          {/* Group Header Card */}
          <Card className="mb-8 overflow-hidden">
            <div className="relative h-48 sm:h-64">
              <img
                src={groupData.image}
                alt={groupData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{groupData.name}</h1>
                  <p className="text-lg opacity-90">{groupData.slogan}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Group Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#252859]">{groupData.totalMembers}</div>
                <p className="text-xs text-muted-foreground">Active savers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#F7A92D]">
                  {formatCurrency(groupData.totalSaved)}
                </div>
                <p className="text-xs text-muted-foreground">Collective savings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Group Age</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#252859]">
                  {groupData.createdDate}
                </div>
                <p className="text-xs text-muted-foreground">Since creation</p>
              </CardContent>
            </Card>
          </div>

          {/* Group Description & Join Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-[#F7A92D]" />
                About This Group
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">What We Do</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our group focuses on building long-term wealth through disciplined saving and smart investing. 
                  We pool our resources to access better investment opportunities and support each other's 
                  financial goals. Whether you're saving for education, business, or retirement, we're here to help.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Group Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F7A92D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Higher returns through group investment strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F7A92D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Monthly financial literacy workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F7A92D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Emergency loan facility for members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#F7A92D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Supportive community of like-minded savers</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-[#252859]">Ready to Join?</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Start your wealth-building journey with us today. Minimum monthly contribution starts at UGX 50,000.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#F7A92D] hover:bg-[#F7A92D]/90 text-white px-8 py-2">
                      Join This Group
                    </Button>
                    <Button variant="outline" className="border-[#252859] text-[#252859] hover:bg-[#252859] hover:text-white">
                      Learn More
                    </Button>
                  </div>
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
