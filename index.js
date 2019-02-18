const { findTimeZone, getZonedTime, getUnixTime } = require('timezone-support')

/**
 * @param  {string|Date} date
 * @param  {string} timezone must be one of listed in https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
function getZonedZeroOfClock (date, timezone) {
  timezone = findTimeZone(timezone)

  let { year, month, day } = getZonedTime(new Date(date), timezone)

  return new Date(getUnixTime({
    year, month, day, hours: 0, minutes: 0, milliseconds: 0
  }, timezone))
}

module.exports = getZonedZeroOfClock
