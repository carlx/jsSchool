'use static';

export class Subject {

    constructor() {
        this.observers = [];
        this.msg = 'Hello';
    }

    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    notifyObserver(observer) {
        this.observers[this.observers.indexOf(observer)].notify(this.msg);
    }
    notifyAll(msg) {
        this.observers.forEach((observer) => observer.notify(msg));
    }

}
