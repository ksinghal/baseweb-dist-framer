/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container.js';
import TreeView from './tree-view.js';
export default function StatefulTreeView(props) {
  return /*#__PURE__*/React.createElement(StatefulContainer, props, function (treeViewProps) {
    return /*#__PURE__*/React.createElement(TreeView, treeViewProps);
  });
}