import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Model Art — Cinematic Real Estate Visualizations",
  description:
    "Model Art crafts immersive architectural experiences that bring real estate visions to life.",
  keywords: [
    "real estate visualization",
    "architectural rendering",
    "luxury 3D portfolio",
    "Model Art",
  ],
  openGraph: {
    title: "Model Art — Cinematic Real Estate Visualizations",
    description:
      "Discover Model Art's cinematic portfolio of architectural visualizations and immersive real estate experiences.",
    url: "https://agentic-f469fd1e.vercel.app",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-[#f4f4f6] text-[#0f0f10]`}
      >
        {children}
      </body>
    </html>
  );
}
