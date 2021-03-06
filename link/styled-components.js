function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export var Link = styled('a', function (_ref) {
  var $theme = _ref.$theme,
      $isAnimateUnderline = _ref.$isAnimateUnderline,
      $isFocusVisible = _ref.$isFocusVisible;
  var colors = $theme.colors,
      typography = $theme.typography,
      animation = $theme.animation,
      direction = $theme.direction;
  var underlineLTR = "linear-gradient(transparent calc(100% - 1px), ".concat(colors.linkHover, " 1px), linear-gradient(transparent calc(100% - 1px), ").concat(colors.linkText, " 1px)");
  var underlineRTL = "linear-gradient(transparent calc(100% - 1px), ".concat(colors.linkText, " 1px), linear-gradient(transparent calc(100% - 1px), ").concat(colors.linkHover, " 1px)");
  return _objectSpread(_objectSpread({
    color: colors.linkText
  }, typography.font350), {}, {
    fontSize: 'inherit',
    lineHeight: 'inherit',
    transitionProperty: !$isAnimateUnderline ? 'backgroundSize' : '',
    transitionDuration: animation.timing500,
    transitionTimingFunction: animation.easeOutQuinticCurve,
    position: $isAnimateUnderline ? 'relative' : null,
    textDecoration: $isAnimateUnderline ? 'none' : 'underline',
    textUnderlinePosition: 'under',
    willChange: 'background-size',
    backgroundSize: direction === 'rtl' ? '100% 100%, 100% 100%' : '0% 100%, 100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: $isAnimateUnderline ? direction === 'rtl' ? underlineRTL : underlineLTR : 'none',
    ':hover': {
      color: colors.linkHover,
      backgroundSize: direction === 'rtl' ? '0% 100%, 100% 100%' : '100% 100%, 100% 100%'
    },
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat(colors.accent) : 'none',
      outlineOffset: '1px',
      textDecoration: 'none'
    },
    ':visited': {
      color: colors.linkVisited
    },
    ':active': {
      color: colors.linkActive
    }
  });
});
Link.displayName = "Link";