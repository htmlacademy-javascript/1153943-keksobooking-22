/* eslint-disable no-console */
'use strict';

import {getAvatar, getOffer, getRandomLocation} from './data.js';

const author = getAvatar();
const offer = getOffer();
const locations = getRandomLocation();

console.log(author);
console.log(offer);
console.log(locations);
