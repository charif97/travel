import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assistant de Voyage",
  description: "AI Travel Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className={`${plusJakartaSans.variable} font-sans bg-gray-50 flex justify-center min-h-screen`}>
        {/* Mobile App Container Wrapper */}
        <div className="w-full max-w-[430px] bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
