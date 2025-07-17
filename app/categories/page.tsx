import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Directory from "@/components/directory/Directory";
import Link from "next/link";
export const metadata = {
	title: "Tech2Globe Blogs Categories Directory",
	description: "Browse Tech2Globe’s comprehensive blog categories directory. Explore articles on various topics, all organized alphabetically for easy navigation.",
	keywords: "Tech2Globe, Blog Categories, Blog Directory, Tech Articles, Business Blogs, Digital Marketing, Web Development, SEO, IT Services",
	openGraph: {
		title: "Tech2Globe Blogs Categories Directory",
		description: "Explore a wide range of blog categories from Tech2Globe. Stay informed with articles on technology, business, marketing, and more.",
		url: `${process.env.NEXT_PUBLIC_BASE_PATH}/blog/categories`,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tech2Globe Blogs Categories Directory",
		description: "Discover Tech2Globe’s complete blog directory and explore categories covering technology, marketing, business, and more.",
	},
};

interface Category {
	id: number;
	name: string;
	slug: string;
	count: number;
	post_count: number;
}


export default async function CategoriesPage() {
	const res = await fetch(
		`${process.env.API_BASE_PATH}/categories`,
		{
			next: { revalidate: 600 },
		}
	);

	if (!res.ok) {
		notFound();
	}

	const json = await res.json();
	const categories: Category[] = (json?.categories || []).filter(
		(cat: Category) => cat.post_count > 0
	);
	return (
		<Layout headerStyle={1} footerStyle={1}>
			<div className="category-directory">
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
							  <p className="bold">Categories</p>
							</div>
							<h1 className="display-6 fw-bold">Category Directory</h1>
							<p className="lead mb-0">
							  Browse all categories alphabetically
							</p>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				<Directory categories={categories} />
			</div>
		</Layout>
	);
}