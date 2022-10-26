import dayJs, { ManipulateType } from 'dayjs';

const maxAgeParser = (cachePeriod: string) => {
  const maxAgeUnit = cachePeriod.split(/\d+/)[1];
  const maxAgeTime = cachePeriod.split(/\D/)[0];

  return {
    time: parseInt(maxAgeTime, 10),
    unit: maxAgeUnit as ManipulateType,
  };
};

const getExpireDate = (cachePeriod: string) => {
  const maxAge = maxAgeParser(cachePeriod);

  return dayJs().add(maxAge.time, maxAge.unit).valueOf();
}

const isBefore = (date: number): boolean => dayJs().isBefore(dayJs(date));

export {
  getExpireDate,
  isBefore,
};
