import { getRandomArrayElement } from '../utils.js';
import { DESTINATIONS, CITY__DESCRIPTIONS } from './data.js';

function generateDestinations() {
  const destination = getRandomArrayElement (DESTINATIONS);
  const description = getRandomArrayElement (CITY__DESCRIPTIONS);

  return {
    id: crypto.randomUUID(),
    description,
    name: destination,
    pictures: [
      {
        'src': `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
        'description': `${destination} description`
      }]
  };
}

export {generateDestinations};
