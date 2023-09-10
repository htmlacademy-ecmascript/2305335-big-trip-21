import AbstractView from '../../framework/view/abstract-view.js';
import { createListEmptyTemplate } from './list-empty-template.js';

export default class ListEmptyView extends AbstractView {
  get template() {
    return createListEmptyTemplate();
  }
}
