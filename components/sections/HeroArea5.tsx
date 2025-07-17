import React from "react";

export default function HeroArea5({ pageNumber = 1 }) {
  return (
    <section
      className="py-3 text-center border-top border-bottom"
      style={{ backgroundColor: "#F3F4F6" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-8">
            <h1 className="display-6 fw-bold">
              Tech2Globe Blog Posts
            </h1>
            <p className="lead mb-0">
              {pageNumber > 1 && (
                <span className="text-muted fs-5"> - Page {pageNumber}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
