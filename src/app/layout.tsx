import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import { FavoritesProvider } from "@/context/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel Heroes",
  description: "Encuentra tus heroes preferidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <FavoritesProvider>
          <Header />
          <main style={{ marginTop: "80px", marginBottom: "80px" }}>
            {children}
          </main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
