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
    backgroundSecondary: colors.gray800,
    backgroundTertiary: colors.gray700,
    backgroundInversePrimary: foundation.primaryA,
    backgroundInverseSecondary: colors.gray300,
    // Content
    contentPrimary: colors.white,
    contentSecondary: colors.gray300,
    contentTertiary: colors.gray400,
    contentInversePrimary: colors.black,
    contentInverseSecondary: colors.gray700,
    contentInverseTertiary: colors.gray600,
    // Border
    borderOpaque: colors.gray700,
    borderTransparent: hexToRgba(foundation.primaryA, '0.08'),
    borderSelected: foundation.primaryA,
    borderInverseOpaque: colors.gray400,
    borderInverseTransparent: hexToRgba(foundation.primaryB, '0.2'),
    borderInverseSelected: foundation.primaryB
  };
  var coreExtensions = {
    // Backgrounds
    backgroundStateDisabled: colors.gray800,
    backgroundOverlayDark: hexToRgba(colors.black, '0.3'),
    backgroundOverlayLight: hexToRgba(colors.black, '0.08'),
    backgroundAccent: foundation.accent,
    backgroundNegative: foundation.negative,
    backgroundWarning: foundation.warning,
    backgroundPositive: colors.green500,
    backgroundLightAccent: colors.blue700,
    backgroundLightPositive: colors.green700,
    backgroundLightNegative: colors.red700,
    backgroundLightWarning: colors.yellow700,
    backgroundAlwaysDark: colors.gray900,
    backgroundAlwaysLight: colors.gray100,
    // Content
    contentStateDisabled: colors.gray600,
    contentAccent: colors.blue300,
    contentOnColor: colors.white,
    contentOnColorInverse: colors.black,
    contentNegative: colors.red300,
    contentWarning: colors.yellow300,
    contentPositive: colors.green300,
    // Border
    borderStateDisabled: colors.gray800,
    borderAccent: colors.blue400,
    borderAccentLight: colors.blue500,
    borderNegative: colors.red500,
    borderWarning: colors.yellow500,
    borderPositive: colors.green500,
    // Programs
    safety: colors.blue400,
    eatsGreen400: colors.green400,
    freightBlue400: colors.cobalt400,
    jumpRed400: colors.red400,
    rewardsTier1: colors.blue400,
    rewardsTier2: colors.yellow400,
    rewardsTier3: colors.platinum400,
    rewardsTier4: colors.gray200,
    membership: colors.yellow600
  };
  return _objectSpread(_objectSpread({}, core), coreExtensions);
});