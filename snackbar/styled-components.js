function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { StyledSpinnerNext } from '../spinner/index.js';
import { styled, withStyle } from '../styles/index.js';
import { PLACEMENT } from './constants.js';
export var StyledRoot = styled('div', function (_ref) {
  var $theme = _ref.$theme;
  return {
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.borders.radius400,
    borderTopRightRadius: $theme.borders.radius400,
    borderBottomRightRadius: $theme.borders.radius400,
    borderBottomLeftRadius: $theme.borders.radius400,
    boxShadow: '0px 16px 48px rgba(0, 0, 0, 0.22)',
    color: $theme.colors.contentInversePrimary,
    display: 'inline-block',
    maxWidth: '540px',
    minWidth: '320px'
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledContent = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',
  width: '100%'
});
StyledContent.displayName = "StyledContent";
export var StyledStartEnhancerContainer = styled('span', function (_ref2) {
  var $theme = _ref2.$theme;
  var paddingDir = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  return _defineProperty({
    alignItems: 'center',
    display: 'flex'
  }, paddingDir, $theme.sizing.scale600);
});
StyledStartEnhancerContainer.displayName = "StyledStartEnhancerContainer";
export var StyledSpinner = withStyle(StyledSpinnerNext, function (_ref4) {
  var $height = _ref4.$height,
      $width = _ref4.$width;
  return {
    boxSizing: 'border-box',
    height: "".concat($height, "px"),
    width: "".concat($width, "px")
  };
});
StyledSpinner.displayName = "StyledSpinner";
export var StyledMessage = styled('p', // $FlowFixMe - suppressing due to webkit properties
function (_ref5) {
  var _objectSpread2;

  var $theme = _ref5.$theme,
      $hasSuffix = _ref5.$hasSuffix;
  var prefixPadding = $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  var suffixPadding = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphMedium), {}, (_objectSpread2 = {
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    display: '-webkit-box',
    marginTop: $theme.sizing.scale600,
    marginBottom: $theme.sizing.scale600,
    overflow: 'hidden'
  }, _defineProperty(_objectSpread2, prefixPadding, $theme.sizing.scale600), _defineProperty(_objectSpread2, suffixPadding, $hasSuffix ? $theme.sizing.scale300 : $theme.sizing.scale600), _objectSpread2));
});
StyledMessage.displayName = "StyledMessage";
export var StyledWrapActionButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end'
});
StyledWrapActionButtonContainer.displayName = "StyledWrapActionButtonContainer";
export var StyledActionButtonContainer = styled('div', function (_ref6) {
  var $theme = _ref6.$theme;
  var marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({}, marginDir, 'auto');
});
StyledActionButtonContainer.displayName = "StyledActionButtonContainer";

function placementRules(placement) {
  switch (placement) {
    case PLACEMENT.topLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: 0
      };

    case PLACEMENT.topRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        top: 0
      };

    case PLACEMENT.bottom:
      return {
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 0
      };

    case PLACEMENT.bottomLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: 0
      };

    case PLACEMENT.bottomRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0
      };

    case PLACEMENT.top:
    default:
      return {
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0
      };
  }
}

export var StyledPlacementContainer = styled('div', function (_ref8) {
  var $animating = _ref8.$animating,
      $placement = _ref8.$placement,
      $translateHeight = _ref8.$translateHeight,
      $theme = _ref8.$theme;
  return _objectSpread(_objectSpread({}, placementRules($placement)), {}, _defineProperty({
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    position: 'fixed',
    transform: $animating ? "translateY(".concat($translateHeight, "px)") : null,
    transitionProperty: 'all',
    transitionTimingFunction: $theme.animation.easeOutQuinticCurve,
    transitionDuration: $theme.animation.timing1000,
    right: 0,
    left: 0,
    marginTop: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    marginLeft: $theme.sizing.scale300
  }, $theme.mediaQuery.medium, {
    marginTop: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600,
    marginBottom: $theme.sizing.scale600,
    marginLeft: $theme.sizing.scale600
  }));
});
StyledPlacementContainer.displayName = "StyledPlacementContainer";