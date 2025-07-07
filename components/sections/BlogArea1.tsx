"use client";
import Slider from "react-slick";
import { sidebarSliderWidget } from "@/util/SlickOptions";
import Link from "next/link";
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
interface BlogArea1Props {
  posts: BlogItem[];
  totalPages: number;
  currentPage: number;
  showSidebar?: boolean;
  showAuthor?: boolean;
  authorId?: string;
  categoryId?: string;
}
export default function BlogArea1({
  posts,
  totalPages,
  currentPage,
  showSidebar = true,
  showAuthor = false,
  authorId,
  categoryId
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
              <Sidebar showAuthor={showAuthor} />
            </div>)}
          </div>
        </div>
      </div>
    </>
  );
}
