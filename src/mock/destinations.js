import { getRandomArrayElement, getRandomInteger } from '../utils/utils.js';
import { DESTINATIONS, CITY__DESCRIPTIONS } from './data.js';

function createPicture() {
  return {
    src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
    description: getRandomArrayElement(CITY__DESCRIPTIONS)
  };
}

function generateDestinations() {
  const destination = getRandomArrayElement (DESTINATIONS);
  const description = getRandomArrayElement (CITY__DESCRIPTIONS);

  return {
    id: crypto.randomUUID(),
    description,
    name: destination,
    pictures: Array.from({ length: getRandomInteger(0, 5) }, createPicture)
  };
}

export {generateDestinations};
