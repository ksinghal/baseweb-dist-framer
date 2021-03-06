function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import Week from './week.js';
import { StyledMonth } from './styled-components.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { getOverrides } from '../helpers/overrides.js';
var defaultProps = {
  dateLabel: null,
  excludeDates: null,
  filterDate: null,
  highlightDates: null,
  includeDates: null,
  locale: null,
  maxDate: null,
  minDate: null,
  month: null,
  adapter: dateFnsAdapter,
  onDayClick: function onDayClick() {},
  onDayFocus: function onDayFocus() {},
  onDayBlur: function onDayBlur() {},
  onDayMouseOver: function onDayMouseOver() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  overrides: {},
  peekNextMonth: false,
  value: null
};
var CALENDAR_MAX_ROWS = 6;

var CalendarMonth = /*#__PURE__*/function (_React$Component) {
  _inherits(CalendarMonth, _React$Component);

  var _super = _createSuper(CalendarMonth);

  function CalendarMonth(props) {
    var _this;

    _classCallCheck(this, CalendarMonth);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "getDateProp", function () {
      return _this.props.date || _this.dateHelpers.date();
    });

    _defineProperty(_assertThisInitialized(_this), "isWeekInMonth", function (startOfWeek) {
      var date = _this.getDateProp();

      var endOfWeek = _this.dateHelpers.addDays(startOfWeek, 6);

      return _this.dateHelpers.isSameMonth(startOfWeek, date) || _this.dateHelpers.isSameMonth(endOfWeek, date);
    });

    _defineProperty(_assertThisInitialized(_this), "renderWeeks", function () {
      var weeks = [];

      var currentWeekStart = _this.dateHelpers.getStartOfWeek(_this.dateHelpers.getStartOfMonth(_this.getDateProp()), _this.props.locale);

      var i = 0;
      var isWithinMonth = true;

      while (isWithinMonth || _this.props.fixedHeight && _this.props.peekNextMonth && i < CALENDAR_MAX_ROWS) {
        weeks.push( /*#__PURE__*/React.createElement(Week, {
          adapter: _this.props.adapter,
          date: currentWeekStart,
          dateLabel: _this.props.dateLabel,
          excludeDates: _this.props.excludeDates,
          filterDate: _this.props.filterDate,
          highlightedDate: _this.props.highlightedDate,
          includeDates: _this.props.includeDates,
          focusedCalendar: _this.props.focusedCalendar,
          range: _this.props.range,
          key: i,
          locale: _this.props.locale,
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          month: _this.dateHelpers.getMonth(_this.getDateProp()),
          onDayBlur: _this.props.onDayBlur,
          onDayFocus: _this.props.onDayFocus,
          onDayClick: _this.props.onDayClick,
          onDayMouseOver: _this.props.onDayMouseOver,
          onDayMouseLeave: _this.props.onDayMouseLeave,
          onChange: _this.props.onChange,
          overrides: _this.props.overrides,
          peekNextMonth: _this.props.peekNextMonth,
          value: _this.props.value
        }));
        i++;
        currentWeekStart = _this.dateHelpers.addWeeks(currentWeekStart, 1); // It will break on the next week if the week is out of the month

        isWithinMonth = _this.isWeekInMonth(currentWeekStart);
      }

      return weeks;
    });

    _this.dateHelpers = new DateHelpers(props.adapter);
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: "render",
    value: function render() {
      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = getOverrides(overrides.Month, StyledMonth),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Month = _getOverrides2[0],
          monthProps = _getOverrides2[1];

      return /*#__PURE__*/React.createElement(Month, monthProps, this.renderWeeks());
    }
  }]);

  return CalendarMonth;
}(React.Component);

_defineProperty(CalendarMonth, "defaultProps", defaultProps);

export { CalendarMonth as default };