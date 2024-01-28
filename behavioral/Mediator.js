/**
 * Mediator - поведенческий паттерн, позволяющий уменьшить межклассовые связи,
 * вынося их в класс-посредник
 */
// медиатор
class OfficialDealer {
    constructor() {
        this.customers = [];
    }
    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }
    addToCustomersList(name) {
        this.customers.push(name);
    }
    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    getName() {
        return this.name;
    }
    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}

const mediator = new OfficialDealer();

const serega = new Customer("Serega", mediator);
const valera = new Customer("Valera", mediator);

serega.makeOrder("Tesla", "with autopilot");
// Order name: Serega. Order auto is Tesla
// Additional info: with autopilot

valera.makeOrder("Tesla", "with parktronik");
// Order name: Valera. Order auto is Tesla
// Additional info: with parktronik

console.log(mediator.getCustomerList());
// [ 'Serega', 'Valera' ]
