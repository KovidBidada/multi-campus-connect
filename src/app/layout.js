import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
