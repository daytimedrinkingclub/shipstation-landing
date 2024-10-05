interface Window {
  $chatwoot?: {
    toggle: (action: string) => void;
  };
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_MAIN_URL: string;
    NEXT_PUBLIC_SHIPSTATION_APP_URL: string;
  }
}