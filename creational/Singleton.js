/**
 * Singleton - порождающий паттерн, который гарантирует, что у класса
 * существует только один экземпляр.
 */
class Counter {
    constructor() {
        if (typeof Counter.instance === "object") {
            return Counter.instance;
        }
        this.count = 0;
        Counter.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

// const inst1 = new Counter();
// inst1.increaseCount();

// const inst2 = new Counter();
// inst2.increaseCount();

// console.log(inst1.getCount());
// console.log(inst2.getCount());

class Singleton {
    constructor() {
        if (typeof Singleton.instance === "object") {
            return Singleton.instance;
        }
        Singleton.instance = this;
        return this;
    }
}

export { Counter };
