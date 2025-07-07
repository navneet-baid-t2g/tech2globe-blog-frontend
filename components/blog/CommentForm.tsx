import { revalidatePath } from 'next/cache';

export default function CommentForm({ postId }: { postId: number }) {
    return (
        <form action={`/api/submit-comment?postId=${postId}`} method="post" className="mt-8">
            <div className="row">
                <div className="col-md-6">
                    <div className="single-input">
                        <input type="text" name="firstName" placeholder="First Name *" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-input">
                        <input type="text" name="lastName" placeholder="Last Name (optional)" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-input">
                        <input type="email" name="email" placeholder="Email *" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-input">
                        <input type="url" name="website" placeholder="Website (optional)" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-input">
                        <textarea name="comment" rows={5} placeholder="Comment *" required />
                    </div>
                    <div className="button mt-30">
                        <button className="theme-btn1" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
