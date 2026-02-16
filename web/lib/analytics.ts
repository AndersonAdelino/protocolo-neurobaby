declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        fbq: (...args: any[]) => void;
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// Initialize Google Analytics
export const pageview = (url: string) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", "PageView");
    }
};

// Track specific events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    if (typeof window.gtag !== "undefined") {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Track Facebook Pixel events
export const fbEvent = (name: string, options = {}) => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", name, options);
    }
};
