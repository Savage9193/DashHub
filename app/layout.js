import { Inter } from "next/font/google";

import "./ui/globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/avatar.png" /> 
    <title>DashHub</title>
    </head>
      <body className={inter.className}>
      <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
