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
import memoize from 'memoize-one'; // Files

import { LocaleContext } from '../locale/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import { Select as BaseSelect } from '../select/index.js';
import { Button, KIND } from '../button/index.js';
import { StyledRoot, StyledMaxLabel, StyledDropdownContainer } from './styled-components.js';
import ChevronLeft from '../icon/chevron-left.js';
import ChevronRight from '../icon/chevron-right.js';
import { getOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var Pagination = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pagination, _React$PureComponent);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

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

    _defineProperty(_assertThisInitialized(_this), "getMenuOptions", memoize(function (numPages) {
      var menuOptions = [];

      for (var i = 1; i <= numPages; i++) {
        menuOptions.push({
          label: i
        });
      }

      return menuOptions;
    }));

    _defineProperty(_assertThisInitialized(_this), "onMenuItemSelect", function (data) {
      var item = data.value[0];
      var _this$props = _this.props,
          onPageChange = _this$props.onPageChange,
          currentPage = _this$props.currentPage;
      var page = item.label;

      if (page !== currentPage) {
        onPageChange && onPageChange({
          nextPage: page,
          prevPage: currentPage
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevClick", function (event) {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          onPageChange = _this$props2.onPageChange,
          onPrevClick = _this$props2.onPrevClick;

      if (currentPage > 1) {
        onPageChange && onPageChange({
          nextPage: currentPage - 1,
          prevPage: currentPage
        });
        onPrevClick && onPrevClick({
          event: event
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextClick", function (event) {
      var _this$props3 = _this.props,
          currentPage = _this$props3.currentPage,
          numPages = _this$props3.numPages,
          onPageChange = _this$props3.onPageChange,
          onNextClick = _this$props3.onNextClick;

      if (currentPage < numPages) {
        onPageChange && onPageChange({
          nextPage: currentPage + 1,
          prevPage: currentPage
        });
        onNextClick && onNextClick({
          event: event
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "constructAriaWayfinderLabel", function (locale, prefix) {
      var _this$props4 = _this.props,
          currentPage = _this$props4.currentPage,
          numPages = _this$props4.numPages,
          labels = _this$props4.labels;
      return prefix + ' ' + currentPage + ' ' + "".concat(labels && labels.preposition ? labels.preposition : locale.pagination.preposition) + ' ' + numPages;
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          _this$props5$override = _this$props5.overrides,
          overrides = _this$props5$override === void 0 ? {} : _this$props5$override,
          currentPage = _this$props5.currentPage,
          labels = _this$props5.labels,
          numPages = _this$props5.numPages,
          size = _this$props5.size;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.MaxLabel, StyledMaxLabel),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          MaxLabel = _getOverrides4[0],
          maxLabelProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.DropdownContainer, StyledDropdownContainer),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          DropdownContainer = _getOverrides6[0],
          dropdownContainerProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.Select, BaseSelect),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          Select = _getOverrides8[0],
          selectProps = _getOverrides8[1];

      var options = this.getMenuOptions(numPages);
      return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
        return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
          return /*#__PURE__*/React.createElement(Root, _extends({
            "data-baseweb": "pagination"
          }, rootProps), /*#__PURE__*/React.createElement(Button, {
            "aria-label": _this2.constructAriaWayfinderLabel(locale, 'previous page. current page'),
            disabled: currentPage <= 1,
            onClick: _this2.onPrevClick,
            startEnhancer: function startEnhancer() {
              return theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(ChevronRight, {
                title: '',
                size: 24
              }) : /*#__PURE__*/React.createElement(ChevronLeft, {
                title: '',
                size: 24
              });
            },
            kind: KIND.tertiary,
            overrides: {
              BaseButton: overrides.PrevButton
            },
            size: size
          }, labels && labels.prevButton ? labels.prevButton : locale.pagination.prev), /*#__PURE__*/React.createElement(DropdownContainer, _extends({
            $isFocusVisible: _this2.state.isFocusVisible
          }, dropdownContainerProps, {
            onFocus: forkFocus(dropdownContainerProps, _this2.handleFocus),
            onBlur: forkBlur(dropdownContainerProps, _this2.handleBlur)
          }), /*#__PURE__*/React.createElement(Select, _extends({
            "aria-label": _this2.constructAriaWayfinderLabel(locale, 'page'),
            options: options,
            labelKey: "label",
            valueKey: "label",
            onChange: _this2.onMenuItemSelect,
            searchable: false,
            clearable: false,
            value: [{
              label: currentPage
            }],
            maxDropdownHeight: "200px",
            size: size,
            overrides: {
              ControlContainer: {
                style: function style(_ref) {
                  var $theme = _ref.$theme,
                      $disabled = _ref.$disabled,
                      $isOpen = _ref.$isOpen,
                      $error = _ref.$error;
                  return {
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    boxShadow: 'none',
                    backgroundColor: $disabled ? $theme.colors.buttonDisabledFill : $isOpen ? $theme.colors.buttonTertiaryHover : $error ? $theme.colors.negative50 : $theme.colors.buttonTertiaryFill,
                    ':hover': {
                      backgroundColor: $theme.colors.buttonTertiaryHover
                    }
                  };
                }
              },
              InputContainer: {
                style: {
                  marginLeft: 0
                }
              },
              ValueContainer: {
                style: {
                  flexBasis: 'auto'
                }
              },
              SingleValue: {
                style: function style(_ref2) {
                  var $theme = _ref2.$theme;
                  return _objectSpread(_objectSpread({
                    position: 'relative',
                    paddingTop: '0',
                    paddingBottom: '0',
                    paddingLeft: $theme.sizing.scale200,
                    paddingRight: $theme.sizing.scale500,
                    color: $theme.colors.buttonTertiaryText
                  }, $theme.typography.font350), {}, {
                    lineHeight: 'unset'
                  });
                }
              },
              SelectArrow: {
                style: function style(_ref3) {
                  var $theme = _ref3.$theme;
                  return {
                    width: '24px',
                    height: '24px',
                    color: $theme.colors.buttonTertiaryText
                  };
                }
              }
            }
          }, selectProps))), /*#__PURE__*/React.createElement(MaxLabel, _extends({}, maxLabelProps, {
            "aria-hidden": true
          }), "".concat(labels && labels.preposition ? labels.preposition : locale.pagination.preposition || '', " ").concat(numPages)), /*#__PURE__*/React.createElement(Button, {
            "aria-label": _this2.constructAriaWayfinderLabel(locale, 'next page. current page'),
            disabled: currentPage >= numPages,
            onClick: _this2.onNextClick,
            endEnhancer: function endEnhancer() {
              return theme.direction === 'rtl' ? /*#__PURE__*/React.createElement(ChevronLeft, {
                title: '',
                size: 24
              }) : /*#__PURE__*/React.createElement(ChevronRight, {
                title: '',
                size: 24
              });
            },
            kind: KIND.tertiary,
            overrides: {
              BaseButton: overrides.NextButton
            },
            size: size
          }, labels && labels.nextButton ? labels.nextButton : locale.pagination.next));
        });
      });
    }
  }]);

  return Pagination;
}(React.PureComponent);

_defineProperty(Pagination, "defaultProps", {
  labels: {},
  overrides: {}
});

export { Pagination as default };