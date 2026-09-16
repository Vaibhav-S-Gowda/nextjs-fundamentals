type UserCardProps = {
    name: string;
    email: string;
    role: string;
};

export default function UserCard({
                                     name,
                                     email,
                                     role,
                                 }: UserCardProps) {
    return (
        <div className="border rounded-lg p-4 w-80">
        <h2 className="text-xl font-bold">{name}</h2>
            <p>{email}</p>
            <p className="text-gray-600">{role}</p>
        </div>
);
}