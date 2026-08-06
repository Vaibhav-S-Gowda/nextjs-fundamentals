let salary = 70000;

let rent = 18000;
let food = 9000;
let travel = 4500;
let entertainment = 3000;

let totalExpenses = rent + food + travel + entertainment;

let savings = salary - totalExpenses;

let savingsPercentage = (savings / salary) * 100;

console.log("Monthly Salary :", salary);
console.log("Total Expenses :", totalExpenses);
console.log("Savings        :", savings);
console.log("Savings %      :", savingsPercentage.toFixed(2));

console.log("Good Savings :", savingsPercentage >= 20);