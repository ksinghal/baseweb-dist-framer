function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { LocaleContext } from '../locale/index.js'; // Components

import { StyledList, StyledEmptyState, StyledOptgroupHeader } from './styled-components.js';
import OptionList from './option-list.js';
import { getOverrides } from '../helpers/overrides.js'; // Types

import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
export default function Menu(props) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      _props$ariaLabel = props.ariaLabel,
      ariaLabel = _props$ariaLabel === void 0 ? 'Menu' : _props$ariaLabel,
      _props$rootRef = props.rootRef,
      rootRef = _props$rootRef === void 0 ? /*#__PURE__*/React.createRef() : _props$rootRef,
      _props$focusMenu = props.focusMenu,
      focusMenu = _props$focusMenu === void 0 ? function () {} : _props$focusMenu,
      _props$unfocusMenu = props.unfocusMenu,
      unfocusMenu = _props$unfocusMenu === void 0 ? function () {} : _props$unfocusMenu,
      _props$handleMouseLea = props.handleMouseLeave,
      handleMouseLeave = _props$handleMouseLea === void 0 ? function () {} : _props$handleMouseLea,
      _props$handleKeyDown = props.handleKeyDown,
      handleKeyDown = _props$handleKeyDown === void 0 ? function (event) {} : _props$handleKeyDown,
      _props$renderAll = props.renderAll,
      renderAll = _props$renderAll === void 0 ? false : _props$renderAll;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };

  var _getOverrides = getOverrides(overrides.List, StyledList),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      List = _getOverrides2[0],
      listProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.Option, OptionList),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Option = _getOverrides4[0],
      optionProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.EmptyState, StyledEmptyState),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      EmptyState = _getOverrides6[0],
      emptyStateProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.OptgroupHeader, StyledOptgroupHeader),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      OptgroupHeader = _getOverrides8[0],
      optgroupHeaderProps = _getOverrides8[1];

  var groupedItems = Array.isArray(props.items) ? {
    __ungrouped: props.items
  } : props.items;
  var optgroups = Object.keys(groupedItems);

  var _optgroups$reduce = optgroups.reduce(function (_ref, optgroup) {
    var _ref2 = _slicedToArray(_ref, 2),
        els = _ref2[0],
        itemIndex = _ref2[1];

    if (optgroup !== '__ungrouped') {
      els.push( /*#__PURE__*/React.createElement(OptgroupHeader, _extends({
        key: optgroup
      }, optgroupHeaderProps), optgroup));
    }

    var groupItems = groupedItems[optgroup].map(function (item, index) {
      itemIndex = itemIndex + 1;
      var _props$getRequiredIte = props.getRequiredItemProps,
          getRequiredItemProps = _props$getRequiredIte === void 0 ? function (item, index) {
        return {};
      } : _props$getRequiredIte;

      var _getRequiredItemProps = getRequiredItemProps(item, itemIndex),
          disabled = _getRequiredItemProps.disabled,
          isFocused = _getRequiredItemProps.isFocused,
          isHighlighted = _getRequiredItemProps.isHighlighted,
          _getRequiredItemProps2 = _getRequiredItemProps.resetMenu,
          resetMenu = _getRequiredItemProps2 === void 0 ? function () {} : _getRequiredItemProps2,
          restProps = _objectWithoutProperties(_getRequiredItemProps, ["disabled", "isFocused", "isHighlighted", "resetMenu"]);

      return /*#__PURE__*/React.createElement(Option, _extends({
        renderAll: renderAll,
        key: itemIndex,
        item: item,
        overrides: props.overrides,
        resetMenu: resetMenu,
        role: "option",
        $disabled: disabled,
        $isFocused: isFocused,
        $isHighlighted: isHighlighted,
        "aria-disabled": disabled,
        "aria-selected": isHighlighted && isFocused
      }, restProps, optionProps));
    });
    return [els.concat(groupItems), itemIndex];
  }, [[], -1]),
      _optgroups$reduce2 = _slicedToArray(_optgroups$reduce, 1),
      elements = _optgroups$reduce2[0];

  var isEmpty = optgroups.every(function (optgroup) {
    return !groupedItems[optgroup].length;
  });
  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
    return /*#__PURE__*/React.createElement(List, _extends({
      "aria-activedescendant": props.activedescendantId || null,
      role: "listbox",
      "aria-label": ariaLabel,
      ref: rootRef,
      onMouseEnter: focusMenu,
      onMouseLeave: handleMouseLeave,
      onMouseOver: focusMenu,
      onFocus: forkFocus({
        onFocus: focusMenu
      }, handleFocus),
      onBlur: forkBlur({
        onBlur: unfocusMenu
      }, handleBlur),
      onKeyDown: function onKeyDown(event) {
        if (props.isFocused) {
          handleKeyDown(event);
        }
      },
      tabIndex: 0,
      "data-baseweb": "menu",
      $isFocusVisible: focusVisible
    }, listProps), isEmpty ? /*#__PURE__*/React.createElement(EmptyState, _extends({
      "aria-live": "polite",
      "aria-atomic": true
    }, emptyStateProps), props.noResultsMsg || locale.menu.noResultsMsg) : elements);
  });
}