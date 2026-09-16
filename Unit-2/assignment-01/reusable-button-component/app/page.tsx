"use client";

import Button from "./components/button";

export default function Home() {
    const handleSave = () => {
        alert("Save button clicked!");
    };

    const handleDelete = () => {
        alert("Delete button clicked!");
    };

    const handleUpdate = () => {
        alert("Update button clicked!");
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold">
                Reusable Buttons
            </h1>

            <div className="flex gap-4">
                <Button
                    text="Save"
                    color="green"
                    onClick={handleSave}
                />

                <Button
                    text="Delete"
                    color="red"
                    onClick={handleDelete}
                />

                <Button
                    text="Update"
                    color="blue"
                    onClick={handleUpdate}
                />
            </div>
        </main>
    );
}