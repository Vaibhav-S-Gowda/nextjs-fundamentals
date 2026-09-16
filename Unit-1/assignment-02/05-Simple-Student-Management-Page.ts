interface Student {
    id: number;
    name: string;
    marks: number;
}

interface StudentProps {
    students: Student[];
}

function displayStudents(props: StudentProps): void {
    console.log("Student Management System");
    console.log("-----------------------------");
    console.log("ID\tName\tMarks\tResult");

    props.students.map((student) => {
        const result = student.marks >= 40 ? "Pass" : "Fail";

        console.log(
            `${student.id}\t${student.name}\t${student.marks}\t${result}`
        );
    });
}

const students: Student[] = [
    { id: 101, name: "Ravi", marks: 85 },
    { id: 102, name: "Priya", marks: 92 },
    { id: 103, name: "Kumar", marks: 35 },
    { id: 104, name: "Anitha", marks: 28 }
];

displayStudents({ students });