import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/global/Footer";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalMenu } from "@/components/global/GlobalMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Dima",
  description: "Personal portfolio website showcasing projects, blog posts, and work experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col relative`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <GlobalMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
