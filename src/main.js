import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';

import PointsModel from './model/point-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destination-model.js';
import MockService from './service/mock-service.js';

import { RenderPosition, render } from './render.js';

const filterElement = document.querySelector('.trip-controls__filters');
const infoTripElement = document.querySelector('.trip-main');
const eventsListElement = document.querySelector('.trip-events');

const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);

const boardPresenter = new BoardPresenter({
  container: eventsListElement,
  pointsModel,
  offersModel,
  destinationsModel
});

render(new TripInfoView(), infoTripElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
