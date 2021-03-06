/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { starSVG, angryRatingSVG, sadRatingSVG, neutralRatingSVG, happyRatingSVG, veryHappyRatingSVG } from './svg-icons.js';
export var StyledRoot = styled('ul', function (_ref) {
  var $theme = _ref.$theme;
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    ':focus': {
      outline: 'none'
    }
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledStar = styled('li', function (_ref2) {
  var $theme = _ref2.$theme,
      $isActive = _ref2.$isActive,
      $isPartialActive = _ref2.$isPartialActive,
      $isSelected = _ref2.$isSelected,
      $isFocusVisible = _ref2.$isFocusVisible,
      $isReadOnly = _ref2.$isReadOnly,
      $size = _ref2.$size;
  var starStroke = $theme.colors.ratingStroke;
  var starFill = $theme.colors.ratingInactiveFill;
  var prePartialStarStroke;
  var prePartialStarFill;

  if ($isActive) {
    starStroke = starFill = $theme.colors.rating400;
  }

  if ($isPartialActive && !$isActive) {
    prePartialStarStroke = prePartialStarFill = $theme.colors.rating400;
  }

  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: $isReadOnly ? 'default' : 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: "".concat($size, "px"),
    height: "".concat($size, "px"),
    lineHeight: 1,
    transform: $isSelected ? 'scale(1.35)' : null,
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    position: 'relative',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + starSVG(starFill, starStroke, $size) + "')",
      height: '100%'
    },
    ':before': prePartialStarFill && prePartialStarStroke ? {
      transition: "all ".concat($theme.animation.timing400),
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      content: "url('data:image/svg+xml," + starSVG(prePartialStarFill, prePartialStarStroke, $size) + "')"
    } : {},
    ':last-of-type': {
      marginRight: 0
    }
  };
  return styles;
});
StyledStar.displayName = "StyledStar";
export var StyledEmoticon = styled('li', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isSelected = _ref3.$isSelected,
      _ref3$$index = _ref3.$index,
      $index = _ref3$$index === void 0 ? 1 : _ref3$$index,
      $isFocusVisible = _ref3.$isFocusVisible,
      $isReadOnly = _ref3.$isReadOnly,
      $size = _ref3.$size;
  var emoticonFill = $theme.colors.ratingInactiveFill;

  if ($isActive) {
    emoticonFill = $theme.colors.rating400;
  }

  var ratingIcons = [angryRatingSVG(emoticonFill, $size), sadRatingSVG(emoticonFill, $size), neutralRatingSVG(emoticonFill, $size), happyRatingSVG(emoticonFill, $size), veryHappyRatingSVG(emoticonFill, $size)];
  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: $isReadOnly ? 'default' : 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: "".concat($size, "px"),
    height: "".concat($size, "px"),
    transform: $isSelected ? 'scale(1.1)' : null,
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + ratingIcons[$index - 1] + "')"
    }
  };
  return styles;
});
StyledEmoticon.displayName = "StyledEmoticon";