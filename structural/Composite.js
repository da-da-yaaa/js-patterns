/**
 * Composite - структурный паттерн, позволяющий сгруппировать множество объектов в древовидную структуру
 * и работать с ней как с единственным объектом, вызывая методы каждого из объектов по отдельности.
 */
// класс-конструктор
class Equipment {
    getPrice() {
        return this.price || 0;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
}
// конкретные объекты
class Engine extends Equipment {
    constructor() {
        super();
        this.setName("Engine");
        this.setPrice(800);
    }
}
// конкретные объекты
class Body extends Equipment {
    constructor() {
        super();
        this.setName("Body");
        this.setPrice(3000);
    }
}
// конкретные объекты
class Tools extends Equipment {
    constructor() {
        super();
        this.setName("Tools");
        this.setPrice(4000);
    }
}
// класс-компоновщик
class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }
    add(equipment) {
        this.equipments.push(equipment);
    }
    getPrice() {
        return this.equipments
            .map((equipment) => equipment.getPrice())
            .reduce((a, b) => a + b);
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName("Audi");
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`);
// Audi price is 7800$
