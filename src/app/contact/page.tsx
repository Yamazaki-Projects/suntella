"use client";

import Link from "next/link";
import { useState } from "react";

type Field = { label: string; name: string; type?: string; required?: boolean; placeholder?: string };

const fields: Field[] = [
  { label: "会社名",           name: "company",  type: "text",  required: false, placeholder: "株式会社〇〇" },
  { label: "お名前",           name: "name",     type: "text",  required: true,  placeholder: "山田 太郎" },
  { label: "メールアドレス",   name: "email",    type: "email", required: true,  placeholder: "example@mail.com" },
  { label: "電話番号",         name: "tel",      type: "tel",   required: false, placeholder: "090-0000-0000" },
];

export default function ContactPage() {
  const [vals, setVals] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!vals.name?.trim())  e.name  = "お名前をご入力ください";
    if (!vals.email?.trim()) e.email = "メールアドレスをご入力ください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) e.email = "正しいメールアドレスを入力してください";
    if (!msg.trim()) e.msg = "お問い合わせ内容をご入力ください";
    if (!agree) e.agree = "プライバシーポリシーへの同意が必要です";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  }

  if (sent) {
    return (
      <main>
        <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: 560 }}>
            <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
            <h1 className="h-2" style={{ marginBottom: 16, color: "var(--gold)" }}>送信完了しました</h1>
            <p className="body" style={{ marginBottom: 32 }}>
              お問い合わせありがとうございます。担当者より1営業日以内にご連絡いたします。
            </p>
            <Link href="/" className="btn btn-gold">トップへ戻る</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-sep">›</span>
            <span>お問い合わせ</span>
          </div>
          <div className="page-hero-meta">
            <span className="page-hero-en">CONTACT</span>
            <span className="page-hero-sep" />
            <span className="page-hero-jp">お問い合わせ</span>
          </div>
          <h1>お気軽に<br /><em className="gold">ご相談</em>ください。</h1>
          <p className="lede" style={{ marginTop: 20 }}>
            ご相談・お見積りは無料です。まずはお気軽にご連絡ください。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* ── サイドパネル ── */}
          <aside className="contact-aside">
            <div className="contact-channel">
              <div className="contact-channel-label">PHONE</div>
              <div className="contact-channel-title">お電話でのご相談</div>
              <div className="contact-channel-value">受付時間：平日 9:00 〜 18:00</div>
              <div className="contact-channel-note">
                お電話でのお問い合わせは、下記メールフォームにてご連絡いただければ折り返しご案内いたします。
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-label">EMAIL</div>
              <div className="contact-channel-title">メールでのご相談</div>
              <div className="contact-channel-value">24時間受付</div>
              <div className="contact-channel-note">
                右のフォームよりお送りください。1営業日以内にご返信いたします。
              </div>
            </div>
            <div className="contact-channel">
              <div className="contact-channel-label">RESPONSE</div>
              <div className="contact-channel-title">ご返信について</div>
              <div className="contact-channel-note">
                お問い合わせ内容を確認の上、担当者よりご連絡いたします。内容によってはお時間をいただく場合がございます。
              </div>
            </div>
          </aside>

          {/* ── フォーム ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {fields.map(f => (
              <div key={f.name} className="field">
                <label className="field-label">
                  {f.label}
                  {f.required && <span className="field-req">必須</span>}
                </label>
                <input
                  className={`field-control${errors[f.name] ? " field-error" : ""}`}
                  type={f.type ?? "text"}
                  placeholder={f.placeholder}
                  value={vals[f.name] ?? ""}
                  onChange={e => {
                    setVals(v => ({ ...v, [f.name]: e.target.value }));
                    setErrors(ev => { const n = { ...ev }; delete n[f.name]; return n; });
                  }}
                />
                {errors[f.name] && <div className="field-err-msg">{errors[f.name]}</div>}
              </div>
            ))}

            <div className="field">
              <label className="field-label">
                お問い合わせ内容 <span className="field-req">必須</span>
              </label>
              <textarea
                className={`field-control${errors.msg ? " field-error" : ""}`}
                rows={6}
                placeholder="ご相談内容・ご質問などをご記入ください"
                value={msg}
                onChange={e => {
                  setMsg(e.target.value);
                  setErrors(ev => { const n = { ...ev }; delete n.msg; return n; });
                }}
              />
              {errors.msg && <div className="field-err-msg">{errors.msg}</div>}
            </div>

            <div className="field">
              <label className="field-agree">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={e => {
                    setAgree(e.target.checked);
                    setErrors(ev => { const n = { ...ev }; delete n.agree; return n; });
                  }}
                />
                <span>プライバシーポリシーに同意する</span>
              </label>
              {errors.agree && <div className="field-err-msg">{errors.agree}</div>}
            </div>

            <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              送信する <span className="arr">→</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
