import Layout from "@/components/layout/Layout";
import BlogArea1 from "@/components/sections/BlogArea1";
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
import HeroArea5 from "@/components/sections/HeroArea5";
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
export default async function Home() {
  const limit = 20;
  const res = await fetch(
    `${process.env.API_BASE_PATH}/posts?page=1&limit=${limit}`,
    {
      next: { revalidate: 600 },
    }
  );

  const json = await res.json();
  const posts = json?.data?.posts || [];
  const totalPages = json?.data?.pagination?.totalPages || 1;
	const recentPosts = await getRecentPosts();

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <HeroArea5 pageNumber={1}/>
      <BlogArea1 posts={posts} totalPages={totalPages} currentPage={1} recentPosts={recentPosts} />
      <BlogCategories1 />
      <CtaArea1 />
    </Layout>
  );
}
