export default async function UsersPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return (
        <div>
            <h2>User List</h2>
            <ul style={{ listStyleType: '" ✯ "' }}>
                {users.map((user: any) => (
                    <li key = {user.id}> {user.name} </li>
                ))}
            </ul>
        </div>
    )
}