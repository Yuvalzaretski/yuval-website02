import "@/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

export const metadata: Metadata = {
  title: "Digital Product Jam Starter Kit",
  description:
    "A starter kit for wiritng code in the Digital Product Jam course.",
}; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icons/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/icon-180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/icons/icon-192.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
