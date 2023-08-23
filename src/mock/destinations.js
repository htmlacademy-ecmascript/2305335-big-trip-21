import { getRandomArrayElement } from '../utils.js';
import { DESTINATIONS, CITY__DESCRIPTIONS, PHOTO__DESCRIPTIONS } from './data.js';

function generateDestinations() {
  return {
    id: crypto.randomUUID(),
    description: getRandomArrayElement (CITY__DESCRIPTIONS),
    name: getRandomArrayElement (DESTINATIONS),
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        description: getRandomArrayElement(PHOTO__DESCRIPTIONS)
      }]
  };
}

export {generateDestinations};
