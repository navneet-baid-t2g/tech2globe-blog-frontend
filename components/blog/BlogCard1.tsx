import Link from "next/link";

export default function BlogCard1({ col, item }: any) {
  function decodeHTML(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }
  function cleanExcerpt(html: string): string {
    return html
      .replace(/<!--[\s\S]*?-->/g, "") // Remove comments
      .replace(/<[^>]*>/g, "") // Remove all HTML tags
      .trim();
  }
  function truncate(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  function getCategory(category: []): string {
    return item.categories && item.categories.length > 0
      ? item.categories[0].name === "Uncategorized" &&
        item.categories.length > 1
        ? item.categories[1].name
        : item.categories[0].name
      : "General";
  }
  return (
    <div
      className={col}
      data-aos="fade-up"
      data-aos-offset={50}
      data-aos-duration={400}
      data-aos-delay={0}
    >
      <div className="blog1-single-box mb-4">
        <div className="thumbnail image-anime">
          <img src={`${item.thumbnail_url}`} alt={item.post_title} />
        </div>
        <div className="heading1">
          <div className="social-area">
            <Link href="/social-media" className="social">
              {getCategory(item.categories)}
            </Link>
            <Link href="/categories" className="time">
              <img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read
            </Link>
          </div>
          <h4>
            <Link href={`/${item.post_name}`}>{decodeHTML(item.post_title)}</Link>
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
              <Link href="/author" className="author-text">
                {item.author_name || "Unknown Author"}
              </Link>
            </div>

            <div className="date">
              <Link href="/#">
                <img src="/assets/img/icons/date1.svg" alt="published_on" />
                {new Date(item.post_date).toLocaleDateString("en-GB")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
