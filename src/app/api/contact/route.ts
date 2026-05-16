import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { company, name, email, tel, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "株式会社サンステラ <onboarding@resend.dev>",
    to: ["rakutenshop.yamazaki@gmail.com"],
    replyTo: email,
    subject: `【サンステラ】お問い合わせ：${name}様`,
    text: [
      `会社名：${company || "未記入"}`,
      `お名前：${name}`,
      `メールアドレス：${email}`,
      `電話番号：${tel || "未記入"}`,
      "",
      "【お問い合わせ内容】",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
