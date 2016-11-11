export class Client {

    constructor(accountNumber, pin) {
        this.accountNumber = accountNumber;
        this.pin = pin;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    getPin() {
        return this.pin;
    }
}