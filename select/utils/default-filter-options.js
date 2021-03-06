function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var escapeRegExp = function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

var isValid = function isValid(value) {
  return typeof value !== 'undefined' && value !== null && value !== '';
};

var defaultProps = {
  filterOption: null,
  ignoreCase: true,
  labelKey: 'label',
  matchPos: 'any',
  matchProp: 'any',
  trimFilter: true,
  valueKey: 'value'
};

var filterOptions = function filterOptions(options, filterValue, excludeOptions, newProps) {
  var props = _objectSpread(_objectSpread({}, defaultProps), newProps);

  if (props.ignoreCase) {
    filterValue = filterValue.toLowerCase();
  }

  if (props.trimFilter) {
    filterValue = filterValue.trim();
  }

  var excludeValues = (excludeOptions || []).reduce(function (acc, option) {
    acc.add(option[props.valueKey]);
    return acc;
  }, new Set());
  var re = new RegExp("".concat(props.matchPos === 'start' ? '$' : '').concat(escapeRegExp(filterValue)), props.ignoreCase ? 'i' : ''); // $FlowFixMe

  return options.filter(function (option) {
    if (excludeValues.has(option[props.valueKey])) return false;
    if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
    if (!filterValue) return true;
    var value = option[props.valueKey];
    var label = option[props.labelKey];
    var hasValue = isValid(value);
    var hasLabel = isValid(label);

    if (!hasValue && !hasLabel) {
      return false;
    }

    var valueTest = hasValue ? String(value) : null;
    var labelTest = hasLabel ? String(label) : null;
    return valueTest && props.matchProp !== 'label' && re.test(valueTest) || labelTest && props.matchProp !== 'value' && re.test(labelTest);
  });
};

export default filterOptions;