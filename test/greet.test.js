describe('greet' , function(){
    it('should greet Hlomla' , function(){
        assert.equal(greet('Hlomla'), 'Hello, Hlomla');

    });
    it('should greet Mcebo', function() {
        assert.equal(greet('Mcebo'), 'Hello, Mcebo')
    });
    it('should return false if its not a string', function() {
        assert.equal(greet(1), false)
    });
});