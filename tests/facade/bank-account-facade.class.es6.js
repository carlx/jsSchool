import { Bank } from './bank.class.es6';
import { Account } from './account.class.es6';

export class BankAccountFacade {

    constructor(clientAccountNumber, clientPin) {
        this.clientAccountNumber = clientAccountNumber;
        this.clientPin = clientPin;
        this.bank = new Bank();
        this.account = new Account();
    }

    login() {
        return this.bank.login(this.clientAccountNumber, this.clientPin);
    }

    withdraw(amount) {
        return this.account.withdraw(amount);
    }

}