/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export function getSharedProps(_ref) {
  var disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      isSelected = _ref.isSelected,
      kind = _ref.kind,
      shape = _ref.shape,
      size = _ref.size;
  return {
    $disabled: disabled,
    $isLoading: isLoading,
    $isSelected: isSelected,
    $kind: kind,
    $shape: shape,
    $size: size
  };
}