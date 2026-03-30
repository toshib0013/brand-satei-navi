import { Metadata } from 'next';

export const revalidate = 60;
import Link from 'next/link';
import { Calendar, Tag, ChevronLeft } from 'lucide-react';
import { mockBlogs } from '@/lib/mockBlogs';
import { Blog } from '@/lib/microcms';
import { notFound } from 'next/navigation';

async function getArticle(slug: string): Promise<Blog | null> {
  if (process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY) {
    try {
      const { getBlogBySlug } = await import('@/lib/microcms');
      return await getBlogBySlug(slug);
    } catch {
      // fallthrough to mock
    }
  }
  return mockBlogs.find((b) => b.slug === slug) ?? null;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: '記事が見つかりません' };
  return {
    title: `${article.title} | ブランド査定ナビ`,
    description: article.content.replace(/<[^>]+>/g, '').slice(0, 120),
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* パンくず */}
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-amber-600 mb-8 transition-colors">
          <ChevronLeft size={16} />
          コラム一覧に戻る
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* サムネイル */}
          {article.eyecatch ? (
            <img
              src={article.eyecatch.url}
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
          ) : (
            <div className="w-full aspect-video bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
              <span className="text-6xl">👜</span>
            </div>
          )}

          <div className="p-6 md:p-10">
            {/* メタ情報 */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {article.category && (
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full border border-amber-200">
                  <Tag size={11} />
                  {article.category}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-gray-400 text-xs">
                <Calendar size={12} />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </span>
            </div>

            {/* タイトル */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
              {article.title}
            </h1>

            {/* 本文 — @tailwindcss/typography 未導入のためTailwindクラスで代替 */}
            <div
              className="[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:text-gray-600 [&_li]:leading-relaxed [&_a]:text-amber-600 [&_a]:underline [&_strong]:font-semibold [&_strong]:text-gray-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* 記事末尾CTA */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <p className="text-gray-800 font-bold text-lg mb-2">あなたのブランド品、いくらで売れる？</p>
          <p className="text-gray-500 text-sm mb-5">
            複数の業者に無料査定を依頼して、最高額を比較しましょう。
          </p>
          <Link
            href="/services"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            おすすめ買取業者を見る
          </Link>
          <p className="text-xs text-gray-400 mt-3">完全無料・売却の義務なし</p>
        </div>

        {/* 記事一覧に戻る */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sm text-gray-500 hover:text-amber-600 transition-colors underline underline-offset-4">
            コラム一覧をもっと見る
          </Link>
        </div>
      </div>
    </div>
  );
}
