// data fetching

async function getStudents() {
    const response = await fetch(
        "https://example.com/api/students"
    );

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export default async function StudentPage() {
    const students = await getStudents();

    return (
        <div>
            <h2>Student Page</h2>
            {students.map((student: any) => (
                <p key={student.id}>
                    {student.name}
                </p>
            ))}
        </div>
    );
}