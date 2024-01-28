/**
 * Bridge - порождающий паттерн, разделяющий один или несколько классов на несколько иерархий,
 * называемых абстракцией и реализацией, что в свою очередь помогает изменять их без зависимости
 * друг от друга.
 * Нужен для разделения неприкосающихся функциональностей в одном классе,
 * позволяет поместить всю реализацию в класс-абстракцию.
 */
class Model {
    constructor(color) {
        this.color = color;
    }
}
// мост, содержит метод get
class Color {
    constructor(type) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super("dark-black");
    }
}

class SilbrigColor extends Color {
    constructor() {
        super("Silbermetallic");
    }
}

class Audi extends Model {
    constructor(color) {
        super(color);
    }
    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color);
    }
    paint() {
        return `Auto: Bmw, Color: ${this.color.get()}`;
    }
}

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint());
// Auto: Bmw, Color: dark-black
