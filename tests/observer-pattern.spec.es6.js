let chai = require('chai');
chai.should();
import {Subject} from './observer/subject.class.es6';
import {Observer} from './observer/observer.class.es6';
const subject = new Subject();
const observer = new Observer();

describe('Observer pattern', () => {


    it('should notify observer', () => {

        subject.subscribe(observer);
        subject.notifyObserver(observer);
        observer.getMsg().should.equal('Hello');

        let observer2 = new Observer();
        subject.subscribe(observer2);

        subject.notifyObserver(observer2);
        observer2.getMsg().should.equal('Hello');

        subject.notifyAll('World');
        observer2.getMsg().should.equal('World');

    });



});
