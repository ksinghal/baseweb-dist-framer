var _PROGRESS_BAR_ROUNDED;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, hexToRgb, withWrapper } from '../styles/index.js';
import { SIZE } from './constants.js';
import React from 'react';

function getBarHeight(size) {
  var _SIZE$small$SIZE$medi;

  return (_SIZE$small$SIZE$medi = {}, _defineProperty(_SIZE$small$SIZE$medi, SIZE.small, '2px'), _defineProperty(_SIZE$small$SIZE$medi, SIZE.medium, '4px'), _defineProperty(_SIZE$small$SIZE$medi, SIZE.large, '8px'), _SIZE$small$SIZE$medi)[size];
}

export var StyledRoot = styled('div', function (props) {
  return {
    width: '100%'
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledBarContainer = styled('div', function (props) {
  var $theme = props.$theme;
  var sizing = $theme.sizing;
  return {
    display: 'flex',
    marginLeft: sizing.scale500,
    marginRight: sizing.scale500,
    marginTop: sizing.scale500,
    marginBottom: sizing.scale500
  };
});
StyledBarContainer.displayName = "StyledBarContainer";
export var StyledBar = styled('div', function (props) {
  var $theme = props.$theme,
      $size = props.$size,
      $steps = props.$steps;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return _objectSpread({
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: hexToRgb(colors.progressbarTrackFill, '0.16'),
    height: getBarHeight($size),
    flex: 1,
    overflow: 'hidden'
  }, $steps < 2 ? {} : {
    marginLeft: sizing.scale300,
    ':first-child': {
      marginLeft: '0'
    }
  });
});
StyledBar.displayName = "StyledBar";
export var StyledBarProgress = styled('div', function (props) {
  var $theme = props.$theme,
      $value = props.$value,
      $successValue = props.$successValue,
      $steps = props.$steps,
      $index = props.$index;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var width = "".concat(100 - $value / $successValue * 100, "%");
  var stepStates = {
    default: 'default',
    awaits: 'awaits',
    inProgress: 'inProgress',
    completed: 'completed'
  };
  var stepState = stepStates.default;

  if ($steps > 1) {
    var stepValue = $successValue / $steps;
    var currentValue = $value / $successValue * 100;
    var completedSteps = Math.floor(currentValue / stepValue);

    if ($index < completedSteps) {
      stepState = stepStates.completed;
    } else if ($index === completedSteps) {
      stepState = stepStates.inProgress;
    } else {
      stepState = stepStates.awaits;
    }
  }

  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  var animationStyles = {
    transform: "translateX(-".concat(width, ")")
  };
  var stepAnimationStyles = stepState === stepStates.inProgress ? {
    animationDuration: '2.1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: $theme.animation.linearCurve,
    animationName: {
      '0%': {
        transform: 'translateX(-102%)',
        opacity: 1
      },
      '50%': {
        transform: 'translateX(0%)',
        opacity: 1
      },
      '100%': {
        transform: 'translateX(0%)',
        opacity: 0
      }
    }
  } : stepState === stepStates.completed ? {
    transform: 'translateX(0%)'
  } : {
    transform: 'translateX(-102%)'
  };
  return _objectSpread({
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: colors.accent,
    height: '100%',
    width: '100%',
    transform: 'translateX(-102%)',
    transition: 'transform 0.5s'
  }, $steps > 1 ? stepAnimationStyles : animationStyles);
});
StyledBarProgress.displayName = "StyledBarProgress";
export var StyledInfiniteBar = styled('div', function (props) {
  var $theme = props.$theme,
      _props$$isLeft = props.$isLeft,
      $isLeft = _props$$isLeft === void 0 ? false : _props$$isLeft,
      _props$$size = props.$size,
      $size = _props$$size === void 0 ? SIZE.medium : _props$$size;
  var colors = $theme.colors,
      sizing = $theme.sizing,
      borders = $theme.borders;
  var borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  var height = getBarHeight($size);
  var animationStyles = {
    display: 'inline-block',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    transitionProperty: 'background-position',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: $theme.animation.linearCurve,
    backgroundSize: '300% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: $isLeft ? '-50%' : '150%',
    backgroundImage: "linear-gradient(".concat($isLeft ? '90' : '270', "deg, transparent 0%, ").concat(colors.accent, " 25%, ").concat(colors.accent, " 75%, transparent 100%)"),
    animationName: $isLeft ? {
      '0%': {
        backgroundPositionX: '-50%'
      },
      '33%': {
        backgroundPositionX: '50%'
      },
      '66%': {
        backgroundPositionX: '50%'
      },
      '100%': {
        backgroundPositionX: '150%'
      }
    } : {
      '0%': {
        backgroundPositionX: '150%'
      },
      '33%': {
        backgroundPositionX: '50%'
      },
      '66%': {
        backgroundPositionX: '50%'
      },
      '100%': {
        backgroundPositionX: '-50%'
      }
    }
  };
  return _objectSpread(_objectSpread({}, $isLeft ? {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  } : {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius
  }), {}, {
    height: height
  }, animationStyles);
});
StyledInfiniteBar.displayName = "StyledInfiniteBar";
export var StyledLabel = styled('div', function (props) {
  return _objectSpread(_objectSpread({
    textAlign: 'center'
  }, props.$theme.typography.font150), {}, {
    color: props.$theme.colors.contentTertiary
  });
});
StyledLabel.displayName = "StyledLabel";
var PROGRESS_BAR_ROUNDED_SIZES = (_PROGRESS_BAR_ROUNDED = {}, _defineProperty(_PROGRESS_BAR_ROUNDED, SIZE.large, {
  d: 'M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195',
  width: 95,
  height: 48,
  strokeWidth: 8,
  typography: 'LabelLarge'
}), _defineProperty(_PROGRESS_BAR_ROUNDED, SIZE.medium, {
  d: 'M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195',
  width: 78,
  height: 36,
  strokeWidth: 4,
  typography: 'LabelMedium'
}), _defineProperty(_PROGRESS_BAR_ROUNDED, SIZE.small, {
  d: 'M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195',
  width: 64,
  height: 26,
  strokeWidth: 2,
  typography: 'LabelSmall'
}), _PROGRESS_BAR_ROUNDED);
export var StyledProgressBarRoundedRoot = styled('div', function (_ref) {
  var $size = _ref.$size,
      $inline = _ref.$inline;
  return {
    width: PROGRESS_BAR_ROUNDED_SIZES[$size].width + 'px',
    height: PROGRESS_BAR_ROUNDED_SIZES[$size].height + 'px',
    position: 'relative',
    display: $inline ? 'inline-flex' : 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
});
StyledProgressBarRoundedRoot.displayName = "StyledProgressBarRoundedRoot";

var _StyledProgressBarRoundedSvg = styled('svg', function (_ref2) {
  var $size = _ref2.$size;
  return {
    width: PROGRESS_BAR_ROUNDED_SIZES[$size].width + 'px',
    height: PROGRESS_BAR_ROUNDED_SIZES[$size].height + 'px',
    position: 'absolute',
    fill: 'none'
  };
});

_StyledProgressBarRoundedSvg.displayName = "_StyledProgressBarRoundedSvg";
export var StyledProgressBarRoundedSvg = withWrapper(_StyledProgressBarRoundedSvg, function (Styled) {
  return function StyledProgressBarRoundedSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      viewBox: "0 0 ".concat(PROGRESS_BAR_ROUNDED_SIZES[props.$size].width, " ").concat(PROGRESS_BAR_ROUNDED_SIZES[props.$size].height),
      xmlns: "http://www.w3.org/2000/svg"
    }, props));
  };
});

