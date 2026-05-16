import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社サンステラ | 営業代行・販売促進・美容クリニック営業支援",
  description: "株式会社サンステラは、企業の営業代行・販売促進・法人向け事業紹介・美容クリニック営業支援などを通じて、企業の成長をサポートします。千葉県八千代市。",
  openGraph: {
    title: "株式会社サンステラ",
    description: "企業の営業と集客に、実行力あるサポートを。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
