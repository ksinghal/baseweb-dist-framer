function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StyledLabelInteractable } from './styled-components.js';
import { getOverride } from '../helpers/overrides.js';

var TreeLabelInteractable = function TreeLabelInteractable(_ref) {
  var _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      props = _objectWithoutProperties(_ref, ["overrides"]);

  var LabelInteractable = getOverride(overrides.LabelInteractable) || StyledLabelInteractable;
  return /*#__PURE__*/React.createElement(LabelInteractable, _extends({
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    onKeyDown: function onKeyDown(e) {
      return e.stopPropagation();
    }
  }, props));
};

export default TreeLabelInteractable;