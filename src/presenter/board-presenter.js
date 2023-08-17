import SortView from '../view/sort-view.js';
import ListView from '../view/list-view.js';
import EventEditView from '../view/event-edit-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';

export default class BoardPresenter {
  listComponent = new ListView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(new EventEditView(), this.listComponent.getElement());
    render(new SortView(), this.container);
    render(this.listComponent, this.container);


    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.listComponent.getElement());
    }
  }
}
