/**
 * Builder - паттерн для созданиия объектов со сложными состояниями.
 * Может иметь доп слой абстракии для управления строительством.
 * Позволяет создавать сложные объекты, инициализацию которых сложно уместить в конструкторе.
 */

class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }
    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }
    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }
    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }
    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    build() {
        return this.car;
    }
}

const myCar = new CarBuilder()
    .addAutoPilot(true)
    .addParktronic(true)
    .updateEngine("v8")
    .build();

console.log(myCar);
/*
Car {
  autoPilot: true,
  parktronic: true,
  signaling: false,
  engine: 'v8'
}
*/
