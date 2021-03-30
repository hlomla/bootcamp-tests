function countAllPaarl(str) {
    console.log(str)
      var count = str.split(', ');
      var paarlAll = [];
    console.log(count)
      for(var i = 0; i < count.length; i++) {
      if(count[i].trim().startsWith('CJ')) {
      paarlAll.push(count[i].trim());
        
      }
      }
      return paarlAll.length
    }