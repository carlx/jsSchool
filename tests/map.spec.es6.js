let chai = require('chai');
chai.should();


describe('Map es6 testing', () => {

    it('should set map value', () => {
        let map = new Map();
        map.set('foo', 123);
        map.get('foo').should.equal(123);
    });

    it('should get map value by object key', () => {
       let key = {'name': 'hero'};
       let value = {'name': 'super fly'};
       let map = new Map();
        map.set(key,value);
        map.get(key).should.equal(value);
    });

});
