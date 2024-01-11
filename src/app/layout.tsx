import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Experteez",
  description: "Get Expert with experteez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/yalz.png" />
      <body className={poppins.className}>
        <Navbar />
        <div className="py-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
