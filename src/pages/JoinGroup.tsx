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
          {/* Group Header Card */}
          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={groupData.image}
                  alt={groupData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-[#252859] mb-2">{groupData.name}</h1>
              <p className="text-lg text-gray-600">{groupData.slogan}</p>
            </CardContent>
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

          {/* Join Button */}
          <div className="text-center">
            <Button className="bg-[#F7A92D] hover:bg-[#F7A92D]/90 text-white px-8 py-3 text-lg">
              Join This Group
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinGroup;
