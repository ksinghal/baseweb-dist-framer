function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // eslint-disable-next-line import/no-named-default

import StatefulContainer from './stateful-radiogroup-container.js'; // eslint-disable-next-line import/no-named-default

import RadioGroup from './radiogroup.js';

// Styled elements
var StatefulRadioGroup = function StatefulRadioGroup(props) {
  var children = props.children,
      restProps = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React.createElement(StatefulContainer, restProps, function (childrenProps) {
    return /*#__PURE__*/React.createElement(RadioGroup, childrenProps, children);
  });
};

StatefulRadioGroup.displayName = 'StatefulRadioGroup';
export default StatefulRadioGroup;