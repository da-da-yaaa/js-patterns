/**
 * Proxy - структурный паттерн, который вместо реальных объектов предоставляет объекты - заменители,
 * которые предоставляют доступ к оригиналам с добавлением дополнительных манипуляций.
 * Виды прокси:
 * виртуальный(ленивая загрузка)
 * логирующий(запись истории обращений)
 * защищающий(логика доступа)
 * кеширующий(сохраняющий результаты обращений)
 */

class CarAccess {
    open() {
        console.log("Opening car door");
    }
    close() {
        console.log("Closing the car door");
    }
}
// Proxy
class SecuritySystem {
    constructor(door) {
        this.door = door;
    }
    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log("Access denied!");
        }
    }
    authenticate(password) {
        return password === "Elon";
    }
    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new CarAccess());

door.open("Jack"); // Access denied!

door.open("Elon"); // Opening car door

door.close(); // Closing the car door
