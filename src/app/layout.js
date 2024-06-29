import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/HomePage/Header/Header";
import Footer from "@/components/HomePage/Shared/Footer/Footer";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dosis",
});

export const metadata = {
  title: "Md Riyaz Miah",
  description: "MERN-Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dosis.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
