import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "@/utils/Providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "awofolio",
  description: "Portfolio website of Talgat Minikhanov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-[#16212e] flex flex-col min-h-screen-100 md:min-h-screen">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
