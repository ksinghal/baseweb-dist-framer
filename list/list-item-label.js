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
import React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { StyledLabelContent, StyledLabelDescription, StyledLabelSublistContent } from './styled-components.js';

function ListItemLabel(props) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;

  var _getOverrides = getOverrides(overrides.LabelSublistContent, StyledLabelSublistContent),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      LabelSublistContent = _getOverrides2[0],
      labelSublistContentProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.LabelContent, StyledLabelContent),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      LabelContent = _getOverrides4[0],
      labelContentProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.LabelDescription, StyledLabelDescription),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      LabelDescription = _getOverrides6[0],
      labelDescriptionProps = _getOverrides6[1];

  if (props.sublist) {
    return /*#__PURE__*/React.createElement(LabelSublistContent, labelSublistContentProps, props.children);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LabelContent, labelContentProps, props.children), props.description && /*#__PURE__*/React.createElement(LabelDescription, labelDescriptionProps, props.description));
}

export default ListItemLabel;