import { Metadata } from 'next';
import { notFound } from "next/navigation";
import BlogArea1 from "@/components/sections/BlogArea1";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import CtaArea1 from "@/components/sections/CtaArea1";


type PageProps = {
    params: Promise<{ category_slug: string }>
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category_slug } = await params;

    // Convert slug to readable category name
    const categoryName = category_slug
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const siteName = 'Tech2Globe Blog';
    const siteUrl = process.env.NEXT_PUBLIC_BASE_PATH
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
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}
export default async function Category({
    params
}: PageProps) {
    const { category_slug } = await params;
    if (!category_slug) {
        notFound();
    }
    const limit = 21;
    const res = await fetch(
        `${process.env.API_BASE_PATH}/posts/category/${category_slug}?page=1&limit=${limit}`,
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
    const categoryName = category_slug
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

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
                                            <p className="bold">{categoryName}</p>
                                        </div>
                                        <h1>{categoryName}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===== HERO AREA END=======*/}
                    {/*===== BLOG AREA START=======*/}
                    <BlogArea1 posts={posts} totalPages={totalPages} currentPage={1} categoryId={category_slug} showSidebar={false} />
                    <CtaArea1 />
                </div>
            </Layout>
        </>
    )
}