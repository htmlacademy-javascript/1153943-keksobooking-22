/* eslint-disable no-console */
'use strict';

const QUANTITY_OBJ = 10;

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00','14:00'];
const DESCRIPTIONS = ['Appartment #1', 'Appartment #2', 'Appartment #3'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const X_COORDINATES = { min: 35.65, max: 35.7 };
const Y_COORDINATES = { min: 139.7, max: 139.8 };

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const MIN_AVATAR = 1;
const MAX_AVATAR = 8;

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

const getRandomArrayElements = (array, amount) => array.sort(() => Math.random() - Math.random()).slice(0, amount);

function getRandomAvatar() {
  const obj = [];

  for (let i = 0; i < QUANTITY_OBJ; i++) {
    obj.push (
      {
        avatar: 'img/avatars/user'+ 0 + getRandomInt(MIN_AVATAR, MAX_AVATAR) + '.png',
      })
  }

  return obj;
}

function getRandomOffer(location) {
  const obj = [];

  for (let i = 0; i < QUANTITY_OBJ; i++) {
    obj.push (
      {
        title: `Заголовок номер ${getRandomInt(1, 10)}`,
        address: `${location.x}, ${location.y}`,
        price: getRandomInt(1000, 100000),
        type: TYPES[getRandomInt(0, TYPES.length - 1)],
        rooms: getRandomInt(1, 4),
        guests: getRandomInt(1, 5),
        checkin: CHECKINS[getRandomInt(0, CHECKINS.length - 1)],
        checkout: CHECKOUTS[getRandomInt(0, CHECKOUTS.length - 1)],
        features: getRandomArrayElements(FEATURES, getRandomInt(1, 6)),
        description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
        photos: PHOTOS[getRandomInt(0, PHOTOS.length - 1)],
      })
  }

  return obj;
}

function getRandomLocation() {
  const obj = [];

  for (let i = 0; i < QUANTITY_OBJ; i++) {
    obj.push (
      {
        avatar: 'img/avatars/user'+ 0 + getRandomInt(MIN_AVATAR, MAX_AVATAR) + '.png',
      })
  }

  return obj;
}

const coordinates = generateLocation();
const author = getRandomAvatar();
const offer = getRandomOffer(coordinates);
const locations = getRandomLocation();

console.log(author);
console.log(offer);
console.log(locations);
