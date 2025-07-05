import { ImageResponse } from 'next/og';

// Metadata
export const alt = 'Author on Tech2Globe';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

// Dynamic Image Generation (No profile image, displayName only)
export default async function Image({ params }: { params: { author_id: string } }) {
    const authorRes = await fetch(`${process.env.API_BASE_PATH}/author/${params.author_id}`, {
        next: { revalidate: 600 },
    });

    const authorJson = await authorRes.json();
    const author = authorJson?.authors?.[0];

    const name = author?.displayName || 'Unknown Author';

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                    color: '#fff',
                    padding: '60px',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}
                >
                    {name}
                </div>
                <div
                    style={{
                        marginTop: 30,
                        fontSize: 36,
                        fontWeight: 400,
                        opacity: 0.85,
                    }}
                >
                    Author at Tech2Globe
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
