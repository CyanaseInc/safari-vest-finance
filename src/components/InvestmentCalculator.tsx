
import { useState } from "react"
import { Calculator } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export const InvestmentCalculator = () => {
  const [initialAmount, setInitialAmount] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(100)
  const [years, setYears] = useState(5)
  const [rate, setRate] = useState(8)
  const [result, setResult] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [currency, setCurrency] = useState("USD")

  const currencies = [
    { symbol: "$", code: "USD", name: "US Dollar" },
    { symbol: "€", code: "EUR", name: "Euro" },
    { symbol: "£", code: "GBP", name: "British Pound" },
    { symbol: "UGX", code: "UGX", name: "Ugandan Shilling" },
    { symbol: "KES", code: "KES", name: "Kenyan Shilling" },
  ]

  const getCurrencySymbol = () => {
    const curr = currencies.find(c => c.code === currency)
    return curr?.symbol || currency
  }

  const calculateInvestment = () => {
    const monthlyRate = rate / 12 / 100
    const months = years * 12
    
    let futureValue = initialAmount
    
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + monthlyContribution) * (1 + monthlyRate)
    }
    
    setResult(Math.round(futureValue))
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Calculator className="h-12 w-12 text-[rgb(247,169,45)] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#252859] mb-4">Investment Calculator</h2>
            <p className="text-gray-600 mb-6">
              Plan your financial future by calculating potential investment returns.
            </p>
            
            <Button 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "bg-[rgb(247,169,45)] hover:bg-[#252859] text-white transition-all duration-300 transform",
                isOpen ? "scale-95" : "hover:scale-105"
              )}
            >
              {isOpen ? "Hide Calculator" : "Show Calculator"}
              <Calculator className={cn(
                "ml-2 h-4 w-4 transition-transform duration-500",
                isOpen ? "rotate-180" : "animate-pulse"
              )} />
            </Button>
          </div>

          {isOpen && (
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm animate-fade-in">
              <div className="grid gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.symbol})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Investment ({getCurrencySymbol()})
                  </label>
                  <input
                    type="number"
                    value={initialAmount}
                    onChange={(e) => setInitialAmount(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Contribution ({getCurrencySymbol()})
                  </label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Period (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateInvestment}
                className="w-full bg-[rgb(247,169,45)] hover:bg-[#252859] text-white"
              >
                Calculate Returns
              </Button>

              {result > 0 && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Estimated Future Value:</p>
                  <p className="text-3xl font-bold text-[#252859]">
                    {getCurrencySymbol()}{result.toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
