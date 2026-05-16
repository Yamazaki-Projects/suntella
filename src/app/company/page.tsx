import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社サンステラ",
  description: "株式会社サンステラの会社概要。会社名・所在地・事業内容などの基本情報。",
};

const rows = [
  { label: "会社名",     value: "株式会社サンステラ" },
  { label: "英語表記",   value: "SUNTELLA Co., Ltd." },
  { label: "所在地",     value: "〒276-0049　千葉県八千代市緑が丘1-2-9" },
  { label: "事業内容",   value: "営業代行・営業支援／販売促進・マーケティング支援／セミナー・イベント運営／Web・EC活用支援／美容クリニック向け営業支援／事務代行・バックオフィス支援" },
  { label: "対象エリア", value: "全国（オンライン対応可）" },
  { label: "対象顧客",   value: "法人（BtoB）中心" },
];

export default function CompanyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>会社概要</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">COMPANY</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">会社概要</span>
          </div>
          <h1>株式会社<em className="gold">サンステラ</em></h1>
          <p className="lede" style={{ marginTop: 20 }}>
            会社の基本情報をご案内いたします。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <table className="company-table">
            <tbody>
              {rows.map(r => (
                <tr key={r.label}>
                  <th>{r.label}</th>
                  <td>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow">MESSAGE</div>
          <h2 className="h-2" style={{ marginBottom: 32 }}>代表メッセージ</h2>
          <div style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderLeft: "3px solid var(--gold)", borderRadius: "var(--r-lg)",
            padding: "40px 48px",
          }}>
            <p className="body" style={{ marginBottom: 20 }}>
              サンステラは「人と企業をつなぎ、成長の仕組みをつくる」をテーマに、企業の営業活動・集客・バックオフィス業務まで幅広く支援しています。
            </p>
            <p className="body" style={{ marginBottom: 20 }}>
              大企業の標準パッケージに縛られることなく、お客様の規模や状況に合わせたカスタマイズ支援を大切にしています。小回りの利く体制で、細かなご相談にも柔軟にお応えします。
            </p>
            <p className="body">
              「まず相談してみたい」という段階でのご連絡をお待ちしております。一緒に課題を整理し、最適な方法を考えましょう。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2 className="h-2" style={{ marginBottom: 10 }}>
                お気軽に<em className="gold">ご相談</em>ください。
              </h2>
              <p className="body">どんなご相談でも、まずはお声がけください。</p>
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
