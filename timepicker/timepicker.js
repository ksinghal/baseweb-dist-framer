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
import { getOverrides, mergeOverrides } from '../helpers/overrides.js';
import { LocaleContext } from '../locale/index.js';
import { filterOptions, Select } from '../select/index.js';
import DateHelpers from '../datepicker/utils/date-helpers.js';
import dateFnsAdapter from '../datepicker/utils/date-fns-adapter.js';
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var NOON = DAY / 2;

var TimePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  var _super = _createSuper(TimePicker);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "dateHelpers", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      steps: [],
      value: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (params) {
      _this.setState({
        value: params.value[0]
      });

      if (params.value.length === 0) {
        if (_this.props.nullable) {
          _this.props.onChange && _this.props.onChange(null);
        }

        return;
      }

      var seconds = typeof params.value[0].id === 'string' ? parseInt(params.value[0].id, 10) : params.value[0].id || 0;

      _this.handleChange(seconds);
    });

    _defineProperty(_assertThisInitialized(_this), "secondsToLabel", function (seconds, format) {
      var _this$dateHelpers$sec = _this.dateHelpers.secondsToHourMinute(seconds),
          _this$dateHelpers$sec2 = _slicedToArray(_this$dateHelpers$sec, 2),
          hours = _this$dateHelpers$sec2[0],
          minutes = _this$dateHelpers$sec2[1];

      var zeroPrefix = function zeroPrefix(n) {
        return n < 10 ? "0".concat(n) : n;
      };

      if (format === '12') {
        var isAfterNoon = seconds >= NOON;

        if (isAfterNoon) {
          hours -= 12;
        }

        if (hours === 0) {
          hours = 12;
        }

        return "".concat(hours, ":").concat(zeroPrefix(minutes), " ").concat(isAfterNoon ? 'PM' : 'AM');
      }

      return "".concat(zeroPrefix(hours), ":").concat(zeroPrefix(minutes));
    });

    _defineProperty(_assertThisInitialized(_this), "stringToOptions", function (str) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '12';
      // leading zero is optional, AM/PM is optional
      var twelveHourRegex = /^(1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]?)?$/; // leading zero is optional

      var twentyFourHourRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/;
      var regex = format === '12' ? twelveHourRegex : twentyFourHourRegex;
      var match = str.match(regex);

      if (!match) {
        return [];
      }

      var hours = Number(match[1]);
      var minutes = Number(match[2]);
      var hoursMinutes = [];

      switch (format) {
        case '24':
          {
            hoursMinutes = [{
              hours: hours,
              minutes: minutes
            }];
            break;
          }

        case '12':
        default:
          {
            var twelveHours = hours % 12;
            var meridiem = match[3]; // if there's no AM/PM, add both AM and PM options

            if (!meridiem) {
              hoursMinutes = [{
                hours: twelveHours,
                minutes: minutes
              }, {
                hours: twelveHours + 12,
                minutes: minutes
              }];
            } else {
              var twentyFourHours = meridiem.toLowerCase()[0] === 'a' ? twelveHours : twelveHours + 12;
              hoursMinutes = [{
                hours: twentyFourHours,
                minutes: minutes
              }];
            }

            break;
          }
      }

      return hoursMinutes.map(function (_ref) {
        var hours = _ref.hours,
            minutes = _ref.minutes;
        var secs = hours * 3600 + minutes * 60;
        return {
          id: secs,
          label: _this.secondsToLabel(secs, format)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (seconds) {
      var _this$dateHelpers$sec3 = _this.dateHelpers.secondsToHourMinute(seconds),
          _this$dateHelpers$sec4 = _slicedToArray(_this$dateHelpers$sec3, 2),
          hours = _this$dateHelpers$sec4[0],
          minutes = _this$dateHelpers$sec4[1];

      var updatedDate = _this.setTime(_this.props.value, hours, minutes, 0);

      _this.props.onChange && _this.props.onChange(updatedDate);
    });

    _defineProperty(_assertThisInitialized(_this), "setTime", function (val, hours, minutes, seconds) {
      var _this$dateHelpers = _this.dateHelpers,
          setSeconds = _this$dateHelpers.setSeconds,
          setMinutes = _this$dateHelpers.setMinutes,
          setHours = _this$dateHelpers.setHours;

      var date = _this.props.adapter.startOfDay(_this.props.adapter.date(val || undefined));

      return setSeconds(setMinutes(setHours(date, hours), minutes), seconds);
    });

    _defineProperty(_assertThisInitialized(_this), "getTimeWindowInSeconds", function (step) {
      var _this$props = _this.props,
          min = _this$props.minTime,
          max = _this$props.maxTime;

      var midnight = _this.setTime(_this.props.value, 0, 0, 0);

      if (!min) {
        min = midnight;
      }

      if (!max) {
        max = _this.setTime(_this.props.value, 24, 0, 0);
      } else {
        // maxTime (if provided) should be inclusive, so add an extra step here
        max = _this.props.adapter.setSeconds(_this.props.adapter.date(max), _this.props.adapter.getSeconds(max) + step);
      }

      var minDate = _this.props.adapter.toJsDate(min);

      var maxDate = _this.props.adapter.toJsDate(max);

      var midnightDate = _this.props.adapter.toJsDate(midnight);

      return {
        start: (minDate - midnightDate) / 1000,
        end: (maxDate - midnightDate) / 1000
      };
    });

    _defineProperty(_assertThisInitialized(_this), "buildSteps", function () {
      var _this$props$step = _this.props.step,
          step = _this$props$step === void 0 ? 900 : _this$props$step;

      var timeWindow = _this.getTimeWindowInSeconds(step);

      var stepCount = (timeWindow.end - timeWindow.start) / step;

      if (process.env.NODE_ENV !== "production" && stepCount > 500) {
        // eslint-disable-next-line no-console
        console.warn("Provided step value (".concat(step, ") results in ").concat(stepCount, " steps. Performance may suffer when more than 500 elements are rendered."));
      }

      if (!Number.isInteger(stepCount)) {
        var previousStepCount = stepCount;
        stepCount = Math.round(stepCount);

        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn("Provided step value (".concat(step, ") does not spread evenly across a day. Rounding from ").concat(previousStepCount, " total steps to ").concat(stepCount, "."));
        }
      }

      var options = [];

      for (var i = timeWindow.start; i < timeWindow.end; i += step) {
        options.push(i);
      }

      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "creatableFilterOptions", function (options, filterValue, excludeOptions, newProps) {
      var result = _this.stringToOptions(filterValue, _this.props.format);

      if (result.length) {
        return result;
      }

      return filterOptions(options, filterValue, excludeOptions, newProps);
    });

    _defineProperty(_assertThisInitialized(_this), "buildSelectedOption", function (value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '12';

      var secs = _this.dateHelpers.dateToSeconds(value);

      return {
        id: secs,
        label: _this.secondsToLabel(secs, format || '12')
      };
    });

    _this.dateHelpers = new DateHelpers(props.adapter);
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var steps = this.buildSteps();

      if (this.props.value && this.props.adapter.isValid(this.props.value)) {
        this.setState({
          steps: steps,
          value: this.buildSelectedOption(this.props.value, this.props.format)
        });
      } else {
        var seconds = this.dateHelpers.dateToSeconds(this.props.adapter.date());
        var closestStep = NOON;
        steps.forEach(function (step) {
          if (Math.abs(step - seconds) < Math.abs(closestStep - seconds)) {
            closestStep = step;
          }
        });
        this.setState({
          steps: steps,
          value: this.props.nullable ? undefined : {
            id: closestStep,
            label: this.secondsToLabel(closestStep, undefined)
          }
        });

        if (this.props.value || !this.props.nullable && !this.props.value) {
          this.handleChange(closestStep);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var formatChanged = prevProps.format !== this.props.format;
      var stepChanged = prevProps.step !== this.props.step;
      var adapterChanged = prevProps.adapter !== this.props.adapter;
      var minTimeChange = prevProps.minTime !== this.props.minTime;
      var maxTimeChange = prevProps.maxTime !== this.props.maxTime;

      if (adapterChanged) {
        this.dateHelpers = new DateHelpers(this.props.adapter);
      }

      if (formatChanged || stepChanged || minTimeChange || maxTimeChange) {
        var steps = this.buildSteps();
        this.setState({
          steps: steps
        });
      }

      if (prevProps.value && !this.props.value) {
        this.setState({
          value: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          format = _this$props2.format,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          adapter = _this$props2.adapter;

      var _getOverrides = getOverrides(overrides.Select, Select),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          OverriddenSelect = _getOverrides2[0],
          selectProps = _getOverrides2[1]; // $FlowFixMe


      selectProps.overrides = mergeOverrides({
        Dropdown: {
          style: {
            maxHeight: '126px'
          }
        }
      }, // $FlowFixMe
      selectProps.overrides);
      var value = this.props.value && adapter.isValid(this.props.value) ? this.buildSelectedOption(this.props.value, this.props.format) : this.state.value;
      return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
        var ariaLabel;

        if (locale.datepicker.timePickerAriaLabel) {
          ariaLabel = locale.datepicker.timePickerAriaLabel;
        } else {
          ariaLabel = format === '12' ? locale.datepicker.timePickerAriaLabel12Hour : locale.datepicker.timePickerAriaLabel24Hour;
        }

        return /*#__PURE__*/React.createElement(OverriddenSelect, _extends({
          "aria-label": ariaLabel,
          disabled: _this2.props.disabled,
          error: _this2.props.error,
          positive: _this2.props.positive,
          size: _this2.props.size,
          placeholder: _this2.props.placeholder || 'HH:mm',
          options: _this2.state.steps.map(function (n) {
            return {
              id: n,
              label: _this2.secondsToLabel(n, _this2.props.format)
            };
          }),
          filterOptions: _this2.props.creatable ? _this2.creatableFilterOptions : undefined,
          onChange: _this2.onChange // if value is defined, it should be an array type
          ,
          value: value ? [value] : value,
          clearable: false,
          backspaceRemoves: false,
          valueKey: "label"
        }, selectProps));
      });
    }
  }]);

  return TimePicker;
}(React.Component);

_defineProperty(TimePicker, "defaultProps", {
  format: '12',
  step: 900,
  creatable: false,
  adapter: dateFnsAdapter
});

export default TimePicker;