"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="container">
            <h1>Something went wrong 😕</h1>
            <button className="retry" onClick={() => reset()}>
                Try again
            </button>
        </main>
    );
}