import { Metadata } from 'next';
import { ExternalLink, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'おすすめ買取業者一覧 | ブランド査定ナビ',
  description: '相見積もりに使えるおすすめのブランド買取業者を厳選してご紹介します。',
};

const companies = [
  {
    name: 'KOMEHYO（コメ兵）',
    tagline: '創業78年・全国190店舗の老舗ブランド買取',
    description:
      '業界トップクラスの実績を誇る老舗買取業者。専門バイヤーによる公正な査定と、自社オークション・190店舗の販売力で高額査定を実現。店頭・郵送・出張・LINE査定に対応しています。',
    features: [
      '査定料・送料・キャンセル料すべて無料',
      '全国190店舗で店頭査定も可能',
      'ルイヴィトン・エルメス・ロレックスなど高級ブランド多数対応',
      '予約不要・身分証なしで査定依頼OK',
    ],
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZR8S+8IM9BM+3VEM+BXQOH',
    label: 'コメ兵に無料査定を依頼する',
    accentColor: 'amber',
  },
  {
    name: 'フクウロ',
    tagline: '6,000ブランド対応・最短即日振込の宅配買取',
    description:
      '20年以上の事業歴と年間100万着以上の買取実績を持つ宅配買取専門サービス。6,000以上のブランドに対応し、査定結果は最短即日。梱包材も無料で送ってもらえます。',
    features: [
      '査定料・送料・キャンセル料すべて無料',
      '6,000以上のブランドに対応',
      '最短即日査定・即日振込',
      '24時間いつでも申し込み可能',
    ],
    href: 'https://px.a8.net/svt/ejp?a8mat=4AZR8S+7L9ZG2+3J44+BXQOI',
    label: 'フクウロに無料査定を依頼する',
    accentColor: 'blue',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-amber-600 font-medium text-sm mb-2">SERVICES</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">おすすめ買取業者一覧</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            相見積もりに使える厳選業者をご紹介します。複数社に査定依頼して、最高額を引き出しましょう。
          </p>
        </div>
      </div>

      {/* 業者一覧 */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        {/* 相見積もりのすすめ */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 leading-relaxed">
          <p className="font-semibold mb-1">相見積もりが大切な理由</p>
          <p>同じ商品でも業者によって査定額が大きく異なります。1社だけで決めずに、複数社に依頼して比較することで、最高額を引き出せる可能性が高まります。いずれも査定は無料・キャンセルも無料です。</p>
        </div>

        {/* 業者カード */}
        {companies.map((company) => (
          <div key={company.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">{company.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{company.tagline}</p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{company.description}</p>

              <ul className="space-y-2 mb-6">
                {company.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={company.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                {company.label}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        ))}

        {/* 注意書き */}
        <p className="text-xs text-gray-400 text-center leading-relaxed">
          ※ 当ページのリンクはアフィリエイト広告を含みます。査定・キャンセルはすべて無料です。売却の義務はありません。
        </p>
      </div>
    </div>
  );
}
