import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogArea1 from "@/components/sections/BlogArea1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import CtaArea1 from "@/components/sections/CtaArea1";
type PageProps = {
  params: Promise<{ category_slug: string; page: string }>;
};
export type RecentBlogPosts = {
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
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category_slug } = await params;

  // Convert slug to readable category name
  const categoryName = category_slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const siteName = "Tech2Globe Blog";
  const siteUrl = process.env.NEXT_PUBLIC_BASE_PATH;
  const pageUrl = `${siteUrl}/category/${category_slug}`;

  const title = `${categoryName} - Latest Posts & Updates | ${siteName}`;
  const description = `Explore the latest articles, insights, and updates in ${categoryName} on Tech2Globe Blog. Stay informed with expert content.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
export async function generateStaticParams() {
  const categoriesRes = await fetch(`${process.env.API_BASE_PATH}/categories`);
  if (!categoriesRes.ok) return [];

  const categoriesJson = await categoriesRes.json();
  const categories = categoriesJson?.categories || [];

  const params: { category_slug: string; page: string }[] = [];

  for (const category of categories) {
    if (!category?.slug || category.post_count === 0) continue;

    const categorySlug = category.slug.toString();

    const postsRes = await fetch(
      `${process.env.API_BASE_PATH}/posts/category/${categorySlug}?page=1&limit=20`
    );
    if (!postsRes.ok) continue;

    const postsJson = await postsRes.json();
    const totalPages = postsJson?.data?.pagination?.totalPages || 1;

    for (let i = 2; i <= totalPages; i++) {
      params.push({
        category_slug: categorySlug,
        page: i.toString(),
      });
    }
  }
  return params;
}
async function getRecentPosts(): Promise<RecentBlogPosts[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`
  );
  const json = await res.json();
  const recentPosts = json.data.posts.slice(0, 3);
  return recentPosts;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category_slug, page } = await params;
  if (!category_slug) notFound();
  if (!page || isNaN(Number(page)) || Number(page) < 2) notFound();

  const currentPage = parseInt(page, 10);
  if (currentPage === 1) {
    redirect(`/category/${category_slug}`);
  }
  const limit = 21;

  const res = await fetch(
    `${process.env.API_BASE_PATH}/posts/category/${category_slug}?page=${currentPage}&limit=${limit}`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) notFound();

  const json = await res.json();
  const posts = json?.data?.posts || [];
  const totalPages = json?.data?.pagination?.totalPages || 1;
  const categoryName = category_slug
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (currentPage > totalPages) notFound();
  const recentPosts = await getRecentPosts();

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div
            className="inner-hero-secondary py-3 text-center border-top border-bottom"
            style={{ backgroundColor: "#F3F4F6" }}
          >
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                  <div className="main-heading">
                    <div className="page-prog">
                      <Link href="/">Home</Link>
                      <span>
                        <i className="fa-solid fa-angle-right" />
                      </span>
                      <p>Blog</p>
                      <span>
                        <i className="fa-solid fa-angle-right" />
                      </span>
                      <p className="bold">Category</p>
                    </div>
                    <h1 className="display-6 fw-bold">{categoryName}</h1>
                    <p className="lead mb-0">
                      {currentPage > 1 && (
                        <span className="text-muted fs-5">
                          {" "}
                          - Page {currentPage}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA END=======*/}
          {/*===== BLOG AREA START=======*/}
          <BlogArea1
            posts={posts}
            totalPages={totalPages}
            currentPage={currentPage}
            categoryId={category_slug}
            showSidebar={false}
            recentPosts={recentPosts}
          />
          <CtaArea1 />
        </div>
      </Layout>
    </>
  );
}
