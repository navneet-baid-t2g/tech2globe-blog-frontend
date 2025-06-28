"use client";
import Link from "next/link";
import React from "react";

interface PaginationProps {
  currentPage: number;
  getPaginationGroup: number[];
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  getPaginationGroup,
  totalPages,
}) => {

  if (getPaginationGroup.length === 0) return null;

  const basePath = "/page/";

  return (
    <div className="theme-pagination text-center">
      <ul>
        {/* Prev Button */}
        {currentPage > 1 && (
          <li className="page-item">
            <Link href={`${basePath}${currentPage - 1}`}>
              <i className="fa-solid fa-angle-left" />
            </Link>
          </li>
        )}

        {/* Page Numbers */}
        {getPaginationGroup.map((item) => (
          <li
            key={item}
            className={currentPage === item ? "page-item active" : "page-item"}
          >
            <Link href={`${basePath}${item}`}>{item}</Link>
          </li>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <li className="page-item">
            <Link href={`${basePath}${currentPage + 1}`}>
              <i className="fa-solid fa-angle-right" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
