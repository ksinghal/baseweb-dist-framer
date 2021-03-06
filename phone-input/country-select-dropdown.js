function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { List, AutoSizer } from 'react-virtualized';
import defaultProps from './default-props.js';
import { StyledFlagContainer, StyledCountrySelectDropdownContainer as DefaultContainer, StyledCountrySelectDropdownListItem as DefaultListItem, StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn, StyledCountrySelectDropdownNameColumn as DefaultNameColumn, StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn } from './styled-components.js';
import { LocaleContext } from '../locale/index.js';
import { StyledEmptyState } from '../menu/styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { iso2FlagEmoji } from './utils.js';
CountrySelectDropdown.defaultProps = {
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  overrides: {}
};

function CountrySelectDropdown(props) {
  var country = props.$country,
      forwardedRef = props.$forwardedRef,
      maxDropdownHeight = props.$maxDropdownHeight,
      mapIsoToLabel = props.$mapIsoToLabel,
      noResultsMsg = props.$noResultsMsg,
      overrides = props.$overrides;

  var _getOverrides = getOverrides(overrides.CountrySelectDropdown, DefaultContainer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Container = _getOverrides2[0],
      containerProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.CountrySelectDropdownListItem, DefaultListItem),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ListItem = _getOverrides4[0],
      listItemProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.CountrySelectDropdownFlagColumn, DefaultFlagColumn),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      FlagColumn = _getOverrides6[0],
      flagColumnProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.FlagContainer, StyledFlagContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      FlagContainer = _getOverrides8[0],
      flagContainerProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.CountrySelectDropdownNameColumn, DefaultNameColumn),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      NameColumn = _getOverrides10[0],
      nameColumnProps = _getOverrides10[1];

  var _getOverrides11 = getOverrides(overrides.CountrySelectDropdownDialcodeColumn, DefaultDialcodeColumn),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      Dialcode = _getOverrides12[0],
      dialcodeProps = _getOverrides12[1];

  var _getOverrides13 = getOverrides(overrides.EmptyState, StyledEmptyState),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      EmptyState = _getOverrides14[0],
      emptyStateProps = _getOverrides14[1]; // Handle no results, likely from filtering


  if (!props.children.length) {
    return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
      return /*#__PURE__*/React.createElement(EmptyState, emptyStateProps, noResultsMsg || locale.menu.noResultsMsg);
    });
  }

  var children = React.Children.toArray(props.children);
  var scrollIndex = Math.min(children.findIndex(function (opt) {
    return opt.props.item.id === country.id;
  }) + 5, children.length - 1);
  return /*#__PURE__*/React.createElement(Container, _extends({
    ref: forwardedRef,
    $height: maxDropdownHeight
  }, containerProps), /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref) {
    var height = _ref.height,
        width = _ref.width;
    return /*#__PURE__*/React.createElement(List, {
      role: "listbox",
      height: height,
      width: width,
      rowCount: children.length,
      rowHeight: 42,
      scrollToIndex: scrollIndex,
      rowRenderer: function rowRenderer(_ref2) {
        var index = _ref2.index,
            key = _ref2.key,
            style = _ref2.style;

        // resetMenu and getItemLabel should not end up on native html elements
        var _children$index$props = children[index].props,
            item = _children$index$props.item,
            resetMenu = _children$index$props.resetMenu,
            getItemLabel = _children$index$props.getItemLabel,
            rest = _objectWithoutProperties(_children$index$props, ["item", "resetMenu", "getItemLabel"]);

        var iso = item.id,
            label = item.label,
            dialCode = item.dialCode;
        return /*#__PURE__*/React.createElement(ListItem, _extends({
          key: key,
          style: style,
          item: item
        }, rest, listItemProps, {
          "data-iso": iso
        }), /*#__PURE__*/React.createElement(FlagColumn, flagColumnProps, /*#__PURE__*/React.createElement(FlagContainer, _extends({
          $iso: iso,
          "data-iso": iso
        }, flagContainerProps), iso2FlagEmoji(iso))), /*#__PURE__*/React.createElement(NameColumn, nameColumnProps, mapIsoToLabel ? mapIsoToLabel(iso) : label), /*#__PURE__*/React.createElement(Dialcode, dialcodeProps, dialCode));
      }
    });
  }));
}

export default /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(CountrySelectDropdown, _extends({}, props, {
    $forwardedRef: ref
  }));
});