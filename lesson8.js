let times = [];
for (let across = 0; across <= 12; across++) {
  times[across] = [];
  // times.push( [] );

  for (let down = 0; down <= 12; down++) {
    times[across][down] = across * down;
  }
}

console.table(times);
