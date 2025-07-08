"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SearchBarWidget from "@/components/blog/SearchBarWidget";
import { decode } from "html-entities";
import Image from "next/image";
import { fixThumbnailDomain } from "@/util/fixThumbnailDomain";
type Author = {
  id: number;
  displayName: string;
  description: string;
  profileImage: string;
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
};

interface SidebarProps {
  recentPosts: BlogPost[];
  author?: Author | null;
  showAuthor?: boolean;
}
interface InstagramPost {
  id: string;
  type: string;
  caption: string;
  url: string;
  commentsCount: number;
  dimensionsHeight: number;
  dimensionsWidth: number;
  displayUrl: string;
  alt: string;
  likesCount: number;
  timestamp: string;
  isCommentsDisabled: boolean;
}
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

const Sidebar: React.FC<SidebarProps> = ({
  recentPosts,
  author,
  showAuthor,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isClamped, setIsClamped] = useState<boolean>(false);

  const bioRef = useRef<HTMLParagraphElement | null>(null);

  const bio = decode(author?.description || "") || "No author bio available.";

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  useEffect(() => {
    const bioElement = bioRef.current;
    if (bioElement) {
      setIsClamped(bioElement.scrollHeight > bioElement.clientHeight);
    }
  }, [bio]);

  const [posts, setPosts] = useState<InstagramPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/dataset_instagram.json");
        if (!res.ok) throw new Error("Failed to load Instagram data");
        const data: InstagramPost[] = await res.json();
        setPosts(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="blog1-sidebar-area mt-40 ml-30 sm:ml-0 md:ml-0 md:mt-30 sm:mt-30">
      <SearchBarWidget />
      {showAuthor && author && (
        <div className="sidebar-details-widget_1 _author-intro mt-40">
          <div className="sidebar-author-thumb text-center">
            <img src={author.profileImage} alt={author.displayName} />
            <h4>
              <Link className="text-dark" href={`/author/${author.id}`}>
                {author.displayName}
              </Link>
            </h4>
            <div className="heading1">
              <p
                ref={bioRef}
                className={`mb-2 ${!isExpanded ? "clamp-text" : ""}`}
                dangerouslySetInnerHTML={{ __html: bio }}
              />

              {isClamped && (
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={toggleReadMore}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
            <div className="footer-social1">
              <ul>
                {author.socialHandles.facebook && (
                  <li>
                    <Link href={author.socialHandles.facebook}>
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </li>
                )}
                {author.socialHandles.linkedin && (
                  <li>
                    <Link href={author.socialHandles.linkedin}>
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                  </li>
                )}
                {author.socialHandles.instagram && (
                  <li>
                    <Link href={author.socialHandles.instagram}>
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </li>
                )}
                {author.socialHandles.twitter && (
                  <li>
                    <Link href={author.socialHandles.twitter}>
                      <i className="fa-brands fa-twitter" />
                    </Link>
                  </li>
                )}
                {author.socialHandles.youtube && (
                  <li>
                    <Link href={author.socialHandles.youtube}>
                      <i className="fa-brands fa-youtube" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {recentPosts.length > 0 && (
        <div className="sidebar-details-widget_1 _recent-posts mt-40">
          <h3>Recent Post</h3>
          {recentPosts.map((post, index) => (
            <div
              className={`blog1-recent-box d-flex align-items-start gap-3 ${
                index !== 0 ? "mt-16" : ""
              }`}
              key={post.ID}
            >
              <div
                className="recent-thumb flex-shrink-0"
                style={{ width: "100px" }}
              >
                <Image
                  src={fixThumbnailDomain(post.thumbnail_url)}
                  alt={post.post_name}
                  width={100}
                  height={80}
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />
              </div>
              <div className="heading w-100">
                  <img
                    src="/assets/img/icons/date1.svg"
                    alt="calendar"
                    className="me-1"
                  />
                  {new Date(post.post_date).toLocaleDateString()}
                <h5 className="mb-0">
                  <Link href={`/${post.post_name}`} className="text-capitalize">
                    {post.post_name.replace(/-/g, " ")}
                  </Link>
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="sidebar-details-widget_1 instagram-feed mt-40">
        <h3>Instagram Posts</h3>
        <div className="feed-all">
          <div className="row g-3">
            {posts.map((post, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={post.id}>
                <div
                  className={`feed-single position-relative ${
                    index >= 3 ? "mt-3" : ""
                  }`}
                >
                  <div className="card border-0 overflow-hidden insta-card">
                    <div className="position-relative">
                      <Image
                        src={post.displayUrl}
                        alt={post.alt || "Instagram Post"}
                        width={400}
                        height={500}
                        className="img-fluid w-100"
                        loading="lazy"
                        style={{ objectFit: "cover", aspectRatio: "4/5" }}
                      />

                      {/* Instagram icon link (covers entire card) */}
                      <Link
                        href={post.url}
                        target="_blank"
                        className="stretched-link insta-link"
                        aria-label="View on Instagram"
                      ></Link>

                      {/* Instagram logo overlay */}
                      <div className="position-absolute top-0 end-0 m-2 fs-5 insta-logo">
                        {post.type === "Video" ? (
                          <i className="fa-solid fa-circle-play text-white"></i>
                        ) : null}
                      </div>

                      {/* Stats overlay */}
                      <div className="position-absolute bottom-0 start-0 w-100 py-2 px-3 d-flex justify-content-between align-items-center bg-dark bg-opacity-50 text-white small stats-overlay">
                        <span>
                          <i className="fa-solid fa-heart me-1"></i>{" "}
                          {post.likesCount}
                        </span>
                        <span>
                          <i className="fa-solid fa-comment me-1"></i>{" "}
                          {post.commentsCount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="https://www.instagram.com/tech2globeweb"
          className="insta-btn"
        >
          View on Instagram{" "}
          <span>
            <i className="fa-regular fa-arrow-right" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
