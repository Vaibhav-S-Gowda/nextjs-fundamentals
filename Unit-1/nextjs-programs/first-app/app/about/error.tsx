"use client"

export default function Error({
    error, reset
}: {
    error: Error & {digest?: string };
    reset: () => void;
}) {
    return (
        <main>
           <h2>Something went wrong!</h2>

           <button onClick={() => reset()}>Try Again</button>
        </main>
    )
}