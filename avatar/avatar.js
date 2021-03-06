function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { Avatar as StyledAvatar, Initials as StyledInitials, Root as StyledRoot } from './styled-components.js';

function getInitials(name) {
  var words = name.split(' ');
  var initials = words.map(function (word) {
    return word[0];
  });
  return initials.slice(0, 2).join('').toUpperCase();
}

export default function Avatar(_ref) {
  var initials = _ref.initials,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'scale1000' : _ref$size,
      src = _ref.src;
  // $FlowFixMe
  var imageRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      imageLoaded = _React$useState2[0],
      setImageLoaded = _React$useState2[1];

  function handleLoad() {
    setImageLoaded(true);
  }

  function handleError() {
    setImageLoaded(false);
  }

  React.useEffect(function () {
    setImageLoaded(false);

    if (imageRef.current) {
      if (typeof src === 'string') {
        imageRef.current.src = src;
        imageRef.current.onload = handleLoad;
        imageRef.current.onerror = handleError;
      }
    }

    return function () {
      if (imageRef.current) {
        imageRef.current.onload = null;
        imageRef.current.onerror = null;
      }
    };
  }, [src]);

  var _getOverrides = getOverrides(overrides.Avatar, StyledAvatar),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Avatar = _getOverrides2[0],
      avatarProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.Initials, StyledInitials),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Initials = _getOverrides4[0],
      initialsProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.Root, StyledRoot),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Root = _getOverrides6[0],
      rootProps = _getOverrides6[1];

  return /*#__PURE__*/React.createElement(Root, _extends({
    "aria-label": imageLoaded ? null : name,
    role: imageLoaded ? null : 'img',
    $didImageFailToLoad: !imageLoaded,
    $size: size,
    "data-baseweb": "avatar"
  }, rootProps), /*#__PURE__*/React.createElement(Avatar, _extends({
    ref: imageRef,
    alt: name,
    $imageLoaded: imageLoaded,
    $size: size
  }, avatarProps)), !imageLoaded && /*#__PURE__*/React.createElement(Initials, initialsProps, initials || getInitials(name)));
}