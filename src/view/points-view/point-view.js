import { createPointTemplate } from './point-template.js';
import { DEFAULT__POINT } from '../../const.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class PointView extends AbstractView{
  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handleClick = null;

  constructor({ point = DEFAULT__POINT, pointDestination, pointOffers, onClick }) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;
    this.#handleClick = onClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createPointTemplate({
      point: this.#point,
      pointDestination: this.#pointDestination,
      pointOffers: this.#pointOffers
    });
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
