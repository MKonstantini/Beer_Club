import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEER CLUB",
  description: "Uncap the Adventure",
  icons: "/BeerClub_Logo.svg"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-24 bg-slate-100">
        <main className="h-full">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
