import { DEFAULT__POINT } from '../../const.js';
import { createEventEditTemplate } from './event-edit-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EventEditView extends AbstractView {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;
  #handleFormSubmit = null;
  #handleCloseClick = null;
  #handleDeleteClick = null;

  constructor({ point = DEFAULT__POINT, pointDestinations, pointOffers, onFormSubmit, onCloseButtonClick, onDeleteButtonClick }) {
    super();
    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseClick = onCloseButtonClick;
    this.#handleDeleteClick = onDeleteButtonClick;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeClickHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteClickHandler);
  }

  get template() {
    return createEventEditTemplate({
      point: this.#point,
      pointDestinations: this.#pointDestinations,
      pointOffers: this.#pointOffers
    });
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseClick();
  };

  #deleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick();
  };
}
