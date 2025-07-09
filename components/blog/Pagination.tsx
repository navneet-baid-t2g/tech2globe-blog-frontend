"use client";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  getPaginationGroup: number[];
  totalPages: number;
  authorId?: string;
  categoryId?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  getPaginationGroup,
  totalPages,
  authorId,
  categoryId,
}) => {
  if (getPaginationGroup.length === 0) return null;

  // Function to generate correct link based on page number and IDs
  const getLink = (page: number) => {
    if (authorId) {
      return page === 1
        ? `/author/${authorId}`
        : `/author/${authorId}/page/${page}`;
    } else if (categoryId) {
      return page === 1
        ? `/category/${categoryId}`
        : `/category/${categoryId}/page/${page}`;
    } else {
      return page === 1 ? `/` : `/page/${page}`;
    }
  };
  return (
    <div className="theme-pagination text-center">
      <ul className="pagination" role="navigation" aria-label="Pagination">
        {/* Prev Button */}
        {currentPage > 1 && (
          <li className="page-item">
            <Link
              href={getLink(currentPage - 1)}
              aria-label="Go to previous page"
              rel="prev"
            >
              <i className="fa-solid fa-angle-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </Link>
          </li>
        )}

        {/* Page Numbers */}
        {getPaginationGroup.map((item) => (
          <li
            key={item}
            className={currentPage === item ? "page-item active" : "page-item"}
          >
            <Link
              href={getLink(item)}
              aria-label={`Go to page ${item}`}
              aria-current={currentPage === item ? "page" : undefined}
            >
              {item}
            </Link>
          </li>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <li className="page-item">
            <Link
              href={getLink(currentPage + 1)}
              aria-label="Go to next page"
              rel="next"
            >
              <i className="fa-solid fa-angle-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
