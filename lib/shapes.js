class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
// Dummy render method, to be overridden by subclasses
    render() {
        console.log(`Rendering shape with color ${this.color}`);
    }

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    render() {
        console.log(`Rendering triangle with color ${this.color}, base ${this.base}, and height ${this.height}`);
        // Logic to actually render a triangle...
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    render() {
        console.log(`Rendering circle with color ${this.color} and radius ${this.radius}`);
        // Logic to actually render a circle...
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }

    render() {
        console.log(`Rendering square with color ${this.color} and side ${this.side}`);
        // Logic to actually render a square...
    }
}

module.exports = { Circle, Triangle, Square };
