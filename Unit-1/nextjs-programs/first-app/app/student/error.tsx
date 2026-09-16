"use client"

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <h1>Something went wrong!</h1>

            <p>{error.message}</p>

            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}