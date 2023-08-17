import FilterView from './view/filter-view.js';
import TripInfoView from './view/trip-info-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import { RenderPosition, render } from './render.js';

const filterElement = document.querySelector('.trip-controls__filters');
const infoTripElement = document.querySelector('.trip-main');
const eventsListElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  container: eventsListElement,
});

render(new TripInfoView(), infoTripElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filterElement);

boardPresenter.init();
