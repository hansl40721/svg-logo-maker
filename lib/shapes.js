class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    };

    setColor(color) {
        this.color = color;
    };

    setText(text) {
        this.text = text;
    };

    setTextColor(textColor) {
        this.textColor = textColor;
    };

    renderText() {
        return `<text x="150" y="100" font-size="32" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`
    };
};

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}"/>${this.renderText()}</svg>`;
    };
};

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200"><polygon points="150,10 230,190 70,190" fill="${this.color}"/>${this.renderText()}</svg>`;
    };
};

class Square extends Shape {
    render() {
        return `<svg width="300" height="200"><polygon points="50,50 250,50 250,150 50,150" fill="${this.color}">${this.renderText()}</svg>`;
    };
};

module.exports = { Circle, Triangle, Square };