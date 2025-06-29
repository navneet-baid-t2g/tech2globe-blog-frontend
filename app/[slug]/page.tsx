import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Sidebar from "./Sidebar"
import { notFound } from "next/navigation";
import { decode } from 'html-entities';
import { Metadata } from 'next';



export const revalidate = 600;

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
};


async function getBlogDetails(slug: string): Promise<BlogData | null> {
	try {
		const res = await fetch(`${process.env.API_BASE_PATH}/posts/${slug}`, {
			next: { revalidate: 600 },
		});

		if (!res.ok) {
			console.error("Post fetch failed with status:", res.status);
			return null;
		}

		const data = await res.json();

		if (!data?.post) {
			console.warn("No post found in response");
			return null;
		}

		const blogData: BlogData = {
			post: data.post,
			comments: data.comments || [],
		};

		// Fetch author if post_author exists
		if (data.post.post_author) {
			try {
				const authorRes = await fetch(
					`${process.env.API_BASE_PATH}/authors/${data.post.post_author}`
				);

				if (!authorRes.ok) {
					console.warn("Author fetch failed with status:", authorRes.status);
				} else {
					const authorJson = await authorRes.json();
					const authors = authorJson?.authors;

					if (Array.isArray(authors) && authors.length > 0) {
						blogData.author = authors[0];
					} else {
						console.warn("No authors found in author response.");
					}
				}
			} catch (authorError) {
				console.error("Error fetching author data:", authorError);
			}
		}

		return blogData;
	} catch (error) {
		console.error("Fetch blog error:", error);
		return null;
	}
}

