// 7.	Write a function to reverse a string.

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

let str: string = "Welcome to TypeScript!";
console.log("Original String:", str);
console.log("Reversed String:", reverseString(str));