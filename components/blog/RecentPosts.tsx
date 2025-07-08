// components/blog/RecentPosts.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fixThumbnailDomain } from '@/util/fixThumbnailDomain';

interface BlogPost {
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

const RecentPosts = async () => {
    let recentPosts: BlogPost[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/recent`, {
            next: { revalidate: 600 },});
        const json = await res.json();
        recentPosts = json.data.posts.slice(0, 3);
    } catch (err) {
        console.error("Error fetching posts:", err);
        return null; // fallback UI
    }

    return (
        <div className="sidebar-details-widget_1 _recent-posts mt-40">
            <h3>Recent Post</h3>
            {recentPosts.map((post, index) => (
                <div className={`blog1-recent-box d-flex align-items-start gap-3 ${index !== 0 ? 'mt-16' : ''}`} key={post.ID}>
                    <div className="recent-thumb flex-shrink-0" style={{ width: '82px' }}>
                        <Image
                            src={fixThumbnailDomain(post.thumbnail_url)}
                            alt={post.post_name}
                            width={82}
                            height={82}
                            unoptimized
                            loading='lazy'
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                        />
                    </div>
                    <div className="heading w-100">
                        <Link href="#" className="date d-block mb-1 text-muted small">
                            <img src="/assets/img/icons/date1.svg" alt="calendar" className="me-1" />
                            {new Date(post.post_date).toLocaleDateString()}
                        </Link>
                        <h5 className="mb-0">
                            <Link href={`/${post.post_name}`} className="text-capitalize">
                                {post.post_name.replace(/-/g, ' ')}
                            </Link>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentPosts;
