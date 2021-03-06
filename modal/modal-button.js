function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../button/index.js';
import { mergeOverrides } from '../helpers/overrides.js'; // ModalButtons should have some margin pre-applied

var overrides = {
  BaseButton: {
    style: function style(_ref) {
      var $theme = _ref.$theme;
      var marginInlineEnd = $theme.direction !== 'rtl' ? 'marginRight' : 'marginLeft';
      return {
        ':not(:last-child)': _defineProperty({}, marginInlineEnd, $theme.sizing.scale500)
      };
    }
  }
};
var ModalButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    ref: ref
  }, props, {
    overrides: mergeOverrides(overrides, props.overrides)
  }));
});
export default ModalButton;