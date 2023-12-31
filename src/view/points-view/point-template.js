import { DEFAULT__POINT } from '../../const.js';
import { formatToFullDate, formatToEventDate, formatToEventTime, getPointDuration } from '../../utils/utils.js';

function renderOffersTemplate(offers) {
  return (/*html*/
    `<ul class="event__selected-offers">
    ${(offers) ?
      `${offers.map((offer) =>
        `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`).join('')}`
      : ''}
    </ul>`
  );
}

function renderPointTemplate({ point = DEFAULT__POINT, pointDestination, pointOffer }) {
  const { dateFrom, dateTo, type, basePrice, isFavorite } = point;

  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  return (/*html*/
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime=${formatToFullDate(dateFrom)}>${formatToEventDate(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${pointDestination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime=${formatToFullDate(dateFrom)}>${formatToEventTime(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime=${formatToFullDate(dateTo)}>${formatToEventTime(dateTo)}</time>
        </p>
        <p class="event__duration">${getPointDuration(dateFrom, dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${renderOffersTemplate(pointOffer)}
      <button class="${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}
export { renderPointTemplate };
