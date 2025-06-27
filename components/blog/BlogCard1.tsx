import Link from "next/link";

export default function BlogCard1({ col, item }: any) {
  function decodeHTML(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
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
          <img src={`${item.img}`} alt={item.title} />
        </div>
        <div className="heading1">
          <div className="social-area">
            <Link href="/social-media" className="social">
              {item.category}
            </Link>
            <Link href="/categories" className="time">
              <img src="/assets/img/icons/time1.svg" alt="vexon" /> 3 min read
            </Link>
          </div>
          <h4>
            <Link href="/blog-single">{decodeHTML(item.title)}</Link>
          </h4>
          <p className="mt-16">{item.excerpt}</p>
          <div className="author-area">
            <div className="author">
              <div className="author-tumb pastel-avatar">
                {item.author
                  .split(" ")
                  .map((word: String) => word[0])
                  .join("")
                  .substring(0, 2)
                  .toUpperCase()}
              </div>
              <Link href="/author" className="author-text">
                {item.author}
              </Link>
            </div>

            <div className="date">
              <Link href="/#">
                <img src="/assets/img/icons/date1.svg" alt="published_on" />
                {new Date(item.date).toLocaleDateString("en-GB")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
