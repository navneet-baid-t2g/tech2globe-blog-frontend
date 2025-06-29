'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';

const SearchBarWidget = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchResults = async (searchTerm: string) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/search?query=${encodeURIComponent(searchTerm)}`
            );
            const data = await response.json();
            setResults(data?.results?.slice(0, 5) || []);
        } catch (err) {
            console.error(err);
            setError('Error fetching search results.');
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchResults = useCallback(
        debounce((searchTerm: string) => {
            fetchResults(searchTerm);
        }, 600),
        []
    );

    useEffect(() => {
        if (query.trim()) {
            debouncedFetchResults(query);
        } else {
            setResults([]);
        }
    }, [query, debouncedFetchResults]);

    return (
        <div className="sidebar-details-widget_1 _search-area1">
            <h3 className="mb-3">Search</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>

            {query && (
                <div className="search-results">
                    {loading && <p className="text-muted">Loading...</p>}
                    {error && <p className="text-danger">{error}</p>}
                    {!loading && results.length === 0 && <p className="text-muted">No results found.</p>}
                    <ul className="list-group">
                        {results.map((result: any) => (
                            <li key={result.ID} className="list-group-item p-2">
                                <Link href={`/${result.slug}`} className="text-decoration-none">
                                    <strong>{result.post_title}</strong>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBarWidget;
