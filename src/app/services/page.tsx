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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <p className="text-amber-600 font-medium text-sm mb-2">SERVICES</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">おすすめ買取業者一覧</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            相見積もりに使える厳選業者をご紹介します。複数社に査定依頼して、最高額を引き出しましょう。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm text-amber-800 leading-relaxed">
          <p className="font-semibold mb-1">相見積もりが大切な理由</p>
          <p>同じ商品でも業者によって査定額が大きく異なります。1社だけで決めずに複数社に依頼して比較することで、最高額を引き出せる可能性が高まります。いずれも査定・キャンセルは無料です。</p>
        </div>
        <p className="text-xs text-gray-400 text-center">※ 当ページはアフィリエイト広告を含みます。</p>

        {companies.map((company, index) => (
          <div key={company.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">No.{index + 1}</span>
                    <span className="text-xs text-amber-600 font-semibold bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">{company.best}に強い</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{company.name}</h2>
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
    </div>
  );
}
