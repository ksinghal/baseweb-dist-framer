function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { getOverrides } from '../helpers/overrides.js';
import { Root as StyledRoot, List as StyledList, Item as StyledItem, DragHandle as StyledDragHandle, CloseHandle as StyledCloseHandle, Label as StyledLabel } from './styled-components.js';
import { List as MovableList } from 'react-movable';
import Grab from '../icon/grab.js';
import Delete from '../icon/delete.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';
import { Layer } from '../layer/index.js';

var ItemLayer = function ItemLayer(_ref) {
  var children = _ref.children,
      dragged = _ref.dragged;

  if (!dragged) {
    return children;
  }

  return /*#__PURE__*/React.createElement(Layer, null, children);
};

var StatelessList = /*#__PURE__*/function (_React$Component) {
  _inherits(StatelessList, _React$Component);

  var _super = _createSuper(StatelessList);

  function StatelessList() {
    var _this;

    _classCallCheck(this, StatelessList);

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

    return _this;
  }

  _createClass(StatelessList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          items = _this$props.items,
          onChange = _this$props.onChange,
          removable = _this$props.removable;
      var RootOverride = overrides.Root,
          ListOverride = overrides.List,
          ItemOverride = overrides.Item,
          DragHandleOverride = overrides.DragHandle,
          CloseHandleOverride = overrides.CloseHandle,
          LabelOverride = overrides.Label;

      var _getOverrides = getOverrides(RootOverride, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(ListOverride, StyledList),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          List = _getOverrides4[0],
          listProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(ItemOverride, StyledItem),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          Item = _getOverrides6[0],
          itemProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(DragHandleOverride, StyledDragHandle),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          DragHandle = _getOverrides8[0],
          dragHandleProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(CloseHandleOverride, StyledCloseHandle),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          CloseHandle = _getOverrides10[0],
          closeHandleProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(LabelOverride, StyledLabel),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          Label = _getOverrides12[0],
          labelProps = _getOverrides12[1];

      var isRemovable = this.props.removable || false;
      var isRemovableByMove = this.props.removableByMove || false;
      return /*#__PURE__*/React.createElement(Root, _extends({
        $isRemovable: isRemovable,
        "data-baseweb": "dnd-list"
      }, rootProps, {
        onFocus: forkFocus(rootProps, this.handleFocus),
        onBlur: forkBlur(rootProps, this.handleBlur)
      }), /*#__PURE__*/React.createElement(MovableList, {
        removableByMove: isRemovableByMove,
        values: items,
        onChange: onChange,
        renderList: function renderList(_ref2) {
          var children = _ref2.children,
              props = _ref2.props,
              isDragged = _ref2.isDragged;
          return /*#__PURE__*/React.createElement(List, _extends({
            $isRemovable: isRemovable,
            $isDragged: isDragged,
            ref: props.ref
          }, listProps), children);
        },
        renderItem: function renderItem(_ref3) {
          var value = _ref3.value,
              props = _ref3.props,
              isDragged = _ref3.isDragged,
              isSelected = _ref3.isSelected,
              isOutOfBounds = _ref3.isOutOfBounds,
              index = _ref3.index;
          var sharedProps = {
            $isRemovable: isRemovable,
            $isRemovableByMove: isRemovableByMove,
            $isDragged: isDragged,
            $isSelected: isSelected,
            $isFocusVisible: _this2.state.isFocusVisible,
            $isOutOfBounds: isOutOfBounds,
            $value: value,
            $index: index
          };
          return /*#__PURE__*/React.createElement(ItemLayer, {
            dragged: isDragged,
            key: props.key
          }, /*#__PURE__*/React.createElement(Item, _extends({}, sharedProps, {
            ref: props.ref,
            tabIndex: props.tabIndex,
            "aria-roledescription": props['aria-roledescription'],
            onKeyDown: props.onKeyDown,
            onWheel: props.onWheel
          }, itemProps, {
            style: _objectSpread(_objectSpread({}, props.style), {}, {
              display: 'flex'
            })
          }), /*#__PURE__*/React.createElement(DragHandle, _extends({}, sharedProps, dragHandleProps), /*#__PURE__*/React.createElement(Grab, {
            size: 24,
            color: "#CCC"
          })), /*#__PURE__*/React.createElement(Label, _extends({}, sharedProps, labelProps), value), removable && /*#__PURE__*/React.createElement(CloseHandle, _extends({}, sharedProps, {
            onClick: function onClick(evt) {
              evt.preventDefault();
              onChange && onChange({
                oldIndex: typeof index !== 'undefined' ? index : 0,
                newIndex: -1
              });
            }
          }, closeHandleProps), /*#__PURE__*/React.createElement(Delete, {
            size: 24,
            color: "#CCC"
          }))));
        }
      }));
    }
  }]);

  return StatelessList;
}(React.Component);

_defineProperty(StatelessList, "defaultProps", {
  items: [],
  onChange: function onChange() {}
});

export default StatelessList;