var _StyledProgressBarRoundedTrackBackground = styled('path', function (_ref3) {
  var $theme = _ref3.$theme,
      $size = _ref3.$size;
  return {
    stroke: $theme.colors.backgroundTertiary,
    strokeWidth: PROGRESS_BAR_ROUNDED_SIZES[$size].strokeWidth + 'px'
  };
});

_StyledProgressBarRoundedTrackBackground.displayName = "_StyledProgressBarRoundedTrackBackground";
export var StyledProgressBarRoundedTrackBackground = withWrapper(_StyledProgressBarRoundedTrackBackground, function (Styled) {
  return function StyledProgressBarRoundedSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      d: PROGRESS_BAR_ROUNDED_SIZES[props.$size].d
    }, props));
  };
});

var _StyledProgressBarRoundedTrackForeground = styled('path', function (_ref4) {
  var $theme = _ref4.$theme,
      $size = _ref4.$size,
      $visible = _ref4.$visible,
      $pathLength = _ref4.$pathLength,
      $pathProgress = _ref4.$pathProgress;
  return {
    visibility: $visible ? 'visible' : 'hidden',
    stroke: $theme.colors.borderAccent,
    strokeWidth: PROGRESS_BAR_ROUNDED_SIZES[$size].strokeWidth + 'px',
    strokeDasharray: $pathLength,
    strokeDashoffset: $pathLength * (1 - $pathProgress) + ''
  };
});

_StyledProgressBarRoundedTrackForeground.displayName = "_StyledProgressBarRoundedTrackForeground";
export var StyledProgressBarRoundedTrackForeground = withWrapper(_StyledProgressBarRoundedTrackForeground, function (Styled) {
  return function StyledProgressBarRoundedSvg(props) {
    return /*#__PURE__*/React.createElement(Styled, _extends({
      d: PROGRESS_BAR_ROUNDED_SIZES[props.$size].d
    }, props));
  };
});
export var StyledProgressBarRoundedText = styled('div', function (_ref5) {
  var $theme = _ref5.$theme,
      $size = _ref5.$size;
  return _objectSpread({
    color: $theme.colors.contentPrimary
  }, $theme.typography[PROGRESS_BAR_ROUNDED_SIZES[$size].typography]);
});
StyledProgressBarRoundedText.displayName = "StyledProgressBarRoundedText";