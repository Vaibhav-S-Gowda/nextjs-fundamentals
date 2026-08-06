// 5.	Write a function to find the square of a number.

function squareNumber(n: number): number {
    if (n === 0) return 0;
    return n*n;
}

let n: number = 15;
console.log("Square of ", n, " is :", squareNumber(n));