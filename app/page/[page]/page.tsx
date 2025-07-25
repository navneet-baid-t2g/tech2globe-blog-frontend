import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
import BlogArea1 from "@/components/sections/BlogArea1";
import HeroArea5 from "@/components/sections/HeroArea5";


export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_BASE_PATH}/posts?page=1&limit=200`);

  if (!res.ok) {
    return [];
  }

  const json = await res.json();
  const totalPages = json?.data?.pagination?.totalPages || 1;

  const params = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return params;
}
export type RecentBlogPosts={
	ID: number;
    post_author: number;
    post_date: string;
    post_modified: string;
    post_content: string;
    post_excerpt: string;
    post_status: string;
    post_name: string;
    thumbnail_url: string;
    author_name: string;
    categories: string;
    tags: string;
}
async function getRecentPosts(): Promise<RecentBlogPosts[]> {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`
  );
  const json = await res.json();
  const recentPosts = json.data.posts.slice(0, 3);
  return recentPosts;
}
export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params

  if (!page || isNaN(Number(page)) || Number(page) < 1) {
    notFound();
  }

  const currentPage = parseInt(page, 10);
  const limit = 20;

  const res = await fetch(
    `${process.env.API_BASE_PATH}/posts?page=${currentPage}&limit=${limit}`,
    {
      next: { revalidate: 600 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  const json = await res.json();
  const posts = json?.data?.posts || [];
  const totalPages = json?.data?.pagination?.totalPages || 1;

  if (currentPage > totalPages) {
    notFound();
  }
  	const recentPosts = await getRecentPosts();

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <HeroArea5 pageNumber={currentPage}/>
      <BlogArea1 posts={posts} totalPages={totalPages} currentPage={currentPage} recentPosts={recentPosts} />
      <BlogCategories1 />
      <CtaArea1 />
    </Layout>
  );
}
