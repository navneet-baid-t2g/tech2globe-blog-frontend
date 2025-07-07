'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { debounce } from 'lodash';

const SearchBarWidget = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const fetchResults = async (searchTerm: string) => {
        try {
            setLoading(true);
            setError(null);
            setHasSearched(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_PATH}/posts/search?query=${encodeURIComponent(searchTerm)}`
            );
            const data = await response.json();
            setResults(data?.results?.slice(0, 5) || []);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch results. Please try again.');
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchResults = useCallback(
        debounce((searchTerm: string) => {
            if (searchTerm.trim()) {
                fetchResults(searchTerm);
            } else {
                setResults([]);
                setHasSearched(false);
            }
        }, 600),
        []
    );

    useEffect(() => {
        debouncedFetchResults(query);
        return () => debouncedFetchResults.cancel();
    }, [query, debouncedFetchResults]);

    const showResultsPanel = query && (isFocused || results.length > 0 || loading || (hasSearched && !loading));

    return (
        <div className="sidebar-details-widget_1 _search-area1">
            <h3 className="mb-3">Search</h3>
            <div className="position-relative">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {loading && (
                        <div className="position-absolute top-50 end-0 translate-middle-y me-3">
                            <div className="spinner-border spinner-border-sm text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </form>

            </div>

            {showResultsPanel && (
                <div className="list-group mt-2 shadow-sm">
                    {loading ? (
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="list-group-item placeholder-glow">
                                <span className="placeholder col-8"></span>
                                <span className="placeholder col-4"></span>
                            </div>
                        ))
                    ) : error ? (
                        <div className="list-group-item list-group-item-danger d-flex align-items-center">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            {error}
                        </div>
                    ) : results.length === 0 ? (
                        <div className="list-group-item text-muted">
                            No results found for "{query}"
                        </div>
                    ) : (
                        results.map((result) => (
                            <Link
                                key={result.ID}
                                href={`/${result.slug}`}
                                className="list-group-item list-group-item-action"
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{result.post_title}</h6>
                                </div>
                                <small className="text-muted">Click to view</small>
                            </Link>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBarWidget;