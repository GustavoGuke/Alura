import type { Metadata } from "next";
import localFont from "next/font/local";
import { Prompt } from "next/font/google"
import "./globals.css";
import { Aside } from "./components/Aside";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Code Connect",
  description: "curso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={prompt.className}
      >
        <div className="max-w-7xl my-14 mx-auto flex gap-7 h-screen justify-between">
          <Aside />
            {children}
        </div>
      </body>
    </html>
  );
}
