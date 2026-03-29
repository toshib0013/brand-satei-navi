import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'お問い合わせ | ブランド査定ナビ',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせ</h1>
          <p className="text-sm text-gray-500 mb-8">
            サービスに関するご質問・ご要望は下記フォームよりお気軽にお問い合わせください。
            通常2〜3営業日以内にご返信いたします。
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScogTahdKj0pdpoiTdUnJuNztZmKIcgankSXjafYlH0KtuIog/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-base"
          >
            お問い合わせフォームを開く
          </a>

          <p className="mt-6 text-xs text-gray-400 text-center">
            ※ Googleフォームが開きます
          </p>

          <div className="mt-10 pt-8 border-t border-gray-100 text-sm text-gray-500 space-y-2">
            <p className="font-semibold text-gray-700">よくあるお問い合わせ</p>
            <p>・査定に関するご相談 → <Link href="/" className="text-amber-600 hover:underline">サービス案内</Link>をご覧ください</p>
            <p>・個人情報の取り扱い → <Link href="/privacy" className="text-amber-600 hover:underline">プライバシーポリシー</Link>をご覧ください</p>
          </div>
        </div>
      </div>
    </div>
  );
}
