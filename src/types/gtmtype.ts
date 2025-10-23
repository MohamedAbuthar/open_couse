export interface GoogleAnalyticsProps {
  gaId: string;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {};