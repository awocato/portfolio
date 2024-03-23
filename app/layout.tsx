import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/utils/Providers";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "awofolio",
  description: "Portfolio made with NextJs and TypeScript",
  keywords: "portfolio, nextjs, typescript",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://awocato.uz",
    images: [
      {
        url: "https://i.postimg.cc/g0Nbg9v9/thumbnail.png",
        alt: "awofolio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SpeedInsights />
      <body className="dark:bg-[#16212e] flex flex-col min-h-screen-100 md:min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
