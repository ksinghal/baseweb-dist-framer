function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
import * as React from 'react';
import { Button } from '../button/index.js';
import { Drawer, ANCHOR } from '../drawer/index.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import ArrowLeft from '../icon/arrow-left.js';
import MenuIcon from '../icon/menu.js';
import { MenuAdapter, ListItemLabel, ARTWORK_SIZES } from '../list/index.js';
import { StatefulMenu } from '../menu/index.js';
import { StyledSideMenuButton, StyledUserMenuProfileListItem } from './styled-components.js';
import UserProfileTile from './user-profile-tile.js';
import { defaultMapItemToNode } from './utils.js';
var USER_TITLE_ITEM = 'USER_TITLE_ITEM';
var USER_MENU_ITEM = 'USER_MENU_ITEM';
var PARENT_MENU_ITEM = 'PARENT_MENU_ITEM';
var MobileNavMenuItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var item = props.item,
      _props$mapItemToNode = props.mapItemToNode,
      mapItemToNode = _props$mapItemToNode === void 0 ? defaultMapItemToNode : _props$mapItemToNode,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      restProps = _objectWithoutProperties(props, ["item", "mapItemToNode", "overrides"]);

  var _getOverrides = getOverrides(overrides.UserMenuProfileListItem, StyledUserMenuProfileListItem),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      UserMenuProfileListItem = _getOverrides2[0],
      userMenuProfileListItemProps = _getOverrides2[1];

  if (item.PARENT_MENU_ITEM) {
    return /*#__PURE__*/React.createElement(MenuAdapter, _extends({}, restProps, {
      ref: ref,
      artwork: item.navExitIcon || ArrowLeft,
      artworkSize: ARTWORK_SIZES.LARGE
    }), /*#__PURE__*/React.createElement(ListItemLabel, null, item.label));
  }

  if (item.USER_TITLE_ITEM) {
    // Replace with a user menu item renderer
    return /*#__PURE__*/React.createElement(UserMenuProfileListItem, _extends({}, restProps, userMenuProfileListItemProps, {
      ref: ref
    }), /*#__PURE__*/React.createElement(UserProfileTile, item.item));
  }

  return (
    /*#__PURE__*/
    // Replace with a main menu item renderer
    React.createElement(MenuAdapter, _extends({}, restProps, {
      ref: ref,
      artwork: item.icon || null,
      artworkSize: ARTWORK_SIZES.LARGE
    }), /*#__PURE__*/React.createElement(ListItemLabel, null, mapItemToNode(item)))
  );
});
export default function MobileMenu(props) {
  var _ref;

  var _props$mainItems = props.mainItems,
      mainItems = _props$mainItems === void 0 ? [] : _props$mainItems,
      _props$userItems = props.userItems,
      userItems = _props$userItems === void 0 ? [] : _props$userItems,
      mapItemToNode = props.mapItemToNode,
      _props$overrides2 = props.overrides,
      overrides = _props$overrides2 === void 0 ? {} : _props$overrides2,
      rest = _objectWithoutProperties(props, ["mainItems", "userItems", "mapItemToNode", "overrides"]);

  var items = [].concat(_toConsumableArray(userItems.length ? [(_ref = {
    item: _objectSpread({}, rest),
    label: props.username
  }, _defineProperty(_ref, USER_TITLE_ITEM, true), _defineProperty(_ref, "children", userItems.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, USER_MENU_ITEM, true));
  })), _ref)] : []), _toConsumableArray(mainItems));

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _React$useState3 = React.useState(items),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentNavItems = _React$useState4[0],
      setCurrentNavItems = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      ancestorNavItems = _React$useState6[0],
      setAncestorNavItems = _React$useState6[1];

  var toggleMenu = function toggleMenu() {
    setIsOpen(!isOpen);
  };

  var _getOverrides3 = getOverrides(overrides.SideMenuButton, Button),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      SideMenuButton = _getOverrides4[0],
      sideMenuButtonProps = _getOverrides4[1]; // $FlowFixMe


  sideMenuButtonProps.overrides = mergeOverrides({
    BaseButton: {
      component: StyledSideMenuButton
    }
  }, // $FlowFixMe
  sideMenuButtonProps.overrides);

  var _getOverrides5 = getOverrides(overrides.MobileDrawer, Drawer),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      MobileDrawer = _getOverrides6[0],
      drawerProps = _getOverrides6[1]; // $FlowFixMe


  drawerProps.overrides = mergeOverrides({
    DrawerBody: {
      style: function style(_ref2) {
        var $theme = _ref2.$theme;
        return {
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          marginRight: '0px'
        };
      }
    },
    // Removes the close icon from the drawer
    Close: function Close() {
      return null;
    }
  }, // $FlowFixMe
  drawerProps.overrides);

  var _getOverrides7 = getOverrides(overrides.MobileMenu, StatefulMenu),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      MobileMenu = _getOverrides8[0],
      menuProps = _getOverrides8[1]; // $FlowFixMe


  menuProps.overrides = mergeOverrides({
    List: {
      style: {
        paddingTop: '0',
        paddingBottom: '0',
        minHeight: '100vh',
        boxShadow: 'none'
      }
    },
    ListItem: /*#__PURE__*/React.forwardRef(function (listItemProps, ref) {
      return /*#__PURE__*/React.createElement(MobileNavMenuItem, _extends({
        ref: ref
      }, listItemProps, {
        mapItemToNode: mapItemToNode,
        overrides: overrides
      }));
    })
  }, // $FlowFixMe
  menuProps.overrides);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SideMenuButton, _extends({
    onClick: toggleMenu
  }, sideMenuButtonProps), /*#__PURE__*/React.createElement(MenuIcon, {
    size: '24px'
  })), /*#__PURE__*/React.createElement(MobileDrawer, _extends({
    anchor: ANCHOR.left,
    isOpen: isOpen,
    onClose: toggleMenu,
    size: '75%'
  }, drawerProps), /*#__PURE__*/React.createElement(MobileMenu, _extends({
    items: currentNavItems,
    onItemSelect: function onItemSelect(_ref3) {
      var item = _ref3.item;

      if (item.PARENT_MENU_ITEM) {
        // Remove current parent item selected to return to
        // from the ancestors list (`ancestorNavItems[ancestorArrLength - 1]`)
        var updatedAncestorNavItems = ancestorNavItems.slice(0, ancestorNavItems.length - 1);
        var isTopLevel = !updatedAncestorNavItems.length;

        if (isTopLevel) {
          // Set to the initial `navItems` value
          setCurrentNavItems(items);
        } else {
          var newParentItem = _objectSpread(_objectSpread({}, updatedAncestorNavItems[updatedAncestorNavItems.length - 1]), {}, _defineProperty({}, PARENT_MENU_ITEM, true));

          setCurrentNavItems([newParentItem].concat(_toConsumableArray(newParentItem.children)));
        }

        setAncestorNavItems(updatedAncestorNavItems);
        return;
      }

      if (item.USER_MENU_ITEM && props.onUserItemSelect) {
        props.onUserItemSelect(item);
      } else if (!item.USER_TITLE_ITEM && props.onMainItemSelect) {
        props.onMainItemSelect(item);
      }

      if (item.children && item.children.length) {
        var parentItem = _objectSpread(_objectSpread({}, item), {}, _defineProperty({}, PARENT_MENU_ITEM, true));

        setAncestorNavItems([].concat(_toConsumableArray(ancestorNavItems), [item]));
        setCurrentNavItems([parentItem].concat(_toConsumableArray(item.children)));
        return;
      }

      toggleMenu();
    }
  }, menuProps))));
}