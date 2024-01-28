/**
 * Memento - поведенческий паттерн, котоырй позволяет сохранять и восстанавливать предыдущее состояние объекта.
 */

class Memento {
    constructor(value) {
        this.value = value;
    }
}
// создает новый объект, поскольку иначе будет передана ссылка
const creator = {
    save: (val) => new Memento(val),
    restore: (memento) => memento.value,
};

class Caretaker {
    constructor() {
        this.values = [];
    }
    addMemento(memento) {
        this.values.push(memento);
    }
    getMemento(index) {
        return this.values[index];
    }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save({ kek: "hello" }));
careTaker.addMemento(creator.save({ kek: "hello world" }));
careTaker.addMemento(creator.save({ kek: "hello world!!!" }));

console.log(creator.restore(careTaker.getMemento(1)));
// { kek: 'hello world' }
