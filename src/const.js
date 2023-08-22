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
  basePrice: 1100,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo:  '2019-07-11T11:22:13.375Z',
  destination: 11,
  isFavorite: false,
  offers: [1],
  type: 'taxi'
};

export {TYPE_POINTS, DEFAULT_TYPE, Duration, FAVORITE, DEFAULT__POINT};
