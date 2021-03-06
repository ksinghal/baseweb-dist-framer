function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import * as ReactIs from 'react-is';
import { getOverrides } from '../helpers/overrides.js';
import { StyledHeadingRoot, StyledHeadingContent, StyledHeadingContentRow, StyledHeadingEndEnhancerContainer, StyledHeadingEndEnhancerDescriptionContainer, StyledHeadingMainHeading, StyledHeadingSubHeading } from './styled-components.js';

function RenderNode(props) {
  var component = props.component,
      restProps = _objectWithoutProperties(props, ["component"]);

  var Component = component;

  if (!Component) {
    return null;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (ReactIs.isValidElementType(Component)) {
    // $FlowFixMe
    return /*#__PURE__*/React.createElement(Component, restProps);
  } // $FlowFixMe


  return Component;
}

function isMaxLinesValid(maxLines) {
  return maxLines === 1 || maxLines === 2;
}

var ListHeading = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      maxLines = props.maxLines;
  var EndEnhancer = props.endEnhancer;
  var EndEnhancerDescription = props.endEnhancerDescription;
  var SubHeading = props.subHeading;

  var _getOverrides = getOverrides(overrides.Root, StyledHeadingRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.Content, StyledHeadingContent),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      Content = _getOverrides4[0],
      contentProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.HeadingContainer, StyledHeadingMainHeading),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      HeadingContainer = _getOverrides6[0],
      headingContainerProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.SubHeadingContainer, StyledHeadingSubHeading),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      SubHeadingContainer = _getOverrides8[0],
      subHeadingContainerProps = _getOverrides8[1];

  var _getOverrides9 = getOverrides(overrides.EndEnhancerContainer, StyledHeadingEndEnhancerContainer),
      _getOverrides10 = _slicedToArray(_getOverrides9, 2),
      EndEnhancerContainer = _getOverrides10[0],
      endEnhancerContainerProps = _getOverrides10[1];

  var _getOverrides11 = getOverrides(overrides.EndEnhancerDescriptionContainer, StyledHeadingEndEnhancerDescriptionContainer),
      _getOverrides12 = _slicedToArray(_getOverrides11, 2),
      EndEnhancerDescriptionContainer = _getOverrides12[0],
      endEnhancerDescriptionContainerProps = _getOverrides12[1];

  var isEndEnhancerString = typeof EndEnhancer === 'string';

  if (process.env.NODE_ENV !== "production") {
    if (isEndEnhancerString && EndEnhancerDescription) {
      console.warn('endEnhancerDescription will not be rendered if endEnhancer is not a string');
    }

    if (maxLines && !isMaxLinesValid(maxLines)) {
      console.warn('maxLines must be 1 or 2.');
    }
  }

  return /*#__PURE__*/React.createElement(Root // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: ref
  }, rootProps), /*#__PURE__*/React.createElement(Content, contentProps, /*#__PURE__*/React.createElement(StyledHeadingContentRow, null, /*#__PURE__*/React.createElement(HeadingContainer, _extends({
    $maxLines: isMaxLinesValid(maxLines) ? maxLines : 1
  }, headingContainerProps), /*#__PURE__*/React.createElement(RenderNode, {
    component: props.heading
  })), EndEnhancer && /*#__PURE__*/React.createElement(EndEnhancerContainer, _extends({
    $isText: isEndEnhancerString
  }, endEnhancerContainerProps), /*#__PURE__*/React.createElement(RenderNode, {
    component: EndEnhancer
  }))), (SubHeading || EndEnhancerDescription) && /*#__PURE__*/React.createElement(StyledHeadingContentRow, null, /*#__PURE__*/React.createElement(SubHeadingContainer, _extends({
    $maxLines: isMaxLinesValid(maxLines) ? maxLines : 1
  }, subHeadingContainerProps), /*#__PURE__*/React.createElement(RenderNode, {
    component: SubHeading
  })), EndEnhancerDescription && isEndEnhancerString && /*#__PURE__*/React.createElement(EndEnhancerDescriptionContainer, endEnhancerDescriptionContainerProps, /*#__PURE__*/React.createElement(RenderNode, {
    component: EndEnhancerDescription
  })))));
});
ListHeading.displayName = 'ListHeading';
export default ListHeading;