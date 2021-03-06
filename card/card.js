function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';
import { LevelContext } from '../heading/index.js';
import { Action as StyledAction, Body as StyledBody, Contents as StyledContents, HeaderImage as StyledHeaderImage, Root as StyledRoot, Thumbnail as StyledThumbnail, Title as StyledTitle } from './styled-components.js';
export function hasThumbnail(props) {
  return !!props.thumbnail;
}

var SemanticTitle = function SemanticTitle(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  var levels = ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  return /*#__PURE__*/React.createElement(LevelContext.Consumer, null, function (level) {
    return /*#__PURE__*/React.createElement(StyledTitle, _extends({
      $as: levels[level]
    }, restProps), children);
  });
};

function Card(props) {
  var action = props.action,
      children = props.children,
      hasThumbnail = props.hasThumbnail,
      headerImage = props.headerImage,
      thumbnailSrc = props.thumbnail,
      title = props.title,
      overrides = props.overrides,
      restProps = _objectWithoutProperties(props, ["action", "children", "hasThumbnail", "headerImage", "thumbnail", "title", "overrides"]);

  var ActionOverride = overrides.Action,
      BodyOverride = overrides.Body,
      ContentsOverride = overrides.Contents,
      HeaderImageOverride = overrides.HeaderImage,
      RootOverride = overrides.Root,
      ThumbnailOverride = overrides.Thumbnail,
      TitleOverride = overrides.Title;
  var Action = getOverride(ActionOverride) || StyledAction;
  var Body = getOverride(BodyOverride) || StyledBody;
  var Contents = getOverride(ContentsOverride) || StyledContents;
  var HeaderImage = getOverride(HeaderImageOverride) || StyledHeaderImage;
  var Root = getOverride(RootOverride) || StyledRoot;
  var Thumbnail = getOverride(ThumbnailOverride) || StyledThumbnail;
  var Title = getOverride(TitleOverride) || SemanticTitle;
  var headerImageProps = typeof headerImage === 'string' ? {
    src: headerImage
  } : headerImage;
  var $hasThumbnail = hasThumbnail(props);
  return /*#__PURE__*/React.createElement(Root, _extends({
    "data-baseweb": "card"
  }, restProps, getOverrideProps(RootOverride)), headerImage && /*#__PURE__*/React.createElement(HeaderImage, _extends({}, headerImageProps, getOverrideProps(HeaderImageOverride))), /*#__PURE__*/React.createElement(Contents, getOverrideProps(ContentsOverride), thumbnailSrc && /*#__PURE__*/React.createElement(Thumbnail, _extends({
    src: thumbnailSrc
  }, getOverrideProps(ThumbnailOverride))), title && /*#__PURE__*/React.createElement(Title, _extends({
    $hasThumbnail: $hasThumbnail
  }, getOverrideProps(TitleOverride)), title), /*#__PURE__*/React.createElement(Body, getOverrideProps(BodyOverride), children), action && /*#__PURE__*/React.createElement(Action, getOverrideProps(ActionOverride), action)));
}

Card.defaultProps = {
  action: null,
  children: null,
  hasThumbnail: hasThumbnail,
  overrides: {}
};
export default Card;