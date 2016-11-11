let chai = require('chai');

import {Client} from './facade/client.class.es6';
import {BankAccountFacade} from './facade/bank-account-facade.class.es6';

describe('facade pattern test', () => {

    let client = new Client(123, 123);
    let bankFacade = new BankAccountFacade(client.getAccountNumber(), client.getPin());

    it('should return correct account number', () => {
        client.getAccountNumber().should.equal(123);
    });

    it('should login to bank', () => {
        bankFacade.login().should.be.equal('Welcome in SKOK');
    });

    it('should give you money', ()=> {
        bankFacade.withdraw(90).should.be.equal(90);
    });

    it('should not give you money', ()=> {
        bankFacade.withdraw(30).should.be.equal('no money');
    });


});