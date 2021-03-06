function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Block from '../block/block.js';
import { LevelContext } from './heading-level.js';
var FONTS = ['', 'font1050', 'font950', 'font850', 'font750', 'font650', 'font550'];

var Heading = function Heading(_ref) {
  var styleLevel = _ref.styleLevel,
      restProps = _objectWithoutProperties(_ref, ["styleLevel"]);

  return /*#__PURE__*/React.createElement(LevelContext.Consumer, null, function (level) {
    if (level === 0) {
      throw new Error('Heading component must be a descendant of HeadingLevel component.');
    }

    if (level > 6) {
      throw new Error("HeadingLevel cannot be nested ".concat(level, " times. The maximum is 6 levels."));
    }

    if (typeof styleLevel !== 'undefined' && (styleLevel < 1 || styleLevel > 6)) {
      throw new Error("styleLevel = ".concat(styleLevel, " is out of 1-6 range."));
    }

    return /*#__PURE__*/React.createElement(Block, _extends({
      "data-baseweb": "heading",
      as: "h".concat(level),
      font: styleLevel ? FONTS[styleLevel] : FONTS[level],
      color: "contentPrimary"
    }, restProps));
  });
};

export default Heading;