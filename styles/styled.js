function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { createStyled, withStyle as styletronWithStyle, useStyletron as styletronUseStyletron, withWrapper as styletronWithWrapper } from 'styletron-react';
import { driver, getInitialStyle } from 'styletron-standard';
import { ThemeContext } from './theme-provider.js';

var wrapper = function wrapper(StyledComponent) {
  return /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
      return /*#__PURE__*/React.createElement(StyledComponent, _extends({
        ref: ref
      }, props, {
        $theme: theme
      }));
    });
  });
};
/* eslint-disable flowtype/generic-spacing */

/* eslint-disable flowtype/no-weak-types */


/* eslint-enable flowtype/generic-spacing */

/* eslint-enable flowtype/no-weak-types */
export function createThemedStyled() {
  return createStyled({
    wrapper: wrapper,
    getInitialStyle: getInitialStyle,
    driver: driver // eslint-disable-next-line flowtype/no-weak-types

  });
}
export var styled = createThemedStyled();
export function createThemedWithStyle() {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithStyle;
}
export var withStyle = createThemedWithStyle();
export function createThemedUseStyletron() {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    var theme = React.useContext(ThemeContext);

    var _styletronUseStyletro = styletronUseStyletron(),
        _styletronUseStyletro2 = _slicedToArray(_styletronUseStyletro, 1),
        css = _styletronUseStyletro2[0];

    return [css, theme];
  };
}
export var useStyletron = createThemedUseStyletron();
export function withWrapper( // eslint-disable-next-line flowtype/no-weak-types
StyledElement, wrapperFn) {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithWrapper(StyledElement, function (Styled) {
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
        return wrapperFn(Styled)(_objectSpread(_objectSpread({
          ref: ref
        }, props), {}, {
          $theme: theme
        }));
      });
    });
  });
}