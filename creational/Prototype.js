/**
 * Prototype - порождающий паттерн, который позволяет копировать объекты
 * не вдаваясь в подробности их реализации
 */

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(
            this.model,
            this.price,
            this.interior,
            this.autopilot
        );
    }
}
