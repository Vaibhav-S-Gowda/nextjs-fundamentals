export default async function UsersPage(){
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {cache: "no-cache"}
    );
    const users = await response.json();

    return (
        <div>
            <h2>Users</h2>

            {users.map((user:any) => (
                <p key={user.id}> {user.name}</p>
            ))}
        </div>
    );
}