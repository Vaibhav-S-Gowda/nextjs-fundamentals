// 9.	Calculate the sum and average of array elements.

let arr: number[] = [23, 345, 56, 78];
let sum: number = 0;

for (let i = 0; i < arr.length ; i++) {
    sum += arr[i];
}
console.log("Sum of all the elements in the array: ", sum);
console.log("Average number of elements in the array: ", sum/arr.length);