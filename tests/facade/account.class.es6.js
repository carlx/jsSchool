export class Account {
    constructor() {
        this.balance = 100;
    }

    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance = this.balance - amount;
            return amount;
        } else {
            return 'no money';
        }
    }
}