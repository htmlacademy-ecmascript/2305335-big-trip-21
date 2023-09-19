const TYPE_POINTS = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const Duration = {
  MIN: 59,
  DAY: 7,
  HOUR: 23
};

const FAVORITE = [
  true,
  false
];

const DEFAULT_TYPE = 'flight';

const DEFAULT__POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: DEFAULT_TYPE,
};

const DATE_FORMAT = {
  FULL_DATA: 'DD/MM/YY HH:mm',
  HOUR_MINUTE: 'HH:mm',
  MONTH_DAY: 'MMM DD',
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

const enabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFER]: false
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export {
  TYPE_POINTS,
  DEFAULT_TYPE,
  Duration, FAVORITE,
  DEFAULT__POINT,
  DATE_FORMAT,
  FilterType,
  SortType,
  enabledSortType,
  Mode };
