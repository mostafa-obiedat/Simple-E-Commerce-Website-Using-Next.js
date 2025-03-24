import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./componants/Navbar";
// app/layout.js
/** @type {import('next').Metadata} */
export const metadata = {
  title: "About Us",
  description: "Learn about our company",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
