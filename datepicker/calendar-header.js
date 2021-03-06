function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import ChevronRight from '../icon/chevron-right.js';
import ChevronLeft from '../icon/chevron-left.js';
import ChevronDown from '../icon/chevron-down.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { getFilteredMonthItems } from './utils/calendar-header-helpers.js';
import { StatefulMenu } from '../menu/index.js';
import { Popover } from '../popover/index.js';
import { LocaleContext } from '../locale/index.js';
import { ThemeContext } from '../styles/theme-provider.js';
import { StyledCalendarHeader, StyledPrevButton, StyledNextButton, StyledMonthHeader, StyledWeekdayHeader, StyledMonthYearSelectButton, StyledMonthYearSelectIconContainer } from './styled-components.js';
import { ORIENTATION, WEEKDAYS } from './constants.js';
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var navBtnStyle = function navBtnStyle(_ref) {
  var $theme = _ref.$theme;
  return {
    cursor: 'pointer'
  };
};

var MIN_YEAR = 2000;
var MAX_YEAR = 2030;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var DIRECTION = {
  NEXT: 'next',
  PREVIOUS: 'previous'
};

function idToYearMonth(id) {
  return id.split('-').map(Number);
}

var CalendarHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(CalendarHeader, _React$Component);

  var _super = _createSuper(CalendarHeader);

  function CalendarHeader(props) {
    var _this;

    _classCallCheck(this, CalendarHeader);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "monthItems", void 0);

    _defineProperty(_assertThisInitialized(_this), "yearItems", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMonthDropdownOpen: false,
      isYearDropdownOpen: false,
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "getDateProp", function () {
      return _this.props.date || _this.dateHelpers.date();
    });

    _defineProperty(_assertThisInitialized(_this), "getYearItems", function () {
      var date = _this.getDateProp();

      var maxDate = _this.props.maxDate;
      var minDate = _this.props.minDate;
      var maxYear = maxDate ? _this.dateHelpers.getYear(maxDate) : MAX_YEAR;
      var minYear = minDate ? _this.dateHelpers.getYear(minDate) : MIN_YEAR;

      var selectedMonth = _this.dateHelpers.getMonth(date); // TODO: this logic can be optimized to only run when minDate / maxDate change


      _this.yearItems = Array.from({
        length: maxYear - minYear + 1
      }, function (_, i) {
        return minYear + i;
      }).map(function (year) {
        return {
          id: year.toString(),
          label: year.toString()
        };
      });
      var monthOfMaxDate = maxDate ? _this.dateHelpers.getMonth(maxDate) : MAX_MONTH;
      var monthOfMinDate = minDate ? _this.dateHelpers.getMonth(minDate) : MIN_MONTH; // Generates array like [0,1,.... monthOfMaxDate]

      var maxYearMonths = Array.from({
        length: monthOfMaxDate + 1
      }, function (x, i) {
        return i;
      }); // Generates array like [monthOfMinDate, ...., 10, 11]

      var minYearMonths = Array.from({
        length: 12 - monthOfMinDate
      }, function (x, i) {
        return i + monthOfMinDate;
      });

      if (selectedMonth > maxYearMonths[maxYearMonths.length - 1]) {
        var lastIdx = _this.yearItems.length - 1;
        _this.yearItems[lastIdx] = _objectSpread(_objectSpread({}, _this.yearItems[lastIdx]), {}, {
          disabled: true
        });
      }

      if (selectedMonth < minYearMonths[0]) {
        _this.yearItems[0] = _objectSpread(_objectSpread({}, _this.yearItems[0]), {}, {
          disabled: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMonthItems", function () {
      var date = _this.getDateProp();

      var year = _this.dateHelpers.getYear(date);

      var maxDate = _this.props.maxDate;
      var minDate = _this.props.minDate;
      var maxYear = maxDate ? _this.dateHelpers.getYear(maxDate) : MAX_YEAR;
      var minYear = minDate ? _this.dateHelpers.getYear(minDate) : MIN_YEAR;
      var monthOfMaxDate = maxDate ? _this.dateHelpers.getMonth(maxDate) : MAX_MONTH; // Generates array like [0,1,.... monthOfMaxDate]

      var maxYearMonths = Array.from({
        length: monthOfMaxDate + 1
      }, function (x, i) {
        return i;
      });
      var monthOfMinDate = minDate ? _this.dateHelpers.getMonth(minDate) : MIN_MONTH; // Generates array like [monthOfMinDate, ...., 10, 11]

      var minYearMonths = Array.from({
        length: 12 - monthOfMinDate
      }, function (x, i) {
        return i + monthOfMinDate;
      });
      var maxMinYearMonthsIntersection = maxYearMonths.filter(function (year) {
        return minYearMonths.includes(year);
      });
      var filterMonthsList = year === maxYear && year === minYear ? maxMinYearMonthsIntersection : year === maxYear ? maxYearMonths : year === minYear ? minYearMonths : null;

      var formatMonthLabel = function formatMonthLabel(month) {
        return _this.dateHelpers.getMonthInLocale(month, _this.props.locale);
      };

      _this.monthItems = getFilteredMonthItems({
        filterMonthsList: filterMonthsList,
        formatMonthLabel: formatMonthLabel
      });
    });

    _defineProperty(_assertThisInitialized(_this), "increaseMonth", function () {
      if (_this.props.onMonthChange) {
        // $FlowFixMe
        _this.props.onMonthChange({
          date: _this.dateHelpers.addMonths(_this.getDateProp(), // in a multi-month context, `order` is the number months ahead of
          // the root Calendar month that this CalendarHeader displays. We account
          // for this by incrementing the month by 1, less the value of `order`.
          1 - _this.props.order)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseMonth", function () {
      if (_this.props.onMonthChange) {
        // $FlowFixMe
        _this.props.onMonthChange({
          date: _this.dateHelpers.subMonths(_this.getDateProp(), 1)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isMultiMonthHorizontal", function () {
      var _this$props = _this.props,
          monthsShown = _this$props.monthsShown,
          orientation = _this$props.orientation;

      if (!monthsShown) {
        return false;
      }

      return orientation === ORIENTATION.horizontal && monthsShown > 1;
    });

    _defineProperty(_assertThisInitialized(_this), "isHiddenPaginationButton", function (direction) {
      var _this$props2 = _this.props,
          monthsShown = _this$props2.monthsShown,
          order = _this$props2.order;

      if (monthsShown && _this.isMultiMonthHorizontal()) {
        if (direction === DIRECTION.NEXT) {
          var isLastMonth = order === monthsShown - 1;
          return !isLastMonth;
        } else {
          var isFirstMonth = order === 0;
          return !isFirstMonth;
        }
      }

      return false;
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

    _defineProperty(_assertThisInitialized(_this), "renderPreviousMonthButton", function (_ref2) {
      var locale = _ref2.locale,
          theme = _ref2.theme;

      var date = _this.getDateProp();

      var _this$props$overrides = _this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var allPrevDaysDisabled = _this.dateHelpers.monthDisabledBefore(date, _this.props);

      var isDisabled = false;

      if (allPrevDaysDisabled) {
        isDisabled = true;
      }

      var nextMonth = _this.dateHelpers.subMonths(date, 1);

      var minYear = _this.props.minDate ? _this.dateHelpers.getYear(_this.props.minDate) : MIN_YEAR;

      if (_this.dateHelpers.getYear(nextMonth) < minYear) {
        isDisabled = true;
      }

      var isHidden = _this.isHiddenPaginationButton(DIRECTION.PREVIOUS);

      if (isHidden) {
        isDisabled = true;
      }

      var _getOverrides = getOverrides(overrides.PrevButton, StyledPrevButton),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          PrevButton = _getOverrides2[0],
          prevButtonProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.PrevButtonIcon, theme.direction === 'rtl' ? ChevronRight : ChevronLeft),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          PrevButtonIcon = _getOverrides4[0],
          prevButtonIconProps = _getOverrides4[1];

      var clickHandler = _this.decreaseMonth;

      if (allPrevDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(PrevButton, _extends({
        "aria-label": locale.datepicker.previousMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        $isFocusVisible: _this.state.isFocusVisible,
        type: "button",
        $disabled: isDisabled,
        $order: _this.props.order
      }, prevButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(PrevButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, prevButtonIconProps)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderNextMonthButton", function (_ref3) {
      var locale = _ref3.locale,
          theme = _ref3.theme;

      var date = _this.getDateProp();

      var _this$props$overrides2 = _this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;

      var allNextDaysDisabled = _this.dateHelpers.monthDisabledAfter(date, _this.props);

      var isDisabled = false;

      if (allNextDaysDisabled) {
        isDisabled = true;
      }

      var nextMonth = _this.dateHelpers.addMonths(date, 1);

      var maxYear = _this.props.maxDate ? _this.dateHelpers.getYear(_this.props.maxDate) : MAX_YEAR;

      if (_this.dateHelpers.getYear(nextMonth) > maxYear) {
        isDisabled = true;
      }

      var isHidden = _this.isHiddenPaginationButton(DIRECTION.NEXT);

      if (isHidden) {
        isDisabled = true;
      }

      var _getOverrides5 = getOverrides(overrides.NextButton, StyledNextButton),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          NextButton = _getOverrides6[0],
          nextButtonProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.NextButtonIcon, theme.direction === 'rtl' ? ChevronLeft : ChevronRight),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          NextButtonIcon = _getOverrides8[0],
          nextButtonIconProps = _getOverrides8[1];

      var clickHandler = _this.increaseMonth; // The other option is to always provide a click handler and let customers
      // override its functionality based on the `$allPrevDaysDisabled` prop
      // in a custom NextButton component override
      // Their options would be to render `null` or not apply the components handler
      // on click or do nothing

      if (allNextDaysDisabled) {
        clickHandler = null;
      }

      return /*#__PURE__*/React.createElement(NextButton, _extends({
        "aria-label": locale.datepicker.nextMonth,
        tabIndex: 0,
        onClick: clickHandler,
        disabled: isDisabled,
        type: "button",
        $disabled: isDisabled,
        $isFocusVisible: _this.state.isFocusVisible,
        $order: _this.props.order
      }, nextButtonProps), isHidden ? null : /*#__PURE__*/React.createElement(NextButtonIcon, _extends({
        size: '24px',
        overrides: {
          Svg: {
            style: navBtnStyle
          }
        }
      }, nextButtonIconProps)));
    });

    _defineProperty(_assertThisInitialized(_this), "canArrowsOpenDropdown", function (event) {
      if (!_this.state.isMonthDropdownOpen && !_this.state.isYearDropdownOpen) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
          return true;
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthYearDropdown", function () {
      var date = _this.getDateProp();

      var month = _this.dateHelpers.getMonth(date);

      var year = _this.dateHelpers.getYear(date);

      var _this$props3 = _this.props,
          locale = _this$props3.locale,
          _this$props3$override = _this$props3.overrides,
          overrides = _this$props3$override === void 0 ? {} : _this$props3$override;

      var _getOverrides9 = getOverrides(overrides.MonthYearSelectButton, StyledMonthYearSelectButton),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          MonthYearSelectButton = _getOverrides10[0],
          monthYearSelectButtonProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.MonthYearSelectIconContainer, StyledMonthYearSelectIconContainer),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          MonthYearSelectIconContainer = _getOverrides12[0],
          monthYearSelectIconContainerProps = _getOverrides12[1];

      var _getOverrides13 = getOverrides(overrides.MonthYearSelectPopover, Popover),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          OverriddenPopover = _getOverrides14[0],
          popoverProps = _getOverrides14[1];

      var _getOverrides15 = getOverrides(overrides.MonthYearSelectStatefulMenu, StatefulMenu),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          OverriddenStatefulMenu = _getOverrides16[0],
          menuProps = _getOverrides16[1];

      var menuOverrides = mergeOverrides({
        List: {
          style: {
            height: 'auto',
            maxHeight: '257px'
          }
        }
      }, // $FlowFixMe
      menuProps && menuProps.overrides); // $FlowFixMe

      menuProps.overrides = menuOverrides;

      var initialMonthIndex = _this.monthItems.findIndex(function (month) {
        return month.id === _this.dateHelpers.getMonth(date).toString();
      });

      var initialYearIndex = _this.yearItems.findIndex(function (year) {
        return year.id === _this.dateHelpers.getYear(date).toString();
      });

      var monthTitle = "".concat(_this.dateHelpers.getMonthInLocale(_this.dateHelpers.getMonth(date), locale));
      var yearTitle = "".concat(_this.dateHelpers.getYear(date));
      return _this.isMultiMonthHorizontal() ? /*#__PURE__*/React.createElement("div", null, "".concat(monthTitle, " ").concat(yearTitle)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OverriddenPopover, _extends({
        placement: "bottom",
        autoFocus: true,
        focusLock: true,
        isOpen: _this.state.isMonthDropdownOpen,
        onClick: function onClick() {
          _this.setState(function (prev) {
            return {
              isMonthDropdownOpen: !prev.isMonthDropdownOpen
            };
          });
        },
        onClickOutside: function onClickOutside() {
          return _this.setState({
            isMonthDropdownOpen: false
          });
        },
        onEsc: function onEsc() {
          return _this.setState({
            isMonthDropdownOpen: false
          });
        },
        content: function content() {
          return /*#__PURE__*/React.createElement(OverriddenStatefulMenu, _extends({
            initialState: {
              highlightedIndex: initialMonthIndex,
              isFocused: true
            },
            items: _this.monthItems,
            onItemSelect: function onItemSelect(_ref4) {
              var item = _ref4.item,
                  event = _ref4.event;
              event.preventDefault();
              var month = idToYearMonth(item.id);

              var updatedDate = _this.dateHelpers.set(date, {
                year: year,
                month: month
              });

              _this.props.onMonthChange && _this.props.onMonthChange({
                date: updatedDate
              });

              _this.setState({
                isMonthDropdownOpen: false
              });
            }
          }, menuProps));
        }
      }, popoverProps), /*#__PURE__*/React.createElement(MonthYearSelectButton, _extends({
        "aria-live": "polite",
        type: "button",
        $isFocusVisible: _this.state.isFocusVisible,
        onKeyUp: function onKeyUp(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            _this.setState({
              isMonthDropdownOpen: true
            });
          }
        },
        onKeyDown: function onKeyDown(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            // disables page scroll
            event.preventDefault();
          }

          if (event.key === 'Tab') {
            _this.setState({
              isMonthDropdownOpen: false
            });
          }
        }
      }, monthYearSelectButtonProps), monthTitle, /*#__PURE__*/React.createElement(MonthYearSelectIconContainer, monthYearSelectIconContainerProps, /*#__PURE__*/React.createElement(ChevronDown, {
        title: "",
        overrides: {
          Svg: {
            props: {
              role: 'presentation'
            }
          }
        }
      })))), /*#__PURE__*/React.createElement(OverriddenPopover, _extends({
        placement: "bottom",
        focusLock: true,
        isOpen: _this.state.isYearDropdownOpen,
        onClick: function onClick() {
          _this.setState(function (prev) {
            return {
              isYearDropdownOpen: !prev.isYearDropdownOpen
            };
          });
        },
        onClickOutside: function onClickOutside() {
          return _this.setState({
            isYearDropdownOpen: false
          });
        },
        onEsc: function onEsc() {
          return _this.setState({
            isYearDropdownOpen: false
          });
        },
        content: function content() {
          return /*#__PURE__*/React.createElement(OverriddenStatefulMenu, _extends({
            initialState: {
              highlightedIndex: initialYearIndex,
              isFocused: true
            },
            items: _this.yearItems,
            onItemSelect: function onItemSelect(_ref5) {
              var item = _ref5.item,
                  event = _ref5.event;
              event.preventDefault();
              var year = idToYearMonth(item.id);

              var updatedDate = _this.dateHelpers.set(date, {
                year: year,
                month: month
              });

              _this.props.onYearChange && _this.props.onYearChange({
                date: updatedDate
              });

              _this.setState({
                isYearDropdownOpen: false
              });
            }
          }, menuProps));
        }
      }, popoverProps), /*#__PURE__*/React.createElement(MonthYearSelectButton, _extends({
        "aria-live": "polite",
        type: "button",
        $isFocusVisible: _this.state.isFocusVisible,
        onKeyUp: function onKeyUp(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            _this.setState({
              isYearDropdownOpen: true
            });
          }
        },
        onKeyDown: function onKeyDown(event) {
          if (_this.canArrowsOpenDropdown(event)) {
            // disables page scroll
            event.preventDefault();
          }

          if (event.key === 'Tab') {
            _this.setState({
              isYearDropdownOpen: false
            });
          }
        }
      }, monthYearSelectButtonProps), yearTitle, /*#__PURE__*/React.createElement(MonthYearSelectIconContainer, monthYearSelectIconContainerProps, /*#__PURE__*/React.createElement(ChevronDown, {
        title: "",
        overrides: {
          Svg: {
            props: {
              role: 'presentation'
            }
          }
        }
      })))));
    });

    _this.dateHelpers = new DateHelpers(props.adapter);
    _this.monthItems = [];
    _this.yearItems = [];
    return _this;
  }

  _createClass(CalendarHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getYearItems();
      this.getMonthItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectedMonthDidChange = this.dateHelpers.getMonth(this.props.date) !== this.dateHelpers.getMonth(prevProps.date);
      var selectedYearDidChange = this.dateHelpers.getYear(this.props.date) !== this.dateHelpers.getYear(prevProps.date);

      if (selectedMonthDidChange) {
        // re-calculate yearItems
        this.getYearItems();
      }

      if (selectedYearDidChange) {
        // re-calculate monthItems
        this.getMonthItems();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides3 = this.props.overrides,
          overrides = _this$props$overrides3 === void 0 ? {} : _this$props$overrides3;

      var _getOverrides17 = getOverrides(overrides.CalendarHeader, StyledCalendarHeader),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          _CalendarHeader = _getOverrides18[0],
          calendarHeaderProps = _getOverrides18[1];

      var _getOverrides19 = getOverrides(overrides.MonthHeader, StyledMonthHeader),
          _getOverrides20 = _slicedToArray(_getOverrides19, 2),
          MonthHeader = _getOverrides20[0],
          monthHeaderProps = _getOverrides20[1];

      var _getOverrides21 = getOverrides(overrides.WeekdayHeader, StyledWeekdayHeader),
          _getOverrides22 = _slicedToArray(_getOverrides21, 2),
          WeekdayHeader = _getOverrides22[0],
          weekdayHeaderProps = _getOverrides22[1];

      var startOfWeek = this.dateHelpers.getStartOfWeek(this.getDateProp(), this.props.locale);
      return /*#__PURE__*/React.createElement(ThemeContext.Consumer, null, function (theme) {
        return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_CalendarHeader, _extends({}, calendarHeaderProps, {
            onFocus: forkFocus(calendarHeaderProps, _this2.handleFocus),
            onBlur: forkBlur(calendarHeaderProps, _this2.handleBlur)
          }), _this2.renderPreviousMonthButton({
            locale: locale,
            theme: theme
          }), _this2.renderMonthYearDropdown(), _this2.renderNextMonthButton({
            locale: locale,
            theme: theme
          })), /*#__PURE__*/React.createElement(MonthHeader, _extends({
            role: "presentation"
          }, monthHeaderProps), WEEKDAYS.map(function (offset) {
            var day = _this2.dateHelpers.addDays(startOfWeek, offset);

            return /*#__PURE__*/React.createElement(WeekdayHeader, _extends({
              key: offset,
              alt: _this2.dateHelpers.getWeekdayInLocale(day, _this2.props.locale)
            }, weekdayHeaderProps), _this2.dateHelpers.getWeekdayMinInLocale(day, _this2.props.locale));
          })));
        });
      });
    }
  }]);

  return CalendarHeader;
}(React.Component);

_defineProperty(CalendarHeader, "defaultProps", {
  adapter: dateFnsAdapter,
  locale: null,
  maxDate: null,
  minDate: null,
  onYearChange: function onYearChange() {},
  overrides: {}
});

export { CalendarHeader as default };