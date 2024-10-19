import ChatWidget from "@/components/Common/ChatWidget";
import GithubButton from "@/components/Common/GithubButton";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import PricingContainer from "@/components/Pricing/PricingContainer";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "ShipStation - AI-Powered Personal Website & Portfolio Builder (No Code)",
  description:
    "Create stunning personal websites and portfolios in minutes with ShipStation.ai. Our AI-powered platform requires no coding skills. Perfect for engineers, designers, and professionals.",
  keywords:
    "personal website builder no code, personal portfolio builder, AI-powered portfolio, resume to website, custom domain integration, portfolio website, no coding required",
  openGraph: {
    title: "ShipStation.ai - Create Your Dream Portfolio in Minutes",
    description:
      "Build professional personal websites and portfolios without code. AI-powered, industry-specific designs, and instant online presence.",
    url: "https://shipstation.ai",
    images: [
      {
        url: "https://shipstation.ai/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShipStation.ai - AI-Powered Personal Website & Portfolio Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipStation.ai - No-Code Personal Website & Portfolio Builder",
    description:
      "Transform your resume into a stunning website. AI-powered, no coding required. Create your professional online presence in minutes.",
    images: ["https://shipstation.ai/assets/twitter-image.png"],
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
            "@type":"WebApplication",
            "name":"ShipStation.ai",
            "url":"https://shipstation.ai",
            "logo":"https://shipstation.ai/assets/logo.png",
            "description":"AI-powered personal website and portfolio builder. Create professional online presence without coding.",
            "applicationCategory": "WebApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "INR"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1000"
            }
          }
        `}
      </Script>
      <Script id="schema-website" type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "ShipStation.ai",
            "description": "AI-powered personal website and portfolio builder. No coding required.",
            "url": "https://shipstation.ai",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://shipstation.ai/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <ScrollUp />
      <Hero />
      <Features />
      {/* <div className="flex justify-center">
        <GithubButton
          href="https://github.com/daytimedrinkingclub/shipstation"
          stars={69}
        />
      </div> */}
      <Video />
      <Testimonials />
      <PricingContainer />
      <ChatWidget />
    </>
  );
}
