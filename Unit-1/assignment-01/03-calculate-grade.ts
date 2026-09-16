// 3.	Write a program to calculate the grade of a student based on marks.

let marks: number = 15;

if (marks > 90 && marks <= 100) {
    console.log("Marks is :",marks, " and Distinction");
} else if (marks > 70) {
    console.log("Marks is :",marks, " and First Class");
} else if (marks > 50) {
    console.log("Marks is :",marks, " and Second Class");
} else if (marks >= 35) {
    console.log("Marks is :",marks, " and Third Class");
} else {
    console.log("Marks is :",marks, " and Failed");
}