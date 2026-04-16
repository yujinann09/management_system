import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RS Efarina SIMPEG",
  description: "Sistem Informasi Manajemen Karyawan RS Efarina Etaham Karawang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main className="animate-fade-in" style={{ padding: '32px 40px', flexGrow: 1 }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
