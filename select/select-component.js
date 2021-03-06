function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

/* eslint-disable cup/no-undef */
import * as React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import DeleteAlt from '../icon/delete-alt.js';
import TriangleDownIcon from '../icon/triangle-down.js';
import SearchIconComponent from '../icon/search.js';
import { LocaleContext } from '../locale/index.js';
import { Popover, PLACEMENT } from '../popover/index.js';
import { Spinner } from '../spinner/index.js';
import { UIDConsumer } from 'react-uid';
import AutosizeInput from './autosize-input.js';
import { TYPE, STATE_CHANGE_TYPE } from './constants.js';
import defaultProps from './default-props.js';
import SelectDropdown from './dropdown.js';
import { StyledRoot, StyledControlContainer, StyledPlaceholder, StyledValueContainer, StyledInputContainer, StyledIconsContainer, StyledSelectArrow, StyledClearIcon, getLoadingIconStyles, StyledSearchIconContainer } from './styled-components.js';
import { expandValue, normalizeOptions } from './utils/index.js';

function Noop() {
  return null;
}

var isClick = function isClick(event) {
  return event.type === 'click';
};

var isLeftClick = function isLeftClick(event) {
  return event.button !== null && event.button !== undefined && event.button === 0;
};

var containsNode = function containsNode(parent, child) {
  if (typeof document !== 'undefined') {
    // eslint-disable-next-line flowtype/no-weak-types
    return child && parent && parent.contains(child);
  }
};

