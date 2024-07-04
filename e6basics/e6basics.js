// Step 1: Create two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

// Step 2: Combine the arrays using the spread operator
const numbers = [...numbers1, ...numbers2];

// Step 3: Define an arrow function to square a number
const square = num => num * num;

// Step 4: Create a new array of squares using the map method
const squares = numbers.map(square);

// Step 5: Define an arrow function to check if a number is even
const isEven = num => num % 2 === 0;

// Step 6: Filter the squares to get only even squares
const evenSquares = squares.filter(isEven);

// Step 7: Use destructuring to extract elements
const [firstEvenSquare, secondEvenSquare] = evenSquares;

// Step 8: Log the results using a template literal
console.log(`Original numbers: ${numbers}`);
console.log(`Squared numbers: ${squares}`);
console.log(`Even squares: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}, Second even square: ${secondEvenSquare}`);
