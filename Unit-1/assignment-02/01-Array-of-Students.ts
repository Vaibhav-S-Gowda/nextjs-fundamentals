interface Student {
    StudentId: number;
    StudentName: string;
    marks: number;
}

const students: Student[] = [
    {
        StudentId: 201,
        StudentName: "Sharvani",
        marks: 98,
    },
    {
        StudentId: 202,
        StudentName: "Shashank",
        marks: 88,
    },
    {
        StudentId: 207,
        StudentName: "Shreeya",
        marks: 91,
    },
    {
        StudentId: 217,
        StudentName: "Skanda",
        marks: 90,
    },
    {
        StudentId: 226,
        StudentName: "Sumanth",
        marks: 95,
    }
]

students.map(student => {
    console.log("-----------------");
    console.log("SRN: ", student.StudentId);
    console.log("Name: ",student.StudentName);
    console.log("Marks: ", student.marks);
})