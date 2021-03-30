describe('countRegNumber' , function(){
    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 12345 , CA 54321 , CA 67890 ,CA 09876'), 4);

    });

}); 