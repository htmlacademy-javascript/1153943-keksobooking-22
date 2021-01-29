'use strict';

function getNumberRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumberRandomOfSigns(min, max, numberOfSigns){
  min = Math.ceil(min);
  max = Math.floor(max);

  let number = Math.random() * (max - min + 1) + min;

  let transformOfSigns = number.toFixed(numberOfSigns);

  return Number(transformOfSigns);
}

getNumberRandom(1, 6);

getNumberRandomOfSigns(1, 6, 2);
