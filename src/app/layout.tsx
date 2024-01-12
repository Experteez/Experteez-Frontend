import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterContext from "./context/ToasterContext";
import { cookies } from 'next/headers'

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
  const cookie = cookies()

  //get cookies

  return (
    <html lang="en">
      <link rel="icon" href="/logo-only.svg" />
      <body className={poppins.className}>
        <Navbar login={cookie.get("token") ? true : false} />
        <ToasterContext />
        <div className="py-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
