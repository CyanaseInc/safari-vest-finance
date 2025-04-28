export const Stats = () => {
  return (
    <div className="bg-[#252859]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by Communities Across Africa
          </h2>
          <p className="mt-3 text-xl text-purple-200 sm:mt-4">
            Transforming traditional saving groups into digital powerhouses
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Users
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              4,000+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Transactions
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              $4.3M+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
              Countries
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              5+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
