import Link from "next/link";

const pages = [
  { en: "ABOUT",    jp: "会社案内",     href: "/about",    desc: "サンステラの理念・姿勢・会社の想いをご紹介します。" },
  { en: "SERVICE",  jp: "事業内容",     href: "/service",  desc: "営業代行から美容クリニック支援まで6つの事業領域。" },
  { en: "STRENGTH", jp: "強み",         href: "/strength", desc: "一貫支援・法人特化・柔軟対応力など4つの強み。" },
  { en: "FLOW",     jp: "ご相談の流れ", href: "/flow",     desc: "お問い合わせからサポート開始まで4ステップ。" },
  { en: "COMPANY",  jp: "会社概要",     href: "/company",  desc: "会社名・代表者・所在地などの基本情報。" },
  { en: "CONTACT",  jp: "お問い合わせ", href: "/contact",  desc: "お電話・メールにてお気軽にご相談ください。" },
];

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero-bg-wrap">
          <div className="hero-grid-overlay" />
          <div className="hero-glow" />
        </div>
        <div className="container hero-inner">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            SALES SUPPORT &amp; BUSINESS GROWTH
          </div>
          <h1 className="h-hero hero-title">
            企業の営業と集客に、<br />
            <em className="gold">実行力あるサポート</em>を。
          </h1>
          <p className="hero-sub">
            営業代行、販売促進、法人向け事業紹介、<br />
            美容クリニック営業支援まで。
          </p>
          <p className="hero-body">
            株式会社サンステラは、企業の成長に必要な<br />
            「つながり」と「仕組み」をつくります。
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-gold">
              無料相談を申し込む <span className="arr">→</span>
            </Link>
            <Link href="/service" className="btn btn-outline">
              事業内容を見る
            </Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          SCROLL
        </div>
      </section>

      {/* ═══ NAV CARDS ═══ */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">CONTENTS</div>
            <h2 className="h-1">サイトメニュー</h2>
          </div>
          <div className="preview-grid">
            {pages.map(p => (
              <Link key={p.href} href={p.href} className="preview-card">
                <div className="preview-card-en">{p.en}</div>
                <div className="preview-card-title">{p.jp}</div>
                <div className="preview-card-desc">{p.desc}</div>
                <div className="preview-card-link">詳しく見る →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section section-tint">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 12 }}>
                まずはお気軽に<em className="gold">ご相談</em>ください。
              </h2>
              <p className="body">
                現在の課題やご希望を伺い、最適な支援内容をご提案いたします。
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", position: "relative" }}>
              <Link href="/contact" className="btn btn-gold">
                お問い合わせ <span className="arr">→</span>
              </Link>
              <Link href="/flow" className="btn btn-outline">
                ご相談の流れ
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
