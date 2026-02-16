declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        fbq: (...args: any[]) => void;
        pixelId?: string;
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// Initialize Google Analytics
export const pageview = (url: string) => {
    try {
        if (typeof window.gtag !== "undefined" && GA_TRACKING_ID) {
            window.gtag("config", GA_TRACKING_ID, {
                page_path: url,
            });
        }
        if (typeof window.fbq !== "undefined") {
            window.fbq("track", "PageView");
        }
    } catch (err) {
        console.error("Analytics Error (PageView):", err);
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
    try {
        if (typeof window.gtag !== "undefined") {
            window.gtag("event", action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        }
    } catch (err) {
        console.error("Analytics Error (Event):", err);
    }
};

// Track Facebook Pixel events
export const fbEvent = (name: string, options = {}) => {
    try {
        if (typeof window.fbq !== "undefined") {
            window.fbq("track", name, options);
        }
    } catch (err) {
        console.error("Analytics Error (FB Event):", err);
    }
};
