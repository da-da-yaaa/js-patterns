/**
 * ChainOfResponsibility - поведенческий паттерн позволяющий передавать запросы обработчикам последовательно.
 * Каждый последующий обработчик решает может ли он сам обработать запрос или стоит передать обработку следующему обработчику
 */

class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice);
        } else {
            console.log("Unfortunately, not enough money");
        }
    }
    canPay(amount) {
        return this.balance >= amount;
    }
    setNext(account) {
        this.incomer = account;
    }
    show() {
        console.log(this);
    }
}

class Master extends Account {
    constructor(balance) {
        super();
        this.name = "Master Card";
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = "Paypal";
        this.balance = balance;
    }
}

class Qiwi extends Account {
    constructor(balance) {
        super();
        this.name = "Qiwi";
        this.balance = balance;
    }
}

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(500);

master.setNext(paypal);
paypal.setNext(qiwi);

master.pay(438);
// Cannot pay using Master Card
// Cannot pay using Paypal
// Paid 438 using Qiwi

master.show();
// Master {
//     name: 'Master Card',
//     balance: 100,
//     incomer: Paypal {
//       name: 'Paypal',
//       balance: 200,
//       incomer: Qiwi { name: 'Qiwi', balance: 500 }
//     }
//   }
