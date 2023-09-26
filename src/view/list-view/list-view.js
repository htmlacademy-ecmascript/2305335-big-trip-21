import { renderListTemplate } from './list-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class ListView extends AbstractView{
  get template() {
    return renderListTemplate();
  }
}
