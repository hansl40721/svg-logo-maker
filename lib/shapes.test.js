const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('render() returns the svg shape and correct color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="100" font-size="32" text-anchor="middle" alignment-baseline="middle" fill=""></text></svg>');
        });
});

describe('Triangle', () => {
    test('render() returns the svg shape and correct color', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<svg width="300" height="200"><polygon points="150,10 230,190 70,190" fill="red"/><text x="150" y="100" font-size="32" text-anchor="middle" alignment-baseline="middle" fill=""></text></svg>');
        });
});

describe('Square', () => {
    test('render() returns the svg shape and correct color', () => {
        const shape = new Square();
        shape.setColor("black");
        expect(shape.render()).toEqual('<svg width="300" height="200"><polygon points="50,50 250,50 250,150 50,150" fill="black"><text x="150" y="100" font-size="32" text-anchor="middle" alignment-baseline="middle" fill=""></text></svg>');
    });
});