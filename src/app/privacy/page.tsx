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
              <p>当サービスは、ユーザーから氏名・住所・メールアドレスなどの個人情報を直接収集しません。ただし、以下の情報が自動的に収集される場合があります。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>アクセスログ（IPアドレス、ブラウザ情報、参照元URL等）</li>
                <li>Cookie情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">3. 情報の利用目的</h2>
              <p>収集した情報は、以下の目的で利用します。</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>サービスの改善および利便性向上</li>
                <li>アクセス解析による統計データの作成（個人を特定しない形式）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">4. 第三者への提供</h2>
              <p>当サービスは、法令に基づく場合を除き、自動収集した情報を第三者に提供しません。なお、当サービスに掲載のリンクをクリックして外部の買取業者サイトへ移動した場合、その後の情報取り扱いは各業者のプライバシーポリシーに従います。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">5. アフィリエイトについて</h2>
              <p>当サービスはアフィリエイト広告（成果報酬型広告）を利用しています。ユーザーが当サービス経由で外部の買取業者サイトを訪問・申し込みした場合、当サービスに報酬が発生することがあります。ユーザーへの追加費用は一切発生しません。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">6. Cookieの使用</h2>
              <p>当サービスでは、サービス改善・利便性向上のためCookieおよびGoogle Analyticsを使用することがあります。ブラウザの設定によりCookieを無効にすることが可能ですが、一部機能が利用できなくなる場合があります。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">7. プライバシーポリシーの変更</h2>
              <p>当サービスは、必要に応じて本ポリシーを改定することがあります。重要な変更がある場合は、本ページにてお知らせします。</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-gray-800 mb-3">8. お問い合わせ</h2>
              <p>プライバシーポリシーに関するお問い合わせは、お問い合わせいただいた場合、遅滞なく開示いたします。</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
