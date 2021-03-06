function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ADJOINED, SIZE } from './constants.js';
import DeleteAlt from '../icon/delete-alt.js';
export var StyledMaskToggleButton = styled('button', function (_ref) {
  var _SIZE$mini$SIZE$compa;

  var $theme = _ref.$theme,
      $size = _ref.$size,
      $isFocusVisible = _ref.$isFocusVisible;
  var pad = (_SIZE$mini$SIZE$compa = {}, _defineProperty(_SIZE$mini$SIZE$compa, SIZE.mini, $theme.sizing.scale400), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.compact, $theme.sizing.scale400), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.default, $theme.sizing.scale300), _defineProperty(_SIZE$mini$SIZE$compa, SIZE.large, $theme.sizing.scale200), _SIZE$mini$SIZE$compa)[$size];
  return {
    display: 'flex',
    alignItems: 'center',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    background: 'none',
    paddingLeft: pad,
    paddingRight: pad,
    outline: $isFocusVisible ? "solid 3px ".concat($theme.colors.accent) : 'none',
    color: $theme.colors.contentPrimary
  };
});
StyledMaskToggleButton.displayName = "StyledMaskToggleButton";
export var StyledClearIconContainer = styled('div', function (_ref2) {
  var _SIZE$mini$SIZE$compa2;

  var _ref2$$alignTop = _ref2.$alignTop,
      $alignTop = _ref2$$alignTop === void 0 ? false : _ref2$$alignTop,
      $size = _ref2.$size,
      $theme = _ref2.$theme;
  var pad = (_SIZE$mini$SIZE$compa2 = {}, _defineProperty(_SIZE$mini$SIZE$compa2, SIZE.mini, $theme.sizing.scale200), _defineProperty(_SIZE$mini$SIZE$compa2, SIZE.compact, $theme.sizing.scale200), _defineProperty(_SIZE$mini$SIZE$compa2, SIZE.default, $theme.sizing.scale100), _defineProperty(_SIZE$mini$SIZE$compa2, SIZE.large, $theme.sizing.scale0), _SIZE$mini$SIZE$compa2)[$size];
  return {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center',
    paddingLeft: pad,
    paddingRight: pad,
    paddingTop: $alignTop ? $theme.sizing.scale500 : '0px',
    color: $theme.colors.contentPrimary
  };
});
StyledClearIconContainer.displayName = "StyledClearIconContainer";
export var StyledClearIcon = styled(DeleteAlt, function (_ref3) {
  var $theme = _ref3.$theme,
      $isFocusVisible = _ref3.$isFocusVisible;
  return {
    cursor: 'pointer',
    outline: $isFocusVisible ? "solid 3px ".concat($theme.colors.accent) : 'none'
  };
});
StyledClearIcon.displayName = "StyledClearIcon";

function getInputPadding(size, sizing) {
  var _SIZE$mini$SIZE$compa3;

  return (_SIZE$mini$SIZE$compa3 = {}, _defineProperty(_SIZE$mini$SIZE$compa3, SIZE.mini, {
    paddingTop: sizing.scale100,
    paddingBottom: sizing.scale100,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _defineProperty(_SIZE$mini$SIZE$compa3, SIZE.compact, {
    paddingTop: sizing.scale200,
    paddingBottom: sizing.scale200,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _defineProperty(_SIZE$mini$SIZE$compa3, SIZE.default, {
    paddingTop: sizing.scale400,
    paddingBottom: sizing.scale400,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _defineProperty(_SIZE$mini$SIZE$compa3, SIZE.large, {
    paddingTop: sizing.scale550,
    paddingBottom: sizing.scale550,
    paddingLeft: sizing.scale550,
    paddingRight: sizing.scale550
  }), _SIZE$mini$SIZE$compa3)[size];
}

function getRootPadding(adjoined, size, sizing, direction, hasIconTrailing) {
  var ifLeftPad = adjoined === ADJOINED.both || adjoined === ADJOINED.left && direction !== 'rtl' || adjoined === ADJOINED.right && direction === 'rtl' || hasIconTrailing && direction === 'rtl';
  var ifRightPad = adjoined === ADJOINED.both || adjoined === ADJOINED.right && direction !== 'rtl' || adjoined === ADJOINED.left && direction === 'rtl' || hasIconTrailing && direction !== 'rtl';
  return {
    paddingLeft: ifLeftPad ? sizing.scale550 : '0px',
    paddingRight: ifRightPad ? sizing.scale550 : '0px'
  };
}

function getFont(size, typography) {
  var _SIZE$mini$SIZE$compa4;

  return (_SIZE$mini$SIZE$compa4 = {}, _defineProperty(_SIZE$mini$SIZE$compa4, SIZE.mini, typography.font100), _defineProperty(_SIZE$mini$SIZE$compa4, SIZE.compact, typography.font200), _defineProperty(_SIZE$mini$SIZE$compa4, SIZE.default, typography.font300), _defineProperty(_SIZE$mini$SIZE$compa4, SIZE.large, typography.font400), _SIZE$mini$SIZE$compa4)[size];
}

function getRootColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      borderLeftColor: colors.borderFocus,
      borderRightColor: colors.borderFocus,
      borderTopColor: colors.borderFocus,
      borderBottomColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill
  };
}

function getRootBorderRadius(radius) {
  return {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  };
}

export var getRootStyles = function getRootStyles(props) {
  var $isFocused = props.$isFocused,
      $adjoined = props.$adjoined,
      $error = props.$error,
      $disabled = props.$disabled,
      $positive = props.$positive,
      $size = props.$size,
      $theme = props.$theme,
      _props$$theme = props.$theme,
      borders = _props$$theme.borders,
      colors = _props$$theme.colors,
      sizing = _props$$theme.sizing,
      typography = _props$$theme.typography,
      animation = _props$$theme.animation,
      $hasIconTrailing = props.$hasIconTrailing;
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve
  }, getRootBorderRadius(borders.inputBorderRadius)), getFont($size, typography)), getRootColors($disabled, $isFocused, $error, $positive, colors)), getRootPadding($adjoined, $size, sizing, $theme.direction, $hasIconTrailing));
};
export var Root = styled('div', getRootStyles); // InputEnhancer

