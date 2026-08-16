import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Marcellus, Mulish } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata = {
  title: "Pangasinan Heritage",
  description: "Explore the rich history, culture, and traditions of Pangasinan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${mulish.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

