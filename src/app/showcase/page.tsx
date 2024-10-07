"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

interface Website {
  id: number;
  prompt: string;
  slug: string;
  portfolio_type: string;
}

export default function InspirationPage() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL; // Update this with your actual base URL
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  useEffect(() => {
    document.title = "Showcase";
    fetchWebsites();
  }, []);

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      fetchWebsites(page + 1);
    }
  }, [inView, isLoading, hasMore]);

  const fetchWebsites = async (pageNumber = 1) => {
    if (!hasMore && pageNumber !== 1) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("ships")
        .select("prompt, slug, portfolio_type, id")
        .order("id", { ascending: false })
        .range((pageNumber - 1) * 15, pageNumber * 15 - 1);

      if (error) {
        console.error(error);
        throw error;
      }

      if (pageNumber === 1) {
        setWebsites(data);
      } else {
        setWebsites((prev) => [...prev, ...data]);
      }

      setHasMore(data.length === 15);
      setPage(pageNumber);
    } catch (error) {
      console.error("Error fetching websites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const Loader = () => (
    <div className="my-20 flex h-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-200"></div>
    </div>
  );

  return (
    <>
      <div className="mt-20 flex min-h-screen flex-col">
        {/* Assume there's a header component here */}
        <main className="flex flex-grow items-center justify-center">
          {websites.length === 0 && isLoading ? (
            <Loader />
          ) : (
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {websites.map((website) => (
                  <div key={website.id} className="group relative aspect-video">
                    <Image
                      src={`${supabaseUrl}/storage/v1/object/public/shipstation-websites/websites/${website.slug}/screenshot.png`}
                      alt={`Preview of ${website.prompt}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={`${baseUrl}/site/${website.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded border border-white bg-transparent px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-black"
                      >
                        View live demo <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {isLoading && websites.length > 0 && <Loader />}
              {!isLoading && hasMore && <div ref={ref} className="h-10" />}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
