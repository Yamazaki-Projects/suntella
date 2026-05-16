import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "強み | 株式会社サンステラ",
  description: "サンステラが選ばれる4つの強み。一貫支援・法人特化・美容対応・柔軟性。",
};

const strengths = [
  {
    title: "営業から運営まで一貫支援",
    desc: "営業代行だけでなく、販売促進・Web活用・事務支援まで幅広く対応可能です。複数の会社に分散していた業務をまとめてご依頼いただけるため、連携ロスなくスムーズに事業を推進できます。",
    tags: ["営業代行", "販売促進", "Web活用", "事務代行"],
  },
  {
    title: "法人向け支援に特化",
    desc: "企業同士のつながりを活かし、法人向けサービスの営業支援に特化した実績とノウハウがあります。BtoB営業特有の課題感を深く理解した上で、実践的なアプローチを提案します。",
    tags: ["BtoB営業", "法人向け", "商談獲得"],
  },
  {
    title: "美容・ヘルスケア領域にも対応",
    desc: "美容クリニックや美容関連サービスの営業支援にも対応しています。業界特有の規制や商習慣を理解した上で、クリニックの集客・提携先開拓・営業代行を行います。",
    tags: ["美容クリニック", "集客支援", "提携開拓"],
  },
  {
    title: "柔軟な対応力",
    desc: "小回りの利く体制で、細かな相談にも柔軟に対応します。大企業の標準パッケージに縛られず、お客様の状況や規模に合わせてカスタマイズした支援を提供します。",
    tags: ["スモールスタート", "カスタマイズ", "迅速対応"],
  },
];

export default function StrengthPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>強み</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">OUR STRENGTHS</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">強み</span>
          </div>
          <h1>サンステラが<br /><em className="gold">選ばれる理由</em></h1>
          <p className="lede" style={{ marginTop: 20 }}>
            一貫支援・法人特化・美容ヘルスケア対応・柔軟性。4つの強みでご支援します。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {strengths.map((s, i) => (
              <div key={s.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "var(--r-lg)", padding: "44px 48px",
                display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, alignItems: "start",
              }}
              className="strength-detail-card"
              >
                <div style={{
                  fontFamily: "var(--font-en)", fontSize: 52, fontWeight: 900,
                  color: "var(--gold)", opacity: 0.2, lineHeight: 1, letterSpacing: "-0.04em",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="h-3" style={{ marginBottom: 16, color: "var(--text)" }}>{s.title}</h2>
                  <p className="body" style={{ marginBottom: 20 }}>{s.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {s.tags.map(t => (
                      <span key={t} style={{
                        fontSize: 12, fontWeight: 600, padding: "4px 12px",
                        background: "var(--gold-soft)", border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "var(--r-pill)", color: "var(--gold)",
                        fontFamily: "var(--font-jp)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .strength-detail-card { grid-template-columns: 1fr !important; padding: 28px !important; }
        }
      `}</style>

      <section className="section section-tint">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 10 }}>
                サンステラの強みを<em className="gold">実際にご体験</em>ください。
              </h2>
              <p className="body">まずは無料相談から。お気軽にご連絡ください。</p>
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ position: "relative" }}>
              無料相談を申し込む <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
