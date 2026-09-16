"use client";

import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            const response = await fetch("http://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        }

        getUsers();
    }, []);

    return (
        <>
            {users.map((user:any) => (
                <p key={user.id}>
                    {user.name}: {user.email}
                </p>
            ))}
        </>
    )
}