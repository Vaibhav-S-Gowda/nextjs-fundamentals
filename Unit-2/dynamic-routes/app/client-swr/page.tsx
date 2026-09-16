"use client";

import useSWR from "swr";

const fetcher = (url: string) =>
    fetch(url).then((res) => res.json());
export default function Users() {
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <h2>Users</h2>
            {data.map((user: any) => (
                <p key = {user.id}>{user.name}</p>
            ))}
        </div>
    )
}