/**
 * Iterator - поведенческий паттерн, который дает возможность
 * последовательно обходить элементы составных объектов
 * не раскрывая их представления
 */

class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }
    next() {
        return this.elements[this.index++];
    }
    hasNext() {
        return this.index < this.elements.length;
    }
}

const collection = new ArrayIterator(["kek", "lol", "semen", "Billy"]);

while (collection.hasNext()) {
    console.log(collection.next());
}
// kek
// lol
// semen
// Billy

class ObjectIterator {
    constructor(el) {
        this.index = 0;
        (this.keys = Object.keys(el)), (this.elements = el);
    }
    next() {
        return this.elements[this.keys[this.index++]];
    }
    hasNext() {
        return this.index < this.keys.length;
    }
}

const autos = {
    audi: { model: "audi" },
    bmw: { model: "bmw" },
    tesla: { model: "tesla" },
};

const collection2 = new ObjectIterator(autos);

while (collection2.hasNext()) {
    console.log(collection2.next());
}
// { model: 'audi' }
// { model: 'bmw' }
// { model: 'tesla' }
