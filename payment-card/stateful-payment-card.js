/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from '../input/stateful-container.js';
import PaymentCard from './payment-card.js';
export default function StatefulPaymentCard(props) {
  return /*#__PURE__*/React.createElement(StatefulContainer, props, function (childrenProps) {
    return /*#__PURE__*/React.createElement(PaymentCard, childrenProps);
  });
}