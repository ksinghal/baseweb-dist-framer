var _neutralColorStates, _primaryColorStates, _accentColorStates, _positiveColorStates, _warningColorStates, _negativeColorStates, _orangeColorStates, _purpleColorStates, _brownColorStates, _customColorStates, _colorMap;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import tint from 'polished/lib/color/tint.js';
import shade from 'polished/lib/color/shade.js';
import { styled } from '../styles/index.js';
import { KIND, VARIANT, SIZE } from './constants.js';
import { colors as colorTokens } from '../tokens/index.js';
export function customOnRamp(color, unit) {
  switch (unit) {
    case '0':
      return 'white';

    case '50':
      return tint(0.8, color);

    case '100':
      return tint(0.6, color);

    case '200':
      return tint(0.4, color);

    case '300':
      return tint(0.2, color);

    case '400':
      return color;

    case '500':
      return shade(0.2, color);

    case '600':
      return shade(0.4, color);

    case '700':
      return shade(0.6, color);

    case '800':
      return shade(0.8, color);

    case '1000':
      return 'black';

    default:
      return color;
  }
}
var COLOR_STATE = {
  disabled: 'disabled',
  solid: 'solid',
  outline: 'outline'
}; // Probably best to bake this into the theme once we hit our next major.

var pick = function pick(theme, light, dark) {
  return theme.name && theme.name.includes('dark') ? dark : light;
};

var neutralColorStates = (_neutralColorStates = {}, _defineProperty(_neutralColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagNeutralFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedDisabled
  };
}), _defineProperty(_neutralColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagNeutralSolidFont,
    backgroundColor: theme.colors.tagNeutralSolidBackground,
    borderColor: null
  };
}), _defineProperty(_neutralColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagNeutralOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedBackground
  };
}), _neutralColorStates);
var primaryColorStates = (_primaryColorStates = {}, _defineProperty(_primaryColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagPrimaryFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedDisabled
  };
}), _defineProperty(_primaryColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagPrimarySolidFont,
    backgroundColor: theme.colors.tagPrimarySolidBackground,
    borderColor: null
  };
}), _defineProperty(_primaryColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagPrimaryOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedBackground
  };
}), _primaryColorStates);
var accentColorStates = (_accentColorStates = {}, _defineProperty(_accentColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagAccentFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedDisabled
  };
}), _defineProperty(_accentColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagAccentSolidFont,
    backgroundColor: theme.colors.tagAccentSolidBackground,
    borderColor: null
  };
}), _defineProperty(_accentColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagAccentOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedBackground
  };
}), _accentColorStates);
var positiveColorStates = (_positiveColorStates = {}, _defineProperty(_positiveColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagPositiveFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedDisabled
  };
}), _defineProperty(_positiveColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagPositiveSolidFont,
    backgroundColor: theme.colors.tagPositiveSolidBackground,
    borderColor: null
  };
}), _defineProperty(_positiveColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagPositiveOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedBackground
  };
}), _positiveColorStates);
var warningColorStates = (_warningColorStates = {}, _defineProperty(_warningColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagWarningFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedDisabled
  };
}), _defineProperty(_warningColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagWarningSolidFont,
    backgroundColor: theme.colors.tagWarningSolidBackground,
    borderColor: null
  };
}), _defineProperty(_warningColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagWarningOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedBackground
  };
}), _warningColorStates);
var negativeColorStates = (_negativeColorStates = {}, _defineProperty(_negativeColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: theme.colors.tagNegativeFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedDisabled
  };
}), _defineProperty(_negativeColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: theme.colors.tagNegativeSolidFont,
    backgroundColor: theme.colors.tagNegativeSolidBackground,
    borderColor: null
  };
}), _defineProperty(_negativeColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: theme.colors.tagNegativeOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedBackground
  };
}), _negativeColorStates);
var orangeColorStates = (_orangeColorStates = {}, _defineProperty(_orangeColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, colorTokens.orange200, colorTokens.orange600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.orange200, colorTokens.orange700)
  };
}), _defineProperty(_orangeColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.orange400, colorTokens.orange500),
    borderColor: null
  };
}), _defineProperty(_orangeColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, colorTokens.orange400, colorTokens.orange300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.orange200, colorTokens.orange500)
  };
}), _orangeColorStates);
var purpleColorStates = (_purpleColorStates = {}, _defineProperty(_purpleColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, colorTokens.purple200, colorTokens.purple600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.purple200, colorTokens.purple700)
  };
}), _defineProperty(_purpleColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.purple400, colorTokens.purple500),
    borderColor: null
  };
}), _defineProperty(_purpleColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, colorTokens.purple400, colorTokens.purple300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.purple200, colorTokens.purple500)
  };
}), _purpleColorStates);
var brownColorStates = (_brownColorStates = {}, _defineProperty(_brownColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: pick(theme, colorTokens.brown200, colorTokens.brown600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.brown200, colorTokens.brown700)
  };
}), _defineProperty(_brownColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.brown400, colorTokens.brown500),
    borderColor: null
  };
}), _defineProperty(_brownColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: pick(theme, colorTokens.brown400, colorTokens.brown300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.brown200, colorTokens.brown500)
  };
}), _brownColorStates);
var customColorStates = (_customColorStates = {}, _defineProperty(_customColorStates, COLOR_STATE.disabled, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagFontDisabledRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedDisabledRampUnit)
  };
}), _defineProperty(_customColorStates, COLOR_STATE.solid, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagSolidFontRampUnit),
    backgroundColor: customOnRamp(color, theme.colors.tagSolidRampUnit),
    borderColor: null
  };
}), _defineProperty(_customColorStates, COLOR_STATE.outline, function (theme, color) {
  return {
    color: customOnRamp(color, theme.colors.tagOutlinedFontRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedRampUnit)
  };
}), _customColorStates);
var colorMap = (_colorMap = {}, _defineProperty(_colorMap, KIND.neutral, neutralColorStates), _defineProperty(_colorMap, KIND.primary, primaryColorStates), _defineProperty(_colorMap, KIND.accent, accentColorStates), _defineProperty(_colorMap, KIND.positive, positiveColorStates), _defineProperty(_colorMap, KIND.warning, warningColorStates), _defineProperty(_colorMap, KIND.negative, negativeColorStates), _defineProperty(_colorMap, KIND.black, primaryColorStates), _defineProperty(_colorMap, KIND.blue, accentColorStates), _defineProperty(_colorMap, KIND.green, positiveColorStates), _defineProperty(_colorMap, KIND.red, negativeColorStates), _defineProperty(_colorMap, KIND.yellow, warningColorStates), _defineProperty(_colorMap, KIND.orange, orangeColorStates), _defineProperty(_colorMap, KIND.purple, purpleColorStates), _defineProperty(_colorMap, KIND.brown, brownColorStates), _defineProperty(_colorMap, KIND.custom, customColorStates), _colorMap);

