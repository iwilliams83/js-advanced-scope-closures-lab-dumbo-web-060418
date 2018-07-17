function produceDrivingRange(range){
  return function(first, second){
    let distance = (second.slice(0,2))-(first.slice(0,2));
    if (distance > range){
      return `${distance - range} blocks out of range`;
    }
    else if (distance < range) {
      return `within range by ${range - distance}`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return Math.floor(fare * percentage);
  }
}
