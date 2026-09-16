import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center gap-4 border-b border-gray-200 bg-white p-4">
            <Image
                src="/images.jpeg"
                alt="PES University"
                width={150}
                height={80}
            />

            {/*<h1 className="text-xl font-bold">*/}
            {/*    PES University*/}
            {/*</h1>*/}
        </header>
    );
}