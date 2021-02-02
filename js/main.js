'use strict';

function getRandomArbitary(min, max) {
  if (min === max) {
    return 0;
  }

  const minNum = Math.min(min,max);
  const maxNum = Math.max(max,min);

  return Math.random() * (maxNum - minNum + 1) + minNum;
}

getRandomArbitary(1, 6);

// console.log(getRandomArbitary(1, 6));

function getRandomInt(min, max) {
  return Math.floor(getRandomArbitary(min, max));
}

getRandomInt(1, 6);

// console.log(getRandomInt(1, 6));

function getRandomToFixed(min, max, numberOfSigns) {
  let number = getRandomArbitary(min, max);

  return +number.toFixed(numberOfSigns)
}

getRandomToFixed(1, 6);

// console.log(getRandomToFixed(6, 1, 5));
