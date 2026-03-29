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
              ブランド品の最高額査定を引き出す、相見積もり・交渉参謀サービス。
              複数業者への交渉を代行し、あなたの大切なブランド品を最高額で売れるようサポートします。
            </p>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">コンテンツ</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">サービス案内</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">お役立ちコラム</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/tokushoho" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold mb-3">お問い合わせ</p>
            <Link
              href="https://line.me"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              LINEで無料査定
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-xs text-center space-y-2">
          <p>
            当サービスは情報提供・送客を目的としており、古物の買取・販売は行いません。
          </p>
          <p>© 2025 ブランド査定ナビ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
