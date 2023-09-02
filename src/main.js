import PointsPresenter from './presenter/points-presenter.js';

import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destination-model.js';
import MockService from './service/mock-service.js';

const eventsListElement = document.querySelector('.trip-events');

const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);

const pointsPresenter = new PointsPresenter({
  pointsContainer: eventsListElement,
  pointsModel,
  offersModel,
  destinationsModel
});

pointsPresenter.init();
