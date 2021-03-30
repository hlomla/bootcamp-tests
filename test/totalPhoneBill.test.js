describe('totalPhoneBill' , function(){
    it('should return the total cost of an sms and call made' , function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');
  
    });
  it('should return the total cost of sms and calls made' , function(){
    assert.equal(totalPhoneBill('sms'), 'R0.65');
  });
});