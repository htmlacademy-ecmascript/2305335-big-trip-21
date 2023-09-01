import {SORT_TYPE} from '../../const.js';

const typeGroupSort = SORT_TYPE.reduce((result, item) => {
  const itemKey = item.toLowerCase();
  result += /*html*/
  `<div class="trip-sort__item  trip-sort__item--${itemKey}">
    <input id="sort-${itemKey}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${itemKey}">
    <label class="trip-sort__btn" for="sort-${itemKey}">${item}</label>
  </div>`;
  return result;
}, '');

function createSortTemplate() {
  return /*html*/ `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${typeGroupSort}
    </form>`;
}
export { createSortTemplate };
