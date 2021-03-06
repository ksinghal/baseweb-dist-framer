function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Avatar } from '../avatar/index.js';
import { Button } from '../button/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import ChevronDownSmallFilled from '../icon/chevron-down.js';
import ChevronUpSmallFilled from '../icon/chevron-up.js';
import { MenuAdapter, ListItemLabel, ARTWORK_SIZES } from '../list/index.js';
import { StatefulMenu, StyledList } from '../menu/index.js';
import { StatefulPopover, PLACEMENT, TRIGGER_TYPE } from '../popover/index.js';
import { StyledUserMenuButton, StyledUserMenuProfileListItem } from './styled-components.js';
import UserProfileTile from './user-profile-tile.js';
import { defaultMapItemToNode } from './utils.js';
var MENU_ITEM_WIDTH = '275px';
var UserMenuListItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var item = props.item,
      _props$mapItemToNode = props.mapItemToNode,
      mapItemToNode = _props$mapItemToNode === void 0 ? defaultMapItemToNode : _props$mapItemToNode; // Replace with a user menu item renderer

  return /*#__PURE__*/React.createElement(MenuAdapter, _extends({}, props, {
    ref: ref,
    artwork: item.icon || null,
    artworkSize: ARTWORK_SIZES.LARGE
  }), /*#__PURE__*/React.createElement(ListItemLabel, null, mapItemToNode(item)));
});

var svgStyleOverride = function svgStyleOverride(_ref) {
  var $theme = _ref.$theme;
  return {
    paddingLeft: $theme.sizing.scale200
  };
};

export default function UserMenuComponent(props) {
  // isOpen is used for displaying different arrow icons in open or closed state
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _props$userItems = props.userItems,
      userItems = _props$userItems === void 0 ? [] : _props$userItems,
      username = props.username,
      userImgUrl = props.userImgUrl,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;

  var _getOverrides = getOverrides(overrides.UserMenuProfileListItem, StyledUserMenuProfileListItem),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      UserMenuProfileListItem = _getOverrides2[0],
      userMenuProfileListItemProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.UserMenuButton, Button),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      UserMenuButton = _getOverrides4[0],
      userMenuButtonProps = _getOverrides4[1]; // $FlowFixMe


  userMenuButtonProps.overrides = mergeOverrides({
    BaseButton: {
      component: StyledUserMenuButton
    }
  }, // $FlowFixMe
  userMenuButtonProps.overrides);

  var _getOverrides5 = getOverrides(overrides.UserMenu, StatefulMenu),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      UserMenu = _getOverrides6[0],
      userMenuProps = _getOverrides6[1]; // $FlowFixMe


  userMenuProps.overrides = mergeOverrides({
    List: {
      component: /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
        var children = _ref2.children,
            restProps = _objectWithoutProperties(_ref2, ["children"]);

        return /*#__PURE__*/React.createElement(StyledList, _extends({}, restProps, {
          ref: ref
        }), /*#__PURE__*/React.createElement(UserMenuProfileListItem, userMenuProfileListItemProps, /*#__PURE__*/React.createElement(UserProfileTile, {
          username: props.username,
          usernameSubtitle: props.usernameSubtitle,
          userImgUrl: props.userImgUrl,
          overrides: overrides
        })), children);
      }),
      style: {
        width: MENU_ITEM_WIDTH
      }
    },
    ListItem: /*#__PURE__*/React.forwardRef(function (listItemProps, ref) {
      return /*#__PURE__*/React.createElement(UserMenuListItem, _extends({
        ref: ref
      }, listItemProps, {
        mapItemToNode: props.mapItemToNode
      }));
    })
  }, // $FlowFixMe
  userMenuProps.overrides);
  return /*#__PURE__*/React.createElement(StatefulPopover, {
    content: function content(_ref3) {
      var close = _ref3.close;
      return /*#__PURE__*/React.createElement(UserMenu, _extends({
        items: userItems,
        onItemSelect: function onItemSelect(_ref4) {
          var item = _ref4.item;
          props.onItemSelect(item);
          close();
        }
      }, userMenuProps));
    },
    autoFocus: false,
    dismissOnEsc: true,
    dismissOnClickOutside: true,
    onOpen: function onOpen() {
      return setIsOpen(true);
    },
    onClose: function onClose() {
      return setIsOpen(false);
    },
    placement: PLACEMENT.bottomRight,
    popperOptions: {
      modifiers: {
        flip: {
          enabled: false
        }
      }
    },
    triggerType: TRIGGER_TYPE.click
  }, /*#__PURE__*/React.createElement(UserMenuButton, userMenuButtonProps, /*#__PURE__*/React.createElement(Avatar, {
    name: username || '',
    src: userImgUrl,
    size: '32px'
  }), isOpen ? /*#__PURE__*/React.createElement(ChevronUpSmallFilled, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  }) : /*#__PURE__*/React.createElement(ChevronDownSmallFilled, {
    size: 28,
    overrides: {
      Svg: {
        style: svgStyleOverride
      }
    }
  })));
}