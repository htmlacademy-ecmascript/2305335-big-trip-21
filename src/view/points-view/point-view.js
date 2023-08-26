import { createElement } from '../../render.js';
import { createPointTemplate } from './point-template.js';
import { DEFAULT__POINT } from '../../const.js';

export default class PointView {
  constructor({ point = DEFAULT__POINT, pointDestination, pointOffers}) {
    this.point = point;
    this.pointDestination = pointDestination;
    this.pointOffers = pointOffers;
  }

  getTemplate() {
    return createPointTemplate({
      point: this.point,
      destination: this.destination,
      offers: this.offers
    });
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
