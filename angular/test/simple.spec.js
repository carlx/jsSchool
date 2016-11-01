describe('Some simple tests', function() {

    function callback(success) {
        console.log(success.data);
    }

    beforeEach(function () {
       module('simple');
    });

    var factory;
    var log;
    var stub;
    var http;
    var $httpBackend;

    beforeEach(inject(function(_SimpleFactory_, _$log_, _$http_, _$httpBackend_) {
        factory = _SimpleFactory_;
        log = _$log_;
        http = _$http_;
        $httpBackend = _$httpBackend_;
        sinon.stub(log, 'info', function () {

        });
    }));

    it('should fail', function() {
        factory.showSomething();
        expect(log.info.callCount).to.equal(1);
    });

    /**
     * spy on function
     */
    it('should get http response', function(done) {

        var spy = sinon.spy(callback);

        factory.getAlbum()
           .then(spy);

        $httpBackend.when('GET', /.+/).respond(200, {'name': 'jacek'});
        $httpBackend.flush();
        expect(spy.called).to.equal(true);
        done();
    });

    it('should get http 404 response', function(done) {

        var spy = sinon.spy(callback);

        factory.getAlbum()
            .then(function() {

            }, spy);

        $httpBackend.when('GET', /.+/).respond(404, {'name': 'wacek'});
        $httpBackend.flush();
        expect(spy.called).to.equal(true);
        done();
    });

    // Just an example
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});