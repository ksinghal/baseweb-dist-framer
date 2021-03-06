function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import NavItem from './nav-item.js';
import { StyledRoot, StyledNavItemContainer, StyledSubNavContainer } from './styled-components.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var SideNav = /*#__PURE__*/function (_React$Component) {
  _inherits(SideNav, _React$Component);

  var _super = _createSuper(SideNav);

  function SideNav() {
    var _this;

    _classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "activePredicate", function (item) {
      return item.itemId === _this.props.activeItemId;
    });

    return _this;
  }

  _createClass(SideNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeItemId = _this$props.activeItemId,
          activePredicate = _this$props.activePredicate,
          items = _this$props.items,
          onChange = _this$props.onChange,
          overrides = _this$props.overrides,
          mapItem = _this$props.mapItem;
      var navLevel = 1;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.NavItemContainer, StyledNavItemContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          NavItemContainer = _getOverrides4[0],
          itemContainerProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.SubNavContainer, StyledSubNavContainer),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          SubNavContainer = _getOverrides6[0],
          subNavContainerProps = _getOverrides6[1];

      var renderNavItem = function renderNavItem(item, level, index, mapItem) {
        if (typeof mapItem === 'function') {
          var recMapItem = function recMapItem(item) {
            var subNav = [];

            if (item.subNav) {
              subNav = item.subNav.map(recMapItem);
            }

            return mapItem(_objectSpread(_objectSpread({}, item), {}, {
              subNav: subNav
            }));
          };

          item = recMapItem(item);
        }

        var sharedProps = {
          $active: activePredicate ? activePredicate(item, activeItemId) : _this2.activePredicate(item),
          $level: level,
          $selectable: !!item.itemId,
          $disabled: item.disabled || false
        };
        return /*#__PURE__*/React.createElement(NavItemContainer, _extends({
          key: "".concat(index, "-level").concat(level, "-").concat(typeof item.title === 'string' ? item.title : item.itemId || '')
        }, sharedProps, itemContainerProps, {
          onFocus: forkFocus(itemContainerProps, _this2.handleFocus),
          onBlur: forkBlur(itemContainerProps, _this2.handleBlur)
        }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavItem, _extends({
          $isFocusVisible: _this2.state.isFocusVisible,
          item: item,
          itemMemoizationComparator: _this2.props.itemMemoizationComparator,
          onSelect: onChange,
          overrides: overrides
        }, sharedProps)), item.subNav ? /*#__PURE__*/React.createElement(SubNavContainer, _extends({
          role: "list"
        }, sharedProps, subNavContainerProps), item.subNav.map(function (subitem, idx) {
          return renderNavItem(subitem, level + 1, index);
        })) : null));
      };

      return /*#__PURE__*/React.createElement(Root, _extends({
        role: "navigation",
        "data-baseweb": "side-navigation"
      }, rootProps), /*#__PURE__*/React.createElement(SubNavContainer, {
        role: "list"
      }, items.map(function (item, index) {
        return renderNavItem(item, navLevel, index, mapItem);
      })));
    }
  }]);

  return SideNav;
}(React.Component);

_defineProperty(SideNav, "defaultProps", {
  activeItemId: '/',
  activePredicate: null,
  items: [],
  overrides: {},
  mapItem: null
});

export { SideNav as default };