Root.displayName = "Root";

function getInputEnhancerPadding($size, sizing) {
  var _SIZE$mini$SIZE$compa5;

  return (_SIZE$mini$SIZE$compa5 = {}, _defineProperty(_SIZE$mini$SIZE$compa5, SIZE.mini, {
    paddingRight: sizing.scale400,
    paddingLeft: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa5, SIZE.compact, {
    paddingRight: sizing.scale400,
    paddingLeft: sizing.scale400
  }), _defineProperty(_SIZE$mini$SIZE$compa5, SIZE.default, {
    paddingRight: sizing.scale300,
    paddingLeft: sizing.scale300
  }), _defineProperty(_SIZE$mini$SIZE$compa5, SIZE.large, {
    paddingRight: sizing.scale200,
    paddingLeft: sizing.scale200
  }), _SIZE$mini$SIZE$compa5)[$size];
}

function getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill
  };
}

export var InputEnhancer = styled('div', function (props) {
  var $size = props.$size,
      $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $positive = props.$positive,
      _props$$theme2 = props.$theme,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing,
      typography = _props$$theme2.typography,
      animation = _props$$theme2.animation;
  return _objectSpread(_objectSpread(_objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve
  }, getFont($size, typography)), getInputEnhancerPadding($size, sizing)), getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors));
}); // InputContainer

InputEnhancer.displayName = "InputEnhancer";

function getInputContainerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill
  };
}

export var getInputContainerStyles = function getInputContainerStyles(props) {
  var $isFocused = props.$isFocused,
      $error = props.$error,
      $disabled = props.$disabled,
      $positive = props.$positive,
      $size = props.$size,
      _props$$theme3 = props.$theme,
      colors = _props$$theme3.colors,
      typography = _props$$theme3.typography,
      animation = _props$$theme3.animation;
  return _objectSpread(_objectSpread({
    display: 'flex',
    width: '100%',
    transitionProperty: 'background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve
  }, getFont($size, typography)), getInputContainerColors($disabled, $isFocused, $error, $positive, colors));
};
export var InputContainer = styled('div', getInputContainerStyles);
InputContainer.displayName = "InputContainer";

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      '-webkit-text-fill-color': colors.inputTextDisabled,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputPlaceholderDisabled
      }
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.inputPlaceholder
    }
  };
}

export var getInputStyles = function getInputStyles(props) {
  var $disabled = props.$disabled,
      $isFocused = props.$isFocused,
      $error = props.$error,
      $size = props.$size,
      _props$$theme4 = props.$theme,
      colors = _props$$theme4.colors,
      sizing = _props$$theme4.sizing,
      typography = _props$$theme4.typography;
  return _objectSpread(_objectSpread(_objectSpread({
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    outline: 'none',
    width: '100%',
    // See https://stackoverflow.com/a/33811151
    minWidth: 0,
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0'
  }, getFont($size, typography)), getInputPadding($size, sizing)), getInputColors($disabled, $isFocused, $error, colors));
};
export var Input = styled('input', getInputStyles);
Input.displayName = "Input";