import { Link } from "lucide-react";

const PricingContainer = () => {
  const features = [
    {
      title: "Unique Designs",
      description:
        "Dont search for template, just describe what you want. Here's a mario themed portfolio. ShipStation will create anything you want",
    },
    {
      title: "Connect your domain",
      description:
        "Host your portfolio on your own custom domain to stand out and make a statement. ShipStation manages the hosting and gives FREE SSL",
    },
    {
      title: "Early bird price",
      description:
        "Available for a limited time, special pricing for early adopters and first 100 users on ShipStation",
    },
    {
      title: "Lifetime Access",
      description:
        "Using our simple yet powerful chat editor, you can regenerate your portfolio as many times as you want. No terms, no limits, just pure satisfaction",
    },
    {
      title: "Regular updates",
      description:
        "We are always improving ShipStation.ai. You can follow the development on our discord community",
    },
    {
      title: "Premium Support",
      description:
        "Join our discord community for instant help. We will help you get the most out of ShipStation. If still unsatisfied, we will book you time with our CTO for a call",
    },
  ];

  const FeatureItem = ({
    title,
    description,
    delay,
  }: {
    title: string;
    description: string;
    delay: string;
  }) => (
    <div
      className="animate-fadeIn my-5 flex flex-row"
      style={{ animationDelay: delay }}
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
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="font-inter mt-2 font-light text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-100 text-black dark:from-gray-900 dark:to-black dark:text-white"
      id="pricing"
    >
      <div className="bg-grid-pattern absolute inset-0 opacity-10 dark:opacity-5"></div>
      <div className="animate-blob absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold md:text-5xl">
            Simple & Affordable Pricing
          </h1>
          <p className="font-inter mt-3 text-xl font-light text-gray-600 dark:text-gray-400">
            No hidden costs. No pointless subscriptions.
          </p>
        </div>
        <div className="mt-12 flex flex-col rounded-md bg-gray-100/20 px-5 py-10 text-black lg:flex-row lg:px-10 dark:bg-gray-800 dark:text-white">
          <div className="flex w-full flex-col px-5 lg:w-1/2">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                delay={`${index * 0.2}s`}
              />
            ))}
          </div>
          <div className="mx-5 hidden h-[350px] border-[0.5px] border-gray-700 opacity-50 lg:block"></div>
          <div className="flex w-full flex-col px-5 lg:w-1/2">
            {features.slice(3).map((feature, index) => (
              <FeatureItem
                key={index + 3}
                title={feature.title}
                description={feature.description}
                delay={`${(index + 3) * 0.2}s`}
              />
            ))}
          </div>
        </div>

        <h2 className="mt-12 text-center text-xl font-bold md:text-3xl">
          All this for a onetime price of{" "}
          <span className="text-3xl md:text-4xl">$12</span>. <br /> <small>Yes, you
          read that right.</small>
        </h2>
        <p className="mt-5 text-center text-lg font-light text-gray-600 dark:text-gray-400">
          Try ShipStation for free. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingContainer;
