// Activity 1

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// Declaring array

let sum = 0
// Variable for the sum of the calculation

for (let i = 0; i < num.length; i++) {
    // Setting up for loop to iterate through array
  sum += num[i];
  // Adding sum to whatever is currently selected in the array, then replacing sum with the result
}

console.log("The sum is " + sum)



// Activity 2

const numAvg = [20, 30, 25, 35, -16, 60, -100] 
// Declaring array

let sum2 = 0
let avg = 0
// Variable for the sum of the calculation

for (let i = 0; i < numAvg.length; i++) {
    // Setting up for loop to iterate through array
  sum2 += numAvg[i];
  // Adding sum to whatever is currently selected in the array, then replacing sum with the result
}

avg = sum2 / numAvg.length
let result = avg.toFixed(1)


console.log("Average value of the array elements is " + result)



// Activity 3

const minMax = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49];
 
let minValue = Math.min(...minMax);
let maxValue = Math.max(...minMax);
     
console.log("Original array: " + minMax, "\nMinimum element is: " + minValue, "\nMaximum element is: " + maxValue)
