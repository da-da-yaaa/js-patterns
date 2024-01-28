/**
 * Command - инкапсулирует запрос в виде объекта, позволяя передавать их клиентам
 * в качестве пареметров, ставить в очередь, логировать, а также поддерживает отмену операций.
 */

class Driver {
    constructor(command) {
        this.command = command;
    }
    execute() {
        this.command.execute();
    }
}

class Engine {
    constructor() {
        this.state = false;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}

class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.on();
    }
}

class onSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.off();
    }
}
