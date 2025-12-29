import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { NavbarProvider } from "../contexts/NavbarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const dynamic = "force-dynamic";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UB Residency",
  description: "Premium hotel rooms and suites at UB Residency",

  icons: {
    icon: "/logo.png",
  },

  openGraph: {
    title: "UB Residency",
    description: "Premium hotel rooms and suites at UB Residency",
    url: "https://ubgrandresidency.com/",
    siteName: "UB Residency",
    images: [
      {
        url: "/logo.png", // MUST exist in /public
        width: 1200,
        height: 630,
        alt: "UB Residency Hotel",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UB Residency",
    description: "Premium hotel rooms and suites at UB Residency",
    images: ["/logo.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NavbarProvider>
          <Navbar />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
