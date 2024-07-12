import { Libre_Franklin } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
      <body className={libre_franklin.variable}>
        <NextTopLoader
          color="#61BD93"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
