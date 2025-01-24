import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/context/theme-provider";
import { Header } from "@/components/global/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-[692px] px-6 py-12 md:py-16 antialiased overflow-x-hidden">
            <Header className="mb-32" />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
