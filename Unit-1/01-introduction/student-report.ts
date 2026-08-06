let studentName: string = "Hinduja";
let age: number = 22;
let cgpa: number = 8.8;
let passed: boolean = true;
// @ts-ignore
let registrationNo: bigint = 202600000001n;
let uniqueId: symbol = Symbol("student");
let nickname: string | null = null;
let phoneNumber: string | undefined = undefined;

console.log("------ Student Report ------");
console.log("Name           :", studentName);
console.log("Age            :", age);
console.log("CGPA           :", cgpa);
console.log("Passed         :", passed);
console.log("Registration   :", registrationNo);
console.log("Unique ID      :", uniqueId);
console.log("Nickname       :", nickname);
console.log("Phone Number   :", phoneNumber);