"use client";
import React from "react";
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
  posts?: BlogItem[];
  totalNumberOfPages?: number;
  currentNumberPage?: number;
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
  authorId?: string;
  categoryId?: string;
}

export default function BlogPost({
  posts = [],
  totalNumberOfPages = 1,
  currentNumberPage = 1,
  style = 1,
  showPagination = true,
  desc = true,
  col = "col-lg-4",
  authorId,
  categoryId
}: BlogPostProps) {
  const paginationItem = 4;
  const pagination = Array.from({ length: totalNumberOfPages }, (_, i) => i + 1);

  // sliding window logic
  let start = currentNumberPage <= 3 ? 0 : currentNumberPage - 2;
  let end = start + paginationItem;

  if (end > totalNumberOfPages) {
    end = totalNumberOfPages;
    start = Math.max(end - paginationItem, 0);
  }

  const getPaginationGroup = pagination.slice(start, end);
  console.log("current:", currentNumberPage, "start:", start, "end:", end);


  return (
    <>
      {posts.length === 0 ? (
        <h3>No Blogs Found</h3>
      ) : (
        posts.map((item, i) => (
          <React.Fragment key={item.id || i}>
            {style === 1 && <BlogCard1 item={item} desc={desc} col={col} key={i} />}
            {style === 2 && <BlogCard2 item={item} desc={desc} col={col} />}
            {style === 3 && <BlogCard3 item={item} desc={desc} col={col} />}
            {style === 4 && <BlogCard4 item={item} desc={desc} col={col} />}
            {!style && <BlogCard1 item={item} desc={desc} col={col} />}
          </React.Fragment>
        ))
      )}

      {showPagination && posts.length > 0 && (
        <>
          <div className="space60" />
          <Pagination
            getPaginationGroup={getPaginationGroup}
            currentPage={currentNumberPage}
            totalPages={totalNumberOfPages}
            authorId={authorId}
            categoryId={categoryId}
          />
        </>
      )}
    </>
  );
}
