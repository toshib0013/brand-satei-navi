import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  category?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogListResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ブログ一覧取得
export async function getBlogs(limit = 10, offset = 0): Promise<BlogListResponse> {
  return client.getList<Blog>({
    endpoint: 'blogs',
    queries: { limit, offset },
  });
}

// ブログ詳細取得（slugで）
export async function getBlogBySlug(slug: string): Promise<Blog> {
  const response = await client.getList<Blog>({
    endpoint: 'blogs',
    queries: { filters: `slug[equals]${slug}` },
  });
  if (response.contents.length === 0) throw new Error('Blog not found');
  return response.contents[0];
}
