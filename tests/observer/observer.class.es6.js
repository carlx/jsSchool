export class Observer {
    constructor(){
        this.msg = '';
    }

    notify(msg) {
        console.log(msg);
        this.msg = msg;
        return msg;
    };

    getMsg() {
        return this.msg;
    }
}
