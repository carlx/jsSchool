describe('test sinon spy usage', function() {

    it('should spy on method', function() {

        var dog = {
            'burk': function(sound) {
                return sound;
            }
        };

        var spy = sinon.spy(dog, 'burk');

        dog.burk('hau');

        expect(spy.callCount).to.equal(1);

        expect(spy.args[0][0]).to.equal('hau');

    });

});