import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業内容 | 株式会社サンステラ",
  description: "営業代行・販売促進・セミナー運営・Web・EC活用・美容クリニック営業支援・事務代行の6事業。",
};

const services = [
  {
    en: "SALES",
    icon: "🤝",
    title: "営業代行・営業支援",
    desc: "法人向けサービスや商品の営業活動を支援し、見込み顧客開拓から商談機会の創出までサポートします。",
    points: ["新規顧客の開拓・アプローチ", "商談機会の創出・セッティング", "営業フロー・トークスクリプト設計", "テレアポ・訪問営業の代行"],
  },
  {
    en: "MARKETING",
    icon: "📣",
    title: "販売促進・マーケティング支援",
    desc: "商品やサービスの魅力を整理し、販促企画・広告宣伝・集客導線づくりを支援します。",
    points: ["販促企画の立案・実行", "チラシ・資料・広告の制作支援", "集客導線の設計・改善", "SNS・WEB広告の活用支援"],
  },
  {
    en: "SEMINAR",
    icon: "🎤",
    title: "セミナー・イベント運営",
    desc: "各種セミナー・講習会・研修・イベントの企画・運営をサポートします。",
    points: ["セミナー企画・集客支援", "講習会・研修の運営代行", "会場手配・進行管理", "オンライン開催の対応"],
  },
  {
    en: "WEB / EC",
    icon: "💻",
    title: "Web・EC活用支援",
    desc: "ホームページ・ECサイト・通信販売などの企画・制作・運用を支援します。",
    points: ["ホームページの企画・制作", "ECサイトの立ち上げ支援", "通信販売の運用サポート", "Web活用戦略の提案"],
  },
  {
    en: "BEAUTY",
    icon: "💄",
    title: "美容クリニック向け営業支援",
    desc: "美容クリニックや美容関連事業者に向けた営業支援・集客支援・提携先開拓などをサポートします。",
    points: ["患者様集客施策の企画・実行", "提携先・紹介元の開拓", "美容業界特化の営業代行", "クリニック向け販促物制作"],
  },
  {
    en: "BACK OFFICE",
    icon: "📋",
    title: "事務代行・バックオフィス支援",
    desc: "経営・労務・総務・経理などの事務代行業務を通じて、事業運営を支援します。",
    points: ["経理・請求書処理の代行", "労務手続きのサポート", "総務・庶務業務の代行", "経営管理資料の作成支援"],
  },
];

export default function ServicePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>事業内容</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">OUR SERVICES</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">事業内容</span>
          </div>
          <h1>6つの事業領域で、<br /><em className="gold">企業の成長</em>を支えます。</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            営業代行から美容クリニック営業支援まで、幅広い領域でワンストップのサポートを提供します。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {services.map((s, i) => (
              <div key={s.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)", padding: "40px 48px",
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48,
                alignItems: "start",
              }}
              className="service-detail-card"
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                    <div className="service-icon">{s.icon}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-en)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)", marginBottom: 4 }}>{String(i + 1).padStart(2, "0")} — {s.en}</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text)" }}>{s.title}</div>
                    </div>
                  </div>
                  <p className="body">{s.desc}</p>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.points.map(p => (
                    <li key={p} style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7,
                      padding: "10px 0", borderBottom: "1px solid var(--border)",
                    }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .service-detail-card { grid-template-columns: 1fr !important; gap: 24px !important; padding: 28px !important; }
        }
      `}</style>

      <section className="section section-tint">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 10 }}>どの事業も<em className="gold">無料でご相談</em>いただけます。</h2>
              <p className="body">まずはお気軽にお問い合わせください。</p>
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ position: "relative" }}>
              相談してみる <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
