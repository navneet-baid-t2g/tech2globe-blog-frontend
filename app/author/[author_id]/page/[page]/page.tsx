import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Layout from "@/components/layout/Layout";
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
import BlogArea1 from "@/components/sections/BlogArea1";
import Link from "next/link";
type PageProps = {
  params: Promise<{ author_id: string; page: string }>;
};
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { author_id } = await params;

  // Fetch Author Details
  const res = await fetch(`${process.env.API_BASE_PATH}/authors/${author_id}`, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    return {
      title: "Author Not Found",
      description: "The requested author could not be found.",
    };
  }

  const data = await res.json();
  const author = data?.authors?.[0];

  if (!author) {
    return {
      title: "Author Not Found",
      description: "The requested author could not be found.",
    };
  }

  const name = author.displayName || "Unknown Author";
  const description =
    author.description || `${name}'s latest blog posts and updates.`;
  const image =
    author.profileImage ||
    "https://www.tech2globe.com/images/new-page-images/tech2globe-logo.png";
  return {
    title: `${name} - Author at Tech2Globe Blog`,
    description: description,
    openGraph: {
      title: `${name} - Author at Tech2Globe Blog`,
      description: description,
      url: `${process.env.SITE_URL}/author/${author_id}`,
      images: [
        {
          url: image,
          width: 400,
          height: 400,
          alt: `${name}'s Profile Picture`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - Author at Tech2Globe Blog`,
      description: description,
      images: [image],
    },
  };
}
export async function generateStaticParams() {
  // Fetch all authors
  const authorsRes = await fetch(
    `${process.env.API_BASE_PATH}/authors?limit=1000`
  );
  if (!authorsRes.ok) {
    return [];
  }
  const authorsJson = await authorsRes.json();
  const authors = authorsJson?.data?.authors || [];

  const params: { author_id: string; page: string }[] = [];

  for (const author of authors) {
    const authorId = author.id?.toString();
    if (!authorId) continue;

    const postsRes = await fetch(
      `${process.env.API_BASE_PATH}/posts/author/${authorId}?page=1&limit=20`
    );
    if (!postsRes.ok) continue;

    const postsJson = await postsRes.json();
    const totalPages = postsJson?.data?.pagination?.totalPages || 1;

    for (let i = 2; i <= totalPages; i++) {
      params.push({
        author_id: authorId,
        page: i.toString(),
      });
    }
  }

  return params;
}
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
async function getRecentPosts(): Promise<RecentBlogPosts[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`
  );
  const json = await res.json();
  const recentPosts = json.data.posts.slice(0, 3);
  return recentPosts;
}
export default async function AuthorPage({ params }: PageProps) {
  const { author_id, page } = await params;
  // Fetch Author Details
  const authorRes = await fetch(
    `${process.env.API_BASE_PATH}/authors/${author_id}`,
    {
      next: { revalidate: 600 },
    }
  );
  if (!authorRes.ok) {
    notFound();
  }
  const authorJson = await authorRes.json();
  const author = authorJson?.authors?.[0];
  if (!author_id) {
    notFound();
  }
  if (!page || isNaN(Number(page)) || Number(page) < 1) {
    notFound();
  }

  const currentPage = parseInt(page, 10);
  if (currentPage === 1) {
    redirect(`/author/${author_id}`);
  }
  const limit = 20;

  const res = await fetch(
    `${process.env.API_BASE_PATH}/posts/author/${author_id}?page=${currentPage}&limit=${limit}`,
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
      .
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
                  <p className="bold">Author</p>
                </div>
                <h1 className="display-6 fw-bold">{author.displayName}</h1>
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
      <BlogArea1
        posts={posts}
        totalPages={totalPages}
        currentPage={currentPage}
        authorId={author_id}
        recentPosts={recentPosts}
        showAuthor={true}
        author={author}
      />
      <BlogCategories1 />
      <CtaArea1 />
    </Layout>
  );
}
