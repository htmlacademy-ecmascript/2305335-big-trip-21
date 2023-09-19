import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Duration, DATE_FORMAT } from '../const.js';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatToFullDate(date) {
  return dayjs(date).format(DATE_FORMAT.FULL_DATA);
}

function formatToEventDate(date) {
  return dayjs(date).format(DATE_FORMAT.MONTH_DAY);
}

function formatToEventTime(date) {
  return dayjs(date).format(DATE_FORMAT.HOUR_MINUTE);
}

function getDate({ next }) {
  let date = dayjs().subtract(getRandomInteger(0, Duration.DAY), 'day').toDate();
  const minsGap = getRandomInteger(0, Duration.MIN);
  const hoursGap = getRandomInteger(0, Duration.HOUR);
  const daysGap = getRandomInteger(0, Duration.DAY);

  if (next) {
    date = dayjs()
      .add(minsGap, 'minute')
      .add(hoursGap, 'hour')
      .subtract(daysGap, 'day')
      .toDate();
  }

  return date;
}

function getPointDuration(dateFrom, dateTo) {
  const pointStartTime = dayjs(dateFrom);
  const pointEndTime = dayjs(dateTo);

  const timeDiff = pointEndTime.diff(pointStartTime);
  const durationTime = dayjs.duration(timeDiff);

  const minutes = `${durationTime.format('mm')}M`;
  const days = durationTime.days() > 0 ? `${durationTime.format('DD')}D ` : '';
  const hours = (durationTime.hours() > 0 || days) ? `${durationTime.format('HH')}H ` : '';

  return `${days}${hours}${minutes}`.trim();
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export {
  getRandomArrayElement,
  getRandomInteger,
  formatToEventDate,
  formatToFullDate,
  formatToEventTime,
  getDate,
  getPointDuration,
  updateItem
};

