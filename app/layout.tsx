import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nositelinkssearchbox: true,
      nosnippet: true,
      notranslate: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable}>{children}</body>
    </html>
  );
}
