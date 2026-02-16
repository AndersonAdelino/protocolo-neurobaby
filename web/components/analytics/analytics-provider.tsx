"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-TW5S0LYZ69";
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1533716907719313";

function Analytics() {
    const searchParams = useSearchParams();

    useEffect(() => {
        // Logic to update page views on route change if needed
        // GA4 automatically tracks history changes, but sometimes manual is better for SPA
        // Facebook Pixel also tracks PageView on load.
    }, [searchParams]);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Script
                id="fb-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                }}
            />
            {/* UTMfy Pixel Script */}
            <Script
                id="utmify-pixel"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            window.pixelId = "${process.env.NEXT_PUBLIC_UTMFY_PIXEL_ID || "699299e38cbcaf46f8029184"}";
          `,
                }}
            />
            <Script
                src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
                strategy="lazyOnload"
            />

            {/* UTMfy UTMS Script */}
            <Script
                src="https://cdn.utmify.com.br/scripts/utms/latest.js"
                strategy="lazyOnload"
                data-utmify-prevent-sub-ids
            />
        </>
    );
}

export default function AnalyticsWrapper() {
    return (
        <Suspense fallback={null}>
            <Analytics />
        </Suspense>
    );
}
