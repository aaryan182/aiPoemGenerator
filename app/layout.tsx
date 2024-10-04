import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import {Nunito} from 'next/font/google';

const MyAppFont = Nunito({subsets: ['latin']})


export const metadata: Metadata = {
  title: "VerseCraft",
  description: "Gemini AI Poem Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={MyAppFont.className + " bg-black"}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
