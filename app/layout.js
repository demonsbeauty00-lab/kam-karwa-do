import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import PWARegister from "@/components/PWARegister";
import AppShell from "@/components/AppShell";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Kaam Karwa Do",
  description: "Aapka kaam, hamari zimmedari.",
  manifest: "/manifest.json",
  themeColor: "#0B5D52",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B5D52",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${baloo.variable} ${inter.variable} font-body antialiased`}
      >
        <AppShell>{children}</AppShell>
        <PWARegister />
      </body>
    </html>
  );
}
