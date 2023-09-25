import { render } from '../framework/render';
import SortView from '../view/sort-view/sort-view.js';
import ListView from '../view/list-view/list-view.js';
import ListEmptyView from '../view/list-view/list-empty-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/utils.js';
import { SortType, enabledSortType } from '../const.js';
import { sort } from '../utils/sort.js';

export default class BoardPresenter {
  #boardContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #listComponent = new ListView();
  #listEmptyComponent = new ListEmptyView();
  #sortComponent = null;
  #points = [];
  #pointPresenters = new Map();
  #currentSortType = SortType.DAY;

  constructor({boardContainer, pointsModel, offersModel, destinationsModel}) {
    this.#boardContainer = boardContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#points = [...this.#pointsModel.points];
    this.#renderSort();
  }

  #modeChangeHandler = () => {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
  };

  #pointChangeHandler = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #sortTypeChangeHandler = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointsList();
    this.#renderPointsList();
  };

  #sortPoints(sortType) {
    this.#currentSortType = sortType;
    this.#points = sort[this.#currentSortType](this.#points);
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #renderSort() {
    const sortTypes = Object.values(SortType)
      .map(
        (type) => ({
          type,
          isChecked: (type === this.#currentSortType),
          isDisabled: !enabledSortType[type]
        }),
      );

    this.#sortComponent = new SortView({
      items: sortTypes,
      onSortTypeChange: this.#sortTypeChangeHandler
    });
    this.#sortPoints(this.#currentSortType);
    render(this.#sortComponent, this.#boardContainer);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListContainer: this.#listComponent,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      onDataChange: this.#pointChangeHandler,
      onModeChange: this.#modeChangeHandler,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPointsList() {
    if (this.#points.length) {
      render(this.#listComponent, this.#boardContainer);
      this.#points.forEach((point) => {
        this.#renderPoint(point);
      });
    }
  }

  #renderListEmptyComponent() {
    render(this.#listEmptyComponent, this.#boardContainer);
  }

  #renderBoard() {
    if (this.#points.length === 0) {
      this.#renderListEmptyComponent();
      return;
    }
    this.#renderPointsList();
  }

  init() {
    this.#renderBoard();
  }
}
