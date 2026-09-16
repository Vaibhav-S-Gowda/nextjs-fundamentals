interface StudentProps {
    id: number;
    name: string;
    marks: number;
}

function displayStudentList(props: StudentProps[]): void {
    props.map((student) => {
        console.log("----------");
        console.log("Id: ", student.id);
        console.log("Name: ", student.name);
        console.log("Marks: ", student.marks);
    });
}

const students = [
    { id: 101, name: "Ravi", marks: 85 },
    { id: 102, name: "Priya", marks: 92 },
    { id: 103, name: "Kumar", marks: 76 }
];

displayStudentList(students);