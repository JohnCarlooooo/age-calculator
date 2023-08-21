import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Age calculator app",
  description: "Age calculator app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={
          poppins.className +
          ` bg-OffWhite h-screen w-screen flex justify-center items-center p-4`
        }
      >
        {children}
      </body>
    </html>
  );
}
