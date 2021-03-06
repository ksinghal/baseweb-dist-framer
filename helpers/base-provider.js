/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { UIDReset } from 'react-uid';
import { LayersManager } from '../layer/index.js';
import { ThemeProvider } from '../styles/index.js';

var BaseProvider = function BaseProvider(props) {
  var children = props.children,
      overrides = props.overrides,
      theme = props.theme,
      zIndex = props.zIndex;
  return /*#__PURE__*/React.createElement(LayersManager, {
    zIndex: zIndex,
    overrides: overrides
  }, /*#__PURE__*/React.createElement(UIDReset, {
    prefix: "bui"
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, children)));
};

export default BaseProvider;