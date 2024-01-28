/**
 * Template - определяет базовые шаги исполнения алгоритма и выполнение
 * каждого из этих шагов дилегирует на другие методы или подклассы.
 */

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log("Add Electronic Engine");
    }
    installChassis() {
        console.log("Install Tesla chassis");
    }
    addElectronic() {
        console.log("Add special electronic");
    }
    collectAccessories() {
        console.log("Collect Accessories");
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log("Add BMW Engine");
    }
    installChassis() {
        console.log("Install BMW chassis");
    }
    addElectronic() {
        console.log("Add electronic");
    }
    collectAccessories() {
        console.log("Collect Accessories");
    }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
// Add Electronic Engine
// Install Tesla chassis
// Add special electronic
// Collect Accessories

bmwBuilder.build();
// Add BMW Engine
// Install BMW chassis
// Add electronic
// Collect Accessories
