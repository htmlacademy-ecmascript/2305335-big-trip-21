import AbstractView from '../../framework/view/abstract-view.js';
import { renderListEmptyTemplate } from './list-empty-template.js';

export default class ListEmptyView extends AbstractView {
  get template() {
    return renderListEmptyTemplate();
  }
}
