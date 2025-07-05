'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

interface Category {
    id: number;
    name: string;
    slug: string;
    count: number;
    post_count: number;
}

interface DirectoryProps {
    categories: Category[];
}

export default function Directory({ categories }: DirectoryProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [groupedCategories, setGroupedCategories] = useState<Record<string, Category[]>>({});
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        const grouped: Record<string, Category[]> = {};
        let filtered = [...categories];

        if (searchTerm) {
            filtered = filtered.filter(cat =>
                cat.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filter === 'popular') {
            filtered = filtered.filter(cat => cat.count > 30);
        } else if (filter === 'newest') {
            filtered = filtered.filter(cat => cat.count < 20);
        }

        filtered.sort((a, b) => a.name.localeCompare(b.name));

        filtered.forEach(category => {
            const firstLetter = category.name.charAt(0).toUpperCase();
            if (!grouped[firstLetter]) grouped[firstLetter] = [];
            grouped[firstLetter].push(category);
        });

        setGroupedCategories(grouped);
    }, [categories, searchTerm, filter]);

    return (
        <div className="directory-section py-5">
            <div className="container">

                <div className="directory-controls mb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="search-bar position-relative">
                                <input
                                    type="text"
                                    className="form-control form-control-lg search-input"
                                    placeholder="Search categories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alphabet-nav mb-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        {Object.keys(groupedCategories).sort().map(letter => (
                            <a key={letter} href={`#letter-${letter}`} className="alphabet-link">
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="categories-list">
                    {Object.keys(groupedCategories).length > 0 ? (
                        Object.keys(groupedCategories).sort().map(letter => (
                            <div key={letter} id={`letter-${letter}`} className="letter-section mb-2">
                                <h2 className="letter-header">{letter}</h2>
                                <div className="row">
                                    {groupedCategories[letter].map(category => (
                                        <div key={category.id} className="col-md-4 col-sm-6 mb-4">
                                            <Link href={`/category/${category.slug}`} className="category-card">
                                                <div className="card h-100">
                                                    <div className="card-body">
                                                        <h3 className="category-name">{category.name}</h3>
                                                        <span className="badge category-count">{category.post_count} posts</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <h3>No categories found</h3>
                            <p>Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>

            </div>
        </div >
    );
}