// 10.	Reverse an array.

let arr: number[] = [12, 34, 45, 90, 56, 67, 87];
console.log("Original Array:", arr);

let j: number = arr.length - 1;
for (let i = 0; i < arr.length ; i++) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
    if(j < i) break;
}
console.log("Reversed Array:", arr);