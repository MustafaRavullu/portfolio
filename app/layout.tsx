import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GradientLight from "@/components/gradient-light";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mustafa Ravullu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark leading-relaxed  selection:bg-teal-300 selection:text-teal-900",
          fontSans.variable
        )}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="group/spotlight relative">
            <GradientLight />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
