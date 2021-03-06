function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { Button, KIND, SHAPE } from '../button/index.js';
import { getOverrides } from '../helpers/overrides.js';
import { useStyletron } from '../styles/index.js';
import { StyledRoot, StyledContent, StyledStartEnhancerContainer, StyledSpinner, StyledMessage, StyledWrapActionButtonContainer, StyledActionButtonContainer } from './styled-components.js';
var ActionButton = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var onClick = _ref.onClick,
      message = _ref.message,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var _getOverrides = getOverrides(overrides.ActionButtonContainer, StyledActionButtonContainer),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      ActionButtonContainer = _getOverrides2[0],
      actionButtonContainerProps = _getOverrides2[1];

  return /*#__PURE__*/React.createElement(ActionButtonContainer, actionButtonContainerProps, /*#__PURE__*/React.createElement(Button, {
    ref: ref,
    overrides: {
      BaseButton: {
        style: {
          color: theme.colors.contentInversePrimary,
          marginRight: theme.direction === 'rtl' ? null : theme.sizing.scale100,
          marginLeft: theme.direction === 'rtl' ? theme.sizing.scale100 : null,
          width: '100%',
          whiteSpace: 'nowrap',
          ':hover': {
            backgroundColor: theme.colors.borderInverseTransparent
          },
          ':active': {
            backgroundColor: theme.colors.backgroundInverseSecondary
          }
        }
      }
    },
    kind: KIND.tertiary,
    onClick: onClick,
    shape: SHAPE.pill
  }, message));
});
export default function SnackbarElement(_ref2) {
  var actionMessage = _ref2.actionMessage,
      actionOnClick = _ref2.actionOnClick,
      _ref2$focus = _ref2.focus,
      focus = _ref2$focus === void 0 ? true : _ref2$focus,
      message = _ref2.message,
      _ref2$overrides = _ref2.overrides,
      overrides = _ref2$overrides === void 0 ? {} : _ref2$overrides,
      progress = _ref2.progress,
      StartEnhancer = _ref2.startEnhancer;

  var _useStyletron3 = useStyletron(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 1),
      css = _useStyletron4[0];

  var rootRef = React.useRef(null);

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      rootWidth = _React$useState2[0],
      setRootWidth = _React$useState2[1];

  React.useEffect(function () {
    if (typeof document !== 'undefined') {
      if (window.ResizeObserver) {
        var observer = new window.ResizeObserver(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 1),
              entry = _ref4[0];

          return setRootWidth(entry.contentRect.width);
        });

        if (rootRef.current) {
          observer.observe(rootRef.current);
        }

        return function () {
          return observer.disconnect();
        };
      }
    }
  }, []);
  var actionMeasureRef = React.useRef(null);

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      actionMeasureWidth = _React$useState4[0],
      setActionMeasureWidth = _React$useState4[1];

  React.useEffect(function () {
    if (typeof document !== 'undefined') {
      if (window.ResizeObserver) {
        var observer = new window.ResizeObserver(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 1),
              entry = _ref6[0];

          return setActionMeasureWidth(entry.contentRect.width);
        });

        if (actionMeasureRef.current) {
          observer.observe(actionMeasureRef.current);
        }

        return function () {
          return observer.disconnect();
        };
      }
    }
  }, [actionMeasureRef.current]);
  var wrapActionButton = actionMeasureWidth > rootWidth / 2;

  var _getOverrides3 = getOverrides(overrides.Root, StyledRoot),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Root = _getOverrides4[0],
      rootProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.Content, StyledContent),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Content = _getOverrides6[0],
      contentProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.StartEnhancerContainer, StyledStartEnhancerContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      StartEnhancerContainer = _getOverrides8[0],
      startEnhancerContainerProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.Spinner, StyledSpinner),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      Spinner = _getOverrides10[0],
      spinnerProps = _getOverrides10[1];

  var _getOverrides11 = getOverrides(overrides.Message, StyledMessage),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      Message = _getOverrides12[0],
      messageProps = _getOverrides12[1];

  var _getOverrides13 = getOverrides(overrides.WrapActionButtonContainer, StyledWrapActionButtonContainer),
      _getOverrides14 = _slicedToArray(_getOverrides13, 2),
      WrapActionButtonContainer = _getOverrides14[0],
      wrapActionButtonContainerProps = _getOverrides14[1];

  var prevFocusRef = React.useRef(null);
  var actionButtonRef = React.useRef(null);
  React.useEffect(function () {
    if (typeof document !== 'undefined') {
      if (focus && actionButtonRef.current) {
        prevFocusRef.current = document.activeElement; // $FlowFixMe

        actionButtonRef.current.focus();
      }

      return function () {
        if (prevFocusRef.current) {
          prevFocusRef.current.focus();
        }
      };
    }
  }, [focus]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, actionMessage && /*#__PURE__*/React.createElement("div", {
    className: css({
      position: 'absolute',
      left: '-10000px',
      top: '-10000px'
    })
  }, /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionMeasureRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  })), /*#__PURE__*/React.createElement(Root, _extends({
    ref: rootRef
  }, rootProps), /*#__PURE__*/React.createElement(Content, contentProps, (Boolean(StartEnhancer) || progress) && /*#__PURE__*/React.createElement(StartEnhancerContainer, startEnhancerContainerProps, StartEnhancer !== null && StartEnhancer !== undefined ? /*#__PURE__*/React.createElement(StartEnhancer, {
    size: 24
  }) : /*#__PURE__*/React.createElement(Spinner, _extends({
    $height: 24,
    $width: 24
  }, spinnerProps))), /*#__PURE__*/React.createElement(Message, _extends({
    $hasSuffix: Boolean(actionMessage)
  }, messageProps), message), actionMessage && !wrapActionButton && /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionButtonRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  })), actionMessage && wrapActionButton && /*#__PURE__*/React.createElement(WrapActionButtonContainer, wrapActionButtonContainerProps, /*#__PURE__*/React.createElement(ActionButton, {
    ref: actionButtonRef,
    message: actionMessage,
    onClick: actionOnClick,
    overrides: overrides
  }))));
}