var getColorStateFromProps = function getColorStateFromProps(props) {
  if (props.$disabled) return COLOR_STATE.disabled;
  if (props.$variant === VARIANT.solid) return COLOR_STATE.solid;
  return COLOR_STATE.outline;
}; // $FlowFixMe https://github.com/facebook/flow/issues/7745


export var Action = styled('span', function (props) {
  var _SIZE$small$SIZE$medi, _ref;

  var $theme = props.$theme,
      $disabled = props.$disabled,
      _props$$size = props.$size,
      $size = _props$$size === void 0 ? SIZE.small : _props$$size;
  var bottomRadiusDir = $theme.direction === 'rtl' ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
  var topRadiusDir = $theme.direction === 'rtl' ? 'borderTopLeftRadius' : 'borderTopRightRadius';
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _ref = {
    alignItems: 'center'
  }, _defineProperty(_ref, bottomRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, topRadiusDir, $theme.borders.useRoundedCorners ? $theme.borders.radius400 : 0), _defineProperty(_ref, "cursor", $disabled ? 'not-allowed' : 'pointer'), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, marginDir, (_SIZE$small$SIZE$medi = {}, _defineProperty(_SIZE$small$SIZE$medi, SIZE.small, '8px'), _defineProperty(_SIZE$small$SIZE$medi, SIZE.medium, '12px'), _defineProperty(_SIZE$small$SIZE$medi, SIZE.large, '16px'), _SIZE$small$SIZE$medi)[$size]), _defineProperty(_ref, "outline", 'none'), _defineProperty(_ref, "transitionProperty", 'all'), _defineProperty(_ref, "transitionDuration", 'background-color'), _defineProperty(_ref, "transitionTimingFunction", $theme.animation.easeOutCurve), _ref;
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Action.displayName = "Action";
export var StartEnhancerContainer = styled('div', function (_ref2) {
  var $theme = _ref2.$theme,
      _ref2$$size = _ref2.$size,
      $size = _ref2$$size === void 0 ? SIZE.small : _ref2$$size;
  var paddingMagnitude = $theme.sizing.scale300;

  if ($size === SIZE.medium) {
    paddingMagnitude = $theme.sizing.scale400;
  } else if ($size === SIZE.large) {
    paddingMagnitude = $theme.sizing.scale600;
  }

  var paddingDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return _defineProperty({
    alignItems: 'center',
    display: 'flex'
  }, paddingDir, paddingMagnitude);
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

StartEnhancerContainer.displayName = "StartEnhancerContainer";
export var Text = styled('span', function (props) {
  var $theme = props.$theme;
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: props.$theme.sizing.scale3200,
    order: $theme.direction === 'rtl' ? 1 : 0
  };
}); // $FlowFixMe https://github.com/facebook/flow/issues/7745

Text.displayName = "Text";
export var Root = styled('span', function (props) {
  var _SIZE$small$SIZE$medi2, _SIZE$small$SIZE$medi3, _SIZE$small$SIZE$medi4;

  var $theme = props.$theme,
      _props$$kind = props.$kind,
      $kind = _props$$kind === void 0 ? KIND.primary : _props$$kind,
      $clickable = props.$clickable,
      $variant = props.$variant,
      $disabled = props.$disabled,
      $closeable = props.$closeable,
      $isFocusVisible = props.$isFocusVisible,
      $color = props.$color,
      _props$$size2 = props.$size,
      $size = _props$$size2 === void 0 ? SIZE.small : _props$$size2;
  var borderRadius = $theme.borders.tagBorderRadius;
  var paddingMagnitude = (_SIZE$small$SIZE$medi2 = {}, _defineProperty(_SIZE$small$SIZE$medi2, SIZE.small, $theme.sizing.scale300), _defineProperty(_SIZE$small$SIZE$medi2, SIZE.medium, $theme.sizing.scale500), _defineProperty(_SIZE$small$SIZE$medi2, SIZE.large, $theme.sizing.scale600), _SIZE$small$SIZE$medi2)[$size];
  var borderWidth = !$disabled && $variant === VARIANT.solid ? 0 : '2px';

  var _colorMap$$kind$getCo = colorMap[$kind][getColorStateFromProps(props)]($theme, $color),
      color = _colorMap$$kind$getCo.color,
      backgroundColor = _colorMap$$kind$getCo.backgroundColor,
      borderColor = _colorMap$$kind$getCo.borderColor;

  return _objectSpread(_objectSpread({}, (_SIZE$small$SIZE$medi3 = {}, _defineProperty(_SIZE$small$SIZE$medi3, SIZE.small, $theme.typography.LabelSmall), _defineProperty(_SIZE$small$SIZE$medi3, SIZE.medium, $theme.typography.LabelMedium), _defineProperty(_SIZE$small$SIZE$medi3, SIZE.large, $theme.typography.LabelLarge), _SIZE$small$SIZE$medi3)[$size]), {}, {
    alignItems: 'center',
    color: color,
    backgroundColor: backgroundColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    boxSizing: 'border-box',
    cursor: $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default',
    display: 'inline-flex',
    height: (_SIZE$small$SIZE$medi4 = {}, _defineProperty(_SIZE$small$SIZE$medi4, SIZE.small, '24px'), _defineProperty(_SIZE$small$SIZE$medi4, SIZE.medium, '32px'), _defineProperty(_SIZE$small$SIZE$medi4, SIZE.large, '40px'), _SIZE$small$SIZE$medi4)[$size],
    justifyContent: 'space-between',
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    paddingTop: $theme.sizing.scale0,
    paddingBottom: $theme.sizing.scale0,
    paddingLeft: paddingMagnitude,
    paddingRight: paddingMagnitude,
    outline: 'none',
    ':hover': $disabled || !$clickable ? {} : {
      boxShadow: "inset 0px 0px 100px ".concat(pick($theme, "rgba(0, 0, 0, 0.08)", "rgba(255, 255, 255, 0.2)"))
    },
    ':focus': $disabled || !$clickable && !$closeable ? {} : {
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat($kind === KIND.accent ? $theme.colors.primaryA : $theme.colors.accent) : 'none'
    }
  });
});
Root.displayName = "Root";