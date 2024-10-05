"use client";
import { useEffect } from "react";

// Add this declaration at the top of your file
declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const ChatwootWidget = () => {
  useEffect(() => {
    // This code will only run on the client-side
    (function (d: Document, t: string) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t) as HTMLScriptElement,
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode?.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "Vf744EW3QdfJHmkNBjxxte24",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  return null; // This component doesn't render anything
};

export default ChatwootWidget;
