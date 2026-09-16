import Link from "next/link";
// const StudentPage = require("./student/page");
import StudentPage from "./student/page";

export default async function Home() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return (
        <div className="min-h-screen bg-white">
            <ul className="flex justify-center gap-4 border-b border-gray-200 p-4">
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>|</li>

                <li>
                    <Link href="/course">My Course</Link>
                </li>

                <li>|</li>

                <li>
                    <Link href="/about">About</Link>
                </li>

                <li>|</li>

                <li>
                    <Link href="/feedback">Feedback</Link>
                </li>
            </ul>

            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold">
                    Home Page
                </h1>

                <p className="mt-4 text-gray-600">
                    Welcome to my Next.js application.
                </p>

            </div>
            <StudentPage />
        </div>
    );
}