// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "University Management System",
  description: "Manage students, teachers, classes and grades efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
