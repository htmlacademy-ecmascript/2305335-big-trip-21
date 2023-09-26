import { renderTripInfoTemplate } from './trip-info-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class TripInfoView extends AbstractView{
  get template() {
    return renderTripInfoTemplate;
  }
}
