export class Bank {

    login(accountNumber, pin) {
        if(accountNumber === 123 && pin === 123) {
            return 'Welcome in SKOK';
        } else {
            return 'Access denied';
        }
    }

}