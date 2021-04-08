function isFromBellville (str) {
    if ( typeof(str) != 'string' ){
        return 'not recognized'
    }
    if (str.startsWith("CY")) {
    return true;
    } else {
    return false;
    };
    }
