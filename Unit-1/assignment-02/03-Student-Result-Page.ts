interface Student {
    id: number;
    name: string;
    marks: number;
}

const student: Student = {
    id: 101,
    name: "Arjun",
    marks: 85
};

const result = student.marks >= 40 ? "Pass" : "Fail";

console.log("Student Result");
console.log("----------------");
console.log("Name:", student.name);
console.log("ID:", student.id);
console.log("Marks:", student.marks);
console.log("Result:", result);