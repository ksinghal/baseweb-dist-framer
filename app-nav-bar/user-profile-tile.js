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
import { Avatar } from '../avatar/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { LabelMedium, ParagraphSmall } from '../typography/index.js';
import { StyledUserProfileTileContainer, StyledUserProfilePictureContainer, StyledUserProfileInfoContainer } from './styled-components.js';
export default function UserProfileTile(props) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      username = props.username,
      usernameSubtitle = props.usernameSubtitle,
      userImgUrl = props.userImgUrl;

  var _getOverrides = getOverrides(overrides.UserProfileTileContainer, StyledUserProfileTileContainer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      UserProfileTileContainer = _getOverrides2[0],
      userProfileTileContainerProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.UserProfilePictureContainer, StyledUserProfilePictureContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      UserProfilePictureContainer = _getOverrides4[0],
      userProfilePictureContainerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.UserProfileInfoContainer, StyledUserProfileInfoContainer),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      UserProfileInfoContainer = _getOverrides6[0],
      userProfileInfoContainerProps = _getOverrides6[1];

  return (
    /*#__PURE__*/
    // Replace with a  profile tile renderer: renderUserProfileTile()
    React.createElement(UserProfileTileContainer, userProfileTileContainerProps, /*#__PURE__*/React.createElement(UserProfilePictureContainer, userProfilePictureContainerProps, /*#__PURE__*/React.createElement(Avatar, {
      name: username || '',
      src: userImgUrl,
      size: '48px'
    })), /*#__PURE__*/React.createElement(UserProfileInfoContainer, userProfileInfoContainerProps, /*#__PURE__*/React.createElement(LabelMedium, null, username), usernameSubtitle ? /*#__PURE__*/React.createElement(ParagraphSmall, {
      marginTop: "0",
      marginBottom: "0"
    }, usernameSubtitle) : null))
  );
}