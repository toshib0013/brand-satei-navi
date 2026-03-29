import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | ブランド査定ナビ',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
          <p className="text-sm text-gray-400 mb-10">最終更新日：2025年1月1日</p>

          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">1. 基本方針</h2>
              <p>ブランド査定ナビ（以下「当サービス」）は、ユーザーの個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律（個人情報保護法）をはじめとする関連法令を遵守し、適切に取り扱います。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">2. 収集する情報</h2>
              <p>当サービスでは、以下の情報を収集することがあります。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>お名前（ニックネーム可）</li>
                <li>LINEアカウント情報</li>
                <li>査定を希望するブランド品に関する情報（商品写真・状態等）</li>
                <li>当サービス利用に関するアクセスログ・Cookie情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">3. 情報の利用目的</h2>
              <p>収集した情報は、以下の目的で利用します。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>査定に関するご案内・業者紹介サービスの提供</li>
                <li>サービス改善およびお問い合わせへの対応</li>
                <li>統計データの作成（個人を特定しない形式）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">4. 第三者への提供</h2>
              <p>当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>ユーザーご本人の同意がある場合</li>
                <li>法令に基づき開示が必要な場合</li>
                <li>業者紹介のために必要な最小限の情報を提携業者に提供する場合（事前に同意を得た場合に限る）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">5. Cookieの使用</h2>
              <p>当サービスでは、サービス改善・利便性向上のためCookieおよびGoogle Analyticsを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が利用できなくなる場合があります。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">6. 情報の管理</h2>
              <p>収集した個人情報は、SSL暗号化通信により保護し、不正アクセス・紛失・漏洩等が起きないよう適切に管理します。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">7. 個人情報の開示・訂正・削除</h2>
              <p>ユーザーご本人から個人情報の開示・訂正・削除のご要望があった場合は、本人確認の上、合理的な期間内に対応いたします。ご連絡はLINE公式アカウントまでお願いします。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">8. プライバシーポリシーの変更</h2>
              <p>当サービスは、必要に応じて本ポリシーを改定することがあります。重要な変更がある場合は、本ページにてお知らせします。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">9. お問い合わせ</h2>
              <p>プライバシーポリシーに関するお問い合わせは、LINE公式アカウントよりご連絡ください。</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
