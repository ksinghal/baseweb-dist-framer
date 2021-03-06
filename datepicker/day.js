function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { StyledDay, StyledDayLabel } from './styled-components.js';
import dateFnsAdapter from './utils/date-fns-adapter.js';
import DateHelpers from './utils/date-helpers.js';
import { getOverrides } from '../helpers/overrides.js';
import { LocaleContext } from '../locale/index.js';
import { isFocusVisible } from '../utils/focusVisible.js';

var Day = /*#__PURE__*/function (_React$Component) {
  _inherits(Day, _React$Component);

  var _super = _createSuper(Day);

  function Day(props) {
    var _this;

    _classCallCheck(this, Day);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dayElm", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHovered: false,
      isFocusVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "getDateProp", function () {
      return _this.props.date === undefined ? _this.dateHelpers.date() : _this.props.date;
    });

    _defineProperty(_assertThisInitialized(_this), "getMonthProp", function () {
      return _this.props.month === undefined || _this.props.month === null ? _this.dateHelpers.getMonth(_this.getDateProp()) : _this.props.month;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (selectedDate) {
      var _this$props = _this.props,
          range = _this$props.range,
          value = _this$props.value;
      var date;

      if (Array.isArray(value) && range) {
        if (!value.length || value.length > 1) {
          date = [selectedDate];
        } else if (_this.dateHelpers.isAfter(selectedDate, value[0])) {
          date = [value[0], selectedDate];
        } else {
          date = [selectedDate, value[0]];
        }
      } else {
        date = selectedDate;
      }

      _this.props.onSelect({
        date: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var date = _this.getDateProp();

      var _this$props2 = _this.props,
          highlighted = _this$props2.highlighted,
          disabled = _this$props2.disabled;

      if (event.key === 'Enter' && highlighted && !disabled) {
        event.preventDefault();

        _this.onSelect(date);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var date = _this.getDateProp();

      var disabled = _this.props.disabled;

      if (!disabled) {
        _this.props.onClick({
          event: event,
          date: date
        });

        _this.onSelect(date);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      if (isFocusVisible(event)) {
        _this.setState({
          isFocusVisible: true
        });
      }

      _this.props.onFocus({
        event: event,
        date: _this.getDateProp()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      if (_this.state.isFocusVisible !== false) {
        _this.setState({
          isFocusVisible: false
        });
      }

      _this.props.onBlur({
        event: event,
        date: _this.getDateProp()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (event) {
      _this.setState({
        isHovered: true
      });

      _this.props.onMouseOver({
        event: event,
        date: _this.getDateProp()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (event) {
      _this.setState({
        isHovered: false
      });

      _this.props.onMouseLeave({
        event: event,
        date: _this.getDateProp()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isOutsideMonth", function () {
      var month = _this.getMonthProp();

      return month !== undefined && month !== _this.dateHelpers.getMonth(_this.getDateProp());
    });

    _defineProperty(_assertThisInitialized(_this), "getOrderedDates", function () {
      var _this$props3 = _this.props,
          highlightedDate = _this$props3.highlightedDate,
          value = _this$props3.value;

      if (!value || !Array.isArray(value) || !value[0] || !value[1] && !highlightedDate) {
        return [];
      }

      var firstValue = value[0];
      var secondValue = value.length > 1 && value[1] ? value[1] : highlightedDate;

      if (!firstValue || !secondValue) {
        return [];
      }

      var firstDate = _this.clampToDayStart(firstValue);

      var secondDate = _this.clampToDayStart(secondValue);

      return _this.dateHelpers.isAfter(firstDate, secondDate) ? [secondDate, firstDate] : [firstDate, secondDate];
    });

    _defineProperty(_assertThisInitialized(_this), "isOutsideOfMonthButWithinRange", function () {
      var date = _this.clampToDayStart(_this.getDateProp());

      var dates = _this.getOrderedDates();

      if (dates.length < 2 || _this.dateHelpers.isSameDay(dates[0], dates[1])) {
        return false;
      }

      var day = _this.dateHelpers.getDate(date);
      /**
       * Empty days (no number label) at the beginning/end of the month should be included
       * within the range if the last day of a month and the first day of the next month are
       * within the range.
       */


      if (day > 15) {
        var firstDayOfNextMonth = _this.clampToDayStart(_this.dateHelpers.addDays(_this.dateHelpers.getEndOfMonth(date), 1));

        return _this.dateHelpers.isOnOrBeforeDay(dates[0], _this.dateHelpers.getEndOfMonth(date)) && _this.dateHelpers.isOnOrAfterDay(dates[1], firstDayOfNextMonth);
      } else {
        var lastDayOfPreviousMonth = _this.clampToDayStart(_this.dateHelpers.subDays(_this.dateHelpers.getStartOfMonth(date), 1));

        return _this.dateHelpers.isOnOrAfterDay(dates[1], _this.dateHelpers.getStartOfMonth(date)) && _this.dateHelpers.isOnOrBeforeDay(dates[0], lastDayOfPreviousMonth);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clampToDayStart", function (dt) {
      var _this$dateHelpers = _this.dateHelpers,
          setSeconds = _this$dateHelpers.setSeconds,
          setMinutes = _this$dateHelpers.setMinutes,
          setHours = _this$dateHelpers.setHours;
      return setSeconds(setMinutes(setHours(dt, 0), 0), 0);
    });

    _this.dateHelpers = new DateHelpers(props.adapter);
    return _this;
  }

  _createClass(Day, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.dayElm && this.props.focusedCalendar) {
        if (this.props.highlighted || !this.props.highlightedDate && this.isSelected()) {
          this.dayElm.focus();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.dayElm && this.props.focusedCalendar) {
        if (this.props.highlighted || !this.props.highlightedDate && this.isSelected()) {
          this.dayElm.focus();
        }
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      var date = this.getDateProp();
      var value = this.props.value;

      if (Array.isArray(value)) {
        return this.dateHelpers.isSameDay(date, value[0]) || this.dateHelpers.isSameDay(date, value[1]);
      } else {
        return this.dateHelpers.isSameDay(date, value);
      }
    }
  }, {
    key: "isPseudoSelected",
    value: // calculated for range case only
    function isPseudoSelected() {
      var date = this.getDateProp();
      var value = this.props.value;

      if (Array.isArray(value) && !value[0] && !value[1]) {
        return false;
      } // fix flow by passing a specific arg type and remove 'Array.isArray(value)'


      if (Array.isArray(value) && value.length > 1) {
        return this.dateHelpers.isDayInRange(this.clampToDayStart(date), this.clampToDayStart(value[0]), this.clampToDayStart(value[1]));
      }
    } // calculated for range case only

  }, {
    key: "isPseudoHighlighted",
    value: function isPseudoHighlighted() {
      var date = this.getDateProp();
      var _this$props4 = this.props,
          value = _this$props4.value,
          highlightedDate = _this$props4.highlightedDate;

      if (Array.isArray(value) && !value[0] && !value[1]) {
        return false;
      } // fix flow by passing a specific arg type and remove 'Array.isArray(value)'


      if (Array.isArray(value) && highlightedDate && value[0] && !value[1]) {
        if (this.dateHelpers.isAfter(highlightedDate, value[0])) {
          return this.dateHelpers.isDayInRange(this.clampToDayStart(date), this.clampToDayStart(value[0]), this.clampToDayStart(highlightedDate));
        } else {
          return this.dateHelpers.isDayInRange(this.clampToDayStart(date), this.clampToDayStart(highlightedDate), this.clampToDayStart(value[0]));
        }
      }
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var date = this.getDateProp();
      var _this$props5 = this.props,
          value = _this$props5.value,
          highlightedDate = _this$props5.highlightedDate,
          range = _this$props5.range,
          highlighted = _this$props5.highlighted;
      var $isHighlighted = highlighted;
      var $selected = this.isSelected();
      var $hasRangeHighlighted = !!(Array.isArray(value) && range && value.length === 1 && highlightedDate && !this.dateHelpers.isSameDay(value[0], highlightedDate));
      var $outsideMonth = !this.props.peekNextMonth && this.isOutsideMonth();
      var $outsideMonthWithinRange = !!(Array.isArray(value) && range && $outsideMonth && !this.props.peekNextMonth && this.isOutsideOfMonthButWithinRange());
      return {
        $date: date,
        $disabled: this.props.disabled,
        $endDate: Array.isArray(value) && this.props.range && $selected && this.dateHelpers.isSameDay(date, value[1]) || false,
        $hasDateLabel: !!this.props.dateLabel,
        $hasRangeHighlighted: $hasRangeHighlighted,
        $hasRangeOnRight: Array.isArray(value) && $hasRangeHighlighted && highlightedDate && value[0] && this.dateHelpers.isAfter(highlightedDate, value[0]),
        $hasRangeSelected: Array.isArray(value) ? value.length === 2 : false,
        $highlightedDate: highlightedDate,
        $isHighlighted: $isHighlighted,
        $isHovered: this.state.isHovered,
        $isFocusVisible: this.state.isFocusVisible,
        $startOfMonth: this.dateHelpers.isStartOfMonth(date),
        $endOfMonth: this.dateHelpers.isEndOfMonth(date),
        $month: this.getMonthProp(),
        $outsideMonth: $outsideMonth,
        $outsideMonthWithinRange: $outsideMonthWithinRange,
        $peekNextMonth: this.props.peekNextMonth,
        $pseudoHighlighted: this.props.range && !$isHighlighted && !$selected ? this.isPseudoHighlighted() : false,
        $pseudoSelected: this.props.range && !$selected ? this.isPseudoSelected() : false,
        $range: this.props.range,
        $selected: $selected,
        $startDate: Array.isArray(this.props.value) && this.props.value.length > 1 && this.props.range && $selected ? this.dateHelpers.isSameDay(date, this.props.value[0]) : false
      };
    }
  }, {
    key: "getAriaLabel",
    value: function getAriaLabel(sharedProps, localeContext) {
      var date = this.getDateProp();
      return "".concat(sharedProps.$selected ? sharedProps.$range ? sharedProps.$endDate ? localeContext.datepicker.selectedEndDateLabel : localeContext.datepicker.selectedStartDateLabel : localeContext.datepicker.selectedLabel : sharedProps.$disabled ? localeContext.datepicker.dateNotAvailableLabel : localeContext.datepicker.chooseLabel, " ").concat(this.dateHelpers.format(date, 'fullOrdinalWeek', this.props.locale), ". ").concat(!sharedProps.$disabled ? localeContext.datepicker.dateAvailableLabel : '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var date = this.getDateProp();
      var _this$props6 = this.props,
          peekNextMonth = _this$props6.peekNextMonth,
          _this$props6$override = _this$props6.overrides,
          overrides = _this$props6$override === void 0 ? {} : _this$props6$override;
      var sharedProps = this.getSharedProps();

      var _getOverrides = getOverrides(overrides.Day, StyledDay),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          _Day = _getOverrides2[0],
          dayProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.DayLabel, StyledDayLabel),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          DayLabel = _getOverrides4[0],
          dayLabelProps = _getOverrides4[1];

      var dateLabel = this.props.dateLabel && this.props.dateLabel(date);
      return !peekNextMonth && sharedProps.$outsideMonth ? /*#__PURE__*/React.createElement(_Day, _extends({
        role: "gridcell"
      }, sharedProps, dayProps, {
        onFocus: this.onFocus,
        onBlur: this.onBlur
      })) :
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
      React.createElement(LocaleContext.Consumer, null, function (locale) {
        return /*#__PURE__*/React.createElement(_Day, _extends({
          "aria-label": _this2.getAriaLabel(sharedProps, locale),
          ref: function ref(dayElm) {
            _this2.dayElm = dayElm;
          },
          role: "gridcell",
          "aria-roledescription": "button",
          tabIndex: _this2.props.highlighted || !_this2.props.highlightedDate && _this2.isSelected() ? 0 : -1
        }, sharedProps, dayProps, {
          // Adding event handlers after customers overrides in order to
          // make sure the components functions as expected
          // We can extract the handlers from props overrides
          // and call it along with internal handlers by creating an inline handler
          onFocus: _this2.onFocus,
          onBlur: _this2.onBlur,
          onClick: _this2.onClick,
          onKeyDown: _this2.onKeyDown,
          onMouseOver: _this2.onMouseOver,
          onMouseLeave: _this2.onMouseLeave
        }), /*#__PURE__*/React.createElement("div", null, _this2.dateHelpers.getDate(date)), dateLabel ? /*#__PURE__*/React.createElement(DayLabel, _extends({}, sharedProps, dayLabelProps), dateLabel) : null);
      });
    }
  }]);

  return Day;
}(React.Component);

_defineProperty(Day, "defaultProps", {
  disabled: false,
  highlighted: false,
  range: false,
  adapter: dateFnsAdapter,
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseOver: function onMouseOver() {},
  onMouseLeave: function onMouseLeave() {},
  overrides: {},
  peekNextMonth: true,
  value: null
});

export { Day as default };