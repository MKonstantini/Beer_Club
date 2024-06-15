import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "BEER CLUB",
  description: "Uncap Your Next Adventure",
  icons: "/BeerClub_Logo.svg"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="pt-24 bg-slate-200">
          <main className="h-full">
            <Navbar />
            {children}
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
