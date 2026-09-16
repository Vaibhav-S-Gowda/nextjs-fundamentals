export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="spinner"></div>

            <h2 className="mt-4 text-2xl font-semibold">
                Loading something else!!
            </h2>

            <p className="mt-2 text-gray-500">
                Please wait!!
            </p>
        </div>
    );
}