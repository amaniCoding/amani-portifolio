import { Metadata } from "next";
import "./globals.css";
import { Entry } from "./ui/app";
export const metadata: Metadata = {
  title: 'Amanuel Ferede | Fullstack software engineer',
  description: 'Amanuel Ferede, a passion to create marvelous software and programming solutions to different real life problems. I have an intuitive desire to learn new technologies and how they work in depth.',
  metadataBase: new URL('https://zeamanuel.vercel.app/'),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  
  return (
    <html lang="en">
      <Entry children={children}/>
    </html>
  );
}
