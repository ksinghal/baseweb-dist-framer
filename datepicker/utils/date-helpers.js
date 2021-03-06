function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var MINUTE = 60;
var HOUR = MINUTE * 60;

var DateHelpers = function DateHelpers(_adapter) {
  var _this = this;

  _classCallCheck(this, DateHelpers);

  _defineProperty(this, "adapter", void 0);

  _defineProperty(this, "cloneAdapter", function (adapter, updateOptionsBase) {
    var adapterMap = {
      // all utils classes set the arguments passed into their constructor as public members in some way
      // it just varies by class, most just set formats and locale, but this handles the exceptions
      MomentUtils: {
        formats: {
          monthNumber: 'M',
          dayOfMonthNumber: 'D',
          fullOrdinalWeek: 'dddd, MMMM Do YYYY',
          slashDate: 'YYYY/MM/DD',
          weekday: 'dddd',
          // moment does not have a similar 'single character' weekday format like the other libraries
          // the format below will only supply two character abbreviations.
          weekdaymin: 'dd',
          quarter: '[Q]Q'
        }
      },
      DateFnsUtils: {
        formats: {
          monthNumber: 'M',
          dayOfMonthNumber: 'd',
          weekday: 'EEEE',
          weekdaymin: 'EEEEE',
          slashDate: 'yyyy/MM/dd',
          fullOrdinalWeek: 'EEEE, MMMM do yyyy',
          quarter: 'QQQ'
        }
      },
      LuxonUtils: {
        formats: {
          monthNumber: 'M',
          dayOfMonthNumber: 'd',
          weekday: 'EEEE',
          weekdaymin: 'EEEEE',
          slashDate: 'yyyy/MM/dd',
          fullOrdinalWeek: 'EEEE, MMMM dd yyyy',
          quarter: 'Qq'
        }
      }
    };

    var defaultGetOptions = function defaultGetOptions(instance) {
      return {
        formats: instance.formats,
        locale: instance.locale
      };
    };

    var updateOptions = updateOptionsBase || defaultGetOptions;
    var UtilsClass = adapter.constructor;
    var className = adapter.constructor.name; // This ensures that if the adapter class isn't
    // supported it just falls back the default formats
    // NOTE: in e2e tests puppeteer seems to add
    // a JSHandle wrapping class to all objects
    // so className always resolves to JSHandle:e
    // and if falls back to the default
    // if we want to test other adapter implementation
    // in e2e tests down the road, we're going to have
    // to figure that out

    var _ref = adapterMap[className] || adapterMap['DateFnsUtils'],
        _ref$getOptions = _ref.getOptions,
        getOptions = _ref$getOptions === void 0 ? defaultGetOptions : _ref$getOptions,
        formats = _ref.formats;

    var options = getOptions(adapter);
    return new UtilsClass(Object.assign({}, updateOptions(Object.assign({}, options, {
      formats: Object.assign({}, options.formats, formats)
    }))));
  });

  _defineProperty(this, "format", function (date, format, locale) {
    var adapter = locale ? _this.getAdapterWithNewLocale(locale) : _this.adapter;
    return adapter.format(date, format);
  });

  _defineProperty(this, "getAdapterWithNewLocale", function (locale) {
    return _this.cloneAdapter(_this.adapter, function (options) {
      return _objectSpread(_objectSpread({}, options), {}, {
        locale: locale
      });
    });
  });

  _defineProperty(this, "date", function (date) {
    return _this.adapter.date(date);
  });

  _defineProperty(this, "dateToSeconds", function (date) {
    var seconds = _this.adapter.getSeconds(date);

    var minutes = _this.adapter.getMinutes(date) * MINUTE;
    var hours = _this.adapter.getHours(date) * HOUR;
    return seconds + minutes + hours;
  });

  _defineProperty(this, "secondsToHourMinute", function (seconds) {
    var d = _this.adapter.toJsDate(_this.adapter.date(seconds * 1000));

    return [d.getUTCHours(), d.getUTCMinutes()];
  });

  _defineProperty(this, "differenceInCalendarMonths", function (fromDate, toDate) {
    var yearDiff = _this.adapter.getYear(fromDate) - _this.adapter.getYear(toDate);

    var monthDiff = _this.adapter.getMonth(fromDate) - _this.adapter.getMonth(toDate);

    return yearDiff * 12 + monthDiff;
  });

  _defineProperty(this, "getStartOfWeek", function (date, locale) {
    var adapter = locale ? _this.getAdapterWithNewLocale(locale) : _this.adapter; // rewrapping this date here ensures that the locale will be taken into account in all adapters

    return adapter.startOfWeek(adapter.date(date));
  });

  _defineProperty(this, "formatDate", function (date, formatString, locale) {
    var adapter = locale ? _this.getAdapterWithNewLocale(locale) : _this.adapter;
    return adapter.formatByString(date, formatString);
  });

  _defineProperty(this, "getWeekdayMinInLocale", function (date, locale) {
    return _this.getAdapterWithNewLocale(locale).format(date, 'weekdaymin');
  });

  _defineProperty(this, "getMonthInLocale", function (monthNumber, locale) {
    var localeAdapter = _this.getAdapterWithNewLocale(locale);

    return localeAdapter.format(localeAdapter.setMonth(localeAdapter.date(), monthNumber), 'month');
  });

  _defineProperty(this, "getWeekdayInLocale", function (date, locale) {
    return _this.getAdapterWithNewLocale(locale).format(date, 'weekday');
  });

  _defineProperty(this, "getQuarterInLocale", function (quarterNumber, locale) {
    var localeAdapter = _this.getAdapterWithNewLocale(locale);

    return localeAdapter.format(localeAdapter.setMonth(localeAdapter.date(), quarterNumber * 3), 'quarter');
  });

  _defineProperty(this, "getEndOfWeek", function (date) {
    return _this.adapter.endOfWeek(date);
  });

  _defineProperty(this, "getDay", function (date) {
    return Number(_this.adapter.formatByString(date, 'e')) - 1;
  });

  _defineProperty(this, "addWeeks", function (date, weekNumber) {
    return _this.adapter.addDays(date, weekNumber * 7);
  });

  _defineProperty(this, "subWeeks", function (date, weekNumber) {
    return _this.addWeeks(date, weekNumber * -1);
  });

  _defineProperty(this, "addYears", function (date, yearNumber) {
    return _this.adapter.addMonths(date, yearNumber * 12);
  });

  _defineProperty(this, "subYears", function (date, yearNumber) {
    return _this.addYears(date, yearNumber * -1);
  });

  _defineProperty(this, "isSameYear", function (fromDate, toDate) {
    if (fromDate && toDate) {
      return _this.adapter.isSameYear(fromDate, toDate);
    }

    return false;
  });

  _defineProperty(this, "isStartOfMonth", function (date) {
    return _this.adapter.isSameDay(date, _this.adapter.startOfMonth(date));
  });

  _defineProperty(this, "isEndOfMonth", function (date) {
    return _this.adapter.isSameDay(date, _this.adapter.endOfMonth(date));
  });

  _defineProperty(this, "isDayInRange", function (date, startDate, endDate) {
    return _this.adapter.isWithinRange(date, [startDate, endDate]);
  });

  _defineProperty(this, "isSameDay", function (fromDate, toDate) {
    if (fromDate && toDate) {
      return _this.adapter.isSameDay(fromDate, toDate);
    }

    return false;
  });

  _defineProperty(this, "isSameMonth", function (fromDate, toDate) {
    if (fromDate && toDate) {
      return _this.adapter.isSameMonth(fromDate, toDate);
    }

    return false;
  });

  _defineProperty(this, "subDays", function (date, days) {
    return _this.adapter.addDays(date, days * -1);
  });

  _defineProperty(this, "subMonths", function (date, months) {
    return _this.adapter.addMonths(date, months * -1);
  });

  _defineProperty(this, "min", function (dates) {
    return dates.reduce(function (minDate, date) {
      return _this.adapter.isBefore(date, minDate) ? date : minDate;
    });
  });

  _defineProperty(this, "max", function (dates) {
    return dates.reduce(function (maxDate, date) {
      return _this.adapter.isAfter(date, maxDate) ? date : maxDate;
    });
  });

  _defineProperty(this, "getEffectiveMinDate", function (_ref2) {
    var minDate = _ref2.minDate,
        includeDates = _ref2.includeDates;

    if (includeDates && minDate) {
      var minDates = includeDates.filter(function (includeDate) {
        return _this.isOnOrAfterDay(includeDate, minDate);
      });
      return _this.min(minDates);
    } else if (includeDates && includeDates.length) {
      return _this.min(includeDates);
    } else if (!(includeDates && includeDates.length) && minDate) {
      return minDate;
    } // this condition can't ever be reached
    // but flow isn't smart enough to see that all of the conditions are covered


    return _this.adapter.date();
  });

  _defineProperty(this, "getEffectiveMaxDate", function (_ref3) {
    var maxDate = _ref3.maxDate,
        includeDates = _ref3.includeDates;

    if (includeDates && maxDate) {
      var maxDates = includeDates.filter(function (includeDate) {
        return _this.isOnOrBeforeDay(includeDate, maxDate);
      });
      return _this.max(maxDates);
    } else if (includeDates) {
      return _this.max(includeDates);
    } else if (!includeDates && maxDate) {
      return maxDate;
    } // this condition can't ever be reached
    // but flow isn't smart enough to see that all of the conditions are covered


    return _this.adapter.date();
  });

  _defineProperty(this, "monthDisabledBefore", function (day) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        minDate = _ref4.minDate,
        includeDates = _ref4.includeDates;

    var previousMonth = _this.subMonths(day, 1);

    return !!minDate && _this.differenceInCalendarMonths(minDate, previousMonth) > 0 || !!includeDates && includeDates.every(function (includeDate) {
      return _this.differenceInCalendarMonths(includeDate, previousMonth) > 0;
    }) || false;
  });

  _defineProperty(this, "monthDisabledAfter", function (day) {
    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        maxDate = _ref5.maxDate,
        includeDates = _ref5.includeDates;

    var nextMonth = _this.adapter.addMonths(day, 1);

    return !!maxDate && _this.differenceInCalendarMonths(nextMonth, maxDate) > 0 || !!includeDates && includeDates.every(function (includeDate) {
      return _this.differenceInCalendarMonths(nextMonth, includeDate) > 0;
    }) || false;
  });

  _defineProperty(this, "setDate", function (date, dayNumber) {
    var startOfMonthNoTime = _this.adapter.startOfMonth(date);

    var startOfMonthHoursAndMinutes = _this.adapter.mergeDateAndTime(startOfMonthNoTime, date);

    var startOfMonth = _this.adapter.setSeconds(startOfMonthHoursAndMinutes, _this.adapter.getSeconds(date));

    return _this.adapter.addDays(startOfMonth, dayNumber - 1);
  });

  _defineProperty(this, "getDate", function (date) {
    return Number(_this.adapter.format(date, 'dayOfMonthNumber'));
  });

  _defineProperty(this, "applyDateToTime", function (time, date) {
    if (!time) return date;

    var yearNumber = _this.adapter.getYear(date);

    var monthNumber = _this.adapter.getMonth(date);

    var dayNumber = _this.getDate(date);

    var yearDate = _this.adapter.setYear(time, yearNumber);

    var monthDate = _this.adapter.setMonth(yearDate, monthNumber);

    return _this.setDate(monthDate, dayNumber);
  });

  _defineProperty(this, "applyTimeToDate", function (date, time) {
    if (!date) return time;
    return _this.adapter.setSeconds(_this.adapter.mergeDateAndTime(date, time), 0);
  });

  _defineProperty(this, "isDayDisabled", function (day) {
    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        minDate = _ref6.minDate,
        maxDate = _ref6.maxDate,
        excludeDates = _ref6.excludeDates,
        includeDates = _ref6.includeDates,
        filterDate = _ref6.filterDate;

    return _this.isOutOfBounds(day, {
      minDate: minDate,
      maxDate: maxDate
    }) || excludeDates && excludeDates.some(function (excludeDate) {
      return _this.adapter.isSameDay(day, excludeDate);
    }) || includeDates && !includeDates.some(function (includeDate) {
      return _this.adapter.isSameDay(day, includeDate);
    }) || filterDate && !filterDate(day) || false;
  });

  _defineProperty(this, "isOnOrAfterDay", function (fromDate, toDate) {
    if (_this.adapter.isSameDay(fromDate, toDate)) {
      return true;
    }

    return _this.adapter.isAfter(fromDate, toDate);
  });

  _defineProperty(this, "isOnOrBeforeDay", function (fromDate, toDate) {
    if (_this.adapter.isSameDay(fromDate, toDate)) {
      return true;
    }

    return _this.adapter.isBefore(fromDate, toDate);
  });

  _defineProperty(this, "isOutOfBounds", function (day) {
    var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        minDate = _ref7.minDate,
        maxDate = _ref7.maxDate;

    return !!minDate && !_this.isOnOrAfterDay(day, minDate) || !!maxDate && !_this.isOnOrBeforeDay(day, maxDate);
  });

  _defineProperty(this, "parseString", function (string, formatString, locale) {
    var adapter = locale ? _this.getAdapterWithNewLocale(locale) : _this.adapter;
    return adapter.parse(string, formatString);
  });

  _defineProperty(this, "parse", function (string, format, locale) {
    var adapter = locale ? _this.getAdapterWithNewLocale(locale) : _this.adapter;
    return adapter.parse(string, adapter.formats[format]);
  });

  _defineProperty(this, "setMilliseconds", function (date, milliseconds) {
    return _this.adapter.date(_this.adapter.getSeconds(_this.adapter.startOfDay(date)) * 1000 + milliseconds);
  });

  _defineProperty(this, "set", function (date, values) {
    var updatedDate = date;

    if (values.year != null) {
      updatedDate = _this.setYear(updatedDate, values.year);
    }

    if (values.month != null) {
      updatedDate = _this.setMonth(updatedDate, values.month);
    }

    if (values.date != null) {
      updatedDate = _this.setDate(updatedDate, Number(values.date));
    }

    if (values.hours != null) {
      updatedDate = _this.setHours(updatedDate, Number(values.hours));
    }

    if (values.minutes != null) {
      updatedDate = _this.setMinutes(updatedDate, Number(values.minutes));
    }

    if (values.seconds != null) {
      updatedDate = _this.setSeconds(updatedDate, Number(values.seconds));
    }

    return updatedDate;
  });

  _defineProperty(this, "getQuarter", function (date) {
    return Math.floor(_this.getMonth(date) / 3) + 1;
  });

  _defineProperty(this, "setSeconds", function (date, seconds) {
    return _this.adapter.setSeconds(date, seconds);
  });

  _defineProperty(this, "setMinutes", function (date, minutes) {
    return _this.adapter.setMinutes(date, minutes);
  });

  _defineProperty(this, "setHours", function (date, hours) {
    return _this.adapter.setHours(date, hours);
  });

  _defineProperty(this, "setMonth", function (date, monthNumber) {
    return _this.adapter.setMonth(date, monthNumber);
  });

  _defineProperty(this, "setYear", function (date, yearNumber) {
    return _this.adapter.setYear(date, yearNumber);
  });

  _defineProperty(this, "getMinutes", function (date) {
    return _this.adapter.getMinutes(date);
  });

  _defineProperty(this, "getHours", function (date) {
    return _this.adapter.getHours(date);
  });

  _defineProperty(this, "getMonth", function (date) {
    return _this.adapter.getMonth(date);
  });

  _defineProperty(this, "getYear", function (date) {
    return _this.adapter.getYear(date);
  });

  _defineProperty(this, "getStartOfMonth", function (date) {
    return _this.adapter.startOfMonth(date);
  });

  _defineProperty(this, "getEndOfMonth", function (date) {
    return _this.adapter.endOfMonth(date);
  });

  _defineProperty(this, "addDays", function (date, days) {
    return _this.adapter.addDays(date, days);
  });

  _defineProperty(this, "addMonths", function (date, months) {
    return _this.adapter.addMonths(date, months);
  });

  _defineProperty(this, "isBefore", function (fromDate, toDate) {
    return _this.adapter.isBefore(fromDate, toDate);
  });

  _defineProperty(this, "isAfter", function (fromDate, toDate) {
    return _this.adapter.isAfter(fromDate, toDate);
  });

  _defineProperty(this, "isEqual", function (fromDate, toDate) {
    return _this.adapter.isEqual(fromDate, toDate);
  });

  _defineProperty(this, "isValid", function (possibleDate) {
    return _this.adapter.isValid(possibleDate);
  });

  this.adapter = this.cloneAdapter(_adapter);
};

export default DateHelpers;