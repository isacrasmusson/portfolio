import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/global/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isac Rasmusson",
  description:
    "I work as a fullstack developer at Cope, where I am part of a team that develops and maintains a financial system for both the public and private sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[692px] px-6 py-12 md:py-16 antialiased overflow-x-hidden">
            <Header className="mb-28" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
