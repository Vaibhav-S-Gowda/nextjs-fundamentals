// @ts-ignore
let name = "Mayura Varma";
let email = "ADMIN@GMAIL.COM";
let city = "   Bangalore   ";
let website = "https://nextjs.org";
let file = "assignment.pdf";

// Uppercase
// @ts-ignore
console.log(name.toUpperCase());

// Lowercase
console.log(email.toLowerCase());

// Remove spaces
console.log(city.trim());

// Count characters
// @ts-ignore
console.log(name.length);

// Check if email contains '@'
console.log(email.includes("@"));

// Website starts with https
console.log(website.startsWith("https"));

// File ends with .pdf
console.log(file.endsWith(".pdf"));

// Replace text
console.log("Welcome to Twitter".replace("Twitter", "X"));

// First letter
// @ts-ignore
console.log(name.charAt(0));

// Username
// @ts-ignore
console.log(name.toLowerCase() + "257");

let fullName = "Kanhaiya";
let phone = "9876543210";
let sentence = "Next.js makes web development easier";
let password = "NextJS@123";

// First name
console.log(fullName.slice(0, 7));

// Email domain
console.log(email.substring(email.indexOf("@") + 1));

// Initials
console.log(fullName.charAt(0) + fullName.charAt(8));

// Split full name
console.log(fullName.split(" "));

// Split sentence into words
console.log(sentence.split(" "));

// Reverse first and last name
let parts = fullName.split(" ");
console.log(parts[1] + " " + parts[0]);

// Remove first space
console.log(sentence.replace(" ", ""));

// Mask phone number
console.log("******" + phone.slice(-4));

// Password length
console.log(password.length >= 8);

// Welcome message
console.log(`Welcome, ${fullName}!`);

let text = "  Hello TypeScript  ";

console.log(text);
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.length);
console.log(text.includes("Type"));
console.log(text.replace("TypeScript", "Next.js"));
console.log(text.trim().slice(0, 5));