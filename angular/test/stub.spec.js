describe('controller tests', function() {
   beforeEach(function () {
       module('simple');
   });

    var testController;
    var stub, stabbedFactory;

    beforeEach(inject(function($controller, _SimpleFactory_) {
        stabbedFactory = sinon.stub(_SimpleFactory_);

        testController = $controller('SimpleController', {
            GuffyFactory: stabbedFactory
        })
    }));


    it('shoul test method should be called', function() {
        testController.test();
        expect(stabbedFactory.getText.called).to.equal(true);
    });

});