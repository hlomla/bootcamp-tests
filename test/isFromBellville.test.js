describe('isFromBellville' , function(){
        it('should return all number plates that start with CY, true' , function(){
            assert.equal(isFromBellville('CY 78 SD'),  true);
    
        });
        it('should return false if the number plate in not from Bellville', function(){
            assert.equal(isFromBellville('CL 234'), false)
        })
        it('should return a message if not passing a string', function(){
            assert.equal(isFromBellville(1365), 'not recognized')
        })
    
    });