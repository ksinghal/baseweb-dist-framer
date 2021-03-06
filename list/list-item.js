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
import React from 'react';
import { getOverrides } from '../helpers/overrides.js';
import { ARTWORK_SIZES, SHAPE } from './constants.js';
import { StyledRoot, StyledContent, StyledEndEnhancerContainer, StyledArtworkContainer } from './styled-components.js';
import { artworkSizeToValue } from './utils.js';
var ListItem = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides;
  var Artwork = props.artwork;
  var EndEnhancer = props.endEnhancer;

  var _getOverrides = getOverrides(overrides.Root, StyledRoot),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Root = _getOverrides2[0],
      rootProps = _getOverrides2[1];

  var _getOverrides3 = getOverrides(overrides.ArtworkContainer, StyledArtworkContainer),
      _getOverrides4 = _slicedToArray(_getOverrides3, 2),
      ArtworkContainer = _getOverrides4[0],
      artworkContainerProps = _getOverrides4[1];

  var _getOverrides5 = getOverrides(overrides.Content, StyledContent),
      _getOverrides6 = _slicedToArray(_getOverrides5, 2),
      Content = _getOverrides6[0],
      contentProps = _getOverrides6[1];

  var _getOverrides7 = getOverrides(overrides.EndEnhancerContainer, StyledEndEnhancerContainer),
      _getOverrides8 = _slicedToArray(_getOverrides7, 2),
      EndEnhancerContainer = _getOverrides8[0],
      endEnhancerContainerProps = _getOverrides8[1];

  var artworkSize = React.useMemo(function () {
    if (props.sublist) {
      var size = props.artworkSize || ARTWORK_SIZES.SMALL;

      if (props.artworkSize === ARTWORK_SIZES.MEDIUM) {
        size = ARTWORK_SIZES.SMALL;

        if (process.env.NODE_ENV !== "production") {
          console.warn('When ListItem sublist prop is true, artworkSize MEDIUM is aliased to SMALL');
        }
      }

      return size;
    } else {
      return props.artworkSize || ARTWORK_SIZES.MEDIUM;
    }
  }, [props.artworkSize, props.sublist]);
  return /*#__PURE__*/React.createElement(Root // eslint-disable-next-line flowtype/no-weak-types
  , _extends({
    ref: ref,
    $shape: props.shape || SHAPE.DEFAULT
  }, rootProps), Artwork && /*#__PURE__*/React.createElement(ArtworkContainer, _extends({
    $artworkSize: artworkSize,
    $sublist: Boolean(props.sublist)
  }, artworkContainerProps), /*#__PURE__*/React.createElement(Artwork, {
    size: typeof artworkSize === 'number' ? artworkSize : artworkSizeToValue(artworkSize, Boolean(props.sublist))
  })), /*#__PURE__*/React.createElement(Content, _extends({
    $mLeft: !Artwork,
    $sublist: !!props.sublist
  }, contentProps), props.children, EndEnhancer && EndEnhancer !== 0 && /*#__PURE__*/React.createElement(EndEnhancerContainer, endEnhancerContainerProps, /*#__PURE__*/React.createElement(EndEnhancer, null))));
});
ListItem.displayName = 'ListItem';
export default ListItem;