
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const Features = () => {
  return (
    <div className="py-16 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the solution that best fits your needs
          </p>
        </div>

        <Tabs defaultValue="products" className="mt-12">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <TabsTrigger value="products">Investment Products</TabsTrigger>
            <TabsTrigger value="partners">Fund Managers</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="app">Social App</TabsTrigger>
            <TabsTrigger value="investing">Goal-Based</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Investment Products</CardTitle>
                <CardDescription>Diverse portfolio offerings to grow your wealth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Explore a variety of investment products including equities, fixed income, real estate, commodities, mutual funds, ETFs, and alternative investments tailored to your financial goals.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partners" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Fund Manager Partnerships</CardTitle>
                <CardDescription>Professional investment management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Partner with licensed fund managers who handle investments while we focus on providing the best technology platform for your success.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>Seamless financial integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Integrate investment services into your platform without dealing with complex regulations. Our API makes it easy to offer investment products to your users.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="app" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Social Savings App</CardTitle>
                <CardDescription>Community-driven savings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connect with your savings group through our mobile app. Set goals, track progress, and communicate with group members all in one place.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investing" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Goal-Based Investing</CardTitle>
                <CardDescription>Achieve your financial goals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Set personal or group financial goals and track your progress. Our platform helps you stay focused and motivated to reach your investment targets.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
