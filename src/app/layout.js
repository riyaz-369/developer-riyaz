import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Shared/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Md Riyaz Miah",
  description: "MERN-Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        {/* header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
