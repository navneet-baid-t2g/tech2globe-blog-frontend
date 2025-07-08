import { Metadata } from 'next';
import { notFound } from "next/navigation";
import BlogArea1 from "@/components/sections/BlogArea1";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import BlogCategories1 from "@/components/sections/BlogCategories1";
import CtaArea1 from "@/components/sections/CtaArea1";
type AuthorPageProps = {
	params: Promise<{ author_id: string }>
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
export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
	const { author_id } = await params;

	// Fetch Author Details
	const res = await fetch(`${process.env.API_BASE_PATH}/authors/${author_id}`, {
		next: { revalidate: 600 },
	});

	if (!res.ok) {
		return {
			title: 'Author Not Found',
			description: 'The requested author could not be found.',
		};
	}

	const data = await res.json();
	const author = data?.authors?.[0];

	if (!author) {
		return {
			title: 'Author Not Found',
			description: 'The requested author could not be found.',
		};
	}

	const name = author.displayName || 'Unknown Author';
	const description = author.description || `${name}'s latest blog posts and updates.`;
	const image = author.profileImage || 'https://www.tech2globe.com/images/new-page-images/tech2globe-logo.png';
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
			card: 'summary_large_image',
			title: `${name} - Author at Tech2Globe Blog`,
			description: description,
			images: [image],
		},
	};
}
async function getRecentPosts(): Promise<RecentBlogPosts[]> {
  const res = await fetch(
	`${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`
  );
  const json = await res.json();
  const recentPosts = json.data.posts.slice(0, 3);
  return recentPosts;
}
export default async function Author({
	params,
}: AuthorPageProps) {
	const { author_id } = await params
	if (!author_id) {
		notFound();
	}

	const limit = 20;

	// Fetch Author Details
	const authorRes = await fetch(`${process.env.API_BASE_PATH}/authors/${author_id}`, {
		next: { revalidate: 600 },
	});
	if (!authorRes.ok) {
		notFound();
	}
	const authorJson = await authorRes.json();
	const author = authorJson?.authors?.[0];

	// Fetch Posts by Author
	const res = await fetch(`${process.env.API_BASE_PATH}/posts/author/${author_id}?page=1&limit=${limit}`, {
		next: { revalidate: 600 },
	});
	if (!res.ok) {
		notFound();
	} 

	const json = await res.json();
	const posts = json?.data?.posts || [];
	const totalPages = json?.data?.pagination?.totalPages || 1;
	const recentPosts = await getRecentPosts();

	return (
		<>
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
											<p>Category</p>
											<span><i className="fa-solid fa-angle-right" /></span>
											<p className="bold">Author</p>
										</div>
										<h1>{author.displayName}</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA END=======*/}
					{/*===== BLOG AREA START=======*/} 
					<BlogArea1 posts={posts} totalPages={totalPages} currentPage={1} authorId={author_id} recentPosts={recentPosts} showAuthor={true} author={author} />
					{/*===== BLOG AREA END=======*/}
					<BlogCategories1 />
					<CtaArea1 />
				</div>

			</Layout>
		</>
	)
}