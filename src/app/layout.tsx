import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts'
import NavigationHeader from "./ui/components/NavigationHeader";
import Footer from "./ui/components/Footer";

export const metadata: Metadata = {
  title: "J de Jabalí",
  description: "Más tiempo viviendo la vida que viviendo en la oficina. Avalado por contadores de todo México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavigationHeader />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
