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
    "I work as a software engineer at IKEA Financial Services, helping develop and maintain financial systems.",
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
          <div className="mx-auto max-w-[692px] py-12 md:py-16 antialiased overflow-x-hidden">
            <Header className="mb-20 p-page" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
