import { render, RenderPosition } from '../framework/render';
import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import FiltersView from '../view/filter-view/filter-view.js';
import { generateFilters } from '../mock/filter.js';

export default class HeaderPresenter {
  #tripMainElement = null;
  #filtersContainerElement = null;
  #pointsModel = null;
  #filters = [];

  constructor({ filtersContainerElement, tripMainElement, pointsModel }) {
    this.#tripMainElement = tripMainElement;
    this.#filtersContainerElement = filtersContainerElement;
    this.#pointsModel = pointsModel;
    this.#filters = generateFilters(this.#pointsModel.points);
  }

  #renderFilters() {
    render(new FiltersView({ filters: this.#filters }), this.#filtersContainerElement);
  }

  #renderInfo() {
    render(new TripInfoView(), this.#tripMainElement, RenderPosition.AFTERBEGIN);
  }

  #renderHeader() {
    this.#renderFilters();
    this.#renderInfo();
  }

  init() {
    this.#renderHeader();
  }
}
