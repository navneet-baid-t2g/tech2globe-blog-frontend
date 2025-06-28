import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
import BlogArea1 from "@/components/sections/BlogArea1";


export async function generateStaticParams() {
  return [{ page: "1" }, { page: "2" }, { page: "3" }];
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
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts?page=${currentPage}&limit=${limit}`,
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
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <BlogArea1 posts={posts} totalPages={totalPages} currentPage={currentPage} />
      <BlogCategories1 />
      <CtaArea1 />
    </Layout>
  );
}
