
import '../styles/globals.css'
import Header from "./Header/Header";
import React from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <Header/>
          <div>{children}</div>
      </body>
    </html>
  )
}
