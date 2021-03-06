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
import { StyledRoot, StyledStar } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './utils.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var StarRating = /*#__PURE__*/function (_React$Component) {
  _inherits(StarRating, _React$Component);

  var _super = _createSuper(StarRating);

  function StarRating() {
    var _this;

    _classCallCheck(this, StarRating);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFocusVisible: false,
      previewIndex: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (value) {
      var onChange = _this.props.onChange;
      onChange && onChange({
        value: value
      });

      _this.setState({
        previewIndex: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updatePreview", function (previewIndex) {
      _this.setState({
        previewIndex: previewIndex
      });
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

    _defineProperty(_assertThisInitialized(_this), "renderRatingContents", function () {
      var _this$props = _this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? -1 : _this$props$value,
          numItems = _this$props.numItems,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 22 : _this$props$size,
          _this$props$readOnly = _this$props.readOnly,
          readOnly = _this$props$readOnly === void 0 ? false : _this$props$readOnly;
      var previewIndex = _this.state.previewIndex;

      var _getOverrides = getOverrides(overrides.Item, StyledStar),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Star = _getOverrides2[0],
          starProps = _getOverrides2[1];

      var ratings = [];
      var refs = [{
        current: null
      }];

      var _loop = function _loop(x) {
        var isFocusable = x === value || value < 1 && x === 1;
        var starRef = /*#__PURE__*/React.createRef();
        refs.push(starRef);
        ratings.push( /*#__PURE__*/React.createElement(Star, _extends({
          key: x,
          role: "radio",
          title: "rating" // eslint-disable-next-line flowtype/no-weak-types
          ,
          ref: starRef,
          tabIndex: isFocusable ? '0' : '-1',
          "aria-setsize": numItems,
          "aria-checked": x <= value,
          "aria-posinset": x,
          "aria-disabled": readOnly,
          $size: size,
          $index: x,
          $isActive: previewIndex !== undefined ? x <= previewIndex : x <= value,
          $isPartialActive: previewIndex !== undefined ? false : x <= value + 0.5,
          $isSelected: x === previewIndex,
          $isFocusVisible: _this.state.isFocusVisible && isFocusable,
          $isReadOnly: readOnly,
          onClick: function onClick() {
            if (readOnly) {
              return;
            }

            _this.selectItem(x);
          },
          onKeyDown: function onKeyDown(e) {
            if (readOnly) {
              return;
            }

            if (e.keyCode === ARROW_UP || e.keyCode === ARROW_LEFT) {
              e.preventDefault && e.preventDefault();
              var prevIndex = value - 1 < 1 ? numItems : value - 1;

              _this.selectItem(prevIndex);

              refs[prevIndex].current && refs[prevIndex].current.focus();
            }

            if (e.keyCode === ARROW_DOWN || e.keyCode === ARROW_RIGHT) {
              e.preventDefault && e.preventDefault();
              var nextIndex = value + 1 > numItems ? 1 : value + 1;

              _this.selectItem(nextIndex);

              refs[nextIndex].current && refs[nextIndex].current.focus();
            }
          },
          onMouseOver: function onMouseOver() {
            if (readOnly) {
              return;
            }

            _this.updatePreview(x);
          }
        }, starProps, {
          onFocus: forkFocus(starProps, _this.handleFocus),
          onBlur: forkBlur(starProps, _this.handleBlur)
        })));
      };

      for (var x = 1; x <= numItems; x++) {
        _loop(x);
      }

      return ratings;
    });

    return _this;
  }

  _createClass(StarRating, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$overrides2 = this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;

      var _getOverrides3 = getOverrides(overrides.Root, StyledRoot),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          Root = _getOverrides4[0],
          rootProps = _getOverrides4[1];

      return /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "star-rating",
        role: "radiogroup",
        onBlur: function onBlur(e) {
          if (!e.currentTarget.contains(e.relatedTarget)) _this2.updatePreview(undefined);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.updatePreview(undefined);
        }
      }, rootProps), this.renderRatingContents());
    }
  }]);

  return StarRating;
}(React.Component);

_defineProperty(StarRating, "defaultProps", {
  overrides: {},
  numItems: 5,
  readOnly: false
});

export default StarRating;