/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulSliderContainer from './stateful-slider-container.js';
import Slider from './slider.js';
export default function StatefulSlider(props) {
  return /*#__PURE__*/React.createElement(StatefulSliderContainer, props, function (childrenProps) {
    return /*#__PURE__*/React.createElement(Slider, childrenProps);
  });
}