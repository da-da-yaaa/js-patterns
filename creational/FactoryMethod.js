class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
/**
 * Фабричный метод нужен для создания множества однотипных объектов с разлиными данными
 */
class BmwFactory {
    create(type) {
        if (type === "X5") return new Bmw(type, 108000, 300);
        if (type === "X6") return new Bmw(type, 111000, 320);
    }
}

export { BmwFactory };

const factory = new BmwFactory();

const x5 = factory.create("X5");
const x6 = factory.create("X6");

console.log(x5);
console.log(x6);
