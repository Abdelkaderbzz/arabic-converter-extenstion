import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { HistoryProvider } from "@/contexts/history-context";

const thmanyahSans = localFont({
  src: [
    {
      path: "./fonts/thmanyah-font/thmanyahsans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-font/thmanyahsans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-font/thmanyahsans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-font/thmanyahsans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/thmanyah-font/thmanyahsans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arabic Converter",
  description: "Convert Tunisian Arabic text between Latin and Arabic scripts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={thmanyahSans.variable}>
      <body className="font-sans">
        <LanguageProvider>
          <HistoryProvider>{children}</HistoryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
