/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var destroy = jest.fn(); // $FlowFixMe

var mock = jest.fn().mockImplementation(function (anchor, popover, options) {
  var onPopperUpdate = options.modifiers.applyReactStyle.fn;
  return {
    options: options,
    destroy: destroy,
    _callOnPopperUpdate: function _callOnPopperUpdate() {
      onPopperUpdate({
        offsets: {
          popper: {
            top: 10,
            left: 10
          },
          arrow: {
            top: 10,
            left: 10
          }
        },
        placement: 'left-start'
      });
    }
  };
});
export default mock;