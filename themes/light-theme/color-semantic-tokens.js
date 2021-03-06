function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import colorTokens from './color-tokens.js';
import { hexToRgb as hexToRgba } from '../../styles/util.js';
import colors from '../../tokens/colors.js';
export default (function () {
  var foundation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : colorTokens;
  var core = {
    // Background
    backgroundPrimary: foundation.primaryB,
    backgroundSecondary: colors.gray50,
    backgroundTertiary: colors.gray100,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: colors.gray800,
    // Content
    contentPrimary: foundation.primaryA,
    contentSecondary: colors.gray600,
    contentTertiary: colors.gray500,
    contentInversePrimary: foundation.primaryB,
    contentInverseSecondary: colors.gray300,
    contentInverseTertiary: colors.gray400,
    // Border
    borderOpaque: colors.gray200,
    borderTransparent: hexToRgba(foundation.primaryA, '0.08'),
    borderSelected: foundation.primaryA,
    borderInverseOpaque: colors.gray700,
    borderInverseTransparent: hexToRgba(foundation.primaryB, '0.2'),
    borderInverseSelected: foundation.primaryB
  };
  var coreExtensions = {
    // Backgrounds
    backgroundStateDisabled: colors.gray50,
    backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
    backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
    backgroundAccent: foundation.accent,
    backgroundNegative: foundation.negative,
    backgroundWarning: foundation.warning,
    backgroundPositive: colors.green400,
    backgroundLightAccent: colors.blue50,
    backgroundLightNegative: colors.red50,
    backgroundLightWarning: colors.yellow50,
    backgroundLightPositive: colors.green50,
    backgroundAlwaysDark: colors.black,
    backgroundAlwaysLight: colors.white,
    // Content
    contentStateDisabled: colors.gray400,
    contentAccent: foundation.accent,
    contentOnColor: colors.white,
    contentOnColorInverse: colors.black,
    contentNegative: foundation.negative,
    contentWarning: colors.yellow600,
    contentPositive: colors.green400,
    // Border
    borderStateDisabled: colors.gray50,
    borderAccent: colors.blue400,
    borderAccentLight: colors.blue200,
    borderNegative: colors.red200,
    borderWarning: colors.yellow200,
    borderPositive: colors.green200,
    // Programs
    safety: colors.blue400,
    eatsGreen400: colors.green400,
    freightBlue400: colors.cobalt400,
    jumpRed400: colors.red400,
    rewardsTier1: colors.blue400,
    rewardsTier2: colors.yellow400,
    rewardsTier3: colors.platinum400,
    rewardsTier4: colors.black,
    membership: colors.yellow600
  };
  return _objectSpread(_objectSpread({}, core), coreExtensions);
});