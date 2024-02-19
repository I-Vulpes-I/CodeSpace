// Activity 1

const array = [10, 2, 3, 4, 7]
// Declaring array

function findMax(){
    //Declaring function
    let maxValue = Math.max(...array);
    console.log("Original array: " + array, "\nMaximum value: " + maxValue)
}

findMax()



// Activity 2

function factorialize(num) {
    if (num < 0) 
    // Rejecting negative numbers
          return -1;
    else if (num == 0) 
    // Returning 1 if num == 0
        return 1;
    else {
        return (num * factorialize(num - 1));
        // Factorializes the number given
    }
  }

let num = parseFloat(prompt("Enter number to factorialize: "));
// User input

console.log(factorialize(num))
// Runs the function with the user input



// Activity 3

// Define a function named test_prime that checks whether a given number n is a prime number
function test_prime(n) {

    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
      return false;
    }

    // Checks if n is less than one, which will be rejected with -1
    else if (n < 1) {
        return (-1)
    }

    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
      return true;
    } else {
      // Iterate from 2 to n-1 to check for factors of n
      for (var x = 2; x < n; x++) {
        // If n is divisible by x without a remainder, it is not a prime number
        if (n % x === 0) {
          return false;
        }
      }
      // If no factors are found, the number is a prime number
      return true;  
    }
  }

// Testing

console.log(test_prime(5))
console.log(test_prime(10))
console.log(test_prime(1))
console.log(test_prime(2))
console.log(test_prime(-4))






