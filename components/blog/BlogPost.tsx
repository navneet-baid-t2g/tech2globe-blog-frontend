"use client";
import React, { useEffect, useState } from "react";
import BlogCard1 from "./BlogCard1";
import BlogCard2 from "./BlogCard2";
import BlogCard3 from "./BlogCard3";
import BlogCard4 from "./BlogCard4";
import Pagination from "./Pagination";

interface BlogItem {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
}

interface BlogPostProps {
  style?: number;
  showPagination?: boolean;
  desc?: boolean;
  col?: string;
  showItem?: number;
  video?: boolean;
  formatIcon?: boolean;
  latest?: boolean;
  showStart?: number;
  showEnd?: number;
}

export default function BlogPost({
  style = 1,
  showPagination = true,
  desc = true,
  col = "col-lg-4",
  showItem = 4,
  video,
  formatIcon,
  latest,
  showStart = 0,
  showEnd = 5,
}: BlogPostProps) {
  const [data, setData] = useState<BlogItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pagination, setPagination] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
	function cleanExcerpt(html: string): string {
		return html
			.replace(/<!--[\s\S]*?-->/g, "") // Remove comments
			.replace(/<[^>]*>/g, "")         // Remove all HTML tags
			.trim()
	}
	function truncate(text: string, maxLength: number): string {
		return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
	}

  // Fetch data from API on page or limit change
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://tech2globe.com/api/posts?page=${currentPage}&limit=${showItem}`
        );
        const json = await res.json();

        const posts = json?.data?.posts || [];
        const total = json?.data?.pagination?.totalPages || 1;

        const mappedPosts: BlogItem[] = posts.map((post: any) => ({
          id: post.ID,
          title: post.post_title,
          img: post.thumbnail_url,
          category:
            post.categories && post.categories.length > 0
              ? post.categories[0].name === "Uncategorized" &&
                post.categories.length > 1
                ? post.categories[1].name
                : post.categories[0].name
              : "General",

          author: post.author_name || "Admin",
          date: post.post_date || new Date().toISOString(),
		  excerpt: truncate(post.excerpt || cleanExcerpt(post.post_content),200)
        }));

        setData(mappedPosts);
        setTotalPages(total);
        createPagination(total);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, showItem]);

  const createPagination = (pages: number) => {
    let arr = Array.from({ length: pages }, (_, i) => i + 1);
    setPagination(arr);
  };

  const paginationItem = 4;
  let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  let end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleActive = (item: number) => setCurrentPage(item);

  return (
    <>
      {loading ? (
        <p>Loading blogs...</p>
      ) : data.length === 0 ? (
        <h3>No Blogs Found</h3>
      ) : (
        data.map((item, i) => (
          <React.Fragment key={item.id || i}>
            {style === 1 && <BlogCard1 item={item} desc={desc} col={col} />}
            {style === 2 && <BlogCard2 item={item} desc={desc} col={col} />}
            {style === 3 && <BlogCard3 item={item} desc={desc} col={col} />}
            {style === 4 && <BlogCard4 item={item} desc={desc} col={col} />}
            {!style && <BlogCard1 item={item} desc={desc} col={col} />}
          </React.Fragment>
        ))
      )}

      {showPagination && data.length > 0 && (
        <>
          <div className="space60" />
          <Pagination
            getPaginationGroup={getPaginationGroup}
            currentPage={currentPage}
            pages={totalPages}
            next={next}
            prev={prev}
            handleActive={handleActive}
          />
        </>
      )}
    </>
  );
}
