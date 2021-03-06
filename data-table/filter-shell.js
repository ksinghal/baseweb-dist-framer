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
import { Button, SIZE as BUTTON_SIZE } from '../button/index.js';
import { Checkbox, STYLE_TYPE } from '../checkbox/index.js';
import { useStyletron } from '../styles/index.js';
import { LocaleContext } from '../locale/index.js';

function FilterShell(props) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var locale = React.useContext(LocaleContext);
  return /*#__PURE__*/React.createElement("form", {
    className: css({
      backgroundColor: theme.colors.backgroundPrimary,
      paddingTop: theme.sizing.scale600,
      paddingRight: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      width: '320px'
    }),
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      props.onApply();
    }
  }, props.children, /*#__PURE__*/React.createElement("div", {
    className: css({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.sizing.scale600
    })
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: props.exclude,
    onChange: props.onExcludeChange,
    checkmarkType: STYLE_TYPE.toggle_round,
    labelPlacement: "right"
  }, locale.datatable.filterExclude), /*#__PURE__*/React.createElement(Button, {
    size: BUTTON_SIZE.compact,
    type: "submit"
  }, locale.datatable.filterApply)));
}

export default FilterShell;