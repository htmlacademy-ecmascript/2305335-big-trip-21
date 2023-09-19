import {generateDestinations} from '../mock/destinations.js';
import {generateOffer} from '../mock/offers.js';
import {generatePoints} from '../mock/points.js';

import {TYPE_POINTS} from '../const.js';
import {getRandomInteger, getRandomArrayElement} from '../utils/utils.js';
import {DESTINATIONS_COUNT, POINT_COUNT, OFFERS_COUNT} from '../mock/data.js';

export default class MockService {
  #destinations = [];
  #offers = [];
  #points = [];

  constructor() {
    this.#destinations = this.generateDestinations();
    this.#offers = this.generateOffers();
    this.#points = this.generatePoints();
  }

  getDestinations() {
    return this.#destinations;
  }

  getOffers() {
    return this.#offers;
  }

  getPoints() {
    return this.#points;
  }

  generateDestinations() {
    return Array.from({ length: DESTINATIONS_COUNT }, () => generateDestinations());
  }

  generateOffers() {
    return TYPE_POINTS.map((type) => ({
      type,
      offers: Array.from({ length: getRandomInteger(0, OFFERS_COUNT)}, () => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({ length: POINT_COUNT }, () => {
      const type = getRandomArrayElement(TYPE_POINTS);
      const destination = getRandomArrayElement(this.#destinations);

      const hasOffers = getRandomInteger(0, 1);

      const offersByType = this.#offers.find((offer) => offer.type === type);

      const offerIds = (hasOffers)
        ? offersByType.offers
          .slice(0, getRandomInteger(0, OFFERS_COUNT))
          .map((offer) => offer.id)
        : [];

      return generatePoints(type, destination.id, offerIds);
    });
  }
}
