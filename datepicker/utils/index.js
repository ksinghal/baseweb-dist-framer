/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/extensions */
import defaultAdapter from './date-fns-adapter';
import DateHelpers from './date-helpers';
var defaultDateHelpers = new DateHelpers(defaultAdapter);
var wrapDate = defaultAdapter.date;
export var formatDate = defaultDateHelpers.formatDate;
export var getStartOfWeek = defaultDateHelpers.getStartOfWeek;
export var getEndOfWeek = defaultDateHelpers.getEndOfWeek;
export var getStartOfMonth = defaultDateHelpers.getStartOfMonth;
export var getEndOfMonth = defaultDateHelpers.getEndOfMonth;
export var isSameYear = defaultDateHelpers.isSameYear;
export var isSameMonth = defaultDateHelpers.isSameMonth;
export var isSameDay = defaultDateHelpers.isSameDay;
export var isDayInRange = defaultDateHelpers.isDayInRange;
export var isStartOfMonth = defaultDateHelpers.isStartOfMonth;
export var isEndOfMonth = defaultDateHelpers.isEndOfMonth;
export var getWeekdayMinInLocale = defaultDateHelpers.getWeekdayMinInLocale;
export var getWeekdayInLocale = defaultDateHelpers.getWeekdayInLocale;
export var getMonthInLocale = defaultDateHelpers.getMonthInLocale;
export var getQuarterInLocale = defaultDateHelpers.getQuarterInLocale;
export var isDayDisabled = defaultDateHelpers.isDayDisabled;
export var isOutOfBounds = defaultDateHelpers.isOutOfBounds;
export var monthDisabledBefore = defaultDateHelpers.monthDisabledBefore;
export var monthDisabledAfter = defaultDateHelpers.monthDisabledAfter;
export var getEffectiveMinDate = defaultDateHelpers.getEffectiveMinDate;
export var getEffectiveMaxDate = defaultDateHelpers.getEffectiveMaxDate;
export var applyTimeToDate = defaultDateHelpers.applyTimeToDate;
export var applyDateToTime = defaultDateHelpers.applyDateToTime;

var createDirtySetter = function createDirtySetter(setter) {
  return function (dirtyDate, number) {
    return setter(wrapDate(dirtyDate), number);
  };
};

var createDirtyGetter = function createDirtyGetter(getter) {
  return function (dirtyDate) {
    return getter(wrapDate(dirtyDate));
  };
};

var createDirtyCompare = function createDirtyCompare(compare) {
  return function (fromDirty, toDirty) {
    return compare(wrapDate(fromDirty), wrapDate(toDirty));
  };
}; // ** Re-exported from date-fns **
// these need to be able to accept either number or date
// to maintain parity with the old exports
// ** Date Setters **


export var setSeconds = createDirtySetter(defaultDateHelpers.setSeconds);
export var setMinutes = createDirtySetter(defaultDateHelpers.setMinutes);
export var setHours = createDirtySetter(defaultDateHelpers.setHours);
export var setMonth = createDirtySetter(defaultDateHelpers.setMonth);
export var setYear = createDirtySetter(defaultDateHelpers.setYear); // ** Date Getters **

export var getMinutes = createDirtyGetter(defaultDateHelpers.getMinutes);
export var getHours = createDirtyGetter(defaultDateHelpers.getHours);
export var getDate = createDirtyGetter(defaultDateHelpers.getDate);
export var getMonth = createDirtyGetter(defaultDateHelpers.getMonth);
export var getYear = createDirtyGetter(defaultDateHelpers.getYear); // ** Date Math

export var addDays = createDirtySetter(defaultDateHelpers.addDays);
export var addWeeks = createDirtySetter(defaultDateHelpers.addWeeks);
export var addMonths = createDirtySetter(defaultDateHelpers.addMonths);
export var addYears = createDirtySetter(defaultDateHelpers.addYears);
export var subDays = createDirtySetter(defaultDateHelpers.subDays);
export var subWeeks = createDirtySetter(defaultDateHelpers.subWeeks);
export var subMonths = createDirtySetter(defaultDateHelpers.subMonths);
export var subYears = createDirtySetter(defaultDateHelpers.subYears); // ** Date Comparison

export var isBefore = createDirtyCompare(defaultDateHelpers.isBefore);
export var isAfter = createDirtyCompare(defaultDateHelpers.isAfter); // eslint-disable-next-line flowtype/no-weak-types

export var format = function format(date, _format, locale) {
  return defaultDateHelpers.format(date, _format, locale);
};