import { Metadata } from 'next';
import ArticleCard from '@/components/blog/ArticleCard';
import { mockBlogs } from '@/lib/mockBlogs';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'お役立ちコラム | ブランド査定ナビ',
  description: 'ブランド品を高く売るためのコツや査定相場情報を発信しています。',
};

async function getArticles() {
  // microCMSの環境変数が設定されている場合は本番データを使用
  if (process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY) {
    try {
      const { getBlogs } = await import('@/lib/microcms');
      return await getBlogs(12);
    } catch {
      return { contents: mockBlogs, totalCount: mockBlogs.length };
    }
  }
  return { contents: mockBlogs, totalCount: mockBlogs.length };
}

export default async function BlogPage() {
  const { contents: articles } = await getArticles();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ページヘッダー */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <p className="text-amber-600 font-medium text-sm mb-2">COLUMN</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">お役立ちコラム</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            ブランド品を少しでも高く売るためのノウハウや、最新の買取相場情報をお届けします。
          </p>
        </div>
      </div>

      {/* 記事一覧 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {articles.length === 0 ? (
          <p className="text-center text-gray-400 py-20">記事がありません</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <p className="text-gray-700 font-semibold text-lg mb-2">複数の業者に査定を依頼して最高額を目指そう</p>
          <p className="text-gray-500 text-sm mb-6">査定・キャンセルはすべて無料。売却の義務はありません。</p>
          <Link
            href="/services"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            おすすめ買取業者を見る
          </Link>
        </div>
      </div>
    </div>
  );
}
