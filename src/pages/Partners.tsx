import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CheckCircle, Users, Building, Heart, Globe, GraduationCap, Handshake } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      icon: <Users className="h-12 w-12 text-cyanase-secondary" />,
      title: "SACCOs & Investment Clubs",
      description: "We help you go digital, manage contributions, group loans, and access investment products."
    },
    {
      icon: <Building className="h-12 w-12 text-cyanase-secondary" />,
      title: "Fintech Companies & Wallets",
      description: "Integrate Cyanase via our APIs to offer investing and group finance tools to your users."
    },
    {
      icon: <Heart className="h-12 w-12 text-cyanase-secondary" />,
      title: "Development NGOs & Microfinance Projects",
      description: "Use Cyanase to digitize VSLA operations, promote saving goals, and grow rural economies."
    },
    {
      icon: <Globe className="h-12 w-12 text-cyanase-secondary" />,
      title: "Banks & Investment Firms",
      description: "Partner with us to create custom investment products for groups and drive deposits."
    },
    {
      icon: <Handshake className="h-12 w-12 text-cyanase-secondary" />,
      title: "Local Governments & Cooperatives",
      description: "We support government-led financial inclusion by enabling community groups to grow wealth."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-cyanase-secondary" />,
      title: "Educational & Women's Empowerment Organizations",
      description: "Use Cyanase to teach financial literacy and offer real tools for saving, investing, and lending."
    }
  ];

  const benefits = [
    "Trusted by 4,000+ users and growing",
    "Over $4.3M in transactions",
    "Built for Africa – mobile-first, low-data, mobile money integrated",
    "Transparent reporting and secure group management",
    "Supports SACCOs, VSLAs, and community goals"
  ];

  const partnerTypes = [
    {
      type: "Banking & Payments",
      organizations: ["Stanbic Bank Uganda", "MTN Mobile Money", "Flutterwave", "Airtel Money"]
    },
    {
      type: "Fintech & Core Banking",
      organizations: ["FutureLink Technologies", "Ensibuuko"]
    },
    {
      type: "NGOs / Dev Projects",
      organizations: ["Five Talents", "Tech Herfrica", "Inkomoko", "MicroLoan Foundation", "One Acre Fund"]
    },
    {
      type: "Regional Cooperatives",
      organizations: ["ACCOSCA", "Uganda Cooperative Savings and Credit Union", "SACCO associations"]
    },
    {
      type: "Microfinance Platforms",
      organizations: ["VisionFund", "BRAC Microfinance", "Grameen Foundation"]
    },
    {
      type: "Gov't & Local Authorities",
      organizations: ["Ministry of Finance Uganda", "SACCO oversight programs", "Women Empowerment Funds"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Let's Build Africa's Financial Future Together
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-600">
                Partner with Cyanase to digitize savings groups, enable investing, and accelerate financial inclusion across Africa.
              </p>
              <Button size="lg" className="bg-cyanase-primary text-white hover:bg-cyanase-primary/90 hover-scale">
                Become a Partner
              </Button>
            </div>
            
            {/* Partnership Animation */}
            <div className="relative flex justify-center items-center animate-scale-in">
              <div className="relative w-80 h-80">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Handshake className="h-10 w-10 text-cyanase-primary" />
                </div>
                
                {/* Orbiting Partner Icons */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md animate-[spin_20s_linear_infinite]">
                  <Building className="h-8 w-8 text-cyanase-secondary" />
                </div>
                
                <div className="absolute top-1/4 right-0 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md animate-[spin_25s_linear_infinite_reverse]">
                  <Users className="h-8 w-8 text-cyanase-secondary" />
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md animate-[spin_20s_linear_infinite]">
                  <Heart className="h-8 w-8 text-cyanase-secondary" />
                </div>
                
                <div className="absolute top-1/4 left-0 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md animate-[spin_25s_linear_infinite_reverse]">
                  <Globe className="h-8 w-8 text-cyanase-secondary" />
                </div>
                
                <div className="absolute top-1/2 right-4 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md animate-[spin_30s_linear_infinite]">
                  <GraduationCap className="h-7 w-7 text-cyanase-secondary" />
                </div>
                
                <div className="absolute top-1/2 left-4 w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md animate-[spin_30s_linear_infinite_reverse]">
                  <CheckCircle className="h-7 w-7 text-cyanase-secondary" />
                </div>
                
                {/* Connection Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full opacity-30" viewBox="0 0 320 320">
                    <circle cx="160" cy="160" r="120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_40s_linear_infinite]" />
                    <circle cx="160" cy="160" r="80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,3" className="animate-[spin_30s_linear_infinite_reverse]" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Partner With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with diverse organizations to expand financial access across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Cyanase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Cyanase?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-cyanase-secondary flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current/Ideal Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Organizations We Work With
            </h2>
            <p className="text-xl text-gray-600">
              Building partnerships across the African financial ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((partnerType, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-cyanase-primary">
                    {partnerType.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {partnerType.organizations.map((org, orgIndex) => (
                      <li key={orgIndex} className="text-gray-600">
                        • {org}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a fintech, SACCO, NGO, or investor, we'd love to work with you. 
              Fill the form or contact us directly at{' '}
              <a href="mailto:support@cyanase.com" className="text-cyanase-primary hover:underline">
                support@cyanase.com
              </a>
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Partnership Inquiry</CardTitle>
              <CardDescription>
                Tell us about your organization and how we can work together
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Your organization name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@organization.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="partnership-type">Type of Partnership</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select partnership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fintech">Fintech Integration</SelectItem>
                    <SelectItem value="sacco">SACCO/Cooperative</SelectItem>
                    <SelectItem value="ngo">NGO/Development</SelectItem>
                    <SelectItem value="bank">Banking/Investment</SelectItem>
                    <SelectItem value="government">Government/Public Sector</SelectItem>
                    <SelectItem value="education">Education/Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your organization and how you'd like to partner with Cyanase"
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-cyanase-primary hover:bg-cyanase-primary/90">
                Submit Partnership Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;