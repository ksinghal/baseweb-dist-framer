function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { Button, KIND, SIZE } from '../button/index.js';
import { getOverrides } from '../helpers/overrides.js';
import FilterIcon from '../icon/filter.js';
import { StatefulPopover, PLACEMENT } from '../popover/index.js';
import { StyledFilterButton, StyledFilterContent, StyledFilterHeading, StyledFilterFooter } from './styled-components.js';
export default function Filter(props) {
  var _props$onSelectAll = props.onSelectAll,
      onSelectAll = _props$onSelectAll === void 0 ? function () {} : _props$onSelectAll,
      _props$onReset = props.onReset,
      onReset = _props$onReset === void 0 ? function () {} : _props$onReset,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;

  var _getOverrides = getOverrides(overrides.MenuButton, StyledFilterButton),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      MenuButton = _getOverrides2[0],
      menuButtonProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.Content, StyledFilterContent),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Content = _getOverrides4[0],
      contentProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.Heading, StyledFilterHeading),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Heading = _getOverrides6[0],
      headingProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.Footer, StyledFilterFooter),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      Footer = _getOverrides8[0],
      footerProps = _getOverrides8[1];

  return /*#__PURE__*/React.createElement(StatefulPopover, {
    onClose: props.onClose,
    onOpen: props.onOpen,
    placement: PLACEMENT.bottom,
    stateReducer: function stateReducer(_, nextState) {
      if (props.disabled) {
        return _objectSpread(_objectSpread({}, nextState), {}, {
          isOpen: false
        });
      }

      return nextState;
    },
    content: function content(_ref) {
      var close = _ref.close;
      return /*#__PURE__*/React.createElement(FocusLock, {
        autoFocus: false
      }, /*#__PURE__*/React.createElement(Heading, headingProps, "Filter Column"), /*#__PURE__*/React.createElement(Content, contentProps, props.children), /*#__PURE__*/React.createElement(Footer, footerProps, /*#__PURE__*/React.createElement(Button, {
        kind: KIND.minimal,
        size: SIZE.compact,
        onClick: function onClick() {
          onSelectAll();
        }
      }, "Select All"), /*#__PURE__*/React.createElement(Button, {
        kind: KIND.minimal,
        size: SIZE.compact,
        onClick: function onClick() {
          onReset();
        }
      }, "Reset"), props.hasCloseButton && /*#__PURE__*/React.createElement(Button, {
        kind: KIND.minimal,
        size: SIZE.compact,
        onClick: close
      }, "Close")));
    },
    returnFocus: props.returnFocus
  }, /*#__PURE__*/React.createElement(MenuButton, _extends({
    $active: props.active,
    $disabled: props.disabled
  }, menuButtonProps), /*#__PURE__*/React.createElement(FilterIcon, {
    size: 18
  })));
}