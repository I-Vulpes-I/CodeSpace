// Activity 1

// Using a for loop to iterate through numbers from 0 to 15
for (let x = 0; x <= 15; x++) {
    // Checking if the current number is 0
    if (x === 0) {
        console.log(x + " is even");
    }
    // Checking if the current number is even
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    // If the number is not 0 and not even, it is odd
    else {
        console.log(x + " is odd");
    }
} 

// Activity 2

// Counter will be used for counting what number we are multiplying by
// Example: 2 x 1 (counter) = 2, raising the counter would make it 2 x 2 (counter) = 4
let counter = 0
// Asking user for an integer input
let multiplyNumber = parseInt(prompt("Enter a number to be multiplied up to 10 times: "))

for (let n = 1; n <= 10; n++) {
    // Adding 1 to counter every loop through
    counter += 1
    // Declaring sum as the user input multiplied by n which iterates every loop
    let sum = (multiplyNumber * n);
    // Displaying the total sum, with the counter used to increase the number that is multiplying user input
    console.log(multiplyNumber + " x", + counter + " =", + sum);
}