export async function generateStaticParams() {
	const limit = 100;
	let page = 1;
	let totalPages = 1;
	let allPosts: { post_name: string }[] = [];

	while (page <= totalPages) {
		const res = await fetch(`${process.env.API_BASE_PATH}/posts?page=${page}&limit=${limit}`);
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const { slug } = await params;

	const res = await fetch(`${process.env.API_BASE_PATH}/posts/${slug}`);
	const data = await res.json();

	if (!data?.post) return {};

	const post = data.post;
	const yoast = post?.yoastMeta?.[0] || {};

	// Use fallback from post data if yoast meta is missing
	const title = yoast?.title || post?.post_title || 'Blog';
	const description = yoast?.description || post?.post_excerpt || 'Read more on our blog.';
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
			card: 'summary_large_image',
		},
	};
}
// ✅ Blog Details Page
export default async function BlogDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params

	const blogData = await getBlogDetails(slug);

	if (!blogData) {
		notFound();
	}

	const { post, comments, author } = blogData;

	return <>
		<Layout headerStyle={1} footerStyle={1}>
			<div>
				<div className="inner-hero bg-cover" style={{ backgroundImage: 'url(/assets/img/bg/inner-hero-bg.jpg)' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="main-heading">
									<div className="page-prog">
										<Link href="/">Home</Link>
										<span><i className="fa-solid fa-angle-right" /></span>
										<p>Blog</p>
										<span><i className="fa-solid fa-angle-right" /></span>
										<p className="bold">{decode(post?.post_title || '')}</p>
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
															<div className="author-tumb">
																<img src="/assets/img/blog/blog1-author1.png" alt="vexon" />
															</div>
															<Link href="/author" className="author-text">{post?.author_name}</Link>
														</div>
														<div className="date">
															<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="vexon" /> {new Date(post.post_date).toLocaleDateString("en-GB")} </Link>
														</div>
													</div>
													{/* <Link href="/categories" className="time mt-16"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link> */}
												</div>
												<h1>{decode(post?.post_title || '')}</h1>
												<p className="mt-16">{post?.post_excerpt}</p>
											</div>
										</div>
									</div>
									<div className="col-lg-7">
										<div className="thumbnail image-anime _relative mt-20">
											<img src={`${post?.thumbnail_url}}`} alt={`${decode(post?.post_title || '')}`} />
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
											dangerouslySetInnerHTML={{ __html: post?.post_content || '' }}
										/>
									</article>

									<div className="comments-area">
										<div className="tags-social-area">
											<div className="row align-items-center">
												<div className="col-md-12">
													<div className="tags">
														<ul>
															<li className="text">Tag Cloud:</li>
															{post?.tags?.map((tag: { name: string; slug: string }) => (
																<li key={tag.slug} className="mt-3">
																	<Link href="#">{tag.name}</Link>
																</li>
															))}
														</ul>
													</div>
												</div>
												<div className="col-md-12 mt-4">
													<div className="social footer-social1 text-start">
														<ul>
															<li className="text">Share:</li>
															<li>
																<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
															</li>
															<li>
																<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
															</li>
															<li>
																<Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div className="space30" />
										<div className="heading1 mt-40">
											<h3>Blog Comments {comments.length > 0 && `(${comments.length})`} </h3>
										</div>
										{comments.length == 0 ? (
											<div className="comment-box">
												<div className="no-comments">
													<p>No comments found.</p>
												</div>
											</div>
										) : (
											comments.map(comment => (
												<div className="comment-box" key={comment.comment_ID}>
													<div className="top-area">
														<div className="author-area">
															<div
																style={{
																	width: '60px',
																	height: '60px',
																	borderRadius: '50%',
																	backgroundColor: '#5e548e',
																	color: 'white',
																	display: 'flex',
																	alignItems: 'center',
																	justifyContent: 'center',
																	fontSize: '1.125rem', // equivalent to text-lg
																	fontWeight: 'bold',
																	textTransform: 'uppercase'
																}}
																className="me-3"
															>
																{comment.comment_author?.slice(0, 2)}
															</div>

															<div className="heading1 ml-20">
																<h4><Link href="/author">{comment.comment_author}</Link></h4>
																<p className="mt-2">{new Date(comment.comment_date).toLocaleDateString("en-GB")}</p>
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
											<p className="mt-10">Provide clear contact information, including phone number, email, and address.</p>
										</div>
										<form action="#">
											<div className="row">
												<div className="col-md-6">
													<div className="single-input">
														<input type="text" placeholder="First Name" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="text" placeholder="Last Name" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="email" placeholder="Email" />
													</div>
												</div>
												<div className="col-md-6">
													<div className="single-input">
														<input type="number" placeholder="Phone" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="single-input">
														<input type="text" placeholder="Subject" />
													</div>
												</div>
												<div className="col-md-12">
													<div className="single-input">
														<textarea rows={5} placeholder="Message" />
													</div>
													<div className="button mt-30">
														<button className="theme-btn1" type="submit">Get Started</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<Sidebar author={author} />
							</div>
						</div>
					</div>
				</div>
				{/*===== BLOG DETAILS AREA START=======*/}
				{/*===== BLOG AREA START=======*/}
				<div className="details-page-boxs sp bg1">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 m-auto text-center">
								<div className="heading1">
									<h2>More Blogs</h2>
								</div>
							</div>
						</div>
						<div className="space30" />
						<div className="row">
							<div className="col-md-6 col-lg-4">
								<div className="blog1-single-box mt-30">
									<div className="thumbnail image-anime">
										<img src="/assets/img/blog/blog1-image6.png" alt="vexon" />
									</div>
									<div className="heading1">
										<div className="social-area">
											<Link href="/social-media" className="social">Brand Consistency</Link>
											<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
										</div>
										<h4><Link href="/blog-single">Creating a Visual Identity: Tips for Aesthetic and Brand Consistency </Link></h4>
										<p className="mt-16">This post covers tips on color schemes, fonts, and visuals to keep your profile visually appealing and cohesive.</p>
										<div className="author-area">
											<div className="author">
												<div className="author-tumb">
													<img src="/assets/img/blog/blog1-author5.png" alt="vexon" />
												</div>
												<Link href="/#" className="author-text">Katie Sims</Link>
											</div>
											<div className="date">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Nov 6, 2025 </Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="blog1-single-box mt-30">
									<div className="thumbnail image-anime">
										<img src="/assets/img/blog/blog1-image7.png" alt="vexon" />
									</div>
									<div className="heading1">
										<div className="social-area">
											<Link href="/social-media" className="social">Gen - Z</Link>
											<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
										</div>
										<h4><Link href="/blog-single">How to Build Authentic Connections with the New Generation</Link></h4>
										<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
										<div className="author-area">
											<div className="author">
												<div className="author-tumb">
													<img src="/assets/img/blog/blog1-author5.png" alt="vexon" />
												</div>
												<Link href="/author" className="author-text">David Elson</Link>
											</div>
											<div className="date">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 26, 2025 </Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4">
								<div className="blog1-single-box mt-30">
									<div className="thumbnail image-anime">
										<img src="/assets/img/blog/blog1-image8.png" alt="vexon" />
									</div>
									<div className="heading1">
										<div className="social-area">
											<Link href="/social-media" className="social">Social Media</Link>
											<Link href="/categories" className="time"><img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read</Link>
										</div>
										<h4><Link href="/blog-single">Harnessing Analytics: Using Data to Refine Your Social Media Strategy</Link></h4>
										<p className="mt-16">Gen Z is reshaping digital interaction. Learn what matters to this generation and how to create authentic, meaningful content.</p>
										<div className="author-area">
											<div className="author">
												<div className="author-tumb">
													<img src="/assets/img/blog/blog1-author5.png" alt="vexon" />
												</div>
												<Link href="/author" className="author-text">Kenneth Allen</Link>
											</div>
											<div className="date">
												<Link href="/#"><img src="/assets/img/icons/date1.svg" alt="vexon" /> Oct 26, 2025 </Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*===== BLOG AREA START=======*/}
				{/*===== CTA AREA START=======*/}
				<div className="cta1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="heading1-w">
									<h2>Ready to Elevate Your Social Media Game?</h2>
									<p className="mt-16">Unlock the tools and insights you need to thrive on social media with Vexon. Join our community for expert tips, trending strategies, and resources that empower you to stand out and succeed.</p>
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
									<img src="/assets/img/hero/hero1-image.png" alt="vexon" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout >
	</>

}