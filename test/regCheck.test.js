describe('regCheck' , function(){
    it('should check if a registration number is for GP, L, EC, MP' , function(){
        assert.equal(regCheck('GP','L','EC','MP',), false);

    });

});