import {FILTER_TYPE} from '../../const.js';

const typeGroupFilter = FILTER_TYPE.reduce((result, item) => {
  const itemKey = item.toLowerCase();
  result += /*html*/
  `<div class="trip-filters__filter">
    <input id="filter-${itemKey}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${itemKey}">
    <label class="trip-filters__filter-label" for="filter-${itemKey}">${item}</label>
  </div>`;
  return result;
}, '');

function createFilterTemplate() {
  return /*html*/ `
    <form class="trip-filters" action="#" method="get">
      ${typeGroupFilter}
    </form>`;
}
export { createFilterTemplate };
