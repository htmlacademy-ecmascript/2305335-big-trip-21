import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { PRICE, DATES } from '../data.js';
import { FAVORITE } from './const.js';
import { TYPE_POINTS } from '../const.js';


function getPoints(destinationId, offersId) {
  const date = getRandomArrayElement(DATES);

  return{
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(PRICE.MIN, PRICE.MAX),
    dateFrom: date[0],
    dateTo: date[1],
    destination: destinationId,
    isFavorite: getRandomArrayElement(FAVORITE),
    offers: offersId,
    type: getRandomArrayElement(TYPE_POINTS)
  };
}

export {getPoints};
