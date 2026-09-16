interface Student {
    id: number;
    name: string;
    marks: number;
}

const student: Student = {
    id: 101,
    name: "Ravi",
    marks: 85
};

console.log("Student Details");
console.log("----------------");
console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("Marks:", student.marks);