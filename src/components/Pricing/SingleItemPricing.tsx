const checkIcon = (
  <svg width="8" height="6" viewBox="0 0 8 6" className="fill-current">
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);

const SingleItemPricing = () => {
  return (
    <section>
      {/*Main Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="rounded-xl bg-gray-800 px-6 py-12 sm:px-12 sm:py-16 md:py-20">
          {/* Heading Container */}
          <div className="mx-auto mb-8 flex max-w-3xl flex-col text-center md:mb-12 lg:mb-16">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Simple &amp; Affordable Pricing
            </h2>
            {/* Subheading */}
            <div className="mx-auto mt-4 rounded-3xl bg-gray-700 px-6 py-2">
              <p className="text-sm text-white sm:text-base">
                30 days money-back guarantee
              </p>
            </div>
          </div>
          {/* Contents*/}
          <div className="mx-auto grid h-auto w-full gap-4 rounded-md px-0 py-12 lg:grid-cols-2">
            {/* Content */}
            <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-600 bg-gray-700 px-10 py-14 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Premium Designs
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Regular updates
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Copy &amp; Paste
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Lifetime Access
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Early bird price
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {checkIcon}
                </span>
                <p className="text-sm text-white sm:text-base">
                  Premium Support
                </p>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col rounded-md bg-gray-900 px-10 py-12 text-white">
              <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:items-center">
                <h2 className="text-3xl font-bold md:text-5xl">
                  $149
                  <span className="text-sm font-light sm:text-sm">/month</span>
                </h2>
                <a
                  href="#"
                  className="mt-4 rounded-md bg-primary px-6 py-3 text-center font-semibold text-white md:mt-0"
                >
                  Get started
                </a>
              </div>
              <div className="mb-6 mt-6 border border-gray-700"></div>
              <p className="text-sm text-white sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleItemPricing2 = () => {
  return (
    <section className="bg-gray-900 text-white" id="pricing">
      {/* Container */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        {/* HEADING TEXT */}
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Simple & Affordable Pricing
          </h1>
          <p className="font-inter mt-3 text-base font-light text-gray-400">
            No ads. No trails. No commitments
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-12 flex flex-col rounded-md bg-gray-800 px-5 py-10 text-white lg:flex-row lg:px-10">
          {/* BENEFIT */}
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
          {/* BENEFIT */}
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

        {/* PAYMENT */}
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
export { SingleItemPricing2 };

export default SingleItemPricing;
