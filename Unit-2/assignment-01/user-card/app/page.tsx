import UserCard from "./user-card";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Users</h1>

        <UserCard
            name="Vaibhav"
            email="vaibhav@gmail.com"
            role="Developer"
        />

        <UserCard
            name="Hinduja"
            email="hinduja@gmail.com"
            role="Cloud architect"
        />

        <UserCard
            name="Priya"
            email="priya@example.com"
            role="Manager"
        />
      </main>
  );
}