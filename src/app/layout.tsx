"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Raleway } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { PostHogProvider } from '@/providers/PostHogProvider'

const raleway = Raleway({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-black ${raleway.className}`}>
        <PostHogProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
