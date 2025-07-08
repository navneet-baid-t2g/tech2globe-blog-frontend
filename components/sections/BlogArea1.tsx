"use client";
import BlogPost from "../blog/BlogPost";
import Sidebar from "../blog/Sidebar";

interface BlogItem {
  id: number;
  title: string;
  img: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
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
interface BlogArea1Props {
  posts: BlogItem[];
  totalPages: number;
  currentPage: number;
  showSidebar?: boolean;
  showAuthor?: boolean;
  authorId?: string;
  categoryId?: string;
  recentPosts:RecentBlogPosts[];
  author?: any
}
export default function BlogArea1({
  posts,
  totalPages,
  currentPage,
  recentPosts,
  showSidebar = true,
  showAuthor = false,
  authorId,
  categoryId,
  author=null
}: BlogArea1Props) {
  return (
    <>
      <div className="blog1 sp _relative">
        <div className="container">
          <div className="row">
            <div className={showSidebar ? "col-lg-8" : "col-lg-12"}>
              <div className="blog1-posts-area">
                <div className="row">
                  <BlogPost
                    posts={posts}
                    totalNumberOfPages={totalPages}
                    currentNumberPage={currentPage}
                    style={1}
                    showPagination={true}
                    authorId={authorId}
                    categoryId={categoryId}
                    col={showSidebar ? "col-md-6" : "col-md-4"}
                  />
                </div>
              </div>
            </div>
            {showSidebar && (<div className="col-lg-4">
              <Sidebar showAuthor={showAuthor} recentPosts={recentPosts} author={author}/>
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}
