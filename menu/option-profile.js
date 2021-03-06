function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react'; // Components

import MaybeChildMenu from './maybe-child-menu.js';
import { StyledListItemProfile, StyledProfileImgContainer, StyledProfileImg, StyledProfileLabelsContainer, StyledProfileTitle, StyledProfileSubtitle, StyledProfileBody } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js'; // Types

function OptionProfile(props, ref) {
  var item = props.item,
      getChildMenu = props.getChildMenu,
      getProfileItemLabels = props.getProfileItemLabels,
      getProfileItemImg = props.getProfileItemImg,
      getProfileItemImgText = props.getProfileItemImgText,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$resetMenu = props.resetMenu,
      resetMenu = _props$resetMenu === void 0 ? function () {} : _props$resetMenu,
      $isHighlighted = props.$isHighlighted,
      renderAll = props.renderAll,
      restProps = _objectWithoutProperties(props, ["item", "getChildMenu", "getProfileItemLabels", "getProfileItemImg", "getProfileItemImgText", "overrides", "resetMenu", "$isHighlighted", "renderAll"]);

  var _getOverrides = getOverrides(overrides.ListItemProfile, StyledListItemProfile),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      ListItemProfile = _getOverrides2[0],
      listItemProfileProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.ProfileImgContainer, StyledProfileImgContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ProfileImgContainer = _getOverrides4[0],
      profileImgContainerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.ProfileImg, StyledProfileImg),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      ProfileImg = _getOverrides6[0],
      profileImgProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.ProfileLabelsContainer, StyledProfileLabelsContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      ProfileLabelsContainer = _getOverrides8[0],
      profileLabelsContainerProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.ProfileTitle, StyledProfileTitle),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      ProfileTitle = _getOverrides10[0],
      profileTitleProps = _getOverrides10[1];

  var _getOverrides11 = getOverrides(overrides.ProfileSubtitle, StyledProfileSubtitle),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      ProfileSubtitle = _getOverrides12[0],
      profileSubtitleProps = _getOverrides12[1];

  var _getOverrides13 = getOverrides(overrides.ProfileBody, StyledProfileBody),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      ProfileBody = _getOverrides14[0],
      profileBodyProps = _getOverrides14[1];

  var ItemImg = getProfileItemImg(item);

  var _getProfileItemLabels = getProfileItemLabels(item),
      title = _getProfileItemLabels.title,
      subtitle = _getProfileItemLabels.subtitle,
      body = _getProfileItemLabels.body;

  return /*#__PURE__*/React.createElement(MaybeChildMenu, {
    getChildMenu: getChildMenu,
    isOpen: !!$isHighlighted,
    item: item,
    resetParentMenu: resetMenu,
    renderAll: renderAll,
    overrides: overrides
  }, /*#__PURE__*/React.createElement(ListItemProfile, _extends({}, restProps, listItemProfileProps), /*#__PURE__*/React.createElement(ProfileImgContainer, profileImgContainerProps, ItemImg && (typeof ItemImg === 'string' ?
  /*#__PURE__*/
  // Render img src string wrapped with image component
  React.createElement(ProfileImg, _extends({
    src: ItemImg,
    alt: getProfileItemImgText(item)
  }, profileImgProps)) :
  /*#__PURE__*/
  // Or just render the entire component user specified
  React.createElement(ItemImg, profileImgProps))), /*#__PURE__*/React.createElement(ProfileLabelsContainer, profileLabelsContainerProps, title && /*#__PURE__*/React.createElement(ProfileTitle, profileTitleProps, title), subtitle && /*#__PURE__*/React.createElement(ProfileSubtitle, profileSubtitleProps, subtitle), body && /*#__PURE__*/React.createElement(ProfileBody, profileBodyProps, body))));
}

var forwarded = /*#__PURE__*/React.forwardRef(OptionProfile);
forwarded.displayName = 'OptionProfile';
export default forwarded;