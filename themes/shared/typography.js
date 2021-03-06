function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export var defaultFontTokens = {
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
};
var monoFontFamily = '"Lucida Console", Monaco, monospace';
export default (function () {
  var fontTokens = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultFontTokens;
  var font100 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '20px'
  };
  var font150 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px'
  };
  var font200 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px'
  };
  var font250 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px'
  };
  var font300 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '24px'
  };
  var font350 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px'
  };
  var font400 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '28px'
  };
  var font450 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px'
  };
  var font550 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '28px'
  };
  var font650 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px'
  };
  var font750 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: '36px'
  };
  var font850 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '40px'
  };
  var font950 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px'
  };
  var font1050 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '52px'
  };
  var font1150 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px'
  };
  var font1250 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '44px',
    fontWeight: 500,
    lineHeight: '52px'
  };
  var font1350 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '52px',
    fontWeight: 500,
    lineHeight: '64px'
  };
  var font1450 = {
    fontFamily: fontTokens.primaryFontFamily,
    fontSize: '96px',
    fontWeight: 500,
    lineHeight: '112px'
  };
  return {
    font100: font100,
    font150: font150,
    font200: font200,
    font250: font250,
    font300: font300,
    font350: font350,
    font400: font400,
    font450: font450,
    font550: font550,
    font650: font650,
    font750: font750,
    font850: font850,
    font950: font950,
    font1050: font1050,
    font1150: font1150,
    font1250: font1250,
    font1350: font1350,
    font1450: font1450,
    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450,
    MonoParagraphXSmall: _objectSpread(_objectSpread({}, font100), {}, {
      fontFamily: monoFontFamily
    }),
    MonoParagraphSmall: _objectSpread(_objectSpread({}, font200), {}, {
      fontFamily: monoFontFamily
    }),
    MonoParagraphMedium: _objectSpread(_objectSpread({}, font300), {}, {
      fontFamily: monoFontFamily
    }),
    MonoParagraphLarge: _objectSpread(_objectSpread({}, font400), {}, {
      fontFamily: monoFontFamily
    }),
    MonoLabelXSmall: _objectSpread(_objectSpread({}, font150), {}, {
      fontFamily: monoFontFamily
    }),
    MonoLabelSmall: _objectSpread(_objectSpread({}, font250), {}, {
      fontFamily: monoFontFamily
    }),
    MonoLabelMedium: _objectSpread(_objectSpread({}, font350), {}, {
      fontFamily: monoFontFamily
    }),
    MonoLabelLarge: _objectSpread(_objectSpread({}, font450), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingXSmall: _objectSpread(_objectSpread({}, font550), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingSmall: _objectSpread(_objectSpread({}, font650), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingMedium: _objectSpread(_objectSpread({}, font750), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingLarge: _objectSpread(_objectSpread({}, font850), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingXLarge: _objectSpread(_objectSpread({}, font950), {}, {
      fontFamily: monoFontFamily
    }),
    MonoHeadingXXLarge: _objectSpread(_objectSpread({}, font1050), {}, {
      fontFamily: monoFontFamily
    }),
    MonoDisplayXSmall: _objectSpread(_objectSpread({}, font1150), {}, {
      fontFamily: monoFontFamily
    }),
    MonoDisplaySmall: _objectSpread(_objectSpread({}, font1250), {}, {
      fontFamily: monoFontFamily
    }),
    MonoDisplayMedium: _objectSpread(_objectSpread({}, font1350), {}, {
      fontFamily: monoFontFamily
    }),
    MonoDisplayLarge: _objectSpread(_objectSpread({}, font1450), {}, {
      fontFamily: monoFontFamily
    })
  };
});