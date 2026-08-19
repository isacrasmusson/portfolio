import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Newsreader } from "next/font/google";

import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/global/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Isac Rasmusson",
  description:
    "Software engineer at IKEA Financial Services, building Flavors on the side — a recipe app that makes cooking simpler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} ${newsreader.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[692px] py-12 md:py-20 antialiased overflow-x-hidden">
            <Header className="mb-16 sm:mb-20 p-page" />
            <main className="pb-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
