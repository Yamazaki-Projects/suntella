import Link from "next/link";

const NAV = [
  { jp: "会社案内",     href: "/about" },
  { jp: "事業内容",     href: "/service" },
  { jp: "強み",         href: "/strength" },
  { jp: "ご相談の流れ", href: "/flow" },
  { jp: "会社概要",     href: "/company" },
  { jp: "お問い合わせ", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo-en">SUNSTELLA</div>
            <div className="footer-logo-jp">株式会社サンステラ</div>
            <div className="footer-tagline">企業の成長に必要な「つながり」と「仕組み」をつくります。</div>
          </div>
          <nav className="footer-nav">
            {NAV.map(n => (
              <Link key={n.href} href={n.href}>{n.jp}</Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 株式会社サンステラ All Rights Reserved.</span>
          <span>千葉県八千代市緑が丘1-2-9</span>
        </div>
      </div>
    </footer>
  );
}
