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
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Premium Designs
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Handcrafted by proffessional designers
                </p>
              </div>
            </div>
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">Copy & Paste</h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Use simply by copy and pasting the code into your project
                </p>
              </div>
            </div>
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
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
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Regular updates
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  We release new components each week
                </p>
              </div>
            </div>
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Lifetime Access
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Get access to all current & future components for life
                </p>
              </div>
            </div>
            <div className="my-5 flex flex-row">
              <svg
                className="mr-5 flex-none"
                width="70"
                height="70"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#1F2937" />
              </svg>
              <div>
                <h2 className="text-xl font-medium text-white">
                  Exclusive community
                </h2>
                <p className="font-inter mt-2 font-light text-gray-400">
                  Gain access to an exclusive community to vote on future packs
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="mt-12 text-4xl font-bold text-white">
          All this for $99/year
        </h1>
        <button className="my-6 rounded-md bg-primary px-6 py-4 text-base font-bold text-white">
          Join Now!
        </button>
        <p className="font-inter text-base font-light text-gray-400">
          30 days money back guarantee
        </p>
      </div>
    </section>
  );
};

export default PricingContainer;
