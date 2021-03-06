function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable import/prefer-default-export */
import { ARROW_SIZE, PLACEMENT } from './constants.js';
var OPPOSITE_POSITIONS = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right'
};
/**
 * Returns the opposite of the specified position. Useful for tooltip
 * positioning logic.
 * Examples:
 * top -> bottom
 * left -> right
 */

export function getOppositePosition(position) {
  return OPPOSITE_POSITIONS[position];
}
/**
 * Determines whether or not the specified position is a vertical one (top or bottom)
 */

export function isVerticalPosition(position) {
  return position === 'top' || position === 'bottom';
}
/**
 * Simple utility function for capitalizing the first letter of a string
 */

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Opposite of function above, converts from Popper.js placement
 * to our placement prop
 */

export function fromPopperPlacement(placement) {
  var popoverPlacement = placement.replace(/(top|bottom)-start$/, '$1Left').replace(/(top|bottom)-end$/, '$1Right').replace(/(left|right)-start$/, '$1Top').replace(/(left|right)-end$/, '$1Bottom');
  return PLACEMENT[popoverPlacement] || null;
}
/**
 * Splits something like 'topLeft' to ['top', 'left'] for easier usage
 */

export function splitPlacement(placement) {
  var matches = placement.match(/^([a-z]+)([A-Z][a-z]+)?/) || [];
  return matches.slice(1, 3).filter(Boolean).map(function (s) {
    return s.toLowerCase();
  });
}
/**
 * Returns margin styles to add spacing between the popover
 * and its anchor.
 */

export function getPopoverMarginStyles(arrowSize, placement, popoverMargin) {
  var _splitPlacement = splitPlacement(placement),
      _splitPlacement2 = _slicedToArray(_splitPlacement, 1),
      position = _splitPlacement2[0];

  var opposite = getOppositePosition(position);

  if (!opposite) {
    return null;
  }

  var property = "margin".concat(capitalize(opposite));
  return _defineProperty({}, property, "".concat(arrowSize + popoverMargin, "px"));
}
/**
 * Returns CSS rules for the popover animation start keyframe
 */

export function getStartPosition(offset, placement, arrowSize, popoverMargin) {
  offset = _objectSpread({}, offset);

  var _splitPlacement3 = splitPlacement(placement),
      _splitPlacement4 = _slicedToArray(_splitPlacement3, 1),
      position = _splitPlacement4[0];

  var margin = (arrowSize > 0 ? arrowSize : popoverMargin) * 2;

  if (isVerticalPosition(position)) {
    offset.top += position === 'top' ? margin : -margin;
  } else {
    offset.left += position === 'left' ? margin : -margin;
  }

  return "translate3d(".concat(offset.left, "px, ").concat(offset.top, "px, 0)");
}
/**
 * Returns CSS rules for the popover animation end keyframe
 */

export function getEndPosition(offset) {
  return "translate3d(".concat(offset.left, "px, ").concat(offset.top, "px, 0)");
}
/**
 * Returns top/left styles to position the popover arrow
 */

export function getArrowPositionStyles(offsets, placement) {
  var _ref2;

  var _splitPlacement5 = splitPlacement(placement),
      _splitPlacement6 = _slicedToArray(_splitPlacement5, 1),
      position = _splitPlacement6[0];

  var oppositePosition = getOppositePosition(position);

  if (!oppositePosition) {
    return null;
  }

  var alignmentProperty = isVerticalPosition(position) ? 'left' : 'top';
  return _ref2 = {}, _defineProperty(_ref2, alignmentProperty, "".concat(offsets[alignmentProperty], "px")), _defineProperty(_ref2, oppositePosition, "-".concat(ARROW_SIZE - 2, "px")), _ref2;
}