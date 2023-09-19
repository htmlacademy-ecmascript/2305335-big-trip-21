import BoardPresenter from './presenter/board-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destination-model.js';
import MockService from './service/mock-service.js';

const headerElement = document.querySelector('.page-header');
const tripMainElement = headerElement.querySelector('.trip-main');
const filtersContainerElement = tripMainElement.querySelector('.trip-controls__filters');
const pointsSectionElement = document.querySelector('.trip-events');

const mockService = new MockService();
const pointsModel = new PointsModel(mockService);
const offersModel = new OffersModel(mockService);
const destinationsModel = new DestinationsModel(mockService);

const boardPresenter = new BoardPresenter({
  boardContainer: pointsSectionElement,
  destinationsModel,
  pointsModel,
  offersModel
});

const headerPresenter = new HeaderPresenter({
  filtersContainerElement,
  tripMainElement,
  pointsModel
});

headerPresenter.init();
boardPresenter.init();
