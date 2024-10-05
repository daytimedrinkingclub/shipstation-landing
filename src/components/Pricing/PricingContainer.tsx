import Link from "next/link";

const PricingContainer = () => {
  return (
    <section className="bg-gray-900 text-white" id="pricing">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Simple & Affordable Pricing
          </h1>
          <p className="font-inter mt-3 text-base font-light text-gray-400">
            No ads. No trails. No commitments
          </p>
        </div>

        <div className="mt-12 flex flex-col rounded-md bg-gray-800 px-5 py-10 text-white lg:flex-row lg:px-10">
          <div className="flex w-full flex-col px-5 lg:w-1/2">
            <div className="animate-fadeIn my-5 flex flex-row">
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Premium Designs
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Handcrafted by professional designers
                </p>
              </div>
            </div>
            <div
              className="animate-fadeIn my-5 flex flex-row"
              style={{ animationDelay: "0.2s" }}
            >
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Connect your domain
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Host your portfolio on your own custom domain
                </p>
              </div>
            </div>
            <div
              className="animate-fadeIn my-5 flex flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Early bird price
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Get early access at a discounted price
                </p>
              </div>
            </div>
          </div>
          <div className="mx-5 hidden h-[350px] border-[0.5px] border-gray-700 opacity-50 lg:block"></div>{" "}
          <div className="flex w-full flex-col px-5 lg:w-1/2">
            <div
              className="animate-fadeIn my-5 flex flex-row"
              style={{ animationDelay: "0.6s" }}
            >
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Regular updates
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  We release new featues every week
                </p>
              </div>
            </div>
            <div
              className="animate-fadeIn my-5 flex flex-row"
              style={{ animationDelay: "0.8s" }}
            >
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Lifetime Access
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Your portfolio is yours, refine it as many times
                </p>
              </div>
            </div>
            <div
              className="animate-fadeIn my-5 flex flex-row"
              style={{ animationDelay: "1s" }}
            >
              <svg
                className="mr-5 flex-none text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12L10.5 15L16.5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Premium Support
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Join our discord community for instant help
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative my-12">
          <h1 className="inline-flex items-center text-4xl font-bold text-white">
            All this for $9/year
            <span className="ml-2 hidden animate-pulse sm:block">
              <div className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-white">
                Launch Offer!
              </div>
            </span>
          </h1>
        </div>
        <Link
          href={process.env.NEXT_PUBLIC_SHIPSTATION_APP_URL}
          className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white/20 bg-primary px-6 py-2 text-base font-semibold text-white backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50"
        >
          <span className="text-lg">Create your portfolio now</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/20"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PricingContainer;
