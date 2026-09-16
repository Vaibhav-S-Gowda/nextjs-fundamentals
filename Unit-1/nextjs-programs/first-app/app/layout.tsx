import "./globals.css";
import Image from "next/image";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    throw new Error("Root layout failed.");

    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">

        <header className="flex items-center gap-4 border-b border-gray-200 bg-white p-4">
            <Image
                src="/images.jpeg"
                alt="PES University"
                width={150}
                height={80}
            />
        </header>

        <main className="flex-1">
            {children}
        </main>

        <footer className="border-t border-gray-200 bg-white p-4 text-center">
            <p className="text-sm text-gray-500">
                © 2026 PESU Website
            </p>
        </footer>

        </body>
        </html>
    );
}