/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export function getSharedProps(props, state) {
  var disabled = props.disabled,
      error = props.error,
      positive = props.positive,
      adjoined = props.adjoined,
      size = props.size,
      required = props.required;
  var isFocused = state.isFocused;
  return {
    $isFocused: isFocused,
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $adjoined: adjoined,
    $size: size,
    $required: required
  };
}