import { getRandomInteger } from '../utils/utils.js';
import { PRICE } from './data.js';

function generateOffer(type) {
  return {
    id: crypto.randomUUID(),
    title: `Offer ${type}`,
    price: getRandomInteger(PRICE.MIN, PRICE.MAX)
  };
}

export { generateOffer };
