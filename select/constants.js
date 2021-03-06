/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export { SIZE } from '../input/index.js';
export var TYPE = {
  select: 'select',
  search: 'search'
};
export var STATE_CHANGE_TYPE = Object.freeze({
  select: 'select',
  remove: 'remove',
  clear: 'clear'
});