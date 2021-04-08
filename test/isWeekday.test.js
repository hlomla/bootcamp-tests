describe('isWeekday' , function(){
    it('weekday should return true if it starts with Monday' , function(){
        assert.equal(isWeekday("Monday"), true);

    });
    it('should return false for any other weekday', function(){
        assert.equal(isWeekday("Tuesday"), false)
    })
});