'use strict';

import {X_COORDINATES, Y_COORDINATES} from './data.js';

function getRandomArbitary(min, max) {
  if (min === max) {
    return 0;
  }

  const minNum = Math.min(min,max);
  const maxNum = Math.max(max,min);

  return Math.random() * (maxNum - minNum + 1) + minNum;
}

function getRandomInt(min, max) {
  return Math.floor(getRandomArbitary(min, max));
}

function getRandomToFixed(min, max, numberOfSigns) {
  const number = getRandomArbitary(min, max);

  return +number.toFixed(numberOfSigns)
}

function generateLocation() {
  return {
    x: getRandomToFixed(X_COORDINATES.min, X_COORDINATES.max, 5),
    y: getRandomToFixed(Y_COORDINATES.min, Y_COORDINATES.max, 5),
  }
}

function getArrayElement(items) {
  return items[getRandomInt(0, items.length - 1)];
}

const getRandomArrayElements = (array, amount) => array.sort(() => Math.random() - Math.random()).slice(0, amount);

export {getRandomInt, getRandomToFixed, generateLocation, getArrayElement, getRandomArrayElements};
