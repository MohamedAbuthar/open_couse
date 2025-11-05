export interface GoogleAnalyticsProps {
  gaId: string;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export {};