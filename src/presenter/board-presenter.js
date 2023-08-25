import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import EventEditView from '../view/event-edit-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';
//import DestinationsModel from '../model/destination-model.js';
export default class BoardPresenter {
  listComponent = new ListView();

  constructor({ container, destinationsModel, offersModel, pointsModel }) {
    this.container = container;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
    this.points = [...pointsModel.get()];
  }

  init() {
    render(this.listComponent, this.container);
    render(new EventEditView({
      point: this.points[0],
      pointDestination: this.destinationsModel.get(),
      pointOffers: this.offersModel.get()
    }),
    this.listComponent.getElement());

    render(new SortView(), this.container);

    this.points.forEach((point) => {
      render(
        new PointView({
          point,
          pointDestination: this.destinationsModel.getById(point.destination),
          pointOffers: this.offersModel.getByType(point.type)
        }),
        this.pointsListComponent.getElement()
      );
    });
  }
}
