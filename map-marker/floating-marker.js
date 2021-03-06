function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { useStyletron } from '../styles/index.js';
import PinHead from './pin-head.js';
import { getOverrides } from '../helpers/overrides.js';
import { FloatingMarkerRoot as StyledRoot, FloatingMarkerAnchorContainer as StyledFloatingMarkerAnchorContainer, FloatingMarkerPinHeadContainer as StyledFloatingMarkerPinHeadContainer } from './styled-components.js';
import { FLOATING_MARKER_ANCHOR_POSITIONS, PINHEAD_SIZES_SHAPES, PINHEAD_TYPES, FLOATING_MARKER_ANCHOR_TYPES, anchorSize } from './constants.js';

var FloatingMarker = function FloatingMarker(_ref) {
  var color = _ref.color,
      background = _ref.background,
      label = _ref.label,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? PINHEAD_SIZES_SHAPES.medium : _ref$size,
      _ref$anchor = _ref.anchor,
      anchor = _ref$anchor === void 0 ? FLOATING_MARKER_ANCHOR_POSITIONS.bottomLeft : _ref$anchor,
      endEnhancer = _ref.endEnhancer,
      startEnhancer = _ref.startEnhancer,
      _ref$anchorType = _ref.anchorType,
      anchorType = _ref$anchorType === void 0 ? FLOATING_MARKER_ANCHOR_TYPES.circle : _ref$anchorType,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var _theme$colors = theme.colors,
      backgroundPrimary = _theme$colors.backgroundPrimary,
      backgroundInversePrimary = _theme$colors.backgroundInversePrimary,
      primaryA = _theme$colors.primaryA,
      primaryB = _theme$colors.primaryB;
  color = color || primaryA;
  background = background || backgroundPrimary;
  var anchorPinHeadSize = anchorType === FLOATING_MARKER_ANCHOR_TYPES.circle ? PINHEAD_SIZES_SHAPES.xSmallCircle : PINHEAD_SIZES_SHAPES.xSmallSquare;

  var _getOverrides = getOverrides(overrides.Root, StyledRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.PinHeadContainer, StyledFloatingMarkerPinHeadContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      FloatingMarkerPinHeadContainer = _getOverrides4[0],
      floatingMarkerPinHeadContainerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.AnchorContainer, StyledFloatingMarkerAnchorContainer),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      FloatingMarkerAnchorContainer = _getOverrides6[0],
      floatingMarkerAnchorContainerProps = _getOverrides6[1];

  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "floating-map-marker"
  }, rootProps), /*#__PURE__*/React.createElement(FloatingMarkerPinHeadContainer, _extends({
    $anchor: anchor,
    $anchorSize: anchorSize
  }, floatingMarkerPinHeadContainerProps), /*#__PURE__*/React.createElement(PinHead, {
    size: size,
    color: color,
    background: background,
    type: PINHEAD_TYPES.floating,
    label: label,
    startEnhancer: startEnhancer,
    endEnhancer: endEnhancer,
    overrides: overrides
  })), anchor !== FLOATING_MARKER_ANCHOR_POSITIONS.none && /*#__PURE__*/React.createElement(FloatingMarkerAnchorContainer, floatingMarkerAnchorContainerProps, /*#__PURE__*/React.createElement(PinHead, {
    size: anchorPinHeadSize,
    color: primaryB,
    background: backgroundInversePrimary,
    type: PINHEAD_TYPES.fixed,
    overrides: overrides
  })));
};

export default FloatingMarker;