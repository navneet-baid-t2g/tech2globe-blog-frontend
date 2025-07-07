import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get('postId');

    const formData = await request.formData();

    const firstName = formData.get('firstName')?.toString().trim() || '';
    const lastName = formData.get('lastName')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const website = formData.get('website')?.toString().trim() || '';
    const comment = formData.get('comment')?.toString().trim() || '';

    const fullName = `${firstName} ${lastName}`.trim();

    // Basic validations
    if (!firstName) return NextResponse.json({ message: 'First Name is required.' }, { status: 400 });
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return NextResponse.json({ message: 'Valid Email is required.' }, { status: 400 });
    }
    if (!comment) return NextResponse.json({ message: 'Comment is required.' }, { status: 400 });
    if (website && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(website)) {
        return NextResponse.json({ message: 'Website URL is invalid.' }, { status: 400 });
    }

    // Prepare payload
    const payload = {
        name: fullName,
        email,
        website,
        comment,
        postId: Number(postId)
    };

    try {
        // const res = await fetch(`${process.env.API_BASE_PATH}/posts/comments`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload),
        //     cache: 'no-store',
        // });

        // if (!res.ok) {
        //     const errorData = await res.json();
        //     return NextResponse.json({ message: errorData?.message || 'Submission failed.' }, { status: res.status });
        // }

        return NextResponse.json({ message: 'Comment submitted successfully.' }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
