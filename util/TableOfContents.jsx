'use client';
import { useState, useEffect } from 'react';

export default function TableOfContents({ postContent }) {
    const [headings, setHeadings] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(postContent, 'text/html');
        const headingElements = Array.from(doc.querySelectorAll('h2, h3, h4'));

        const headingData = headingElements.map((heading, index) => ({
            id: heading.id || `heading-${index}`,
            text: heading.textContent,
            level: parseInt(heading.tagName.substring(1)),
            index: index,
        }));

        setHeadings(headingData);

        // Add scroll event listener to highlight active section
        const handleScroll = () => {
            const realHeadings = document.querySelectorAll('h2, h3, h4');
            let currentActive = null;

            realHeadings.forEach((heading, index) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 100) {
                    currentActive = index;
                }
            });

            setActiveIndex(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [postContent]);

    const scrollToHeading = (index, event) => {
        event.preventDefault();
        const realHeadings = document.querySelectorAll('h2, h3, h4');
        const realElement = realHeadings[index];
        if (realElement) {
            const headerOffset = 100;
            const elementPosition = realElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            // Temporarily highlight the clicked item
            setActiveIndex(index);
        }
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const getIndent = (level) => {
        switch (level) {
            case 2: return 'ps-0';
            case 3: return 'ps-3 ms-2 border-start';
            case 4: return 'ps-5 ms-2 border-start';
            default: return 'ps-0';
        }
    };

    return (
        <div className="toc-container mb-4 p-3 rounded-3 bg-light">
            <button
                onClick={toggleCollapse}
                className="d-flex align-items-center justify-content-between w-100 p-2 mb-1 bg-transparent border-0 rounded-2"
                aria-expanded={!isCollapsed}
            >
                <span className="fw-bold text-uppercase d-flex align-items-center">
                    <i className="bi bi-list-ul me-2"></i>
                    Table of Contents
                </span>
                <span className="toc-chevron transition-all">
                    <i className={`bi bi-chevron-${isCollapsed ? 'down' : 'up'}`}></i>
                </span>
            </button>

            <div className={`toc-content ${isCollapsed ? 'collapsed' : ''}`}>
                <nav aria-label="Page table of contents">
                    <ul className="list-unstyled mt-2">
                        {headings.map((heading, index) => (
                            <li
                                key={index}
                                className={`${getIndent(heading.level)} my-1 position-relative`}
                                data-level={heading.level}
                            >
                                <a
                                    href={`#${heading.id}`}
                                    onClick={(e) => scrollToHeading(index, e)}
                                    className={`d-block py-1 px-2 text-decoration-none rounded-2 transition-all 
                                        ${activeIndex === index ? 'active' : ''}
                                        ${heading.level === 2 ? 'fw-semibold' : 'fw-normal'}`}
                                >
                                    {heading.level === 3 && <span className="toc-bullet me-1">•</span>}
                                    {heading.level === 4 && <span className="toc-bullet me-1">◦</span>}
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <style jsx>{`
                .toc-container {
                    background-color: var(--bs-light-bg-subtle);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                
                .toc-content {
                    overflow: hidden;
                    transition: max-height 0.3s ease, opacity 0.2s ease;
                    max-height: 1000px;
                    opacity: 1;
                }
                
                .toc-content.collapsed {
                    max-height: 0;
                    opacity: 0;
                }
                
                .toc-chevron {
                    color: var(--bs-secondary);
                }
                
                .toc-bullet {
                    color: var(--bs-primary);
                    font-weight: bold;
                }
                
                .border-start {
                    border-color: var(--bs-primary) !important;
                    border-width: 2px !important;
                }
                
                a.active {
                    background-color: var(--bs-primary-bg-subtle) !important;
                    color: var(--bs-primary) !important;
                    transform: translateX(2px);
                }
                
                a:not(.active):hover {
                    background-color: var(--bs-tertiary-bg) !important;
                    color: var(--bs-primary) !important;
                }
                
                [data-level="2"] a {
                    font-size: 0.9rem;
                }
                
                [data-level="3"] a {
                    font-size: 0.85rem;
                }
                
                [data-level="4"] a {
                    font-size: 0.8rem;
                }
            `}</style>
        </div>
    );
}