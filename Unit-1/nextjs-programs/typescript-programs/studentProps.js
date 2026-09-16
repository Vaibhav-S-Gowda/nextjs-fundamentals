"use strict";
function displayStudent(props) {
    console.log("Name: ", props.name);
    console.log("Age: ", props.age);
    console.log("Marks: " + props.marks);
    console.log(props);
}
const student = {
    name: "Sharvani",
    age: 50,
    marks: 89,
};
displayStudent(student);
