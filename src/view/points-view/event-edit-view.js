import { DEFAULT__POINT } from '../../const.js';
import { createEventEditTemplate } from './event-edit-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class EventEditView extends AbstractView {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;
  //#handleFormSubmit = null;
  #handleCloseClick = null;
  #handleDeleteClick = null;

  constructor({ point = DEFAULT__POINT, pointDestinations, pointOffers, onCloseClick, onDeleteClick }) {
    super();
    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
    //this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseClick = onCloseClick;
    this.#handleDeleteClick = onDeleteClick;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#handleCloseClick);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#handleDeleteClick);
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
    this.#handleCloseClick(); // временно навешиваем обработчик закрытия по стрелке, который в point-presenter вызовет функцию replaceFormToPoint, т.е. скроет форму редактирования и откроет точку
  };

  // #closeClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this.#handleCloseClick();
  // };

  // #deleteClickHandler = (evt) => {
  //   evt.preventDefault();
  //   this.#handleDeleteClick();
  // };
}
