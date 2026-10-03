import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Backend Engineer in Pune`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  applicationName: `${DATA.name} Portfolio`,
  category: "technology",
  openGraph: {
    title: `${DATA.name} | Backend Engineer in Pune`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${DATA.name}, Backend Engineer`,
      },
    ],
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
    card: "summary_large_image",
    title: `${DATA.name} | Backend Engineer in Pune`,
    description: DATA.description,
    creator: "@abhishekwinn",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background bg-hatch font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col border-x bg-background pb-24">
              <div className="flex-1">{children}</div>
              <footer className="border-t px-6 py-10 text-center text-sm text-muted-foreground">
                <p>
                  Built by{" "}
                  <a href={DATA.contact.social.GitHub.url} className="font-medium text-foreground underline underline-offset-4">
                    {DATA.name}
                  </a>
                  . Writing on backend systems lives in the{" "}
                  <Link href="/blog" className="font-medium text-foreground underline underline-offset-4">
                    blog
                  </Link>
                  .
                </p>
                <p className="mt-2 text-xs">© {new Date().getFullYear()} {DATA.name}</p>
              </footer>
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
