import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container">
            <h1>Recipe not found 🍳</h1>
            <p>We couldn't find that page.</p>
            <Link href="/" className="back">← Back to home</Link>
        </main>
    );
}