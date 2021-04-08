describe('regCheck' , function(){
    it('should return true if a registration number ends with GP' , function(){
        assert.equal(regCheck('DC 55 YU GP','GP'), true);

    });
    it('should return false if a registration number does not end with EC', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false)

    })
    it('should return a message if registration is not a string', function(){
        assert.equal(regCheck('FGT 123 MP', 1), 'enter valid registration number')
    })
});
