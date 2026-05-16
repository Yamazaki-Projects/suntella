import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社案内 | 株式会社サンステラ",
  description: "株式会社サンステラの会社案内。理念・姿勢・想いをご紹介します。",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>会社案内</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">ABOUT US</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">会社案内</span>
          </div>
          <h1>人と企業をつなぎ、<br /><em className="gold">成長の仕組み</em>をつくる。</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            サンステラの理念・姿勢・会社の想いをご紹介します。
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">MISSION</div>
          <h2 className="h-1" style={{ marginBottom: 40 }}>私たちの使命</h2>

          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderLeft: "3px solid var(--gold)", borderRadius: "var(--r-lg)",
            padding: "40px 48px", marginBottom: 48,
          }}>
            <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.8, color: "var(--text)", marginBottom: 16 }}>
              企業の営業と集客に、実行力あるサポートを。
            </p>
            <p className="body">
              株式会社サンステラは、法人向けの営業支援・営業代行・販売促進・Web&amp;EC活用・セミナー運営・美容クリニック向け営業支援などを通じて、企業の事業成長をサポートしています。
            </p>
          </div>

          <p className="body" style={{ marginBottom: 24 }}>
            人と人、企業と企業をつなぎ、必要なサービスが必要な相手に届く仕組みづくりを大切にし、柔軟かつ実行力のある支援を行っています。
          </p>
          <p className="body">
            私たちは単に業務を代行するだけでなく、お客様の事業に深く関わり、課題を共に整理し、長期的な成長を支えるパートナーであることを目指しています。
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section section-tint">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">VALUES</div>
          <h2 className="h-1" style={{ marginBottom: 48 }}>大切にしていること</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "つながりを大切に", desc: "人と人、企業と企業の信頼関係を基盤に、必要なサービスが必要な相手に届くよう橋渡しします。" },
              { title: "実行力ある支援",   desc: "提案だけでなく、現場での実行まで伴走します。計画を実際の結果につなげることを重視しています。" },
              { title: "柔軟な対応",       desc: "企業の規模や状況に関わらず、小回りの利く体制でお客様の課題に寄り添います。" },
            ].map((v, i) => (
              <div key={v.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)", padding: "28px 32px",
                display: "grid", gridTemplateColumns: "40px 1fr", gap: 20, alignItems: "start",
              }}>
                <div style={{
                  fontFamily: "var(--font-en)", fontSize: 28, fontWeight: 900,
                  color: "var(--gold)", opacity: 0.3, lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "var(--text)" }}>{v.title}</div>
                  <div className="body" style={{ fontSize: 14 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 10 }}>まずはお気軽に<em className="gold">ご相談</em>ください。</h2>
              <p className="body">どんな小さなご相談でも、丁寧にお答えします。</p>
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ position: "relative" }}>
              お問い合わせ <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
