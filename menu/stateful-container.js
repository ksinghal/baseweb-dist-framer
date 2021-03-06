function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import * as React from 'react'; // Files

import { STATE_CHANGE_TYPES, KEY_STRINGS } from './constants.js';
import { scrollItemIntoView } from './utils.js'; // Types

import { useUIDSeed } from 'react-uid';
var DEFAULT_PROPS = {
  // keeping it in defaultProps to satisfy Flow
  initialState: {
    // We start the index at -1 to indicate that no highlighting exists initially
    highlightedIndex: -1,
    isFocused: false
  },
  typeAhead: true,
  keyboardControlNode: {
    current: null
  },
  stateReducer: function (changeType, changes) {
    return changes;
  },
  onItemSelect: function onItemSelect() {},
  getRequiredItemProps: function getRequiredItemProps() {
    return {};
  },
  children: function children() {
    return null;
  },
  // from nested-menus context
  addMenuToNesting: function addMenuToNesting() {},
  removeMenuFromNesting: function removeMenuFromNesting() {},
  getParentMenu: function getParentMenu() {},
  getChildMenu: function getChildMenu() {},
  forceHighlight: false
};

var MenuStatefulContainerInner = /*#__PURE__*/function (_React$Component) {
  _inherits(MenuStatefulContainerInner, _React$Component);

  var _super = _createSuper(MenuStatefulContainerInner);

  function MenuStatefulContainerInner() {
    var _this;

    _classCallCheck(this, MenuStatefulContainerInner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _objectSpread(_objectSpread({}, _this.constructor.defaultProps.initialState), _this.props.initialState));

    _defineProperty(_assertThisInitialized(_this), "rootRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "keyboardControlNode", _this.props.keyboardControlNode.current);

    _defineProperty(_assertThisInitialized(_this), "refList", []);

    _defineProperty(_assertThisInitialized(_this), "optionIds", []);

    _defineProperty(_assertThisInitialized(_this), "typeAheadChars", '');

    _defineProperty(_assertThisInitialized(_this), "typeAheadTimeOut", null);

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      switch (event.key) {
        case KEY_STRINGS.ArrowUp:
        case KEY_STRINGS.ArrowDown:
        case KEY_STRINGS.ArrowLeft:
        case KEY_STRINGS.ArrowRight:
        case KEY_STRINGS.Home:
        case KEY_STRINGS.End:
          _this.handleArrowKey(event);

          break;

        case KEY_STRINGS.Enter:
          if (event.keyCode === 229) {
            // ref.
            // https://github.com/JedWatson/react-select/blob/e12b42b0e7598ec4a96a1a6480e0b2b4c7dc03e3/packages/react-select/src/Select.js#L1209
            break;
          }

          _this.handleEnterKey(event);

          break;

        default:
          if (_this.props.typeAhead) {
            clearTimeout(_this.typeAheadTimeOut);

            _this.handleAlphaDown(event);
          }

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleAlphaDown", function (event) {
      var rootRef = _this.props.rootRef ? _this.props.rootRef : _this.rootRef;
      var prevIndex = _this.state.highlightedIndex;
      _this.typeAheadChars += event.key;
      _this.typeAheadTimeOut = setTimeout(function () {
        _this.typeAheadChars = '';
      }, 500);
      var nextIndex = prevIndex;
      event.preventDefault();

      var list = _this.getItems();

      if (list.length === 0 || !('label' in list[0])) return;
      var notMatch = true;

      for (var n = 0; n < list.length; n++) {
        var label = list[n].label;

        if (label && label.toUpperCase && label.toUpperCase().indexOf(_this.typeAheadChars.toUpperCase()) === 0) {
          nextIndex = n;
          notMatch = false;
          break;
        }
      }

      if (notMatch) {
        for (var _n = 0; _n < list.length; _n++) {
          var _label = list[_n].label;

          if (_label && _label.toUpperCase && _label.toUpperCase().indexOf(_this.typeAheadChars.toUpperCase()) > 0) {
            nextIndex = _n;
            break;
          }
        }
      }

      _this.internalSetState(STATE_CHANGE_TYPES.character, {
        highlightedIndex: nextIndex
      });

      if (_this.refList[nextIndex]) {
        scrollItemIntoView(_this.refList[nextIndex].current, // $FlowFixMe
        rootRef.current, nextIndex === 0, nextIndex === list.length - 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowKey", function (event) {
      var rootRef = _this.props.rootRef ? _this.props.rootRef : _this.rootRef;
      var prevIndex = _this.state.highlightedIndex;
      var nextIndex = prevIndex;

      if (event.key === KEY_STRINGS.ArrowUp) {
        event.preventDefault();
        nextIndex = Math.max(0, prevIndex - 1);

        _this.internalSetState(STATE_CHANGE_TYPES.moveUp, {
          highlightedIndex: nextIndex
        });
      } else if (event.key === KEY_STRINGS.ArrowDown) {
        event.preventDefault();
        nextIndex = Math.min(prevIndex + 1, _this.getItems().length - 1);

        _this.internalSetState(STATE_CHANGE_TYPES.moveDown, {
          highlightedIndex: nextIndex
        });
      } else if (event.key === KEY_STRINGS.Home) {
        event.preventDefault();
        nextIndex = 0;

        _this.internalSetState(STATE_CHANGE_TYPES.moveUp, {
          highlightedIndex: nextIndex
        });
      } else if (event.key === KEY_STRINGS.End) {
        event.preventDefault();
        nextIndex = _this.getItems().length - 1;

        _this.internalSetState(STATE_CHANGE_TYPES.moveDown, {
          highlightedIndex: nextIndex
        });
      } else if (event.key === KEY_STRINGS.ArrowLeft) {
        if (_this.props.getParentMenu) {
          var parent = _this.props.getParentMenu(rootRef);

          if (parent && parent.current) {
            parent.current.focus();
          }
        }
      } else if (event.key === KEY_STRINGS.ArrowRight) {
        if (_this.props.getChildMenu) {
          var child = _this.props.getChildMenu(rootRef);

          if (child && child.current) {
            child.current.focus();
          }
        }
      }

      if (_this.refList[nextIndex]) {
        scrollItemIntoView(_this.refList[nextIndex].current, // $FlowFixMe
        rootRef.current, nextIndex === 0, nextIndex === _this.getItems().length - 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnterKey", function (event) {
      var onItemSelect = _this.props.onItemSelect;
      var highlightedIndex = _this.state.highlightedIndex;

      var items = _this.getItems();

      if (items[highlightedIndex] && onItemSelect && !items[highlightedIndex].disabled) {
        event.preventDefault();
        onItemSelect({
          item: items[highlightedIndex],
          event: event
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemClick", function (index, item, event) {
      if (_this.props.onItemSelect && !item.disabled) {
        _this.props.onItemSelect({
          item: item,
          event: event
        });

        _this.internalSetState(STATE_CHANGE_TYPES.click, {
          highlightedIndex: index,
          activedescendantId: _this.optionIds[index]
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (index) {
      _this.internalSetState(STATE_CHANGE_TYPES.mouseEnter, {
        highlightedIndex: index,
        activedescendantId: _this.optionIds[index]
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      var rootRef = _this.props.rootRef ? _this.props.rootRef : _this.rootRef;

      var childMenu = _this.props.getChildMenu && _this.props.getChildMenu(rootRef);

      if (!_this.props.forceHighlight && !childMenu) {
        _this.internalSetState(STATE_CHANGE_TYPES.mouseLeave, {
          highlightedIndex: -1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getRequiredItemProps", function (item, index) {
      var itemRef = _this.refList[index];

      if (!itemRef) {
        itemRef = /*#__PURE__*/React.createRef();
        _this.refList[index] = itemRef;
        _this.optionIds[index] = _this.props.uidSeed(index);
      }

      var _this$props$getRequir = _this.props.getRequiredItemProps(item, index),
          disabledVal = _this$props$getRequir.disabled,
          requiredItemProps = _objectWithoutProperties(_this$props$getRequir, ["disabled"]);

      var disabled = typeof disabledVal === 'boolean' ? disabledVal : !!item.disabled;
      return _objectSpread(_objectSpread({
        id: requiredItemProps.id || _this.optionIds[index],
        disabled: disabled,
        ref: itemRef,
        isFocused: _this.state.isFocused,
        isHighlighted: _this.state.highlightedIndex === index,
        resetMenu: _this.resetMenu
      }, disabled ? {} : {
        onClick: _this.handleItemClick.bind(_assertThisInitialized(_this), index, item),
        onMouseEnter: _this.handleMouseEnter.bind(_assertThisInitialized(_this), index)
      }), requiredItemProps);
    });

    _defineProperty(_assertThisInitialized(_this), "focusMenu", function (event) {
      var rootRef = _this.props.rootRef ? _this.props.rootRef : _this.rootRef;

      if (!_this.state.isFocused && rootRef.current && // $FlowFixMe
      rootRef.current.contains(event.target)) {
        if (_this.state.highlightedIndex < 0) {
          _this.internalSetState(STATE_CHANGE_TYPES.focus, {
            isFocused: true,
            highlightedIndex: 0
          });
        } else {
          _this.internalSetState(STATE_CHANGE_TYPES.focus, {
            isFocused: true
          });
        }

        rootRef.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unfocusMenu", function () {
      _this.internalSetState(STATE_CHANGE_TYPES.focus, {
        isFocused: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetMenu", function () {
      _this.internalSetState(STATE_CHANGE_TYPES.reset, {
        isFocused: false,
        highlightedIndex: -1,
        activedescendantId: null
      });
    });

    return _this;
  }

  _createClass(MenuStatefulContainerInner, [{
    key: "getItems",
    value: function getItems() {
      var _this2 = this;

      if (Array.isArray(this.props.items)) {
        return this.props.items;
      }

      var optgroups = Object.keys(this.props.items);
      return optgroups.reduce(function (output, optgroup) {
        // $FlowFixMe already checked above that items is grouped shape
        return output.concat(_this2.props.items[optgroup]);
      }, []);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var rootRef = this.props.rootRef ? this.props.rootRef : this.rootRef;

      if (typeof document !== 'undefined') {
        if (rootRef.current
        /** This condition added to satisfy Flow */
        && this.state.highlightedIndex > -1 && this.refList[this.state.highlightedIndex]) {
          scrollItemIntoView(this.refList[this.state.highlightedIndex].current, rootRef.current, this.state.highlightedIndex === 0, this.state.highlightedIndex === this.getItems().length - 1, 'center');
        }

        if (this.state.isFocused) {
          if (this.keyboardControlNode) {
            this.keyboardControlNode.addEventListener('keydown', this.onKeyDown);
          }
        }
      }

      this.props.addMenuToNesting && this.props.addMenuToNesting(rootRef);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var rootRef = this.props.rootRef ? this.props.rootRef : this.rootRef;

      if (typeof document !== 'undefined') {
        if (this.keyboardControlNode) this.keyboardControlNode.removeEventListener('keydown', this.onKeyDown);
      }

      this.props.removeMenuFromNesting && this.props.removeMenuFromNesting(rootRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_, prevState) {
      if (typeof document !== 'undefined') {
        if (!prevState.isFocused && this.state.isFocused) {
          if (this.keyboardControlNode) this.keyboardControlNode.addEventListener('keydown', this.onKeyDown);
        } else if (prevState.isFocused && !this.state.isFocused) {
          if (this.keyboardControlNode) this.keyboardControlNode.removeEventListener('keydown', this.onKeyDown);
        }
      }

      var range = this.getItems().length;

      if (this.props.forceHighlight && this.state.highlightedIndex === -1 && range > 0) {
        this.internalSetState(STATE_CHANGE_TYPES.enter, {
          highlightedIndex: 0
        });
      }

      if (range === 0 && this.state.highlightedIndex !== -1) {
        this.internalSetState(STATE_CHANGE_TYPES.enter, {
          highlightedIndex: -1
        });
      } else if (this.state.highlightedIndex >= range) {
        this.internalSetState(STATE_CHANGE_TYPES.enter, {
          highlightedIndex: 0
        });
      }
    } // One array to hold all of list item refs

  }, {
    key: "internalSetState",
    value: // Internal set state function that will also invoke stateReducer
    function internalSetState(changeType, changes) {
      var stateReducer = this.props.stateReducer;

      if (this.props.onActiveDescendantChange && typeof changes.highlightedIndex === 'number' && this.state.highlightedIndex !== changes.highlightedIndex) {
        this.props.onActiveDescendantChange(this.optionIds[changes.highlightedIndex]);
      }

      this.setState(stateReducer(changeType, changes, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // omit the stateful-container's props and don't pass it down
      // to the children (stateless menu)
      var _this$props = this.props,
          initialState = _this$props.initialState,
          stateReducer = _this$props.stateReducer,
          children = _this$props.children,
          onItemSelect = _this$props.onItemSelect,
          addMenuToNesting = _this$props.addMenuToNesting,
          removeMenuFromNesting = _this$props.removeMenuFromNesting,
          getParentMenu = _this$props.getParentMenu,
          getChildMenu = _this$props.getChildMenu,
          forceHighlight = _this$props.forceHighlight,
          restProps = _objectWithoutProperties(_this$props, ["initialState", "stateReducer", "children", "onItemSelect", "addMenuToNesting", "removeMenuFromNesting", "getParentMenu", "getChildMenu", "forceHighlight"]);

      return this.props.children(_objectSpread(_objectSpread({}, restProps), {}, {
        rootRef: this.props.rootRef ? this.props.rootRef : this.rootRef,
        activedescendantId: this.optionIds[this.state.highlightedIndex],
        getRequiredItemProps: function getRequiredItemProps(item, index) {
          return _this3.getRequiredItemProps(item, index);
        },
        handleMouseLeave: this.handleMouseLeave,
        highlightedIndex: this.state.highlightedIndex,
        isFocused: this.state.isFocused,
        handleKeyDown: this.props.keyboardControlNode.current ? function (event) {} : this.onKeyDown,
        focusMenu: this.focusMenu,
        unfocusMenu: this.unfocusMenu
      }));
    }
  }]);

  return MenuStatefulContainerInner;
}(React.Component); // Remove when MenuStatefulContainer is converted to a functional component.


_defineProperty(MenuStatefulContainerInner, "defaultProps", DEFAULT_PROPS);

var MenuStatefulContainer = function MenuStatefulContainer(props) {
  return /*#__PURE__*/React.createElement(MenuStatefulContainerInner, _extends({
    uidSeed: useUIDSeed()
  }, props));
};

MenuStatefulContainer.defaultProps = DEFAULT_PROPS;
export default MenuStatefulContainer;