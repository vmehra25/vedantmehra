import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { NavBar } from "@/components/nav_bar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f8f4ee] dark:bg-[#0b1d2b] text-[#12354e] dark:text-[#f1ece3]">
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yyk7149fxv");
          `}
        </Script>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
