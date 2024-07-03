import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Toaster } from 'sonner';
import "./globals.css";

export const metadata: Metadata = {
  title: "BEER CLUB",
  description: "Uncap Your Next Adventure",
  icons: "/icons/BeerClub_Logo.svg"
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
            <Toaster position="top-right" toastOptions={{ className: "text-lg", duration: 2000 }} />
            <Navbar />
            {children}
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
