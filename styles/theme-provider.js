/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LightTheme } from '../themes/index.js';
export var ThemeContext = /*#__PURE__*/React.createContext(LightTheme);

var ThemeProvider = function ThemeProvider(props) {
  var theme = props.theme,
      children = props.children;
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};

export default ThemeProvider;