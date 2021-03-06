function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { LocaleContext } from '../locale/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { PanelContainer as StyledPanelContainer, Header as StyledHeader, Content as StyledContent, ToggleIcon as StyledToggleIcon, ToggleIconGroup as StyledToggleIconGroup, ContentAnimationContainer as StyledContentAnimationContainer } from './styled-components.js';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible.js';

var Panel = function Panel(_ref) {
  var ariaControls = _ref['aria-controls'],
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$renderPanelConte = _ref.renderPanelContent,
      renderPanelContent = _ref$renderPanelConte === void 0 ? false : _ref$renderPanelConte,
      _ref$renderAll = _ref.renderAll,
      renderAll = _ref$renderAll === void 0 ? false : _ref$renderAll;

  var _React$useState = React.useState({
    expanded: expanded,
    isFocusVisible: false,
    elementHeight: 0,
    animationInProgress: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      localState = _React$useState2[0],
      setLocalState = _React$useState2[1];

  var handleFocus = React.useCallback(function (event) {
    if (isFocusVisible(event)) {
      setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        isFocusVisible: true
      }));
    }
  }, [localState]);
  var handleBlur = React.useCallback(function (event) {
    if (localState.isFocusVisible) {
      setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        isFocusVisible: false
      }));
    }
  }, [localState]);
  var handleClick = React.useCallback(function (e) {
    if (disabled) {
      return;
    }

    typeof onChange === 'function' && onChange({
      expanded: !expanded
    });
    typeof onClick === 'function' && onClick(e);
  }, [expanded, disabled, onChange, onClick]);
  var handleKeyDown = React.useCallback(function (e) {
    if (disabled) {
      return;
    }

    var ENTER = 13;
    var SPACE = 32;

    if (e.keyCode === ENTER || e.keyCode === SPACE) {
      typeof onChange === 'function' && onChange({
        expanded: !expanded
      });

      if (e.keyCode === SPACE) {
        e.preventDefault(); // prevent jumping scroll when using Space
      }
    }

    typeof onKeyDown === 'function' && onKeyDown(e);
  }, [expanded, disabled, onChange, onKeyDown]); // eslint-disable-next-line flowtype/no-weak-types

  var _animateRef = React.useRef(null);

  React.useEffect(function () {
    if (_animateRef.current) {
      var height = _animateRef.current.getBoundingClientRect().height; // After the first render, when everything is in the DOM, update the local
      //state to indicate an animation is in progress.


      if (expanded !== localState.expanded) {
        setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
          expanded: expanded,
          animationInProgress: true
        }));
      } else if (parseInt(localState.elementHeight) !== height) {
        // After the second render (where child elements were added to the Content)
        //the Content height now reflects the true height. This kicks off the actual
        //animation.
        setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
          elementHeight: height ? "".concat(height, "px") : 0
        }));
      }
    }
  }, [_animateRef.current, expanded, localState.elementHeight, localState.expanded, setLocalState]);
  var contentHeight = React.useMemo(function () {
    // When closing, the first render will re-query the content element for the new
    //height and set the height of the animation container from auto to a px value.
    if (!expanded && localState.expanded) {
      var height = _animateRef.current.getBoundingClientRect().height;

      setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
        elementHeight: height ? "".concat(height, "px") : 0
      }));
      return localState.elementHeight;
    }

    if (!localState.expanded) {
      return 0;
    } // When no longer animating, set the height to auto to accommodate dynamic nested components.


    return localState.animationInProgress ? localState.elementHeight : 'auto';
  }, [expanded, localState.expanded, localState.animationInProgress, localState.elementHeight]);
  var sharedProps = {
    $disabled: disabled,
    $expanded: expanded,
    $isFocusVisible: localState.isFocusVisible
  };
  var PanelContainerOverride = overrides.PanelContainer,
      HeaderOverride = overrides.Header,
      ContentOverride = overrides.Content,
      ContentAnimationContainerOverride = overrides.ContentAnimationContainer,
      ToggleIconOverride = overrides.ToggleIcon,
      ToggleIconGroupOverride = overrides.ToggleIconGroup;

  var _getOverrides = getOverrides(PanelContainerOverride, StyledPanelContainer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      PanelContainer = _getOverrides2[0],
      panelContainerProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(HeaderOverride, StyledHeader),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Header = _getOverrides4[0],
      headerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(ContentOverride, StyledContent),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Content = _getOverrides6[0],
      contentProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(ContentAnimationContainerOverride, StyledContentAnimationContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      ContentAnimationContainer = _getOverrides8[0],
      contentAnimationProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(ToggleIconGroupOverride, StyledToggleIconGroup),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      ToggleIconGroup = _getOverrides10[0],
      toggleIconGroupProps = _getOverrides10[1];

  var _getOverrides11 = getOverrides(ToggleIconOverride, StyledToggleIcon),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      ToggleIcon = _getOverrides12[0],
      toggleIconProps = _getOverrides12[1];

  return /*#__PURE__*/React.createElement(LocaleContext.Consumer, null, function (locale) {
    return /*#__PURE__*/React.createElement(PanelContainer, _extends({}, sharedProps, panelContainerProps), /*#__PURE__*/React.createElement(Header, _extends({
      tabIndex: 0,
      role: "button",
      "aria-expanded": expanded,
      "aria-disabled": disabled || null
    }, sharedProps, headerProps, ariaControls ? {
      'aria-controls': ariaControls
    } : {}, {
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      onFocus: forkFocus(headerProps, handleFocus),
      onBlur: forkBlur(headerProps, handleBlur)
    }), title, /*#__PURE__*/React.createElement(ToggleIcon, _extends({
      viewBox: "0 0 24 24",
      title: localState.expanded ? locale.accordion.collapse : locale.accordion.expand,
      size: 16
    }, toggleIconProps, sharedProps), /*#__PURE__*/React.createElement(ToggleIconGroup, _extends({}, sharedProps, toggleIconGroupProps), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
    })), /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"
    }))), /*#__PURE__*/React.createElement(ContentAnimationContainer, _extends({}, sharedProps, contentAnimationProps, {
      $height: contentHeight,
      onTransitionEnd: function onTransitionEnd() {
        if (localState.animationInProgress) {
          setLocalState(_objectSpread(_objectSpread({}, localState), {}, {
            animationInProgress: false
          }));
        }
      }
    }), /*#__PURE__*/React.createElement(Content, _extends({
      ref: _animateRef
    }, sharedProps, contentProps, ariaControls ? {
      id: ariaControls
    } : {}), localState.expanded || renderAll || renderPanelContent || localState.animationInProgress ? children : null)));
  });
};

export default Panel;