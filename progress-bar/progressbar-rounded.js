function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* global window */
import * as React from 'react';
import { SIZE } from './constants.js';
import { StyledProgressBarRoundedRoot, StyledProgressBarRoundedSvg, StyledProgressBarRoundedTrackBackground, StyledProgressBarRoundedTrackForeground, StyledProgressBarRoundedText } from './styled-components.js';
import { useOverrides } from '../helpers/overrides.js';
var defaults = {
  Root: StyledProgressBarRoundedRoot,
  Svg: StyledProgressBarRoundedSvg,
  TrackBackground: StyledProgressBarRoundedTrackBackground,
  TrackForeground: StyledProgressBarRoundedTrackForeground,
  Text: StyledProgressBarRoundedText
};

function roundTo(n, digits) {
  if (digits === undefined) {
    digits = 0;
  }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  var test = Math.round(n) / multiplicator;
  return +test.toFixed(digits);
}

function ProgressBarRounded(_ref) {
  var _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.medium : _ref$size,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      restProps = _objectWithoutProperties(_ref, ["progress", "size", "animate", "inline", "overrides"]);

  var _useOverrides = useOverrides(defaults, overrides),
      _useOverrides$Root = _slicedToArray(_useOverrides.Root, 2),
      Root = _useOverrides$Root[0],
      rootProps = _useOverrides$Root[1],
      _useOverrides$Svg = _slicedToArray(_useOverrides.Svg, 2),
      Svg = _useOverrides$Svg[0],
      svgProps = _useOverrides$Svg[1],
      _useOverrides$TrackBa = _slicedToArray(_useOverrides.TrackBackground, 2),
      TrackBackground = _useOverrides$TrackBa[0],
      trackBackgroundProps = _useOverrides$TrackBa[1],
      _useOverrides$TrackFo = _slicedToArray(_useOverrides.TrackForeground, 2),
      TrackForeground = _useOverrides$TrackFo[0],
      trackForegroundProps = _useOverrides$TrackFo[1],
      _useOverrides$Text = _slicedToArray(_useOverrides.Text, 2),
      Text = _useOverrides$Text[0],
      textProps = _useOverrides$Text[1]; // Get path length after initial render


  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pathLength = _React$useState2[0],
      setPathLength = _React$useState2[1];

  var pathRef = React.useRef();
  React.useEffect(function () {
    if (pathRef.current && pathRef.current.getTotalLength) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []); // Animation

  var animationFrameRef = React.useRef();

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      pathProgress = _React$useState4[0],
      setPathProgress = _React$useState4[1];

  React.useEffect(function () {
    if (!animate) {
      setPathProgress(progress);
      return;
    }

    if (window && animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    var animationDuration = Math.max(1000 * (progress - pathProgress), 250);
    var animationTimeStarted;

    function loop() {
      var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!animationTimeStarted) {
        animationTimeStarted = now;
      }

      var animationTimeElapsed = now - animationTimeStarted; // Move out of state - might need to reverse calculate the path progress for interruped animations

      var currentPathProgress = Math.min((progress - pathProgress) * (animationTimeElapsed / animationDuration) + pathProgress, 1);
      currentPathProgress = Math.max(currentPathProgress, 0);
      setPathProgress(currentPathProgress);

      if (animationTimeElapsed <= animationDuration) {
        animationFrameRef.current = window.requestAnimationFrame(loop);
      }
    }

    loop();
  }, [progress]); // We want *only* `progress` to trigger this effect

  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "progressbar-rounded",
    role: "progressbar",
    "aria-valuenow": progress,
    "aria-valuemin": 0,
    "aria-valuemax": 1,
    $size: size,
    $inline: inline
  }, restProps, rootProps), /*#__PURE__*/React.createElement(Svg, _extends({
    $size: size
  }, restProps, svgProps), /*#__PURE__*/React.createElement(TrackBackground, _extends({
    $size: size
  }, trackBackgroundProps)), /*#__PURE__*/React.createElement(TrackForeground // $FlowFixMe
  , _extends({
    ref: pathRef,
    $size: size,
    $visible: !!pathRef.current,
    $pathLength: pathLength,
    $pathProgress: pathProgress
  }, trackForegroundProps))), /*#__PURE__*/React.createElement(Text, _extends({
    $size: size
  }, textProps), roundTo(Math.min(progress * 100, 100)), "%"));
}

export default ProgressBarRounded;