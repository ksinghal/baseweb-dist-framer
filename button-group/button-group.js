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
import { KIND, SIZE, SHAPE } from '../button/index.js';
import { MODE } from './constants.js';
import { getOverrides } from '../helpers/overrides.js';
import { LocaleContext } from '../locale/index.js';
import { StyledRoot } from './styled-components.js';

function isIndexSelected(selected, index) {
  if (!Array.isArray(selected) && typeof selected !== 'number') {
    return false;
  }

  if (Array.isArray(selected)) {
    return selected.includes(index);
  }

  return selected === index;
}

var ButtonGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  var _super = _createSuper(ButtonGroup);

  function ButtonGroup() {
    var _this;

    _classCallCheck(this, ButtonGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "childRefs", {});

    return _this;
  }

  _createClass(ButtonGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          _this$props$mode = _this$props.mode,
          mode = _this$props$mode === void 0 ? MODE.checkbox : _this$props$mode,
          children = _this$props.children,
          ariaLabel = _this$props.ariaLabel,
          selected = _this$props.selected,
          disabled = _this$props.disabled,
          _onClick = _this$props.onClick,
          kind = _this$props.kind,
          shape = _this$props.shape,
          size = _this$props.size;

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var isRadio = mode === MODE.radio;
      var numItems = React.Children.count(children);
      return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
        return /*#__PURE__*/React.createElement(Root, _extends({
          "aria-label": ariaLabel || locale.buttongroup.ariaLabel,
          "data-baseweb": "button-group",
          role: isRadio ? 'radiogroup' : 'group',
          $shape: shape,
          $length: children.length
        }, rootProps), React.Children.map(children, function (child, index) {
          if (! /*#__PURE__*/React.isValidElement(child)) {
            return null;
          }

          var isSelected = child.props.isSelected ? child.props.isSelected : isIndexSelected(selected, index);

          if (isRadio) {
            _this2.childRefs[index] = /*#__PURE__*/React.createRef();
          }

          return /*#__PURE__*/React.cloneElement(child, {
            disabled: disabled || child.props.disabled,
            isSelected: isSelected,
            ref: isRadio ? _this2.childRefs[index] : undefined,
            tabIndex: !isRadio || isSelected || isRadio && (!selected || selected === -1) && index === 0 ? 0 : -1,
            onKeyDown: function onKeyDown(e) {
              if (!isRadio) return;
              var value = Number(selected) ? Number(selected) : 0;

              if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault && e.preventDefault();
                var prevIndex = value - 1 < 0 ? numItems - 1 : value - 1;
                _onClick && _onClick(e, prevIndex);
                _this2.childRefs[prevIndex].current && _this2.childRefs[prevIndex].current.focus();
              }

              if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault && e.preventDefault();
                var nextIndex = value + 1 > numItems - 1 ? 0 : value + 1;
                _onClick && _onClick(e, nextIndex);
                _this2.childRefs[nextIndex].current && _this2.childRefs[nextIndex].current.focus();
              }
            },
            kind: kind,
            onClick: function onClick(event) {
              if (disabled) {
                return;
              }

              if (child.props.onClick) {
                child.props.onClick(event);
              }

              if (_onClick) {
                _onClick(event, index);
              }
            },
            shape: shape,
            size: size,
            overrides: _objectSpread({
              BaseButton: {
                style: function style(_ref) {
                  var $theme = _ref.$theme;

                  // Even though baseui's buttons have square corners, some applications override to
                  // rounded. Maintaining corner radius in this circumstance is ideal to avoid further
                  // customization.
                  if (children.length === 1) {
                    return {};
                  }

                  if (shape !== SHAPE.default) {
                    return {
                      marginLeft: $theme.sizing.scale100,
                      marginRight: $theme.sizing.scale100
                    };
                  }

                  return {
                    marginLeft: '0.5px',
                    marginRight: '0.5px'
                  };
                },
                props: {
                  'aria-checked': isSelected,
                  role: isRadio ? 'radio' : 'checkbox'
                }
              }
            }, child.props.overrides)
          });
        }));
      });
    }
  }]);

  return ButtonGroup;
}(React.Component);

_defineProperty(ButtonGroup, "defaultProps", {
  disabled: false,
  onClick: function onClick() {},
  shape: SHAPE.default,
  size: SIZE.default,
  kind: KIND.secondary
});

export { ButtonGroup as default };