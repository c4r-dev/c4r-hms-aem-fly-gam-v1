import { Inter } from "next/font/google";

import './globals.css'

export const metadata = {
  title: "HMS Flying Game",
  description: "HMS Flying Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
