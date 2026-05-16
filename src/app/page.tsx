const services = [
  { icon: "🤝", title: "営業代行・営業支援",        desc: "法人向けサービスや商品の営業活動を支援。見込み顧客開拓から商談機会の創出までサポートします。" },
  { icon: "📣", title: "販売促進・マーケティング支援", desc: "商品・サービスの魅力を整理し、販促企画・広告宣伝・集客導線づくりを支援します。" },
  { icon: "🎤", title: "セミナー・イベント運営",      desc: "各種セミナー・講習会・研修・イベントの企画・運営をサポートします。" },
  { icon: "💻", title: "Web・EC活用支援",            desc: "ホームページ・ECサイト・通信販売などの企画・制作・運用を支援します。" },
  { icon: "💄", title: "美容クリニック向け営業支援",  desc: "美容クリニック・美容関連事業者に向けた営業支援・集客支援・提携先開拓などをサポートします。" },
  { icon: "📋", title: "事務代行・バックオフィス支援", desc: "経営・労務・総務・経理などの事務代行業務を通じて、事業運営を支援します。" },
];

const strengths = [
  { title: "営業から運営まで一貫支援",    desc: "営業代行だけでなく、販売促進・Web活用・事務支援まで幅広く対応可能。ワンストップで事業成長を支えます。" },
  { title: "法人向け支援に特化",          desc: "企業同士のつながりを活かし、法人向けサービスの営業支援に特化した実績とノウハウがあります。" },
  { title: "美容・ヘルスケア領域にも対応", desc: "美容クリニックや美容関連サービスの営業支援にも対応し、業界特性に合わせた提案が可能です。" },
  { title: "柔軟な対応力",               desc: "小回りの利く体制で、細かな相談にも柔軟に対応。お客様の状況に合わせてカスタマイズします。" },
];

const flow = [
  { title: "お問い合わせ", desc: "LINE・メール・お電話にてお気軽にご相談ください。" },
  { title: "ヒアリング",   desc: "現在の課題やご希望の内容を丁寧に確認します。" },
  { title: "ご提案",       desc: "目的に合わせた最適な支援内容をご提案します。" },
  { title: "サポート開始", desc: "ご契約後、具体的な支援を迅速に開始します。" },
];

const companyInfo = [
  ["会社名",      "株式会社サンステラ"],
  ["代表者",      "代表取締役　掛 奈央子"],
  ["所在地",      "〒276-0049　千葉県八千代市緑が丘1-2-9 アクトヒルズ八千代305"],
  ["電話番号",    "090-5701-7525"],
  ["メール",      "naoko8894@gmail.com"],
  ["事業内容",    "営業代行 / 販売促進支援 / 法人向け事業紹介 / 美容クリニック営業支援 / Web・EC活用支援 / セミナー運営 / 事務代行"],
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
            <a href="#contact" className="btn btn-gold">
              無料相談を申し込む <span className="arr">→</span>
            </a>
            <a href="#service" className="btn btn-outline">
              事業内容を見る
            </a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          SCROLL
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-deco">
              <span className="about-deco-text">S</span>
              <div className="about-deco-badge">
                <div className="about-badge-label">ESTABLISHED</div>
                <div className="about-badge-value">株式会社サンステラ</div>
              </div>
            </div>
            <div>
              <div className="eyebrow">ABOUT US</div>
              <h2 className="h-1" style={{ marginBottom: 28 }}>人と企業をつなぎ、<br /><em className="gold">成長の仕組み</em>をつくる。</h2>
              <div className="about-body">
                <p className="body">
                  株式会社サンステラは、法人向けの営業支援・営業代行・販売促進・Web&amp;EC活用・セミナー運営・美容クリニック向け営業支援などを通じて、企業の事業成長をサポートしています。
                </p>
                <p className="body">
                  人と人、企業と企業をつなぎ、必要なサービスが必要な相手に届く仕組みづくりを大切にし、柔軟かつ実行力のある支援を行っています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section section-tint" id="service">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">OUR SERVICES</div>
            <h2 className="h-1">事業内容</h2>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRENGTHS ═══ */}
      <section className="section" id="strength">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">OUR STRENGTHS</div>
            <h2 className="h-1">サンステラの<em className="gold">強み</em></h2>
          </div>
          <div className="strengths-grid">
            {strengths.map((s, i) => (
              <div className="strength-card" key={s.title}>
                <div className="strength-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="strength-title">{s.title}</div>
                  <div className="strength-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FLOW ═══ */}
      <section className="section section-tint" id="flow">
        <div className="container">
          <div className="section-head center">
            <div className="eyebrow">HOW IT WORKS</div>
            <h2 className="h-1">ご相談の流れ</h2>
          </div>
          <div className="flow-wrap">
            <div className="flow-list">
              {flow.map((f, i) => (
                <div className="flow-step" key={f.title}>
                  <div className="flow-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="flow-title">{f.title}</div>
                  <div className="flow-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPANY ═══ */}
      <section className="section" id="company">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="section-head center">
            <div className="eyebrow">COMPANY INFO</div>
            <h2 className="h-1">会社概要</h2>
          </div>
          <div className="company-table">
            {companyInfo.map(([k, v]) => (
              <div className="company-row" key={k}>
                <dt className="company-th">{k}</dt>
                <dd className="company-td">{v}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="section section-tint" id="contact">
        <div className="container">
          <div className="contact-card">
            <div>
              <div className="eyebrow">CONTACT</div>
              <h2 className="h-2" style={{ marginBottom: 16 }}>ご相談・お問い合わせ</h2>
              <p className="body">
                ご相談・お問い合わせは、お電話またはメールにてお気軽にご連絡ください。
                現在の課題やご希望を伺い、最適な支援内容をご提案いたします。
              </p>
            </div>
            <div className="contact-methods">
              <a href="tel:09057017525" className="contact-method">
                <div className="contact-method-icon">📞</div>
                <div>
                  <div className="contact-method-label">TEL</div>
                  <div className="contact-method-value">090-5701-7525</div>
                </div>
              </a>
              <a href="mailto:naoko8894@gmail.com" className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div>
                  <div className="contact-method-label">MAIL</div>
                  <div className="contact-method-value">naoko8894@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-logo-en">SUNTELLA</div>
              <div className="footer-logo-jp">株式会社サンステラ</div>
              <div className="footer-tagline">企業の成長に必要な「つながり」と「仕組み」をつくります。</div>
            </div>
            <nav className="footer-nav">
              <a href="#about">会社案内</a>
              <a href="#service">事業内容</a>
              <a href="#strength">強み</a>
              <a href="#flow">ご相談の流れ</a>
              <a href="#company">会社概要</a>
              <a href="#contact">お問い合わせ</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} 株式会社サンステラ All Rights Reserved.</span>
            <span>千葉県八千代市緑が丘1-2-9 アクトヒルズ八千代305</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
