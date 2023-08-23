import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { TYPE_POINTS } from '../const.js';
import { PRICE } from '../data.js';

function getOffers(type) {
  return{
    type: getRandomArrayElement(TYPE_POINTS),
    offers: [
      {
        id: crypto.randomUUID(),
        title: `Offer${type}`,
        price: getRandomInteger(PRICE.MIN, PRICE.MAX)
      }]
  };
}

export {getOffers};
