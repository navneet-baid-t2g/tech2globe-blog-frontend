import Layout from "@/components/layout/Layout";
import BlogArea1 from "@/components/sections/BlogArea1";
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
// import HeroArea1 from "@/components/sections/HeroArea1";

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

  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* <HeroArea1 /> */}
      <BlogArea1 posts={posts} totalPages={totalPages} currentPage={1} />
      <BlogCategories1 />
      <CtaArea1 />
    </Layout>
  );
}
