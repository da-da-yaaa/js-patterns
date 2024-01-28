/**
 * Flyweight - (приспособленец или кэш), позволяет вместить в себя большее количество структурных объектов
 * в выделенную оперативную память. Позволяет экономить ресурсы разделяя общее состояние объектов между собой,
 * вместо хранения одинаковых данных в каждом объекте.
 * Свойства: неизменяемость, нет сеттеров, удобнее работать через фабрики.
 */
// приспособленец
class Auto {
    constructor(model) {
        this.model = model;
    }
}
// если объект не создан создается новый, иначе возвращается ссылка на существующий объект
class AutoFactory {
    constructor(name) {
        this.models = {};
    }
    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count("model");
        this.models[name] = new Auto(name);
        return this.models[name];
    }
    getModels() {
        console.table(this.models);
    }
}

const factory = new AutoFactory();

const bmw = factory.create("bmw");
const audi = factory.create("audi");
const tesla = factory.create("tesla");
const blackTesla = factory.create("tesla");

factory.getModels();
// model: 1
// model: 2
// model: 3
// ┌─────────┬─────────┐
// │ (index) │  model  │
// ├─────────┼─────────┤
// │   bmw   │  'bmw'  │
// │  audi   │ 'audi'  │
// │  tesla  │ 'tesla' │
// └─────────┴─────────┘
