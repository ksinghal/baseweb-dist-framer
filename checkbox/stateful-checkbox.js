/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // eslint-disable-next-line import/no-named-default

import { default as StatefulContainer } from './stateful-checkbox-container.js'; // eslint-disable-next-line import/no-named-default

import { default as Checkbox } from './checkbox.js';

// Styled elements
var StatefulCheckbox = function StatefulCheckbox(props) {
  return /*#__PURE__*/React.createElement(StatefulContainer, props, function (childrenProps) {
    return /*#__PURE__*/React.createElement(Checkbox, childrenProps, props.children);
  });
};

StatefulCheckbox.displayName = 'StatefulCheckbox';
export default StatefulCheckbox;