export function isInteractive(rootTarget, rootElement) {
  if (rootTarget instanceof Element) {
    var target = rootTarget;

    while (target && target !== rootElement) {
      var role = target.getAttribute('role');

      if (role === 'button' || role === 'link') {
        return true;
      }

      if (target.tagName) target = target.parentElement;
    }
  }

  return false;
} // eslint-disable-next-line flowtype/no-weak-types

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  // anchor is a ref that refers to the outermost element rendered when the dropdown menu is not
  // open. This is required so that we can check if clicks are on/off the anchor element.
  // dropdown is a ref that refers to the popover element. This is required so that we can check if
  // clicks are on/off the dropdown element.
  // dragging is a flag to track whether a mobile device is currently scrolling versus clicking.
  // focusAfterClear is a flag to indicate that the dropdowm menu should open after a selected
  // option has been cleared.
  // openAfterFocus is a flag to indicate that the dropdown menu should open when the component is
  // focused. Developers have the option to disable initial clicks opening the dropdown menu. If not
  // disabled, clicks will set this flag to true. Upon focusing, look to this to see if the menu should
  // be opened, or only focus.
  // When an item is selected, it also triggers handleClickOutside and since the selected item is
  // already out of the menu (DOM), it will not recognize it as a subnode and triggers handleBlur
  // that sets isOpen to false. That's a faulty logic causing visible problems when
  // closeOnSelect is false. This flag helps to detect that selection was just made.
  // the select components can accept an array of options or an object where properties are optgroups
  // and values are arrays of options. this class property is constructed and updated in a normalized
  // shape where optgroup titles are stored on the option in the __optgroup field.
  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "anchor", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "dropdown", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "dragging", void 0);

    _defineProperty(_assertThisInitialized(_this), "focusAfterClear", void 0);

    _defineProperty(_assertThisInitialized(_this), "openAfterFocus", void 0);

    _defineProperty(_assertThisInitialized(_this), "justSelected", void 0);

    _defineProperty(_assertThisInitialized(_this), "options", []);

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeDescendant: null,
      inputValue: '',
      isFocused: false,
      isOpen: _this.props.startOpen,
      isPseudoFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "isItMounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleTouchOutside", function (event) {
      if (containsNode(_this.dropdown.current, event.target)) return;

      if (!containsNode(_this.anchor.current, event.target)) {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function () {
      return _this.dragging = true;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function () {
      return _this.dragging = false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function (event) {
      if (_this.dragging) return;

      _this.handleClick(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEndClearValue", function (event) {
      if (_this.dragging) return;

      _this.clearValue(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      if (_this.props.disabled || !isClick(event) && !isLeftClick(event)) {
        return;
      } // Case comes up when text has been typed into the input field. If no text provided,
      // the 'input' element will have essentially 0 width therefore will not be clickable.
      // When click outside does not reset input, text provided will stay rendered after clicks away
      // from the select component. Upon subsequent clicks on the provided text, open the dropdown
      // menu, in addition to text edit operations.


      if (event.target === _this.input) {
        // CHASE: not sure why this condition is here. I cannot replicate a situation where clicks
        // on provided text break into here.
        if (!_this.state.isFocused) {
          _this.openAfterFocus = _this.props.openOnClick;

          _this.focus();
        }

        if (!_this.state.isOpen) {
          _this.setState({
            isOpen: true,
            isFocused: true,
            isPseudoFocused: false
          });
        }

        return;
      } // Ensures that interactive elements within the Select component do not trigger the outer click
      // handler. For example, after an option is selected clicks on the 'clear' icon call here. We
      // should ignore those events. This comes after case where click is on input element, so that
      // those are handled on their own.


      if (_this.input && isInteractive(event.target, _this.input)) {
        return;
      } // For the simple case where clicking on the Select does not allow for providing
      // text input to filter the dropdown options.


      if (!_this.props.searchable) {
        _this.focus();

        if (_this.state.isOpen) {
          _this.setState({
            isOpen: false,
            isFocused: false
          });
        } else {
          _this.setState({
            isOpen: true,
            isFocused: true
          });
        }

        return;
      } // Cases below only apply to searchable Select component.


      if (_this.state.isFocused) {
        // iOS ignores programmatic calls to input.focus() that were not triggered by a click event.
        // This component can get into a state where isFocused is true, but the DOM node is not
        // focused. Call focus here again to ensure.
        _this.focus(); // Case comes up when click outside does not reset input - once text has been provided to
        // the input, and the user closes the dropdown menu the provided text is maintained. After
        // this, if the user focuses back into the select component then clicks on the component,
        // the provided text highlights rather than position's the cursor at the end of the input.


        if (_this.input) _this.input.value = '';

        _this.setState(function (prev) {
          return {
            isOpen: !_this.focusAfterClear && !prev.isOpen,
            isPseudoFocused: false
          };
        });

        _this.focusAfterClear = false;
      } else {
        // When clear button is clicked, need to click twice to open control container - https://github.com/uber/baseweb/issues/4285
        // Setting focusAfterClear to false, resolves the issue
        _this.focusAfterClear = false;
        _this.openAfterFocus = _this.props.openOnClick;

        _this.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (event) {
      if (_this.props.disabled) return;
      if (_this.props.onFocus) _this.props.onFocus(event);
      var toOpen = _this.state.isOpen || _this.openAfterFocus; // if focus happens after clear values, don't open dropdown yet.

      toOpen = !_this.focusAfterClear && toOpen;

      _this.setState({
        isFocused: true,
        isOpen: !!toOpen
      });

      _this.focusAfterClear = false;
      _this.openAfterFocus = false;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (event.relatedTarget) {
        if (containsNode(_this.anchor.current, event.relatedTarget) || containsNode(_this.dropdown.current, event.relatedTarget)) {
          return;
        }
      } else if (containsNode(_this.anchor.current, event.target)) {
        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      if (_this.isItMounted) {
        _this.setState({
          isFocused: false,
          isOpen: false,
          isPseudoFocused: false,
          inputValue: _this.props.onBlurResetsInput ? '' : _this.state.inputValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      if (_this.justSelected) {
        _this.justSelected = false;
        return;
      }

      if (containsNode(_this.dropdown.current, event.target)) return;
      var isFocused = _this.state.isFocused || _this.state.isPseudoFocused;

      if (isFocused && !containsNode(_this.anchor.current, event.target)) {
        _this.handleBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var newInputValue = event.target.value;

      _this.setState({
        inputValue: newInputValue,
        isOpen: true,
        isPseudoFocused: false
      });

      if (_this.props.onInputChange) {
        _this.props.onInputChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (_this.props.disabled) return;

      switch (event.keyCode) {
        case 8:
          // backspace
          if (!_this.state.inputValue && _this.props.backspaceRemoves) {
            event.preventDefault();

            _this.backspaceValue();
          }

          break;

        case 9:
          // tab
          _this.setState(function (prevState) {
            return {
              isPseudoFocused: false,
              isFocused: false,
              isOpen: false,
              inputValue: !_this.props.onCloseResetsInput || !_this.props.onBlurResetsInput ? prevState.inputValue : ''
            };
          });

          break;

        case 27:
          // escape
          if (!_this.state.isOpen && _this.props.clearable && _this.props.escapeClearsValue) {
            _this.clearValue(event);

            _this.setState({
              isFocused: false,
              isPseudoFocused: false
            });
          }

          break;

        case 32:
          // space
          if (_this.props.searchable) {
            break;
          }

          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 38:
          // up
          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 40:
          // down
          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 33:
          // page up
          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 34:
          // page down
          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 35:
          // end key
          if (event.shiftKey) {
            break;
          }

          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 36:
          // home key
          if (event.shiftKey) {
            break;
          }

          event.preventDefault();

          if (!_this.state.isOpen) {
            _this.setState({
              isOpen: true
            });
          }

          break;

        case 46:
          // delete
          if (!_this.state.inputValue && _this.props.deleteRemoves) {
            event.preventDefault();

            _this.popValue();
          }

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOptionLabel", function (locale, _ref) {
      var option = _ref.option;
      return option.isCreatable ? "".concat(locale.select.create, " \u201C").concat(option[_this.props.labelKey], "\u201D") : option[_this.props.labelKey];
    });

    _defineProperty(_assertThisInitialized(_this), "getValueLabel", function (_ref2) {
      var option = _ref2.option;
      return option[_this.props.labelKey];
    });

    _defineProperty(_assertThisInitialized(_this), "handleActiveDescendantChange", function (id) {
      if (id) {
        _this.setState({
          activeDescendant: id
        });
      } else {
        _this.setState({
          activeDescendant: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputRef", function (input) {
      _this.input = input;

      if (_this.props.controlRef) {
        if (typeof _this.props.controlRef === 'function') {
          _this.props.controlRef(input);
        } else {
          _this.props.controlRef.current = input;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectValue", function (_ref3) {
      var item = _ref3.item;

      if (item.disabled) {
        return;
      }

      _this.justSelected = true; // NOTE: we add/set the value in a callback to make sure the
      // input value is empty to avoid styling issues in Chrome

      var updatedValue = _this.props.onSelectResetsInput ? '' : _this.state.inputValue;

      if (_this.props.multi) {
        _this.setState({
          inputValue: updatedValue,
          isOpen: !_this.props.closeOnSelect
        }, function () {
          var valueArray = _this.props.value;

          if (valueArray.some(function (i) {
            return i[_this.props.valueKey] === item[_this.props.valueKey];
          })) {
            _this.removeValue(item);
          } else {
            _this.addValue(item);
          }
        });
      } else {
        _this.focus();

        _this.setState({
          inputValue: updatedValue,
          isOpen: !_this.props.closeOnSelect,
          isFocused: true,
          isPseudoFocused: false
        }, function () {
          _this.setValue([item], item, STATE_CHANGE_TYPE.select);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addValue", function (item) {
      var valueArray = _toConsumableArray(_this.props.value);

      _this.setValue(valueArray.concat(item), item, STATE_CHANGE_TYPE.select);
    });

    _defineProperty(_assertThisInitialized(_this), "backspaceValue", function () {
      var item = _this.popValue();

      if (!item) {
        return;
      }

      var valueLength = _this.props.value.length;
      var renderLabel = _this.props.getValueLabel || _this.getValueLabel;
      var labelForInput = renderLabel({
        option: item,
        index: valueLength - 1
      }); // label might not be a string, it might be a Node of another kind.

      if (!_this.props.backspaceClearsInputValue && typeof labelForInput === 'string') {
        var remainingInput = labelForInput.slice(0, -1);

        _this.setState({
          inputValue: remainingInput,
          isOpen: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "popValue", function () {
      var valueArray = _toConsumableArray(_this.props.value);

      var valueLength = valueArray.length;
      if (!valueLength) return;
      if (valueArray[valueLength - 1].clearableValue === false) return;
      var item = valueArray.pop();

      _this.setValue(valueArray, item, STATE_CHANGE_TYPE.remove);

      return item;
    });

    _defineProperty(_assertThisInitialized(_this), "removeValue", function (item) {
      var valueArray = _toConsumableArray(_this.props.value);

      _this.setValue(valueArray.filter(function (i) {
        return i[_this.props.valueKey] !== item[_this.props.valueKey];
      }), item, STATE_CHANGE_TYPE.remove);

      _this.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "clearValue", function (event) {
      if (isClick(event) && !isLeftClick(event)) return;

      if (_this.props.value) {
        var resetValue = _this.props.value.filter(function (item) {
          return item.clearableValue === false;
        });

        _this.setValue(resetValue, null, STATE_CHANGE_TYPE.clear);
      }

      _this.setState({
        inputValue: '',
        isOpen: false
      });

      _this.focus();

      _this.focusAfterClear = true;
    });

    _defineProperty(_assertThisInitialized(_this), "shouldShowPlaceholder", function () {
      return !(_this.state.inputValue || _this.props.value && _this.props.value.length);
    });

    _defineProperty(_assertThisInitialized(_this), "shouldShowValue", function () {
      return !_this.state.inputValue;
    });

    _this.options = normalizeOptions(props.options);
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.focus();
      }

      this.isItMounted = true;

      if (this.props.methodsRef) {
        var methodsRef = this.props.methodsRef;
        methodsRef.current = {
          setDropdownOpen: this.handleDropdownOpen.bind(this)
        };
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (typeof document !== 'undefined') {
        if (prevState.isOpen !== this.state.isOpen) {
          if (this.state.isOpen) {
            this.props.onOpen && this.props.onOpen();
            document.addEventListener('touchstart', this.handleTouchOutside);
          } else {
            this.props.onClose && this.props.onClose();
            document.removeEventListener('touchstart', this.handleTouchOutside);
          }
        }

        if (!prevState.isFocused && this.state.isFocused) {
          document.addEventListener('click', this.handleClickOutside);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof document !== 'undefined') {
        document.removeEventListener('touchstart', this.handleTouchOutside);
        document.removeEventListener('click', this.handleClickOutside);
      }

      this.isItMounted = false;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (!this.input) return;
      this.input.focus();
    }
  }, {
    key: "handleDropdownOpen",
    value: function handleDropdownOpen(nextOpenState) {
      this.setState({
        isOpen: nextOpenState
      });
    } // Handle touch outside on mobile to dismiss menu, ensures that the
    // touch target is not within the anchor DOM node.

  }, {
    key: "closeMenu",
    value: function closeMenu() {
      if (this.props.onCloseResetsInput) {
        this.setState({
          inputValue: '',
          isOpen: false,
          isPseudoFocused: this.state.isFocused && !this.props.multi
        });
      } else {
        this.setState({
          isOpen: false,
          isPseudoFocused: this.state.isFocused && !this.props.multi
        });
      }
    }
  }, {
    key: "getValueArray",
    value:
    /**
     * Extends the value into an array from the given options
     */
    function getValueArray(value) {
      var _this2 = this;

      if (!Array.isArray(value)) {
        if (value === null || value === undefined) return [];
        value = [value];
      }

      return value.map(function (value) {
        return expandValue(value, _this2.props);
      });
    }
  }, {
    key: "setValue",
    value: function setValue(value, option, type) {
      if (this.props.onChange) {
        this.props.onChange({
          value: value,
          option: option,
          type: type
        });
      }
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (!this.props.isLoading) return;
      var sharedProps = this.getSharedProps();
      var _this$props$overrides = this.props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides;

      var _getOverrides = getOverrides(overrides.LoadingIndicator, Spinner),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          LoadingIndicator = _getOverrides2[0],
          loadingIndicatorProps = _getOverrides2[1];

      return /*#__PURE__*/React.createElement(LoadingIndicator, _extends({
        size: 16,
        overrides: {
          Svg: {
            style: getLoadingIconStyles
          }
        },
        $silenceV11DeprecationWarning: true
      }, sharedProps, loadingIndicatorProps));
    }
  }, {
    key: "renderValue",
    value: function renderValue(valueArray, isOpen, locale) {
      var _this3 = this;

      var _this$props$overrides2 = this.props.overrides,
          overrides = _this$props$overrides2 === void 0 ? {} : _this$props$overrides2;
      var sharedProps = this.getSharedProps();
      var renderLabel = this.props.getValueLabel || this.getValueLabel;
      var Value = this.props.valueComponent || Noop;

      if (!valueArray.length) {
        return null;
      }

      if (this.props.multi) {
        return valueArray.map(function (value, i) {
          var disabled = sharedProps.$disabled || value.clearableValue === false;
          return /*#__PURE__*/React.createElement(Value, _extends({
            value: value,
            key: "value-".concat(i, "-").concat(value[_this3.props.valueKey]),
            removeValue: function removeValue() {
              return _this3.removeValue(value);
            },
            disabled: disabled,
            overrides: {
              Tag: overrides.Tag,
              MultiValue: overrides.MultiValue
            }
          }, sharedProps, {
            $disabled: disabled
          }), renderLabel({
            option: value,
            index: i
          }));
        });
      } else if (this.shouldShowValue()) {
        return /*#__PURE__*/React.createElement(Value, _extends({
          value: valueArray[0][this.props.valueKey],
          disabled: this.props.disabled,
          overrides: {
            SingleValue: overrides.SingleValue
          }
        }, sharedProps), renderLabel({
          option: valueArray[0]
        }));
      }
    }
  }, {
    key: "renderInput",
    value: function renderInput(listboxId) {
      var _this4 = this;

      var _this$props$overrides3 = this.props.overrides,
          overrides = _this$props$overrides3 === void 0 ? {} : _this$props$overrides3;

      var _getOverrides3 = getOverrides(overrides.InputContainer, StyledInputContainer),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          InputContainer = _getOverrides4[0],
          inputContainerProps = _getOverrides4[1];

      var sharedProps = this.getSharedProps();
      var isOpen = this.state.isOpen;
      var selected = this.getValueArray(this.props.value).map(function (v) {
        return v[_this4.props.labelKey];
      }).join(', ');
      var selectedLabel = selected.length ? "Selected ".concat(selected, ". ") : '';
      var label = "".concat(selectedLabel).concat(this.props['aria-label'] || '');

      if (!this.props.searchable) {
        return /*#__PURE__*/React.createElement(InputContainer, _extends({
          role: "listbox",
          "aria-activedescendant": this.state.activeDescendant,
          "aria-expanded": isOpen,
          "aria-describedby": this.props['aria-describedby'],
          "aria-errormessage": this.props['aria-errormessage'],
          "aria-disabled": this.props.disabled,
          "aria-label": label,
          "aria-labelledby": this.props['aria-labelledby'],
          "aria-owns": this.state.isOpen ? listboxId : null,
          "aria-required": this.props.required || null,
          onFocus: this.handleInputFocus,
          tabIndex: 0
        }, sharedProps, inputContainerProps), /*#__PURE__*/React.createElement("input", {
          "aria-hidden": true,
          id: this.props.id || null,
          ref: this.handleInputRef,
          style: {
            opacity: 0,
            width: 0,
            overflow: 'hidden',
            border: 'none',
            padding: 0
          },
          tabIndex: -1
        }));
      }

      return /*#__PURE__*/React.createElement(InputContainer, _extends({}, sharedProps, inputContainerProps), /*#__PURE__*/React.createElement(AutosizeInput, _extends({
        "aria-activedescendant": this.state.activeDescendant,
        "aria-autocomplete": "list",
        "aria-controls": this.state.isOpen ? listboxId : null,
        "aria-describedby": this.props['aria-describedby'],
        "aria-errormessage": this.props['aria-errormessage'],
        "aria-disabled": this.props.disabled || null,
        "aria-expanded": isOpen,
        "aria-haspopup": "listbox",
        "aria-label": label,
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-required": this.props.required || null,
        disabled: this.props.disabled || null,
        id: this.props.id || null,
        inputRef: this.handleInputRef,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        overrides: {
          Input: overrides.Input
        },
        required: this.props.required && !this.props.value.length || null,
        role: "combobox",
        value: this.state.inputValue,
        tabIndex: 0
      }, sharedProps)));
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var isValueEntered = Boolean(this.props.value && this.props.value.length || this.state.inputValue);

      if (!this.props.clearable || this.props.disabled || this.props.isLoading || !isValueEntered) {
        return;
      }

      var sharedProps = this.getSharedProps();
      var _this$props$overrides4 = this.props.overrides,
          overrides = _this$props$overrides4 === void 0 ? {} : _this$props$overrides4;

      var _getOverrides5 = getOverrides(overrides.ClearIcon, DeleteAlt),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          ClearIcon = _getOverrides6[0],
          clearIconProps = _getOverrides6[1];

      var ariaLabel = this.props.multi ? 'Clear all' : 'Clear value';
      return /*#__PURE__*/React.createElement(ClearIcon, _extends({
        title: ariaLabel,
        "aria-label": ariaLabel,
        onClick: this.clearValue,
        onTouchEnd: this.handleTouchEndClearValue,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        role: "button",
        overrides: {
          Svg: {
            component: StyledClearIcon,
            props: overrides.ClearIcon && overrides.ClearIcon.props ? overrides.ClearIcon.props : {},
            style: overrides.ClearIcon && overrides.ClearIcon.style ? overrides.ClearIcon.style : {}
          }
        }
      }, sharedProps, clearIconProps));
    }
  }, {
    key: "renderArrow",
    value: function renderArrow() {
      if (this.props.type !== TYPE.select) {
        return null;
      }

      var _this$props$overrides5 = this.props.overrides,
          overrides = _this$props$overrides5 === void 0 ? {} : _this$props$overrides5;

      var _getOverrides7 = getOverrides(overrides.SelectArrow, TriangleDownIcon),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          SelectArrow = _getOverrides8[0],
          selectArrowProps = _getOverrides8[1];

      var sharedProps = this.getSharedProps();
      return /*#__PURE__*/React.createElement(SelectArrow, _extends({
        size: 16,
        title: 'open',
        overrides: {
          Svg: {
            component: StyledSelectArrow,
            props: overrides.SelectArrow && overrides.SelectArrow.props ? overrides.SelectArrow.props : {},
            style: overrides.SelectArrow && overrides.SelectArrow.style ? overrides.SelectArrow.style : {}
          }
        }
      }, sharedProps, selectArrowProps));
    }
  }, {
    key: "renderSearch",
    value: function renderSearch() {
      if (this.props.type !== TYPE.search) {
        return null;
      }

      var _this$props$overrides6 = this.props.overrides,
          overrides = _this$props$overrides6 === void 0 ? {} : _this$props$overrides6;

      var _getOverrides9 = getOverrides(overrides.SearchIconContainer, StyledSearchIconContainer),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          SearchIconContainer = _getOverrides10[0],
          searchIconContainerProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.SearchIcon, SearchIconComponent),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          SearchIcon = _getOverrides12[0],
          searchIconProps = _getOverrides12[1];

      var sharedProps = this.getSharedProps();
      return (
        /*#__PURE__*/
        // TODO(v11): remove searchIconProps from SearchIconContainer
        React.createElement(SearchIconContainer, _extends({}, sharedProps, searchIconProps, searchIconContainerProps), /*#__PURE__*/React.createElement(SearchIcon, _extends({
          size: 16,
          title: 'search'
        }, searchIconProps)))
      );
    }
  }, {
    key: "filterOptions",
    value: function filterOptions(excludeOptions) {
      var _this5 = this;

      var filterValue = this.state.inputValue.trim(); // apply filter function

      if (this.props.filterOptions) {
        this.options = this.props.filterOptions(this.options, filterValue, excludeOptions, {
          valueKey: this.props.valueKey,
          labelKey: this.props.labelKey
        });
      } // can user create a new option + there's no exact match already


      var filterDoesNotMatchOption = this.props.ignoreCase ? function (opt) {
        return opt[_this5.props.labelKey].toLowerCase() !== filterValue.toLowerCase().trim();
      } : function (opt) {
        return opt[_this5.props.labelKey] !== filterValue.trim();
      };

      if (filterValue && this.props.creatable && this.options.concat(this.props.value).every(filterDoesNotMatchOption)) {
        var _this$options$push;

        // $FlowFixMe - this.options is typed as a read-only array
        this.options.push((_this$options$push = {
          id: filterValue
        }, _defineProperty(_this$options$push, this.props.labelKey, filterValue), _defineProperty(_this$options$push, this.props.valueKey, filterValue), _defineProperty(_this$options$push, "isCreatable", true), _this$options$push));
      }

      return this.options;
    }
  }, {
    key: "getSharedProps",
    value: function getSharedProps() {
      var _this$props = this.props,
          clearable = _this$props.clearable,
          creatable = _this$props.creatable,
          disabled = _this$props.disabled,
          error = _this$props.error,
          positive = _this$props.positive,
          isLoading = _this$props.isLoading,
          multi = _this$props.multi,
          required = _this$props.required,
          size = _this$props.size,
          searchable = _this$props.searchable,
          type = _this$props.type,
          value = _this$props.value;
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isFocused = _this$state.isFocused,
          isPseudoFocused = _this$state.isPseudoFocused;
      return {
        $clearable: clearable,
        $creatable: creatable,
        $disabled: disabled,
        $error: error,
        $positive: positive,
        $isFocused: isFocused,
        $isLoading: isLoading,
        $isOpen: isOpen,
        $isPseudoFocused: isPseudoFocused,
        $multi: multi,
        $required: required,
        $searchable: searchable,
        $size: size,
        $type: type,
        $isEmpty: !this.getValueArray(value).length
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      this.options = normalizeOptions(this.props.options);
      var _this$props2 = this.props,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          type = _this$props2.type,
          multi = _this$props2.multi,
          noResultsMsg = _this$props2.noResultsMsg,
          value = _this$props2.value,
          filterOutSelected = _this$props2.filterOutSelected;

      if (process.env.NODE_ENV !== "production") {
        // value may be nullish, only warn if value is defined
        if (value && !Array.isArray(value)) {
          console.warn('The Select component expects an array as the value prop. For more information, please visit the docs at https://baseweb.design/components/select/');
        }
      }

      var _getOverrides13 = getOverrides(overrides.Root, StyledRoot),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          Root = _getOverrides14[0],
          rootProps = _getOverrides14[1];

      var _getOverrides15 = getOverrides(overrides.ControlContainer, StyledControlContainer),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          ControlContainer = _getOverrides16[0],
          controlContainerProps = _getOverrides16[1];

      var _getOverrides17 = getOverrides(overrides.ValueContainer, StyledValueContainer),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          ValueContainer = _getOverrides18[0],
          valueContainerProps = _getOverrides18[1];

      var _getOverrides19 = getOverrides(overrides.IconsContainer, StyledIconsContainer),
          _getOverrides20 = _slicedToArray(_getOverrides19, 2),
          IconsContainer = _getOverrides20[0],
          iconsContainerProps = _getOverrides20[1];

      var _getOverrides21 = getOverrides(overrides.Popover, Popover),
          _getOverrides22 = _slicedToArray(_getOverrides21, 2),
          PopoverOverride = _getOverrides22[0],
          popoverProps = _getOverrides22[1];

      var _getOverrides23 = getOverrides(overrides.Placeholder, StyledPlaceholder),
          _getOverrides24 = _slicedToArray(_getOverrides23, 2),
          Placeholder = _getOverrides24[0],
          placeholderProps = _getOverrides24[1];

      var sharedProps = this.getSharedProps();
      var valueArray = this.getValueArray(value);
      var options = this.filterOptions(multi && filterOutSelected ? valueArray : null);
      var isOpen = this.state.isOpen;
      sharedProps.$isOpen = isOpen;

      if (process.env.NODE_ENV !== "production") {
        if (this.props.error && this.props.positive) {
          // eslint-disable-next-line no-console
          console.warn("[Select] `error` and `positive` are both set to `true`. `error` will take precedence but this may not be what you want.");
        }
      }

      return /*#__PURE__*/React.createElement(UIDConsumer, null, function (listboxId) {
        return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
          return /*#__PURE__*/React.createElement(PopoverOverride // Popover does not provide ability to forward refs through, and if we were to simply
          // apply the ref to the Root component below it would be overwritten before the popover
          // renders it. Using this strategy, we will get a ref to the popover, then reuse its
          // anchorRef so we can check if clicks are on the select component or not.
          // eslint-disable-next-line flowtype/no-weak-types
          , _extends({
            innerRef: function innerRef(ref) {
              if (!ref) return;
              _this6.anchor = ref.anchorRef;
            },
            autoFocus: false,
            focusLock: false,
            mountNode: _this6.props.mountNode,
            onEsc: function onEsc() {
              return _this6.closeMenu();
            },
            isOpen: isOpen,
            popoverMargin: 0,
            content: function content() {
              var dropdownProps = {
                error: _this6.props.error,
                positive: _this6.props.positive,
                getOptionLabel: _this6.props.getOptionLabel || _this6.getOptionLabel.bind(_this6, locale),
                id: listboxId,
                isLoading: _this6.props.isLoading,
                labelKey: _this6.props.labelKey,
                maxDropdownHeight: _this6.props.maxDropdownHeight,
                multi: multi,
                noResultsMsg: noResultsMsg,
                onActiveDescendantChange: _this6.handleActiveDescendantChange,
                onItemSelect: _this6.selectValue,
                options: options,
                overrides: overrides,
                required: _this6.props.required,
                searchable: _this6.props.searchable,
                size: _this6.props.size,
                type: type,
                value: valueArray,
                valueKey: _this6.props.valueKey,
                width: _this6.anchor.current ? _this6.anchor.current.clientWidth : null,
                keyboardControlNode: _this6.anchor
              };
              return /*#__PURE__*/React.createElement(SelectDropdown, _extends({
                innerRef: _this6.dropdown
              }, dropdownProps));
            },
            placement: PLACEMENT.bottom
          }, popoverProps), /*#__PURE__*/React.createElement(Root, _extends({
            onBlur: _this6.handleBlur,
            "data-baseweb": "select"
          }, sharedProps, rootProps), /*#__PURE__*/React.createElement(ControlContainer, _extends({
            onKeyDown: _this6.handleKeyDown,
            onClick: _this6.handleClick,
            onTouchEnd: _this6.handleTouchEnd,
            onTouchMove: _this6.handleTouchMove,
            onTouchStart: _this6.handleTouchStart
          }, sharedProps, controlContainerProps), type === TYPE.search ? _this6.renderSearch() : null, /*#__PURE__*/React.createElement(ValueContainer, _extends({}, sharedProps, valueContainerProps), _this6.renderValue(valueArray, isOpen, locale), _this6.renderInput(listboxId), _this6.shouldShowPlaceholder() ? /*#__PURE__*/React.createElement(Placeholder, _extends({}, sharedProps, placeholderProps), typeof _this6.props.placeholder !== 'undefined' ? _this6.props.placeholder : locale.select.placeholder) : null), /*#__PURE__*/React.createElement(IconsContainer, _extends({}, sharedProps, iconsContainerProps), _this6.renderLoading(), _this6.renderClear(), type === TYPE.select ? _this6.renderArrow() : null))));
        });
      });
    }
  }]);

  return Select;
}(React.Component);

_defineProperty(Select, "defaultProps", defaultProps);

export default Select;