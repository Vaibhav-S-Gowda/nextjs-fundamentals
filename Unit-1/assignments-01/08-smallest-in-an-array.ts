// 8.	Find the smallest of an array.

let arr: number[] = [23, 56, 10];
let smallest: number = arr[0];
for (let i = 1; i < arr.length ; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("The smallest value from the array ", arr, " is :",smallest);