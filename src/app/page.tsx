import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingContainer from "@/components/Pricing/PricingContainer";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ShipStation - Create stunning websites using AI",
  description: "Create stunning websites with ease using our AI-powered platform.",
  keywords: "AI, website creation, web design, ShipStation, stunning websites",
  openGraph: {
    title: "ShipStation - Create stunning websites",
    description: "Create stunning websites with ease using our AI-powered platform.",
    url: "https://shipstation.ai",
  },
  twitter: {
    title: "ShipStation - Create stunning websites",
    description: "Create stunning websites with ease using our AI-powered platform.",
  },
  other: {
    "google-site-verification": "G-2ZEXC0QVN6",
  },
};

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {`
          {  
            "@context":"http://schema.org",
            "@type":"Organization",
            "name":"ShipStation",
            "logo":"https://shipstation.ai/assets/logo.png",
            "url":"https://shipstation.ai",
            "brand":{  
              "@type":"Organization",
              "name":"ShipStation",
              "description":"Create stunning websites with ease using our AI-powered platform.",
              "logo":"https://shipstation.ai/assets/logo.png",
              "sameAs":[  
                "https://bubble.io/",
                "https://durable.co/",
                "https://www.weebly.com",
                "https://www.squarespace.com",
                "https://www.shopify.com",
                "https://www.wordpress.com"
              ]
            }
          }
        `}
      </Script>
      <Script id="schema-website" type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Website",
            "name": "ShipStation.AI",
            "description": "Create stunning websites with ease using our AI-powered platform.",
            "url": "https://shipstation.ai",
            "image": "https://shipstation.ai/assets/logo.png",
            "keywords": "Create stunning websites with ease using our AI-powered platform."
          }
        `}
      </Script>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <Testimonials />
      <PricingContainer />
    </>
  );
}