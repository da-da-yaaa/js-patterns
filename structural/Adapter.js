/**
 * Adapter - оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходного кода.
 */

class Engine2 {
    simpleInterface() {
        console.log("Engine 2.0 - tr-tr-tr");
    }
}

class EngineV8 {
    complecatedInterface() {
        console.log("Engine V8! - wroom wroom!");
    }
}
// приводит complecatedInterface() к simpleInterface()
class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }
    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

const engine = new EngineV8Adapter(new EngineV8());

const auto = new Auto();

auto.startEngine(engine);
// Engine V8! - wroom wroom!
