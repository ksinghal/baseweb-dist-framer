function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { SIZE, SIZE_DIMENSION, ANCHOR } from './constants.js';

function getSizeStyles($size, $anchor) {
  var styles = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: SIZE_DIMENSION.default,
    height: SIZE_DIMENSION.full
  };

  if ($anchor === ANCHOR.left || $anchor === ANCHOR.right) {
    // If the anchor is horizontal, set the width
    styles.height = SIZE_DIMENSION.full;

    if (SIZE[$size]) {
      styles.width = SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.width = $size;
    }
  } else {
    // If the anchor is vertical, set the height
    styles.width = SIZE_DIMENSION.full;

    if (SIZE[$size]) {
      styles.height = SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.height = $size;
    }
  }

  return styles;
}

function getAnchorStyles(props) {
  var $anchor = props.$anchor,
      $isVisible = props.$isVisible,
      $size = props.$size;
  var sizeStyles = getSizeStyles($size, $anchor);
  var left = ANCHOR.left,
      right = ANCHOR.right,
      top = ANCHOR.top,
      bottom = ANCHOR.bottom;

  switch ($anchor) {
    case right:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateX(0)' : "translateX(".concat(sizeStyles.width, ")"),
          right: $isVisible ? 0 : "-".concat(sizeStyles.width),
          top: 0
        }, sizeStyles);
      }

    case left:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateX(0)' : "translateX(-".concat(sizeStyles.width, ")"),
          left: $isVisible ? 0 : "-".concat(sizeStyles.width),
          top: 0
        }, sizeStyles);
      }

    case bottom:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateY(0)' : "translateY(".concat(sizeStyles.height, ")"),
          left: 0,
          bottom: $isVisible ? '0' : "-".concat(sizeStyles.height)
        }, sizeStyles);
      }

    case top:
      {
        return _objectSpread({
          transform: $isVisible ? 'translateY(0)' : "translateY(-".concat(sizeStyles.height, ")"),
          left: 0,
          top: $isVisible ? '0' : "-".concat(sizeStyles.height)
        }, sizeStyles);
      }

    default:
      {
        return {};
      }
  }
}

export var StyledRoot = styled('div', function (props) {
  return {
    position: 'fixed',
    overflow: 'auto',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledBackdrop = styled('div', function (props) {
  var $animating = props.$animating,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $showBackdrop = props.$showBackdrop,
      $theme = props.$theme;
  return _objectSpread({
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    // Disable scroll capabilities.
    touchAction: 'none',
    opacity: $isVisible && $isOpen && $showBackdrop ? 1 : 0
  }, $animating ? {
    transitionProperty: 'opacity',
    transitionDuration: $theme.animation.timing400,
    transitionTimingFunction: $theme.animation.easeOutCurve
  } : null);
});
StyledBackdrop.displayName = "StyledBackdrop";
export var StyledDrawerContainer = styled('div', function (props) {
  var $animating = props.$animating,
      $isOpen = props.$isOpen,
      $isVisible = props.$isVisible,
      $theme = props.$theme;
  return _objectSpread(_objectSpread({
    backgroundColor: $theme.colors.backgroundPrimary,
    borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
    borderTopRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomRightRadius: $theme.borders.surfaceBorderRadius,
    borderBottomLeftRadius: $theme.borders.surfaceBorderRadius
  }, getAnchorStyles(props)), {}, {
    // Animation
    opacity: $isVisible && $isOpen ? 1 : 0,
    transitionProperty: $animating ? 'opacity, transform' : null,
    transitionDuration: $animating ? $theme.animation.timing400 : null,
    transitionTimingFunction: $animating ? $theme.animation.easeOutCurve : null,
    display: 'flex',
    position: 'fixed'
  });
});
StyledDrawerContainer.displayName = "StyledDrawerContainer";
export var StyledDrawerBody = styled('div', function (props) {
  var $theme = props.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.font200), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale900,
    marginBottom: $theme.sizing.scale900,
    marginLeft: $theme.sizing.scale900,
    marginRight: $theme.sizing.scale900,
    overflow: 'auto',
    width: '100%'
  });
});
StyledDrawerBody.displayName = "StyledDrawerBody";
export var StyledClose = styled('button', function (props) {
  var _ref;

  var $theme = props.$theme,
      $isFocusVisible = props.$isFocusVisible;
  var dir = $theme.direction === 'rtl' ? 'left' : 'right';
  return _ref = {
    // Reset button styles
    background: 'transparent',
    outline: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    // colors
    fill: $theme.colors.primary,
    transitionProperty: 'fill, border-color',
    transitionDuration: $theme.animation.timing200,
    borderLeftWidth: '1px',
    borderRightWidth: '1px',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    ':hover': {
      fill: $theme.colors.primary600
    },
    ':focus': {
      outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none'
    },
    // Positioning
    position: 'absolute',
    top: $theme.sizing.scale500
  }, _defineProperty(_ref, dir, $theme.sizing.scale500), _defineProperty(_ref, "width", $theme.sizing.scale800), _defineProperty(_ref, "height", $theme.sizing.scale800), _defineProperty(_ref, "display", 'flex'), _defineProperty(_ref, "justifyContent", 'center'), _defineProperty(_ref, "alignItems", 'center'), _defineProperty(_ref, "cursor", 'pointer'), _ref;
});
StyledClose.displayName = "StyledClose";
export var Hidden = styled('div', {
  display: 'none'
});
Hidden.displayName = "Hidden";