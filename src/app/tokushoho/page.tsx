import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | ブランド査定ナビ',
};

const items = [
  { label: '販売事業者名', value: '（準備中）' },
  { label: '運営責任者', value: '（準備中）' },
  { label: '所在地', value: '※お問い合わせいただいた場合、遅滞なく開示いたします。' },
  { label: '電話番号', value: '※お問い合わせいただいた場合、遅滞なく開示いたします。' },
  { label: 'メールアドレス / 連絡先', value: 'LINE公式アカウントよりお問い合わせください。' },
  { label: 'サービス内容', value: 'ブランド品の査定相談・業者紹介（情報提供サービス）' },
  { label: '販売価格', value: '無料（当サービスはユーザーへの課金を行いません）' },
  { label: '支払方法', value: '該当なし（無料サービスのため）' },
  { label: '役務の提供時期', value: 'お申し込み後、通常3〜5営業日以内に業者をご案内します。' },
  { label: 'キャンセルについて', value: '査定結果のご案内後も売却の義務はありません。いつでもキャンセル可能です。' },
  {
    label: '古物営業法について',
    value: '当サービスは古物の買取・販売を行いません。情報提供および送客サービスとして運営しており、古物営業法の規制対象外です。',
  },
];

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">特定商取引法に基づく表記</h1>
          <p className="text-sm text-gray-400 mb-10">最終更新日：2025年1月1日</p>

          <div className="divide-y divide-gray-100">
            {items.map((item) => (
              <div key={item.label} className="grid grid-cols-1 md:grid-cols-3 gap-2 py-5">
                <dt className="text-sm font-semibold text-gray-700 md:col-span-1">{item.label}</dt>
                <dd className="text-sm text-gray-600 leading-relaxed md:col-span-2">{item.value}</dd>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
            ※ 当サービスはユーザーへの課金・現物取引を一切行わない無料の情報提供サービスです。古物営業法を遵守し、買取・販売業務は行いません。
          </div>
        </div>
      </div>
    </div>
  );
}
