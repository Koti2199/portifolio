import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sai Koteswara Rao Nallamothu",
  description:
    "Tech Enthusiast, Avid Programmer, Nature Enthusiast and Culinary Explorer!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
