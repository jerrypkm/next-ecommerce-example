import type { Metadata } from "next";
import { inter } from "../config";

import "./globals.css";

export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Ecommerce teslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
