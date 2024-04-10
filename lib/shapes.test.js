const { Circle, Triangle, Square } = require('./shapes');

describe('Triangle', () => {
    test('render method should return SVG polygon with correct attributes', () => {
        const triangle = new Triangle("blue", 5, 3);
        const result = triangle.render();
        expect(result).toContain('<polygon');
        expect(result).toContain('fill="blue"');
        expect(result).toContain('points="150, 18 244, 182 56, 182"');
    });
});

describe('Circle', () => {
    test('render method should return SVG circle with correct attributes', () => {
        const circle = new Circle("red", 4);
        const result = circle.render();
        expect(result).toContain('<circle');
        expect(result).toContain('fill="red"');
        expect(result).toContain('cx="150"');
        expect(result).toContain('cy="100"');
        expect(result).toContain('r="80"');
    });
});

describe('Square', () => {
    test('render method should return SVG rectangle with correct attributes', () => {
        const square = new Square("green", 6);
        const result = square.render();
        expect(result).toContain('<rect');
        expect(result).toContain('fill="green"');
        expect(result).toContain('x="90"');
        expect(result).toContain('y="40"');
        expect(result).toContain('width="120"');
        expect(result).toContain('height="120"');
    });
});
