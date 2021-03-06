function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
var DEFAULT = 0;
var HOVERED = 1;
var ACTIVE = 2;

function getState(props) {
  if (props.$isActive) return ACTIVE;
  if (props.$isHovered) return HOVERED;
  return DEFAULT;
}

function getOuterColor(props) {
  var colors = props.$theme.colors,
      $disabled = props.$disabled,
      $checked = props.$checked,
      $isFocusVisible = props.$isFocusVisible,
      $error = props.$error,
      $isError = props.$isError;
  if ($disabled) return colors.tickFillDisabled;

  if (!$checked) {
    if ($isFocusVisible) return colors.borderSelected;
    if ($error || $isError) return colors.tickBorderError;
    return colors.tickBorder;
  } else {
    if ($error || $isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillErrorSelected;

        case HOVERED:
          return colors.tickFillErrorSelectedHover;

        case ACTIVE:
          return colors.tickFillErrorSelectedHoverActive;
      }
    } else {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillSelected;

        case HOVERED:
          return colors.tickFillSelectedHover;

        case ACTIVE:
          return colors.tickFillSelectedHoverActive;
      }
    }
  }

  return null;
}

function getInnerColor(props) {
  var colors = props.$theme.colors;

  if (props.$disabled) {
    return colors.tickMarkFillDisabled;
  }

  if (!props.$checked) {
    if (props.$error || props.$isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillError;

        case HOVERED:
          return colors.tickFillErrorHover;

        case ACTIVE:
          return colors.tickFillErrorHoverActive;
      }
    } else {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFill;

        case HOVERED:
          return colors.tickFillHover;

        case ACTIVE:
          return colors.tickFillActive;
      }
    }
  } else {
    return colors.tickMarkFill;
  }
}

function getLabelPadding(props) {
  var _props$$labelPlacemen = props.$labelPlacement,
      $labelPlacement = _props$$labelPlacemen === void 0 ? '' : _props$$labelPlacemen,
      $theme = props.$theme;
  var paddingDirection;

  switch ($labelPlacement) {
    case 'top':
      paddingDirection = 'Bottom';
      break;

    case 'bottom':
      paddingDirection = 'Top';
      break;

    case 'left':
      paddingDirection = $theme.direction === 'rtl' ? 'Left' : 'Right';
      break;

    default:
    case 'right':
      paddingDirection = $theme.direction === 'rtl' ? 'Right' : 'Left';
      break;
  }

  var sizing = $theme.sizing;
  var scale300 = sizing.scale300;
  return _defineProperty({}, "padding".concat(paddingDirection), scale300);
}

function getLabelColor(props) {
  var $disabled = props.$disabled,
      $theme = props.$theme;
  var colors = $theme.colors;
  return $disabled ? colors.contentSecondary : colors.contentPrimary;
}

export var RadioGroupRoot = styled('div', // $FlowFixMe - suppressing due to webkit property
function (props) {
  var $disabled = props.$disabled,
      $align = props.$align;
  return {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: $align === 'horizontal' ? 'row' : 'column',
    alignItems: $align === 'horizontal' ? 'center' : 'flex-start',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    '-webkit-tap-highlight-color': 'transparent'
  };
});
RadioGroupRoot.displayName = "RadioGroupRoot";
export var Root = styled('label', function (props) {
  var _ref2;

  var $disabled = props.$disabled,
      $hasDescription = props.$hasDescription,
      $labelPlacement = props.$labelPlacement,
      $theme = props.$theme,
      $align = props.$align;
  var sizing = $theme.sizing;
  var isHorizontal = $align === 'horizontal';
  var marginAfter = $theme.direction === 'rtl' ? 'Left' : 'Right';
  return _ref2 = {
    flexDirection: $labelPlacement === 'top' || $labelPlacement === 'bottom' ? 'column' : 'row',
    display: 'flex',
    alignItems: 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    marginTop: sizing.scale200
  }, _defineProperty(_ref2, "margin".concat(marginAfter), isHorizontal ? sizing.scale200 : null), _defineProperty(_ref2, "marginBottom", $hasDescription && !isHorizontal ? null : sizing.scale200), _ref2;
});
Root.displayName = "Root";
export var RadioMarkInner = styled('div', function (props) {
  var _props$$theme = props.$theme,
      animation = _props$$theme.animation,
      sizing = _props$$theme.sizing;
  return {
    backgroundColor: getInnerColor(props),
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    height: props.$checked ? sizing.scale200 : sizing.scale550,
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    width: props.$checked ? sizing.scale200 : sizing.scale550
  };
});
RadioMarkInner.displayName = "RadioMarkInner";
export var RadioMarkOuter = styled('div', function (props) {
  var _props$$theme2 = props.$theme,
      animation = _props$$theme2.animation,
      sizing = _props$$theme2.sizing;
  return {
    alignItems: 'center',
    backgroundColor: getOuterColor(props),
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    boxShadow: props.$isFocusVisible && props.$checked ? "0 0 0 3px ".concat(props.$theme.colors.accent) : 'none',
    display: 'flex',
    height: sizing.scale700,
    justifyContent: 'center',
    marginTop: sizing.scale0,
    marginRight: sizing.scale0,
    marginBottom: sizing.scale0,
    marginLeft: sizing.scale0,
    outline: 'none',
    verticalAlign: 'middle',
    width: sizing.scale700,
    flexShrink: 0,
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve
  };
});
RadioMarkOuter.displayName = "RadioMarkOuter";
export var Label = styled('div', function (props) {
  var typography = props.$theme.typography;
  return _objectSpread(_objectSpread({
    verticalAlign: 'middle'
  }, getLabelPadding(props)), {}, {
    color: getLabelColor(props)
  }, typography.LabelMedium);
}); // tricky style for focus event cause display: none doesn't work

Label.displayName = "Label";
export var Input = styled('input', {
  width: 0,
  height: 0,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  clip: 'rect(0 0 0 0)',
  position: 'absolute'
});
Input.displayName = "Input";
export var Description = styled('div', function (props) {
  var _objectSpread2;

  var $theme = props.$theme,
      $align = props.$align;
  var isHorizontal = $align === 'horizontal';
  var marginBefore = $theme.direction === 'rtl' ? 'Right' : 'Left';
  var marginAfter = $theme.direction === 'rtl' ? 'Left' : 'Right';
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphSmall), {}, (_objectSpread2 = {
    color: $theme.colors.contentSecondary,
    cursor: 'auto'
  }, _defineProperty(_objectSpread2, "margin".concat(marginBefore), $align === 'horizontal' ? null : $theme.sizing.scale900), _defineProperty(_objectSpread2, "margin".concat(marginAfter), isHorizontal ? $theme.sizing.scale200 : null), _defineProperty(_objectSpread2, "maxWidth", '240px'), _objectSpread2));
});
Description.displayName = "Description";