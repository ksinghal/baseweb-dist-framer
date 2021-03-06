function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Block from '../block/block.js';
export var DisplayLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-displaylarge"
  }, props, {
    font: props.font || 'DisplayLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayLarge.displayName = 'DisplayLarge';
export var DisplayMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-displaymedium"
  }, props, {
    font: props.font || 'DisplayMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayMedium.displayName = 'DisplayMedium';
export var DisplaySmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-displaysmall"
  }, props, {
    font: props.font || 'DisplaySmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplaySmall.displayName = 'DisplaySmall';
export var DisplayXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-displayxsmall"
  }, props, {
    font: props.font || 'DisplayXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayXSmall.displayName = 'DisplayXSmall';
export var HeadingXXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxxlarge",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'HeadingXXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXXLarge.displayName = 'HeadingXXLarge';
export var HeadingXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxlarge",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'HeadingXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXLarge.displayName = 'HeadingXLarge';
export var HeadingLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headinglarge",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'HeadingLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingLarge.displayName = 'HeadingLarge';
export var HeadingMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headingmedium",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'HeadingMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingMedium.displayName = 'HeadingMedium';
export var HeadingSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headingsmall",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'HeadingSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingSmall.displayName = 'HeadingSmall';
export var HeadingXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxsmall",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'HeadingXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXSmall.displayName = 'HeadingXSmall';
export var LabelLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-labellarge"
  }, props, {
    font: props.font || 'LabelLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelLarge.displayName = 'LabelLarge';
export var LabelMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-labelmedium"
  }, props, {
    font: props.font || 'LabelMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelMedium.displayName = 'LabelMedium';
export var LabelSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-labelsmall"
  }, props, {
    font: props.font || 'LabelSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelSmall.displayName = 'LabelSmall';
export var LabelXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-labelxsmall"
  }, props, {
    font: props.font || 'LabelXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelXSmall.displayName = 'LabelXSmall';
export var ParagraphLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphlarge",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphLarge.displayName = 'ParagraphLarge';
export var ParagraphMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphmedium",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphMedium.displayName = 'ParagraphMedium';
export var ParagraphSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphSmall.displayName = 'ParagraphSmall';
export var ParagraphXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphxsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphXSmall.displayName = 'ParagraphXSmall';
export var MonoDisplayLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monodisplaylarge"
  }, props, {
    font: props.font || 'MonoDisplayLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoDisplayLarge.displayName = 'MonoDisplayLarge';
export var MonoDisplayMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monodisplaymedium"
  }, props, {
    font: props.font || 'MonoDisplayMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoDisplayMedium.displayName = 'MonoDisplayMedium';
export var MonoDisplaySmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monodisplaysmall"
  }, props, {
    font: props.font || 'MonoDisplaySmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoDisplaySmall.displayName = 'MonoDisplaySmall';
export var MonoDisplayXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monodisplayxsmall"
  }, props, {
    font: props.font || 'MonoDisplayXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoDisplayXSmall.displayName = 'MonoDisplayXSmall';
export var MonoHeadingXXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadingxxlarge",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'MonoHeadingXXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingXXLarge.displayName = 'MonoHeadingXXLarge';
export var MonoHeadingXLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadingxlarge",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'MonoHeadingXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingXLarge.displayName = 'MonoHeadingXLarge';
export var MonoHeadingLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadinglarge",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'MonoHeadingLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingLarge.displayName = 'MonoHeadingLarge';
export var MonoHeadingMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadingmedium",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'MonoHeadingMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingMedium.displayName = 'MonoHeadingMedium';
export var MonoHeadingSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadingsmall",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'MonoHeadingSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingSmall.displayName = 'MonoHeadingSmall';
export var MonoHeadingXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoheadingxsmall",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'MonoHeadingXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoHeadingXSmall.displayName = 'MonoHeadingXSmall';
export var MonoLabelLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monolabellarge"
  }, props, {
    font: props.font || 'MonoLabelLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoLabelLarge.displayName = 'MonoLabelLarge';
export var MonoLabelMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monolabelmedium"
  }, props, {
    font: props.font || 'MonoLabelMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoLabelMedium.displayName = 'MonoLabelMedium';
export var MonoLabelSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monolabelsmall"
  }, props, {
    font: props.font || 'MonoLabelSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoLabelSmall.displayName = 'MonoLabelSmall';
export var MonoLabelXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monolabelxsmall"
  }, props, {
    font: props.font || 'MonoLabelXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoLabelXSmall.displayName = 'MonoLabelXSmall';
export var MonoParagraphLarge = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoparagraphlarge",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoParagraphLarge.displayName = 'MonoParagraphLarge';
export var MonoParagraphMedium = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoparagraphmedium",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoParagraphMedium.displayName = 'MonoParagraphMedium';
export var MonoParagraphSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoparagraphsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoParagraphSmall.displayName = 'MonoParagraphSmall';
export var MonoParagraphXSmall = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Block, _extends({
    "data-baseweb": "typo-monoparagraphxsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'MonoParagraphXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
MonoParagraphXSmall.displayName = 'MonoParagraphXSmall'; // TODO(v11): remove
// Aliases for backwards compatibility

export var Display = DisplayLarge;
export var Display1 = DisplayLarge;
export var Display2 = DisplayMedium;
export var Display3 = DisplaySmall;
export var Display4 = DisplayXSmall;
export var H1 = HeadingXXLarge;
export var H2 = HeadingXLarge;
export var H3 = HeadingLarge;
export var H4 = HeadingMedium;
export var H5 = HeadingSmall;
export var H6 = HeadingXSmall;
export var Paragraph1 = ParagraphLarge;
export var Paragraph2 = ParagraphMedium;
export var Paragraph3 = ParagraphSmall;
export var Paragraph4 = ParagraphXSmall;
export var Label1 = LabelLarge;
export var Label2 = LabelMedium;
export var Label3 = LabelSmall;
export var Label4 = LabelXSmall;
export var Caption1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Paragraph4, _extends({}, props, {
    color: props.color || 'contentSecondary',
    ref: ref
  }));
});
Caption1.displayName = 'Caption1';
export var Caption2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(Label4, _extends({}, props, {
    color: props.color || 'contentSecondary'
  }));
});
Caption2.displayName = 'Caption2';