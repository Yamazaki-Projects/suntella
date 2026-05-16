"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { en: "ABOUT",    jp: "会社案内",   href: "#about" },
  { en: "SERVICE",  jp: "事業内容",   href: "#service" },
  { en: "STRENGTH", jp: "強み",       href: "#strength" },
  { en: "FLOW",     jp: "ご相談の流れ", href: "#flow" },
  { en: "COMPANY",  jp: "会社概要",   href: "#company" },
  { en: "CONTACT",  jp: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo-link">
          <span className="logo-en">SUNTELLA</span>
          <span className="logo-jp">株式会社サンステラ</span>
        </Link>

        <nav className="header-nav">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="nav-item">{n.en}</a>
          ))}
        </nav>

        <div className="header-cta">
          <a href="#contact" className="btn btn-gold btn-sm" style={{ padding: "10px 22px", fontSize: 13 }}>
            お問い合わせ <span className="arr">→</span>
          </a>
          <button
            className="hamburger"
            aria-label="メニュー"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-drawer">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className="drawer-link"
              onClick={() => setOpen(false)}
            >
              <span className="drawer-link-jp">{n.jp}</span>
              <span className="drawer-link-en">{n.en}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
