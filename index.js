const add = function(a, b) {
    return a + b;
  };
  
  // Arrow Function Version
  const addArrow = (a, b) => a + b;
  
  // Function Expression with a Single Parameter
  const increment = function(n) {
    return n + 1;
  };
  
  // Arrow Function Version
  const incrementArrow = n => n + 1;
  
  // Function Expression with Multiple Statements
  const multiplyAndLog = function(a, b) {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
  };
  
  // Arrow Function Version
  const multiplyAndLogArrow = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
  };
  
  // Arrow Functions in Iterators
  const numbers = [1, 2, 3, 4, 5];
  
  // Function expression with .map()
  const squares = numbers.map(function(n) {
    return n * n;
  });
  
  // Arrow function version with .map()
  const squaresArrow = numbers.map(n => n * n);
    
  // Function to return a greeting message
  const greet = (name) => `Hello, ${name}!`;
  
  // Function to calculate the square of a number
  const square = (number) => number * number;
  
  // Function to calculate the cube of a number
  const cube = (number) => number ** 3;
  
  // Function to calculate the factorial of a number
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };
  
  // Function to find the maximum number in an array
  const findMax = (arr) => Math.max(...arr);
  
  // Function to filter out even numbers from an array
  const filterEvens = (arr) => arr.filter(num => num % 2 !== 0);
  
  // Function to double each number in an array
  const doubleNumbers = (arr) => arr.map(num => num * 2);
  
  // Function to sum all numbers in an array
  const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
  
   const divide = function() {
    return 2000 / 100;
  };
  