/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import Input from './input.js';
export default function StatefulInput(props) {
  return /*#__PURE__*/React.createElement(StatefulContainer, props, function (childrenProps) {
    return /*#__PURE__*/React.createElement(Input, childrenProps);
  });
}