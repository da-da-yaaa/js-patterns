/**
 * Decorator - позволяет добавлять объектам новые смойства и методы.
 * Используется для создания большого количества подклассов.
 * На основании эталонного класса создается множество других классов.
 */

class Car {
    constructor() {
        this.price = 10000;
        this.model = "Car";
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = "Tesla";
    }
}
// Decorator
class Autopilot {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 5000;
    }
    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}
// Decorator
class Parktronic {
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 3000;
    }
    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

let tesla = new Tesla();
tesla = new Autopilot(tesla);

console.log(tesla.getPrice(), tesla.getDescription());
// 30000 Tesla with autopilot
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDescription());
// 33000 Tesla with autopilot with parktronic
