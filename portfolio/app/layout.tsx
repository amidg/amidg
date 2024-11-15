import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "@theme-toggles/react/css/Expand.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import { AppleStyleDock } from "@/components/sideMenu/apple-style-dock";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "YevStrilets",
  description: "Created by Yevhenii Strilets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-light dark:bg-[#060709]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <div>
            {children}
            <Analytics />
          </div>
          <Footer />
          <AppleStyleDock />
        </ThemeProvider>
      </body>
    </html>
  );
}
