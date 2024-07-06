import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre_franklin = Libre_Franklin({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

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
