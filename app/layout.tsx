import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetNova Health — The Operating System for Preventive Pet Health",
  description:
    "Centralized health records. Personalized diagnostics. Intelligent care plans. Ongoing monitoring — all in one secure platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
