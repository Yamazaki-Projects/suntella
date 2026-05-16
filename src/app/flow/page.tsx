import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ご相談の流れ | 株式会社サンステラ",
  description: "お問い合わせからサポート開始まで、4つのステップでスムーズにご支援します。",
};

const steps = [
  {
    en: "CONTACT",
    title: "お問い合わせ",
    desc: "まずはお電話またはメールフォームよりお気軽にご連絡ください。どんな小さなご相談でも丁寧にお答えします。",
    detail: "お問い合わせいただいた後、担当者より1営業日以内にご連絡いたします。",
  },
  {
    en: "HEARING",
    title: "ヒアリング・課題整理",
    desc: "現在の事業状況・課題・ご要望を丁寧にお聞きします。オンラインまたはお電話にて実施いたします。",
    detail: "事前にお送りいただく情報は一切不要です。まずはお話を聞かせてください。",
  },
  {
    en: "PROPOSAL",
    title: "ご提案・お見積り",
    desc: "ヒアリング内容をもとに、最適な支援内容と費用のご提案をいたします。サービスの組み合わせも柔軟に対応します。",
    detail: "ご提案内容に納得いただけた場合のみ、ご契約に進みます。押し付けは一切ありません。",
  },
  {
    en: "START",
    title: "サポート開始",
    desc: "ご契約後、速やかにサポートを開始します。進捗は定期的にご報告し、随時ご相談いただける体制を整えています。",
    detail: "スモールスタートから始めていただくことも可能です。状況に応じて支援範囲を拡張できます。",
  },
];

export default function FlowPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>ご相談の流れ</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">OUR FLOW</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">ご相談の流れ</span>
          </div>
          <h1>お問い合わせから<br /><em className="gold">サポート開始</em>まで。</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            4つのステップで、スムーズにご支援を開始します。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="flow-list">
            {steps.map((s, i) => (
              <div key={s.en} className="flow-step">
                <div className="flow-step-left">
                  <div className="flow-step-num">{String(i + 1).padStart(2, "0")}</div>
                  {i < steps.length - 1 && <div className="flow-step-line" />}
                </div>
                <div className="flow-step-body">
                  <div className="flow-step-en">{s.en}</div>
                  <h2 className="h-3" style={{ marginBottom: 12, color: "var(--text)" }}>{s.title}</h2>
                  <p className="body" style={{ marginBottom: 12 }}>{s.desc}</p>
                  <div style={{
                    background: "var(--gold-soft)", border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "var(--r-md)", padding: "12px 16px",
                    fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7,
                  }}>
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 10 }}>
                まずは<em className="gold">お気軽に</em>ご連絡ください。
              </h2>
              <p className="body">相談・見積りは無料です。お気軽にどうぞ。</p>
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
