import { Metadata } from "next";
import "./globals.css";

import MyProvider from "./Provider/provider";
export const metadata: Metadata = {
  title: "Amanuel Ferede | Fullstack software engineer",
  description:
    "Amanuel Ferede, a passion to create marvelous software and programming solutions to different real life problems. I have an intuitive desire to learn new technologies and how they work in depth.",
  metadataBase: new URL("https://zeamanuel.vercel.app/"),
  icons: new URL("https://zeamanuel.vercel.app/7.png"),
};

type Props = {
  children: React.ReactNode;
};

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <MyProvider>
        <body className={inter.className}>{children}</body>
      </MyProvider>
    </html>
  );
}
