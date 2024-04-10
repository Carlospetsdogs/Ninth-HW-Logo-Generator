const SVG = require('./svg');

describe('SVG', () => {
    let svg;

    beforeEach(() => {
        svg = new SVG();
    });

    test('render method should return SVG string with shape and text elements', () => {
        svg.setText("Test", "red");
        svg.setShape({
            render: () => '<rect x="50" y="50" width="300" height="100" fill="blue"/>'
        });

        const result = svg.render();
        expect(result).toContain('<svg');
        expect(result).toContain('<text');
        expect(result).toContain('<rect');
    });

    test('setText method should set textElement property with valid message and color', () => {
        svg.setText("Test", "red");
        expect(svg.textElement).toContain('<text');
        expect(svg.textElement).toContain('Test');
        expect(svg.textElement).toContain('red');
    });

    test('setText method should throw an error for messages longer than 3 characters', () => {
        expect(() => {
            svg.setText("TooLong", "red");
        }).toThrowError("Text must be less than 3 characters.");
    });

    test('setShape method should set shapeElement property with valid shape', () => {
        svg.setShape({
            render: () => '<circle cx="200" cy="100" r="50" fill="green"/>'
        });
        expect(svg.shapeElement).toContain('<circle');
        expect(svg.shapeElement).toContain('cx="200"');
        expect(svg.shapeElement).toContain('cy="100"');
        expect(svg.shapeElement).toContain('r="50"');
        expect(svg.shapeElement).toContain('fill="green"');
    });
});
