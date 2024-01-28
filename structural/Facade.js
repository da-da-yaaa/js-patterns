/**
 * Facade - скрывает сложную логику за простым фасадом.
 * Собирает и объекдиняет сложные структуры и выдает простой способ манипуляции.
 * Используем при сложной логике и большом количестве аргументов.
 */

class Сonveyor {
    setBody() {
        console.log("Body set!");
    }
    getEngine() {
        console.log("Dismantle Engine!");
    }
    setEngine() {
        console.log("Engine set!");
    }
    setInterior() {
        console.log("Exterior added!");
    }
    changeInterior() {
        console.log("Update interior!");
    }
    setExterior() {
        console.log("Added interior!");
    }
    setWheels() {
        console.log("Wheels!");
    }
    addElectronics() {
        console.log("Added electronics!");
    }
    paint() {
        console.log("Car painted!");
    }
}
// Facade
class СonveyorFacade {
    constructor(car) {
        this.car = car;
    }
    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }
}

const conv = new СonveyorFacade(new Сonveyor());

const car = conv.assembleCar();
/*
Body set!
Engine set!
Exterior added!
Added interior!
Wheels!
Added electronics!
Car painted!
*/
// console.log(car);
