function countAllFromTown(str, town) {
    console.log(str)
      var countAll = str.split(',');
      var fromTown = [];
    console.log(countAll)
      for(var i = 0; i < countAll.length; i++) {
        if(countAll[i].trim().startsWith(town)) {
          fromTown.push(countAll[i].trim());
        }
      } 
      return fromTown.length
    }