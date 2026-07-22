import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/smooth-scroll";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xqj0ebq511");
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* Global Background Vertical Lines */}
          <div className="fixed top-0 left-[5%] w-[30px] h-screen bg-diagonal-stripes opacity-40 border-x border-dashed border-black/20 dark:border-white/30 -z-10 pointer-events-none hidden md:block"></div>
          <div className="fixed top-0 left-[15%] w-[30px] h-screen bg-diagonal-stripes opacity-40 border-x border-dashed border-black/20 dark:border-white/30 -z-10 pointer-events-none hidden lg:block"></div>
          
          <div className="fixed top-0 right-[5%] w-[30px] h-screen bg-diagonal-stripes opacity-40 border-x border-dashed border-black/20 dark:border-white/30 -z-10 pointer-events-none hidden md:block"></div>
          <div className="fixed top-0 right-[15%] w-[30px] h-screen bg-diagonal-stripes opacity-40 border-x border-dashed border-black/20 dark:border-white/30 -z-10 pointer-events-none hidden lg:block"></div>

          <SmoothScroll>
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="flex flex-col min-h-[100dvh] z-[10] space-y-10 px-10 max-[450px]:px-4 py-10 relative border-dashed border-x dark:border-white/30 border-black/30 max-w-2xl mx-auto bg-background">
                {children}
              </div>
              <Navbar />
              <Toaster position="bottom-right" />
            </TooltipProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
