let chai = require('chai');
chai.should();

describe('test for module pattern', function() {

    var myModule = (function() {

        var privateMethod = function() {
            return 'Hi I am private';
        }

        return {
            publicMethod: function() {
                return 'Iam public method';
            }
        }

    })();

    it('should call public method', function() {
       var result =  myModule.publicMethod();
       result.should.equal('Iam public method');
    });


});