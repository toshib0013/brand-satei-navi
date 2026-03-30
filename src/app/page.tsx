'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  TrendingUp,
  CheckCircle,
  Users,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

// --- 買取業者データ（提携が増えたらここに追加）---
const companies = [
  {
    name: 'KOMEHYO（コメ兵）',
    tagline: '創業78年・全国190店舗の老舗ブランド買取',
    description: '業界トップクラスの実績を誇る老舗買取業者。専門バイヤーによる公正な査定と、自社オークション・190店舗の販売力で高額査定を実現。',
    features: ['査定料・送料・キャンセル料すべて無料', '店頭・郵送・出張・LINE査定に対応', 'ルイヴィトン・エルメス・ロレックスなど幅広く対応', '予約不要・身分証なしで査定依頼OK'],
    best: 'ブランドバッグ・時計全般',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZR8S+8IM9BM+3VEM+BXQOH',
  },
  {
    name: 'フクウロ',
    tagline: '6,000ブランド対応・最短即日振込の宅配買取',
    description: '20年以上の事業歴と年間100万着以上の買取実績。6,000以上のブランドに対応し、査定結果は最短即日。梱包材も無料で届けてもらえます。',
    features: ['査定料・送料・キャンセル料すべて無料', '6,000以上のブランドに対応', '最短即日査定・即日振込', '24時間いつでも申し込み可能'],
    best: 'アパレル・マイナーブランド',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZR8S+7L9ZG2+3J44+BXQOI',
  },
  {
    name: '福ちゃん',
    tagline: '多ジャンル対応・出張・宅配・店頭すべてOK',
    description: 'ブランド品から着物・骨董品・切手・古銭まで幅広く対応。専門の査定士が丁寧に査定し、出張料・査定料・振込手数料はすべて無料です。',
    features: ['出張・宅配・店頭の3つから選べる', 'ブランド品から着物・骨董品まで多ジャンル対応', '出張料・査定料・振込手数料すべて無料', '売却の義務なし・キャンセル無料'],
    best: '着物・骨董品・多ジャンル',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZS0Q+B0IPO2+35HU+2HB8GI',
  },
  {
    name: 'ブランドオフ',
    tagline: 'AACD会員・ブランド専門の出張買取',
    description: '日本流通自主管理協会（AACD）会員として偽造品排除に取り組む信頼性の高いブランド専門業者。専門の判定士がバッグ・時計などを厳格に査定します。',
    features: ['ブランド品専門の査定士が対応', 'AACD会員の信頼できる業者', '出張買取対応', '偽造品排除の厳格な管理体制'],
    best: 'ブランドバッグ・時計',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZS0Q+B5VM42+56WW+HV7V6',
  },
  {
    name: 'セカンドストリート（出張買取）',
    tagline: '年間7,000万点の買取実績・その場で現金払い',
    description: '全国展開の大手リユースチェーン（ゲオグループ）。スタッフが自宅に訪問してその場で査定・現金払い。ブランド品から家具・家電・衣類まで幅広く対応します。',
    features: ['スタッフ訪問・その場で現金払い', 'ブランド品・洋服・家具・家電など幅広く対応', '年間7,000万点の豊富な買取実績', '全国対応の出張買取'],
    best: '多品目まとめて売りたい方',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZS0Q+B7NWXE+4J34+15RCDE',
  },
  {
    name: 'ネットオフ',
    tagline: '1点から対応・宅配買取の老舗',
    description: '宅配買取専門サービス。本・CD・ゲームから始まり、ブランド品・洋服・金・家電まで幅広く対応。査定結果を確認してから承認できるので安心です。',
    features: ['1点から買取対応', '送料・手数料すべて無料', '査定結果を確認してから承認・返送も可能', 'ブランド品から本・ゲームまで幅広く対応'],
    best: '少量・本やゲームと一緒に売りたい方',
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZS0Q+B89CJ6+1SOW+HWI5U',
  },
];

// --- FAQ データ ---
const faqs = [
  {
    q: 'このサイトの利用は無料ですか？',
    a: 'はい、完全無料です。当サイトは提携買取業者からのアフィリエイト報酬で運営しており、ユーザーの皆様に費用は一切かかりません。',
  },
  {
    q: '複数の業者に申し込んでもいいですか？',
    a: 'はい、むしろ複数社に申し込むことをおすすめします。業者によって得意なブランドや査定額が異なるため、相見積もりを取ることで最高額を引き出せます。査定・キャンセルはすべて無料です。',
  },
  {
    q: '査定額が低かった場合は？',
    a: '売却の義務は一切ありません。査定額にご納得いただけない場合はそのままお断りいただけます。キャンセル料も無料です。',
  },
  {
    q: 'どんな商品でも査定できますか？',
    a: 'バッグ・財布・時計・ジュエリー・アパレルなど、主要ブランドの品物に幅広く対応しています。掲載業者によって得意ジャンルが異なるため、複数社への申し込みをおすすめします。',
  },
  {
    q: '掲載業者はどのように選んでいますか？',
    a: '査定実績・対応ブランド数・手数料・口コミ等を考慮して厳選しています。当サイトはアフィリエイト広告を含みますが、選定基準はユーザーにとっての利便性を優先しています。',
  },
];

// --- FAQアコーディオン ---
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-amber-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-amber-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        {open ? <ChevronUp className="shrink-0 text-amber-500 w-5 h-5" /> : <ChevronDown className="shrink-0 text-amber-500 w-5 h-5" />}
      </button>
      {open && <div className="px-6 py-4 bg-amber-50 text-gray-600 leading-relaxed text-sm">{a}</div>}
    </div>
  );
}

