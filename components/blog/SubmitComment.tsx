'use client';

import { useState } from 'react';

export default function SubmitComment({ postId }: { postId: number }) {
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const firstName = formData.get('firstName')?.toString().trim() || '';
        const lastName = formData.get('lastName')?.toString().trim() || '';
        const email = formData.get('email')?.toString().trim() || '';
        const website = formData.get('website')?.toString().trim() || '';
        const comment = formData.get('comment')?.toString().trim() || '';

        const fullName = `${firstName} ${lastName}`.trim();

        const payload = {
            name: fullName,
            email,
            website,
            comment,
            postId
        };

        try {
            const res = await fetch('/api/submit-comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                cache: 'no-store'
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.message || 'Submission failed.');
            } else {
                setMessage('Comment submitted successfully!');
                form.reset();
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            const form = document.getElementById('commentForm');
            if(form) {
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('submit-comment', { detail: form }));
              });
            }
          `
                }}
            />
            <CustomSubmitHandler onSubmit={handleSubmit} />
            {loading && <p>Submitting...</p>}
            {message && <p>{message}</p>}
        </>
    );
}

function CustomSubmitHandler({ onSubmit }: { onSubmit: (e: any) => void }) {
    // Add global listener only once
    if (typeof window !== 'undefined') {
        window.addEventListener('submit-comment', (e: any) => onSubmit(e));
    }
    return null;
}
