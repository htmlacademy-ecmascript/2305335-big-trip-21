import { createSortTemplate } from './sort-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class SortView extends AbstractView{
  get template() {
    return createSortTemplate();
  }
}
