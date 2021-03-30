function transportFee(shift) {
    if (shift.startsWith('morning')) {
        return 'R20';
    } if (shift.startsWith('afternoon')) {
     return 'R10';
        } if(shift.startsWith('night')) {
          return 'free';
      }
    }