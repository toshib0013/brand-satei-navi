'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Search,
  TrendingUp,
  CheckCircle,
  Users,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// --- FAQ データ ---
const faqs = [
  {
    q: '本当に無料ですか？',
    a: 'はい、完全無料です。査定相談から業者のご紹介まで、お客様に費用は一切かかりません。提携買取業者からの紹介料にて運営しています。',
  },
  {
    q: 'どんな商品でも査定できますか？',
    a: 'バッグ・財布・時計・ジュエリー・アパレルなど、主要ブランドの品物に幅広く対応しています。まずはお気軽にご相談ください。',
  },
  {
    q: '査定から売却まで何日かかりますか？',
    a: '通常3〜5営業日以内に複数業者の査定結果をまとめてご案内します。お急ぎの場合はご相談ください。',
  },
  {
    q: '査定額が低かった場合は？',
    a: '売却の義務は一切ありません。ご提示した査定額にご納得いただけない場合は、そのままお断りいただけます。',
  },
  {
    q: '個人情報は安全ですか？',
    a: 'SSL暗号化通信を採用し、お客様の個人情報はプライバシーポリシーに従い厳重に管理しています。第三者への無断提供は行いません。',
  },
];

// --- ブランドリスト ---
const brands = [
  'LOUIS VUITTON',
  'HERMÈS',
  'CHANEL',
  'GUCCI',
  'PRADA',
  'BOTTEGA VENETA',
  'ROLEX',
  'CARTIER',
  'TIFFANY & Co.',
  'BURBERRY',
];

// --- FAQアコーディオンアイテム ---
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-amber-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-amber-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        {open ? (
          <ChevronUp className="shrink-0 text-amber-500 w-5 h-5" />
        ) : (
          <ChevronDown className="shrink-0 text-amber-500 w-5 h-5" />
        )}
      </button>
      {open && (
        <div className="px-6 py-4 bg-amber-50 text-gray-600 leading-relaxed text-sm">
          {a}
        </div>
      )}
    </div>
  );
}

// --- メインページ ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ===== ナビゲーション ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-lg tracking-wide text-amber-600">
            ブランド査定ナビ
          </span>
          <Link
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06C755] hover:bg-[#05b04b] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            LINEで無料相談
          </Link>
        </div>
      </header>

      {/* ===== セクション1: ヒーローバナー ===== */}
      <section
        className="pt-14 min-h-screen flex items-center"
        style={{
          background:
            'linear-gradient(135deg, #fffbf0 0%, #fff8e6 40%, #fef3d0 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28 w-full">
          {/* 信頼バッジ */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {['査定実績 500件以上', '完全無料', '古物営業法遵守'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                {badge}
              </span>
            ))}
          </div>

          {/* キャッチコピー */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 text-center md:text-left mb-5">
            あなたのブランド品、
            <br />
            <span className="text-amber-500">まだ損してませんか？</span>
          </h1>

          {/* サブコピー */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center md:text-left max-w-xl mb-10">
            複数業者への相見積もりを代行。最高額を引き出す査定参謀サービス。
            <br className="hidden sm:inline" />
            あなたは写真を送るだけ。面倒な交渉はすべてお任せください。
          </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b04b] active:scale-95 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              LINEで無料査定を相談する
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold text-base px-8 py-4 rounded-full transition-colors"
            >
              サービスの流れを見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== セクション2: サービスの流れ ===== */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            たった<span className="text-amber-500">3ステップ</span>で完了
          </h2>
          <p className="text-center text-gray-500 mb-12">
            面倒な手続きは一切不要。スマホひとつで始められます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: <MessageCircle className="w-8 h-8 text-amber-500" />,
                title: '査定申し込み',
                desc: 'LINEで商品の写真と情報を送るだけ。専門スタッフが丁寧にヒアリングします。',
              },
              {
                step: '02',
                icon: <Search className="w-8 h-8 text-amber-500" />,
                title: '業者交渉を代行',
                desc: '複数の専門買取業者へ一斉査定依頼。最高額を引き出すよう交渉を代行します。',
              },
              {
                step: '03',
                icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
                title: '最高額でご売却',
                desc: '最高額の業者をご案内。あとはお客様が直接売るだけ。手数料は一切なし。',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute top-5 right-6 text-4xl font-black text-amber-100 select-none">
                  {item.step}
                </span>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション3: 選ばれる理由 ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            ブランド査定ナビが<span className="text-amber-500">選ばれる理由</span>
          </h2>
          <p className="text-center text-gray-500 mb-12">
            お客様の利益を最大化するために、徹底したサービスをご提供します。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="w-7 h-7 text-amber-500" />,
                title: '完全無料',
                desc: '査定相談から業者紹介まで一切費用なし。隠れた手数料は一切ありません。',
              },
              {
                icon: <Users className="w-7 h-7 text-amber-500" />,
                title: '複数業者に一括交渉',
                desc: '自分で何社も連絡する手間ゼロ。一度のご依頼で複数業者を比較できます。',
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
                title: '法令遵守の安心サービス',
                desc: '古物営業法を遵守。現物預かり・買取は行わず、あくまで業者紹介に徹します。',
              },
              {
                icon: <Star className="w-7 h-7 text-amber-500" />,
                title: 'ブランド専門の知識',
                desc: 'ルイヴィトン・エルメス・シャネルなど主要ブランドの相場に精通したスタッフが対応。',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション4: 対応ブランド ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            対応ブランド<span className="text-gray-400 text-xl font-normal ml-2">（一部）</span>
          </h2>
          <p className="text-center text-gray-500 mb-12">
            記載以外のブランドもご相談ください。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center border border-amber-200 bg-amber-50 hover:bg-amber-100 rounded-xl py-4 px-3 text-center transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-amber-800 tracking-wide leading-tight">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション5: FAQ ===== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            よくある<span className="text-amber-500">ご質問</span>
          </h2>
          <p className="text-center text-gray-500 mb-12">
            ご不明な点があればお気軽にLINEでご相談ください。
          </p>

          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション6: 最終CTA ===== */}
      <section
        className="py-24"
        style={{
          background:
            'linear-gradient(135deg, #fef3d0 0%, #fff8e6 50%, #fffbf0 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            今すぐ<span className="text-amber-500">無料査定</span>を相談する
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            写真を送るだけで、あとはすべてお任せ。
            <br />
            最高額での売却をサポートします。
          </p>

          <Link
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b04b] active:scale-95 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで無料査定を相談する
          </Link>

          <p className="mt-5 text-sm text-gray-400">
            査定は完全無料・売却の義務なし
          </p>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p className="font-semibold text-white mb-2">ブランド査定ナビ</p>
          <p className="mb-4">
            古物営業法を遵守し、適切な業者紹介サービスを提供しています。
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ブランド査定ナビ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
