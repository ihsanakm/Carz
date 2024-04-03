import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/Components";


export const metadata: Metadata = {
  title: "Carz",
  description: "Demo purpose by AKMi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
