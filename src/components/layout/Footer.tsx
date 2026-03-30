import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-3">
              ブランド<span className="text-amber-500">査定</span>ナビ
            </p>
            <p className="text-sm leading-relaxed">
              ブランド品の相見積もりに役立つ情報を提供する比較サイト。
              複数の買取業者を比較して、最高額での売却をサポートします。
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">コンテンツ</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">トップ・業者一覧</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">お役立ちコラム</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/tokushoho" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">無料査定を比較する</p>
            <a
              href="/#companies"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              おすすめ業者を見る
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center space-y-2">
          <p>
            当サイトは情報提供を目的としており、古物の買取・販売は行いません。
          </p>
          <p>© {new Date().getFullYear()} ブランド査定ナビ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
