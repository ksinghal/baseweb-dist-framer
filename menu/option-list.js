function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { LocaleContext } from '../locale/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { OPTION_LIST_SIZE } from './constants.js';
import MaybeChildMenu from './maybe-child-menu.js';
import { StyledListItem, StyledListItemAnchor } from './styled-components.js';

function OptionList(props, ref) {
  var getChildMenu = props.getChildMenu,
      _props$getItemLabel = props.getItemLabel,
      getItemLabel = _props$getItemLabel === void 0 ? function (item) {
    return item ? item.label : '';
  } : _props$getItemLabel,
      item = props.item,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$onMouseEnter = props.onMouseEnter,
      onMouseEnter = _props$onMouseEnter === void 0 ? function () {} : _props$onMouseEnter,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$renderHrefAsAn = props.renderHrefAsAnchor,
      renderHrefAsAnchor = _props$renderHrefAsAn === void 0 ? true : _props$renderHrefAsAn,
      _props$resetMenu = props.resetMenu,
      resetMenu = _props$resetMenu === void 0 ? function () {} : _props$resetMenu,
      _props$size = props.size,
      size = _props$size === void 0 ? OPTION_LIST_SIZE.default : _props$size,
      $isHighlighted = props.$isHighlighted,
      renderAll = props.renderAll,
      restProps = _objectWithoutProperties(props, ["getChildMenu", "getItemLabel", "item", "onClick", "onMouseEnter", "overrides", "renderHrefAsAnchor", "resetMenu", "size", "$isHighlighted", "renderAll"]);

  var _getOverrides = getOverrides(overrides.ListItem, StyledListItem),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      ListItem = _getOverrides2[0],
      listItemProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.ListItemAnchor, StyledListItemAnchor),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ListItemAnchor = _getOverrides4[0],
      listItemAnchorProps = _getOverrides4[1];

  var getItem = function getItem(item) {
    if (item.href && renderHrefAsAnchor) {
      return /*#__PURE__*/React.createElement(ListItemAnchor, _extends({
        $item: item,
        href: item.href
      }, listItemAnchorProps), getItemLabel(item));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, getItemLabel(item));
    }
  };

  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
    return /*#__PURE__*/React.createElement(MaybeChildMenu, {
      getChildMenu: getChildMenu,
      isOpen: !!$isHighlighted,
      item: item,
      resetParentMenu: resetMenu,
      renderAll: renderAll,
      onClick: onClick,
      overrides: overrides
    }, /*#__PURE__*/React.createElement(ListItem, _extends({
      ref: ref,
      "aria-label": getChildMenu && getChildMenu(item) ? locale.menu.parentMenuItemAriaLabel : null,
      item: item,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      $size: size,
      $isHighlighted: $isHighlighted
    }, restProps, listItemProps), getItem(_objectSpread({
      isHighlighted: $isHighlighted
    }, item))));
  });
}

function areEqualShallow(a, b) {
  if (!a || !b) return false;

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

function compare(prevProps, nextProps) {
  return prevProps.$isHighlighted === nextProps.$isHighlighted && prevProps.$isFocused === nextProps.$isFocused && areEqualShallow(prevProps.item, nextProps.item) && areEqualShallow(prevProps.overrides, nextProps.overrides) && prevProps.size === nextProps.size && prevProps.getItemLabel === nextProps.getItemLabel && prevProps.getChildMenu === nextProps.getChildMenu && prevProps.resetMenu === nextProps.resetMenu;
}

var forwarded = /*#__PURE__*/React.forwardRef(OptionList);
forwarded.displayName = 'OptionList';
export default /*#__PURE__*/React.memo(forwarded, compare);