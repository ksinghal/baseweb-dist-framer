/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import ListItem from './list-item.js';
import { mergeOverrides } from '../helpers/overrides.js';
var MenuAdapter = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(ListItem, {
    ref: ref,
    sublist: props.sublist || props.$size === 'compact',
    artwork: props.artwork,
    artworkSize: props.artworkSize,
    endEnhancer: props.endEnhancer,
    overrides: // $FlowFixMe
    mergeOverrides({
      Root: {
        props: {
          onMouseEnter: props.onMouseEnter,
          onClick: props.onClick
        },
        style: function style(_ref) {
          var $theme = _ref.$theme;
          return {
            backgroundColor: props.$isHighlighted ? $theme.colors.menuFillHover : null,
            cursor: props.$disabled ? 'not-allowed' : 'pointer'
          };
        }
      }
    }, props.overrides)
  }, props.children);
});
MenuAdapter.displayName = 'MenuAdapter';
export default MenuAdapter;