/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { KIND, SHAPE, SIZE } from './constants.js';
export var defaultProps = {
  disabled: false,
  isLoading: false,
  isSelected: false,
  kind: KIND.primary,
  overrides: {},
  shape: SHAPE.default,
  size: SIZE.default
};