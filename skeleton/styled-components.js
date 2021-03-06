function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';

function getAnimationColor(props) {
  var $theme = props.$theme;
  return "linear-gradient(135deg,\n    ".concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundSecondary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ",\n    ").concat($theme.colors.backgroundTertiary, ")");
}

var animationStyle = {
  animationTimingFunction: 'ease-out',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  backgroundSize: '400% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
};
export var StyledRoot = styled('div', function (props) {
  if (typeof props.$rows === 'number' && props.$rows !== 0) {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: props.$height,
      width: props.$width
    };
  }

  return _objectSpread(_objectSpread({}, props.$animation ? _objectSpread(_objectSpread({}, animationStyle), {}, {
    backgroundImage: getAnimationColor(props)
  }) : {
    backgroundColor: props.$theme.colors.backgroundTertiary
  }), {}, {
    height: props.$height,
    width: props.$width
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledRow = styled('div', function (props) {
  return _objectSpread(_objectSpread({}, props.$animation ? _objectSpread(_objectSpread({}, animationStyle), {}, {
    backgroundImage: getAnimationColor(props)
  }) : {
    backgroundColor: props.$theme.colors.backgroundTertiary
  }), {}, {
    width: '100%',
    height: '15px',
    marginBottom: props.$isLastRow ? '0px' : '10px'
  });
});
StyledRow.displayName = "StyledRow";