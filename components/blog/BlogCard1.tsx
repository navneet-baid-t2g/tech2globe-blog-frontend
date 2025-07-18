import Link from "next/link";
import { decode } from "html-entities";
import { fixThumbnailDomain } from "@/util/fixThumbnailDomain";
import Image from "next/image";
import { gifPlaceholder } from "../layout/Placeholder";
export default function BlogCard1({
  col,
  item,
  cardNumber,
  animated = true,
}: any) {
  function decodeHTML(html: string): string {
    return decode(html || "");
  }
  function cleanExcerpt(html: string): string {
    if (!html) return "";
    return decode(html)
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function truncate(text: string, maxLength: number): string {
    const cleanText = text.trim();
    return cleanText.length > maxLength
      ? cleanText.slice(0, maxLength).trim() + "..."
      : cleanText;
  }
  function getCategory(): string {
    return item.categories && item.categories.length > 0
      ? item.categories[0].name === "Uncategorized" &&
        item.categories.length > 1
        ? item.categories[1].name
        : item.categories[0].name
      : "General";
  }

  function calculateReadingTime(text: string): string {
    const wordsPerMinute = 200;
    const cleanText = cleanExcerpt(text);
    const wordCount = cleanText.split(/\s+/).length;
    const time = Math.ceil(wordCount / wordsPerMinute);
    return `${time || 1} min read`;
  }

  const thumbnailUrl = fixThumbnailDomain(item.thumbnail_url);
  return (
    <div
      className={col}
      {...(animated &&
        cardNumber >= 4 && {
          "data-aos": "fade-up",
          "data-aos-offset": "50",
          "data-aos-duration": "100",
          "data-aos-delay": "0",
        })}
    >
      <div className="blog1-single-box mb-4">
        <div className="thumbnail image-anime">
          <Image
            src={thumbnailUrl}
            alt={item.post_title}
            width={600}
            height={400}
            priority={cardNumber < 4}
            placeholder="blur"
            blurDataURL={gifPlaceholder}
            className="img-fluid"
            loading={cardNumber < 4 ? "eager" : "lazy"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="heading1">
          <div className="social-area">
            <Link
              href={`/category/${
                item.categories[0].name === "Uncategorized" &&
                item.categories.length > 1
                  ? item.categories[1].slug
                  : item.categories[0].slug
              }`}
              className="social text-capitalize"
            >
              {getCategory()}
            </Link>
            <span className="time">
              <img width="18" height="18" src="/assets/img/icons/time1.svg" alt="vexon" />{" "}
              {calculateReadingTime(item.post_content)}
            </span>
          </div>
          <h4>
            <Link href={`/${item.post_name}`}>
              {decodeHTML(item.post_title)}
            </Link>
          </h4>
          <p className="mt-16">
            {truncate(item.excerpt || cleanExcerpt(item.post_content), 200)}
          </p>
          <div className="author-area">
            <div className="author">
              <div className="author-tumb pastel-avatar">
                {(item.author_name
                  ? item.author_name
                      .split(" ")
                      .map((word: string) => word[0])
                      .join("")
                      .substring(0, 2)
                  : "AU"
                ).toUpperCase()}
              </div>
              <Link
                href={`/author/${item.post_author}`}
                className="author-text"
              >
                {item.author_name || "Unknown Author"}
              </Link>
            </div>

            <div className="date d-flex align-items-center">
              <img
                src="/assets/img/icons/date1.svg"
                alt="published_on"
                className="mr-2"
                width="16"
                height="16"
              />
              {new Date(item.post_date).toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
