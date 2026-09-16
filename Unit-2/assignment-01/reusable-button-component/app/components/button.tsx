"use client";

type ButtonProps = {
    text: string;
    color: string;
    onClick: () => void;
};

export default function Button({ text, color, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:opacity-80"
        >
            {text}
        </button>
    );
}