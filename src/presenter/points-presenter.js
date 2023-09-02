import SortView from '../view/sort-view/sort-view.js';
import ListView from '../view/points-view/list-view.js';
import EventEditView from '../view/points-view/event-edit-view.js';
import PointView from '../view/points-view/point-view.js';
import ListEmptyView from '../view/points-view/list-empty-view.js';
import FilterView from '../view/filter-view/filter-view.js';
import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import { RenderPosition, render, replace, remove } from '../framework/render.js';

const filterElement = document.querySelector('.trip-controls__filters');
const infoTripElement = document.querySelector('.trip-main');

export default class PointsPresenter {
  #pointsContainer = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #points = [];
  #sortComponent = new SortView();
  #listComponent = new ListView();
  #listEmptyComponent = new ListEmptyView();
  #TripInfoComponent = new TripInfoView();
  #FilterComponent = new FilterView();

  constructor({ pointsContainer, destinationsModel, offersModel, pointsModel }) {
    this.#pointsContainer = pointsContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#renderPage();
  }

  #renderPage() {
    if (!this.#points.length) {
      render(this.#listEmptyComponent, this.#pointsContainer);
      render(this.#FilterComponent, filterElement);
    } else {
      this.#points.forEach((point) => {
        this.#renderPoint(point);
      });
      render(this.#sortComponent, this.#pointsContainer);
      render(this.#listComponent, this.#pointsContainer);
      render(this.#TripInfoComponent, infoTripElement, RenderPosition.AFTERBEGIN);
      render(this.#FilterComponent, filterElement);
    }
  }

  #renderPoint(point) {
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToItem();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    const pointEditComponent = new EventEditView({
      point,
      pointDestinations: this.#destinationsModel.destinations,
      pointOffers: this.#offersModel.offers,
      onFormSubmit: () => {
        replaceFormToItem();
        document.removeEventListener('keydown', onEscKeyDown);
      },
      onCloseButtonClick: () => {
        replaceFormToItem();
        document.removeEventListener('keydown', onEscKeyDown);
      },
      onDeleteButtonClick: () => {
        document.removeEventListener('keydown', onEscKeyDown);
        remove(pointEditComponent);
      },
    });

    const eventPointComponent = new PointView({
      point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onClick: () => {
        replaceItemToForm();
        document.addEventListener('keydown', onEscKeyDown);
      }
    });

    function replaceItemToForm() {
      replace(pointEditComponent, eventPointComponent);
    }

    function replaceFormToItem() {
      replace(eventPointComponent, pointEditComponent);
    }

    render(eventPointComponent, this.#listComponent.element);
  }
}

