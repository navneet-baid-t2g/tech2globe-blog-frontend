import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Sidebar from "@/components/blog/Sidebar";
import { notFound } from "next/navigation";
import { decode } from "html-entities";
import { Metadata } from "next";
import BlogCard1 from "@/components/blog/BlogCard1";
import SocialShare from "@/components/blog/SocialShare";
import { fixThumbnailDomain } from "@/util/fixThumbnailDomain";
import CommentForm from "@/components/blog/CommentForm";
import Image from "next/image";
import { gifPlaceholder } from "@/components/layout/Placeholder";
export const revalidate = 600;

type PageProps = {
  params: Promise<{ slug: string }>;
};
export type Category = {
  name: string;
  slug: string;
};

export type Tag = {
  name: string;
  slug: string;
};

export type YoastMeta = {
  id: number;
  object_id: number;
  permalink: string;
  title: string;
  description: string;
  breadcrumb_title: string;
  is_public: boolean | null;
  canonical: string | null;
  primary_focus_keyword: string;
  is_robots_noindex: boolean | null;
  is_robots_nofollow: number;
  is_robots_noarchive: boolean | null;
  is_robots_noimageindex: boolean | null;
  is_robots_nosnippet: boolean | null;
  twitter_title: string | null;
  twitter_image: string;
  twitter_description: string | null;
  open_graph_title: string | null;
  open_graph_description: string | null;
  open_graph_image: string;
  open_graph_image_meta: string;
  schema_article_type: string | null;
  schema_page_type: string | null;
};

