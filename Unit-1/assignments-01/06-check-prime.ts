// 6. Write a function to check whether a number is prime.

function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let n: number = 97;
if (isPrime(n)) {
    console.log(n, "is a Prime Number");
} else {
    console.log(n, "is Not a Prime Number");
}