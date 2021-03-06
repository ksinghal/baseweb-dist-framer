function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { DEFAULT_MONTHS } from '../constants.js';

var getDefaultMonthItems = function getDefaultMonthItems(formatMonthLabel) {
  return DEFAULT_MONTHS.map(function (month) {
    return {
      id: month.toString(),
      label: formatMonthLabel(month)
    };
  });
};

export var filterMonthItems = function filterMonthItems(monthItems, filterList) {
  return monthItems.map(function (month) {
    if (!filterList.includes(Number(month.id))) {
      return _objectSpread(_objectSpread({}, month), {}, {
        disabled: true
      });
    }

    return month;
  });
};
export var getFilteredMonthItems = function getFilteredMonthItems(_ref) {
  var filterMonthsList = _ref.filterMonthsList,
      formatMonthLabel = _ref.formatMonthLabel;
  var monthItems = getDefaultMonthItems(formatMonthLabel);

  if (filterMonthsList) {
    monthItems = filterMonthItems(monthItems, filterMonthsList);
  }

  return monthItems;
};