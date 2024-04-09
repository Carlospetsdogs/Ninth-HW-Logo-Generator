const { Square, Triangle, Circle } = require("./shapes");

// Importing the shapes module
const { Triangle, Circle, Square } = require('./shapes');

// Function to test rendering for all shapes
function testRendering() {
    // Create instances of each shape
    const triangle = new Triangle("blue", 5, 3);
    const circle = new Circle("red", 4);
    const square = new Square("green", 6);

    // Render each shape
    triangle.render();
    circle.render();
    square.render();
}

// Function to test the color attribute for all shapes
function testColor() {
    // Create instances of each shape
    const triangle = new Triangle("blue", 5, 3);
    const circle = new Circle("red", 4);
    const square = new Square("green", 6);

    // Check the color attribute for each shape
    console.log(`Triangle color: ${triangle.color}`);
    console.log(`Circle color: ${circle.color}`);
    console.log(`Square color: ${square.color}`);
}

// Run the tests
console.log("Running rendering tests:");
testRendering();

console.log("\nRunning color tests:");
testColor();
