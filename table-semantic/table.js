function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StyledRoot, StyledTable, StyledTableHead, StyledTableHeadRow, StyledTableHeadCell, StyledTableBody, StyledTableBodyRow, StyledTableBodyCell, StyledTableLoadingMessage, StyledTableEmptyMessage } from './styled-components.js';
import { getOverrides } from '../helpers/overrides.js';

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$overrides = _this$props.overrides,
          overrides = _this$props$overrides === void 0 ? {} : _this$props$overrides,
          columns = _this$props.columns,
          data = _this$props.data,
          divider = _this$props.divider,
          horizontalScrollWidth = _this$props.horizontalScrollWidth,
          isLoading = _this$props.isLoading,
          loadingMessage = _this$props.loadingMessage,
          emptyMessage = _this$props.emptyMessage,
          size = _this$props.size,
          rest = _objectWithoutProperties(_this$props, ["overrides", "columns", "data", "divider", "horizontalScrollWidth", "isLoading", "loadingMessage", "emptyMessage", "size"]);

      var _getOverrides = getOverrides(overrides.Root, StyledRoot),
          _getOverrides2 = _slicedToArray(_getOverrides, 2),
          Root = _getOverrides2[0],
          rootProps = _getOverrides2[1];

      var _getOverrides3 = getOverrides(overrides.Table, StyledTable),
          _getOverrides4 = _slicedToArray(_getOverrides3, 2),
          _Table = _getOverrides4[0],
          tableProps = _getOverrides4[1];

      var _getOverrides5 = getOverrides(overrides.TableHead, StyledTableHead),
          _getOverrides6 = _slicedToArray(_getOverrides5, 2),
          TableHead = _getOverrides6[0],
          tableHeadProps = _getOverrides6[1];

      var _getOverrides7 = getOverrides(overrides.TableHeadRow, StyledTableHeadRow),
          _getOverrides8 = _slicedToArray(_getOverrides7, 2),
          TableHeadRow = _getOverrides8[0],
          tableHeadRowProps = _getOverrides8[1];

      var _getOverrides9 = getOverrides(overrides.TableHeadCell, StyledTableHeadCell),
          _getOverrides10 = _slicedToArray(_getOverrides9, 2),
          TableHeadCell = _getOverrides10[0],
          tableHeadCellProps = _getOverrides10[1];

      var _getOverrides11 = getOverrides(overrides.TableBody, StyledTableBody),
          _getOverrides12 = _slicedToArray(_getOverrides11, 2),
          TableBody = _getOverrides12[0],
          tableBodyProps = _getOverrides12[1];

      var _getOverrides13 = getOverrides(overrides.TableBodyRow, StyledTableBodyRow),
          _getOverrides14 = _slicedToArray(_getOverrides13, 2),
          TableBodyRow = _getOverrides14[0],
          tableBodyRowProps = _getOverrides14[1];

      var _getOverrides15 = getOverrides(overrides.TableBodyCell, StyledTableBodyCell),
          _getOverrides16 = _slicedToArray(_getOverrides15, 2),
          TableBodyCell = _getOverrides16[0],
          tableBodyCellProps = _getOverrides16[1];

      var _getOverrides17 = getOverrides(overrides.TableLoadingMessage, StyledTableLoadingMessage),
          _getOverrides18 = _slicedToArray(_getOverrides17, 2),
          TableLoadingMessage = _getOverrides18[0],
          tableLoadingMessageProps = _getOverrides18[1];

      var _getOverrides19 = getOverrides(overrides.TableEmptyMessage, StyledTableEmptyMessage),
          _getOverrides20 = _slicedToArray(_getOverrides19, 2),
          TableEmptyMessage = _getOverrides20[0],
          tableEmptyMessageProps = _getOverrides20[1];

      var isEmpty = !isLoading && data.length === 0;
      var isRendered = !isLoading && !isEmpty;
      return /*#__PURE__*/React.createElement(Root, _extends({
        "data-baseweb": "table-semantic",
        $divider: divider
      }, rootProps, rest), /*#__PURE__*/React.createElement(_Table, _extends({
        $width: horizontalScrollWidth
      }, tableProps), /*#__PURE__*/React.createElement(TableHead, tableHeadProps, /*#__PURE__*/React.createElement(TableHeadRow, tableHeadRowProps, columns.map(function (col, colIndex) {
        return /*#__PURE__*/React.createElement(TableHeadCell, _extends({
          key: colIndex,
          $col: col,
          $colIndex: colIndex,
          $divider: divider,
          $size: size
        }, tableHeadCellProps), col);
      }))), /*#__PURE__*/React.createElement(TableBody, tableBodyProps, isLoading && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: columns.length
      }, /*#__PURE__*/React.createElement(TableLoadingMessage, tableLoadingMessageProps, typeof loadingMessage === 'function' ? loadingMessage() : loadingMessage))), isEmpty && emptyMessage && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        colSpan: columns.length
      }, /*#__PURE__*/React.createElement(TableEmptyMessage, tableEmptyMessageProps, typeof emptyMessage === 'function' ? emptyMessage() : emptyMessage))), isRendered && data.map(function (row, rowIndex) {
        return /*#__PURE__*/React.createElement(TableBodyRow, _extends({
          key: rowIndex,
          $divider: divider,
          $row: row,
          $rowIndex: rowIndex
        }, tableBodyRowProps), columns.map(function (col, colIndex) {
          return /*#__PURE__*/React.createElement(TableBodyCell, _extends({
            key: colIndex,
            $col: col,
            $colIndex: colIndex,
            $divider: divider,
            $row: row,
            $rowIndex: rowIndex,
            $isLastRow: rowIndex === data.length - 1,
            $size: size
          }, tableBodyCellProps), row[colIndex]);
        }));
      }))));
    }
  }]);

  return Table;
}(React.Component);

_defineProperty(Table, "defaultProps", {
  columns: [],
  data: [[]],
  loadingMessage: 'Loading...'
});

export { Table as default };