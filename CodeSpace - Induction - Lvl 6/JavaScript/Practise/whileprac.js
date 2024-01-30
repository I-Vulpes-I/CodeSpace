// program to display numbers from 1 to 5
// initialise the variable
let i = 1, n = 5;

// while loop from i = 1 to 5
while (i <= n) {
    console.log(i);
    i += 1;
}



// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;

// take input from the user
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {

    // add all positive numbers
    sum += number;

    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);



// program to display numbers
let f = 1;
const num = 5;

// do...while loop from 1 to 5
do {
    console.log(f);
    f++;
} while(f <= num);



// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sum2 = 0;
let number2 = 0;

do {
    sum2 += number2;
    number2 = parseInt(prompt('Enter a number: '));
} while(number2 >= 0)

console.log(`The sum is ${sum2}.`);