import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';
import { Blog } from '@/lib/microcms';

type Props = {
  article: Blog;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {/* サムネイル（eyecatchがない場合はプレースホルダー） */}
      <div className="aspect-video bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        {article.eyecatch ? (
          <img
            src={article.eyecatch.url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">👜</span>
        )}
      </div>
      <div className="p-5">
        {article.category && (
          <div className="flex items-center gap-1 mb-2">
            <Tag size={12} className="text-amber-600" />
            <span className="text-xs text-amber-600 font-medium">{article.category}</span>
          </div>
        )}
        <h2 className="text-gray-900 font-semibold leading-snug mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
          {article.title}
        </h2>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Calendar size={12} />
          <time dateTime={article.publishedAt}>
            {new Date(article.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
      </div>
    </Link>
  );
}
