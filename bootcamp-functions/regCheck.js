function regCheck(regNo, regEnd) {
    if ( typeof(regNo) != 'string' || typeof(regEnd) != 'string' ){
        return 'enter valid registration number'
    }
    return regNo.endsWith(regEnd);
    }
