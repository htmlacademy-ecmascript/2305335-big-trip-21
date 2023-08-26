import SortView from '../view/sort-view/sort-view.js';
import ListView from '../view/points-view/list-view.js';
import EventEditView from '../view/points-view/event-edit-view.js';
import PointView from '../view/points-view/point-view.js';
import { render } from '../render.js';

export default class PointsPresenter {
  sortComponent = new SortView();
  listComponent = new ListView();

  constructor({ pointsContainer, destinationsModel, offersModel, pointsModel }) {
    this.pointsContainer = pointsContainer;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;

    this.points = [...pointsModel.get()];
  }

  init() {
    render(this.sortComponent, this.pointsContainer);
    render(this.listComponent, this.pointsContainer);

    const eventEditView = new EventEditView({
      point: this.points[0],
      pointDestination: this.destinationsModel.get(),
      pointOffers: this.offersModel.get()
    });
    render(eventEditView, this.listComponent.getElement());

    this.points.forEach((point) => {
      const pointView = new PointView({
        point,
        pointDestination: this.destinationsModel.getById(point.destination),
        pointOffers: this.offersModel.getByType(point.type)
      });
      render(pointView, this.listComponent.getElement()
      );
    });
  }
}