export type BlogPost = {
  ID: number;
  post_author: number;
  post_date: string;
  post_modified: string;
  post_content: string;
  post_title: string;
  post_excerpt: string;
  post_status: string;
  comment_status: string;
  ping_status: string;
  post_name: string;
  post_type: string;
  comment_count: number;
  thumbnail_id: string;
  thumbnail_url: string;
  author_name: string;
  categories: Category[];
  tags: Tag[];
  yoastMeta: YoastMeta[];
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

export type Comment = {
  comment_ID: number;
  comment_author: string;
  comment_date: string;
  comment_content: string;
};
type Author = {
  id: number;
  displayName: string;
  description: string;
  website: string;
  socialHandles: {
    facebook: string;
    instagram: string;
    linkedin: string;
    tumblr: string;
    twitter: string;
    youtube: string;
    wikipedia: string;
    pinterest: string;
  };
  profileImage: string;
};
export type BlogData = {
  post: BlogPost;
  comments: Comment[];
  author?: Author;
  relatedPosts: BlogPost[];
};

async function getBlogDetails(slug: string): Promise<BlogData | null> {
  try {
    const res = await fetch(`${process.env.API_BASE_PATH}/posts/${slug}`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (!data?.post) {
      return null;
    }

    const blogData: BlogData = {
      post: data.post,
      comments: data.comments || [],
      relatedPosts: [],
    };

    // Fetch author if post_author exists
    if (data.post.post_author) {
      try {
        const authorRes = await fetch(
          `${process.env.API_BASE_PATH}/authors/${data.post.post_author}`
        );

        if (authorRes.ok) {
          const authorJson = await authorRes.json();
          const authors = authorJson?.authors;

          if (Array.isArray(authors) && authors.length > 0) {
            blogData.author = authors[0];
          }
        }
      } catch (authorError) {
        console.error("Error fetching author data:", authorError);
      }
    }
    // Fetch related posts based on first category name
    if (data.post.categories && data.post.categories.length > 0) {
      const categoryName = data.post.categories[0].name;
      try {
        const relatedRes = await fetch(
          `${
            process.env.API_BASE_PATH
          }/posts/related?categoryName=${encodeURIComponent(categoryName)}`
        );

        if (relatedRes.ok) {
          const relatedJson = await relatedRes.json();
          blogData.relatedPosts = relatedJson?.data?.posts || [];
        }
      } catch (relatedError) {
        console.error("Error fetching related posts:", relatedError);
      }
    }

    return blogData;
  } catch (error) {
    console.error("Fetch blog error:", error);
    return null;
  }
}
async function getRecentPosts(): Promise<RecentBlogPosts[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`
  );
  const json = await res.json();
  const recentPosts = json.data.posts.slice(0, 3);
  return recentPosts;
}

export async function generateStaticParams() {
  const limit = 100;
  let page = 1;
  let totalPages = 1;
  let allPosts: { post_name: string }[] = [];

  while (page <= totalPages) {
    const res = await fetch(
      `${process.env.API_BASE_PATH}/posts?page=${page}&limit=${limit}`
    );
    const data = await res.json();

    const posts = data?.data?.posts || [];
    totalPages = data?.data?.pagination?.totalPages || 1;

    allPosts.push(...posts);
    page++;
  }

  return allPosts.map((post) => ({
    slug: post.post_name,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const res = await fetch(`${process.env.API_BASE_PATH}/posts/${slug}`);
  const data = await res.json();

  if (!data?.post) return {};

  const post = data.post;
  const yoast = post?.yoastMeta?.[0] || {};

  // Use fallback from post data if yoast meta is missing
  const title = yoast?.title || post?.post_title || "Blog";
  const description =
    yoast?.description || post?.post_excerpt || "Read more on our blog.";
  const ogImage = yoast?.open_graph_image || post?.thumbnail_url || null;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      title,
      description,
      images: ogImage ? [ogImage] : [],
      card: "summary_large_image",
    },
  };
}
export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  const blogData = await getBlogDetails(slug);
  const recentPosts = await getRecentPosts();

  if (!blogData) {
    notFound();
  }

  const { post, comments, author } = blogData;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_PATH}/blog/${blogData.post.post_name}`,
    },
    headline:
      blogData.post.yoastMeta[0].open_graph_title || blogData.post.post_title,
    description:
      blogData.post.yoastMeta[0].open_graph_description ||
      blogData.post.post_excerpt,
    image: {
      "@type": "ImageObject",
      url: blogData.post.thumbnail_url,
    },
    author: author
      ? {
          "@type": "Person",
          name: author.displayName || blogData.post.author_name,
          description: (author.description || "").replace(/<[^>]+>/g, ""),
          url: author.website || "",
          sameAs: author.socialHandles
            ? Object.values(author.socialHandles).filter(Boolean)
            : [],
        }
      : {
          "@type": "Person",
          name: blogData.post.author_name || "",
        },
    publisher: {
      "@type": "Organization",
      name: "Tech2Globe Blogging Site",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/tech2globe-logo.png`,
        width: 250,
        height: 75,
      },
    },
    datePublished: blogData.post.post_date || "",
    dateModified: blogData.post.post_modified || "",
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div>
          <div
            className="inner-hero bg-cover"
            style={{ backgroundImage: "url(/assets/img/bg/inner-hero-bg.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
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
                      <p className="bold">{decode(post?.post_title || "")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===== HERO AREA END=======*/}
          {/*===== BLOG DETAILS AREA START=======*/}
          <div className="blog-details1-all sp">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="blog-page3-single-box">
                        <div className="heading1">
                          <div className="social-area">
                            <div className="author-area">
                              <div className="author">
                                <div className="author-tumb pastel-avatar">
                                  {(post?.author_name
                                    ? post?.author_name
                                        .split(" ")
                                        .map((word: string) => word[0])
                                        .join("")
                                        .substring(0, 2)
                                    : "AU"
                                  ).toUpperCase()}
                                </div>
                                <Link
                                  href={`/author/${post?.post_author}`}
                                  className="author-text"
                                >
                                  {post?.author_name}
                                </Link>
                              </div>
                              <div className="date">
                                <Link href="/#">
                                  <img
                                    src="/assets/img/icons/date1.svg"
                                    alt="Tech2Globe"
                                  />{" "}
                                  {new Date(post.post_date).toLocaleDateString(
                                    "en-GB"
                                  )}{" "}
                                </Link>
                              </div>
                            </div>
                            {/* <Link href="/categories" className="time mt-16"><img src="/assets/img/icons/time1.svg" alt="Tech2Globe" /> 3 min read</Link> */}
                          </div>
                          <h1>{decode(post?.post_title || "")}</h1>
                          <div className="tags-social-area">
                            <SocialShare
                              showFacebook={true}
                              showTwitter={true}
                              showInstagram={true}
                              showWhatsApp={true}
                              showPinterest={true}
                              showEmail={true}
                              showNativeShare={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="thumbnail image-anime _relative mt-20">
                        <Image
                          src={`${fixThumbnailDomain(post?.thumbnail_url)}}`}
                          alt={`${decode(post?.post_title || "")}`}
                          placeholder="blur"
                          blurDataURL={gifPlaceholder}
                          width={1000}
                          height={800}
                          className="img-fluid"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="details content-area mt-40">
                    <article>
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: post?.post_content || "",
                        }}
                      />
                    </article>

                    <div className="comments-area">
                      <div className="tags-social-area">
                        <div className="row align-items-center">
                          {post?.tags?.length > 0 && (
                            <div className="col-md-12 mb-4">
                              <div className="tags">
                                <ul>
                                  <li className="text">Tag Cloud:</li>
                                  {post?.tags?.map(
                                    (tag: { name: string; slug: string }) => (
                                      <li key={tag.slug} className="mt-3">
                                        <span>{tag.name}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          )}
                          <div className="col-md-12">
                            <SocialShare
                              showFacebook={true}
                              showTwitter={true}
                              showInstagram={true}
                              showWhatsApp={true}
                              showPinterest={true}
                              showEmail={true}
                              showNativeShare={true}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space30" />
                      <div className="heading1 mt-40">
                        <h3>
                          Blog Comments{" "}
                          {comments.length > 0 && `(${comments.length})`}{" "}
                        </h3>
                      </div>
                      {comments.length == 0 ? (
                        <div className="comment-box">
                          <div className="no-comments">
                            <p>No comments found.</p>
                          </div>
                        </div>
                      ) : (
                        comments.map((comment) => (
                          <div className="comment-box" key={comment.comment_ID}>
                            <div className="top-area">
                              <div className="author-area">
                                <div
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    backgroundColor: "#5e548e",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.125rem", // equivalent to text-lg
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                  }}
                                  className="me-3"
                                >
                                  {comment.comment_author?.slice(0, 2)}
                                </div>

                                <div className="heading1 ml-20">
                                  <h4>
                                    <Link href="/author">
                                      {comment.comment_author}
                                    </Link>
                                  </h4>
                                  <p className="mt-2">
                                    {new Date(
                                      comment.comment_date
                                    ).toLocaleDateString("en-GB")}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="heading1 mt-20">
                              <p>“{comment.comment_content}"</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="details-contact-area">
                      <div className="heading1">
                        <h5>Leave a Reply</h5>
                        <p className="mt-10">
                          Provide clear contact information, including phone
                          number, email, and address.
                        </p>
                      </div>
                      <CommentForm postId={post.ID} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <Sidebar
                    recentPosts={recentPosts}
                    author={author}
                    showAuthor={true}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*===== BLOG DETAILS AREA START=======*/}
          {blogData.relatedPosts.length > 0 ? (
            <div className="details-page-boxs sp bg1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 m-auto text-center">
                    <div className="heading1">
                      <h2>More Related Blogs</h2>
                    </div>
                  </div>
                </div>
                <div className="space30" />
                <div className="row justify-content-center">
                  {blogData.relatedPosts.map((post) => (
                    <BlogCard1
                      col="col-md-6 col-lg-4"
                      item={post}
                      key={post.ID}
                      animated={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : null}
          {/*===== CTA AREA START=======*/}
          <div className="cta1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading1-w">
                    <h2>Ready to Elevate Your Social Media Game?</h2>
                    <p className="mt-16">
                      Unlock the tools and insights you need to thrive on social
                      media with Tech2Globe. Join our community for expert tips,
                      trending strategies, and resources that empower you to
                      stand out and succeed.
                    </p>
                    <div className="form-area">
                      <form action="#">
                        <input type="email" placeholder="Enter Your Email" />
                        <div className="button">
                          <button className="theme-btn1">Get Started</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image text-end sm:text-start md:text-start sm:mt-30 md:mt-30">
                    <img
                      src="/assets/img/hero/hero1-image.png"
                      alt="Tech2Globe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
