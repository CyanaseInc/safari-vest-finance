
import { useState, useEffect } from "react"

export const Stats = () => {
  const [users, setUsers] = useState(0)
  const [transactions, setTransactions] = useState(0)
  const [countries, setCountries] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const durationMs = 2000
      const steps = 50
      const userStep = 4000 / steps
      const transactionStep = 4.3 / steps
      const countriesStep = 5 / steps
      const interval = durationMs / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        
        setUsers(Math.min(Math.ceil(currentStep * userStep), 4000))
        setTransactions(Math.min(parseFloat((currentStep * transactionStep).toFixed(1)), 4.3))
        setCountries(Math.min(Math.ceil(currentStep * countriesStep), 5))
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <div id="stats-section" className="bg-[#252859] transform transition-all duration-1000">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by Communities Across Africa
          </h2>
          <p className="mt-3 text-xl text-gray-200 sm:mt-4">
            Transforming traditional saving groups into digital powerhouses
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col transition-all transform hover:scale-105 duration-300">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Users
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              {isVisible ? users.toLocaleString()+ "+" : "0+"}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 transition-all transform hover:scale-105 duration-300">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Transactions
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              ${isVisible ? transactions.toLocaleString() + "M+" : "0M+"}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0 transition-all transform hover:scale-105 duration-300">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
              Countries
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              {isVisible ? countries.toLocaleString() + "+" : "0+"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