// --- メインページ ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* ===== セクション1: ヒーローバナー ===== */}
      <section
        className="pt-14 min-h-[80vh] flex items-center"
        style={{ background: 'linear-gradient(135deg, #fffbf0 0%, #fff8e6 40%, #fef3d0 100%)' }}
      >
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-28 w-full">
          <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
            {['完全無料', '古物営業法遵守', '売却義務なし'].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1 bg-white border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <CheckCircle className="w-3.5 h-3.5" />{badge}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 text-center md:text-left mb-5">
            あなたのブランド品、<br />
            <span className="text-amber-500">まだ損してませんか？</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center md:text-left max-w-xl mb-10">
            相見積もりで最高額を引き出す。業者ごとの強みや相場情報をもとに、<br className="hidden sm:inline" />
            あなたのブランド品に最適な買取業者をご案内します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#companies"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all"
            >
              <Search className="w-5 h-5" />
              おすすめ業者を比較する
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold text-base px-8 py-4 rounded-full transition-colors"
            >
              査定の流れを見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== セクション2: 買取業者一覧 ===== */}
      <section id="companies" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            おすすめ<span className="text-amber-500">買取業者一覧</span>
          </h2>
          <p className="text-center text-gray-500 mb-4">
            複数社に申し込んで査定額を比較するのが最高額への近道です。
          </p>
          <p className="text-center text-xs text-gray-400 mb-12">※ 当ページはアフィリエイト広告を含みます。査定・キャンセルはすべて無料です。</p>

          <div className="space-y-6">
            {companies.map((company, index) => (
              <div key={company.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                          No.{index + 1}
                        </span>
                        <span className="text-xs text-amber-600 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                          {company.best}に強い
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{company.tagline}</p>
                    </div>
                    <a
                      href={company.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm shrink-0"
                    >
                      無料査定を申し込む
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{company.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {company.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-green-500 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <p className="text-sm font-semibold text-amber-800 mb-1">相見積もりのすすめ</p>
            <p className="text-sm text-amber-700">同じ商品でも業者によって査定額が2〜3倍異なることがあります。<br className="hidden sm:inline" />複数社に申し込んで比較するのが最高額を引き出す唯一の方法です。</p>
          </div>
        </div>
      </section>

      {/* ===== セクション3: 査定の流れ ===== */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            たった<span className="text-amber-500">3ステップ</span>で完了
          </h2>
          <p className="text-center text-gray-500 mb-12">面倒な手続きは一切不要。スマホひとつで始められます。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                icon: <Search className="w-8 h-8 text-amber-500" />,
                title: '業者を選ぶ',
                desc: '上の一覧からあなたの商品に合いそうな業者を選びましょう。複数社への申し込みをおすすめします。',
              },
              {
                step: '02',
                icon: <Users className="w-8 h-8 text-amber-500" />,
                title: '無料査定を申し込む',
                desc: '各業者のサイトで無料査定を申し込み。査定料・送料・キャンセル料はすべて無料です。',
              },
              {
                step: '03',
                icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
                title: '最高額の業者で売却',
                desc: '複数社の査定額を比較して、最高額の業者を選ぶだけ。売却の義務は一切ありません。',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gradient-to-b from-amber-50 to-white border border-amber-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute top-5 right-6 text-4xl font-black text-amber-100 select-none">{item.step}</span>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション4: このサイトについて ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            ブランド査定ナビが<span className="text-amber-500">選ばれる理由</span>
          </h2>
          <p className="text-center text-gray-500 mb-12">相見積もりに役立つ情報を厳選してお届けします。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="w-7 h-7 text-amber-500" />,
                title: '完全無料で利用できる',
                desc: '当サイトの利用は完全無料。隠れた費用は一切ありません。',
              },
              {
                icon: <Users className="w-7 h-7 text-amber-500" />,
                title: '複数業者をまとめて比較',
                desc: '厳選した買取業者を一覧で比較。自分で調べる手間を省けます。',
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
                title: '安心の情報提供サービス',
                desc: '古物営業法を遵守。現物預かり・買取は行わず、情報提供に徹します。',
              },
              {
                icon: <Star className="w-7 h-7 text-amber-500" />,
                title: '相場情報コラムも充実',
                desc: 'ブランドごとの買取相場や査定のコツをブログで発信しています。',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== セクション6: FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
            よくある<span className="text-amber-500">ご質問</span>
          </h2>
          <p className="text-center text-gray-500 mb-12">ご不明な点はお問い合わせページからご連絡ください。</p>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ===== セクション7: 最終CTA ===== */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #fef3d0 0%, #fff8e6 50%, #fffbf0 100%)' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            まずは<span className="text-amber-500">複数社に申し込んで</span>比較しよう
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            査定・キャンセルはすべて無料。<br />
            相見積もりが最高額への近道です。
          </p>
          <a
            href="#companies"
            className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl transition-all"
          >
            <Search className="w-6 h-6" />
            買取業者一覧を見る
          </a>
          <p className="mt-5 text-sm text-gray-400">完全無料・売却の義務なし</p>
        </div>
      </section>

      {/* ===== フッター ===== */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm">
          <p className="font-semibold text-white mb-2">ブランド査定ナビ</p>
          <p className="mb-4">古物営業法を遵守し、適切な業者紹介サービスを提供しています。</p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} ブランド査定ナビ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
