import localFont from "next/font/local";
import MyProvider from "../Provider/provider";
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export function Entry({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <MyProvider>{children}</MyProvider>
    </body>
  )
}