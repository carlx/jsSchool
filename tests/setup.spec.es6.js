/**
 * check that babel works
 */

import {Test} from '../model/test.model.es6';

let chai = require('chai');
chai.should();

describe('subsystem test', () => {
    it('should pass', () => {
        // This will fail if "rectangle.width" does
        // not equal 10.
        let a = new Test();
        a.getTest().should.equal(true);
    });
})


