const tiers = [
  {
    name: '3 Month',
    id: '3 Month',
    href: '/3month',
    priceMonthly: '₹29',
    description: "3 months of unlimited access to all of our classes and coaches.",
  },
  {
    name: '6 Month',
    id: '6 Month',
    href: '/6month',
    priceMonthly: '₹49',
    description: '6 months of unlimited access to all of our classes and coaches.',
  },
  {
    name: '1 Year',
    id: '1 Year',
    href: '/1year',
    priceMonthly: '₹99',
    description: '1 year of unlimited access to all of our classes and coaches.',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-300 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
        loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              'bg-gray-700 shadow-lg transition-transform transform hover:scale-105',
              'rounded-3xl p-8 ring-1 ring-gray-600',
            )}
          >
            <h3
              id={tier.id}
              className={classNames('text-indigo-300', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className={classNames('text-white', 'text-5xl font-semibold tracking-tight')}>
                {tier.priceMonthly}
              </span>
              <span className="text-gray-400 text-base">/month</span>
            </p>
            <p className="text-gray-300 mt-6 text-base/7">
              {tier.description}
            </p>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
