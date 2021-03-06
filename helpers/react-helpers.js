function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { isFragment } from 'react-is';
export var flattenFragments = function flattenFragments(children, ChildWrapper) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return React.Children.toArray(children).reduce(function (acc, child, i) {
    if (isFragment(child)) {
      acc.push.apply(acc, _toConsumableArray(flattenFragments(child.props.children, ChildWrapper, depth + 1)));
    } else if ( /*#__PURE__*/React.isValidElement(child)) {
      if (ChildWrapper) {
        acc.push( /*#__PURE__*/React.createElement(ChildWrapper, {
          key: "".concat(depth, ".").concat(i)
        }, child));
      } else {
        acc.push(child);
      }
    }

    return acc;
  }, []);
};