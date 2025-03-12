
import MyProvider from "../Provider/provider";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export function Entry({children} : {children : React.ReactNode}) {
  
  return (
    <body
    className={inter.className}
    >
      <MyProvider>{children}</MyProvider>
    </body>
  )
}