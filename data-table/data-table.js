function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { VariableSizeGrid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Button, SHAPE as BUTTON_SHAPES, SIZE as BUTTON_SIZES, KIND as BUTTON_KINDS } from '../button/index.js';
import { useStyletron } from '../styles/index.js';
import { Tooltip, PLACEMENT } from '../tooltip/index.js';
import { SORT_DIRECTIONS } from './constants.js';
import HeaderCell from './header-cell.js';
import MeasureColumnWidths from './measure-column-widths.js';
import { LocaleContext } from '../locale/index.js'; // consider pulling this out to a prop if useful.

var HEADER_ROW_HEIGHT = 48;

function CellPlacement(_ref) {
  var columnIndex = _ref.columnIndex,
      rowIndex = _ref.rowIndex,
      data = _ref.data,
      style = _ref.style;

  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1]; // ignores the table header row


  if (rowIndex === 0) {
    return null;
  }

  var backgroundColor = theme.colors.backgroundPrimary;

  if (rowIndex % 2 && columnIndex === data.columnHighlightIndex || rowIndex === data.rowHighlightIndex) {
    backgroundColor = theme.colors.backgroundTertiary;
  } else if (rowIndex % 2 || columnIndex === data.columnHighlightIndex) {
    backgroundColor = theme.colors.backgroundSecondary;
  }

  var Cell = data.columns[columnIndex].renderCell;
  var value = data.columns[columnIndex].mapDataToValue(data.rows[rowIndex - 1].data);
  return /*#__PURE__*/React.createElement("div", {
    className: css(_objectSpread(_objectSpread({}, theme.borders.border200), {}, {
      backgroundColor: backgroundColor,
      borderTop: 'none',
      borderBottom: 'none',
      borderLeft: 'none',
      // do not render a border on cells in the right-most column
      borderRight: columnIndex === data.columns.length - 1 ? 'none' : null,
      boxSizing: 'border-box'
    })),
    style: style,
    onMouseEnter: function onMouseEnter() {
      return data.onRowMouseEnter(rowIndex, data.rows[rowIndex - 1]);
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    value: value,
    onSelect: data.isSelectable && columnIndex === 0 ? function () {
      return data.onSelectOne(data.rows[rowIndex - 1]);
    } : undefined,
    isSelected: data.isRowSelected(data.rows[rowIndex - 1].id),
    textQuery: data.textQuery,
    x: columnIndex,
    y: rowIndex - 1
  }));
}

function compareCellPlacement(prevProps, nextProps) {
  // header cells are not rendered through this component
  if (prevProps.rowIndex === 0) {
    return true;
  }

  if (prevProps.data.columns !== nextProps.data.columns || prevProps.data.rows !== nextProps.data.rows || prevProps.style !== nextProps.style) {
    return false;
  }

  if (prevProps.data.isSelectable === nextProps.data.isSelectable && prevProps.data.columnHighlightIndex === nextProps.data.columnHighlightIndex && prevProps.data.rowHighlightIndex === nextProps.data.rowHighlightIndex && prevProps.data.textQuery === nextProps.data.textQuery && prevProps.data.isRowSelected === nextProps.data.isRowSelected) {
    return true;
  } // at this point we know that the rowHighlightIndex or the columnHighlightIndex has changed.
  // row does not need to re-render if not transitioning _from_ or _to_ highlighted
  // also ensures that all cells are invalidated on column-header hover


  if (prevProps.rowIndex !== prevProps.data.rowHighlightIndex && prevProps.rowIndex !== nextProps.data.rowHighlightIndex && prevProps.data.columnHighlightIndex === nextProps.data.columnHighlightIndex && prevProps.data.isRowSelected === nextProps.data.isRowSelected) {
    return true;
  } // similar to the row highlight optimization, do not update the cell if not in the previously
  // highlighted column or next highlighted.


  if (prevProps.columnIndex !== prevProps.data.columnHighlightIndex && prevProps.columnIndex !== nextProps.data.columnHighlightIndex && prevProps.data.rowHighlightIndex === nextProps.data.rowHighlightIndex && prevProps.data.isRowSelected === nextProps.data.isRowSelected) {
    return true;
  }

  return false;
}

var CellPlacementMemo = /*#__PURE__*/React.memo(CellPlacement, compareCellPlacement);
CellPlacementMemo.displayName = 'CellPlacement';
var HeaderContext = /*#__PURE__*/React.createContext({
  columns: [],
  columnHighlightIndex: -1,
  emptyMessage: '',
  filters: new Map(),
  loading: false,
  loadingMessage: '',
  isScrollingX: false,
  isSelectable: false,
  isSelectedAll: false,
  isSelectedIndeterminate: false,
  measuredWidths: [],
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onResize: function onResize() {},
  onSelectMany: function onSelectMany() {},
  onSelectNone: function onSelectNone() {},
  onSort: function onSort() {},
  resizableColumnWidths: false,
  rowActions: [],
  rowHeight: 0,
  rowHighlightIndex: -1,
  rows: [],
  scrollLeft: 0,
  sortIndex: -1,
  sortDirection: null,
  tableHeight: 0,
  widths: []
});
HeaderContext.displayName = 'HeaderContext';

function Header(props) {
  var _useStyletron3 = useStyletron(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      css = _useStyletron4[0],
      theme = _useStyletron4[1];

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      startResizePos = _React$useState2[0],
      setStartResizePos = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endResizePos = _React$useState4[0],
      setEndResizePos = _React$useState4[1]; // eslint-disable-next-line flowtype/no-weak-types


  var headerCellRef = React.useRef(null);
  var RULER_OFFSET = 2;
  var isResizingThisColumn = props.resizeIndex === props.index;
  var isResizing = props.resizeIndex >= 0;

  function getPositionX(el) {
    if (typeof document !== 'undefined') {
      var rect = el.getBoundingClientRect();
      return rect.left + window.scrollX;
    }

    return 0;
  }

  React.useLayoutEffect(function () {
    function handleMouseMove(event) {
      if (isResizingThisColumn) {
        event.preventDefault();

        if (headerCellRef.current) {
          var left = getPositionX(headerCellRef.current);
          var width = event.clientX - left - 5;
          var max = Math.ceil(props.resizeMaxWidth);
          var min = Math.ceil(props.resizeMinWidth);

          if (min === max) {
            return;
          }

          if (width >= min && width <= max) {
            setEndResizePos(event.clientX - RULER_OFFSET);
          }

          if (width < min) {
            setEndResizePos(left + min - RULER_OFFSET);
          }

          if (width > max) {
            setEndResizePos(max - width - RULER_OFFSET);
          }
        }
      }
    }

    function handleMouseUp(event) {
      props.onResize(props.index, endResizePos - startResizePos);
      props.onResizeIndexChange(-1);
      setStartResizePos(0);
      setEndResizePos(0);
    }

    if (typeof document !== 'undefined') {
      if (isResizingThisColumn) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    }

    return function () {
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [isResizingThisColumn, setEndResizePos, setStartResizePos, setEndResizePos, props.onResize, props.onResizeIndexChange, props.index, endResizePos, startResizePos, headerCellRef.current]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderCell, {
    ref: headerCellRef,
    index: props.index,
    sortable: props.isSortable,
    isHovered: !isResizing && props.hoverIndex === props.index,
    isSelectable: props.isSelectable && props.index === 0,
    isSelectedAll: props.isSelectedAll,
    isSelectedIndeterminate: props.isSelectedIndeterminate,
    onMouseEnter: function onMouseEnter() {
      if (!isResizing) {
        props.onMouseEnter(props.index);
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (!isResizing) {
        props.onMouseLeave();
      }
    },
    onSelectAll: props.onSelectMany,
    onSelectNone: props.onSelectNone,
    onSort: props.onSort,
    sortDirection: props.sortIndex === props.index ? props.sortDirection : null,
    title: props.columnTitle
  }), props.resizableColumnWidths && /*#__PURE__*/React.createElement("div", {
    className: css({
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    })
  }, /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onMouseDown: function onMouseDown(event) {
      props.onResizeIndexChange(props.index);
      var x = getPositionX(event.target);
      setStartResizePos(x);
      setEndResizePos(x);
    },
    className: css({
      backgroundColor: isResizingThisColumn ? theme.colors.contentPrimary : null,
      cursor: 'ew-resize',
      position: 'absolute',
      height: '100%',
      width: '3px',
      ':hover': {
        backgroundColor: theme.colors.contentPrimary
      }
    }),
    style: {
      right: "".concat((RULER_OFFSET + endResizePos - startResizePos) * -1, "px")
    }
  }, isResizingThisColumn && /*#__PURE__*/React.createElement("div", {
    className: css({
      backgroundColor: theme.colors.contentPrimary,
      position: 'absolute',
      height: "".concat(props.tableHeight, "px"),
      right: '1px',
      width: '1px'
    })
  }))));
}

function Headers(props) {
  var _useStyletron5 = useStyletron(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 2),
      css = _useStyletron6[0],
      theme = _useStyletron6[1];

  var locale = React.useContext(LocaleContext);
  var ctx = React.useContext(HeaderContext);

  var _React$useState5 = React.useState(-1),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      resizeIndex = _React$useState6[0],
      setResizeIndex = _React$useState6[1];

  return /*#__PURE__*/React.createElement("div", {
    className: css({
      position: 'sticky',
      top: 0,
      left: 0,
      width: "".concat(ctx.widths.reduce(function (sum, w) {
        return sum + w;
      }, 0), "px"),
      height: "".concat(HEADER_ROW_HEIGHT, "px"),
      display: 'flex',
      // this feels bad.. the absolutely positioned children elements
      // stack on top of this element with the layer component.
      zIndex: 2
    })
  }, ctx.columns.map(function (column, columnIndex) {
    var activeFilter = ctx.filters ? ctx.filters.get(column.title) : null;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: columnIndex
    }, /*#__PURE__*/React.createElement(Tooltip, {
      key: columnIndex,
      placement: PLACEMENT.bottomLeft,
      isOpen: ctx.columnHighlightIndex === columnIndex && Boolean(activeFilter),
      content: function content() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
          className: css(_objectSpread(_objectSpread({}, theme.typography.font100), {}, {
            color: theme.colors.contentInversePrimary
          }))
        }, locale.datatable.filterAppliedTo, " ", column.title), activeFilter && /*#__PURE__*/React.createElement("p", {
          className: css(_objectSpread(_objectSpread({}, theme.typography.font150), {}, {
            color: theme.colors.contentInversePrimary
          }))
        }, activeFilter.description));
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: css(_objectSpread(_objectSpread({}, theme.borders.border200), {}, {
        backgroundColor: theme.colors.backgroundPrimary,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: columnIndex === ctx.columns.length - 1 ? 'none' : null,
        boxSizing: 'border-box',
        display: 'flex'
      })),
      style: {
        width: ctx.widths[columnIndex]
      }
    }, /*#__PURE__*/React.createElement(Header, {
      columnTitle: column.title,
      hoverIndex: ctx.columnHighlightIndex,
      index: columnIndex,
      isSortable: column.sortable,
      isSelectable: ctx.isSelectable,
      isSelectedAll: ctx.isSelectedAll,
      isSelectedIndeterminate: ctx.isSelectedIndeterminate,
      onMouseEnter: ctx.onMouseEnter,
      onMouseLeave: ctx.onMouseLeave,
      onResize: ctx.onResize,
      onResizeIndexChange: setResizeIndex,
      onSelectMany: ctx.onSelectMany,
      onSelectNone: ctx.onSelectNone,
      onSort: function onSort() {
        return ctx.onSort(columnIndex);
      },
      resizableColumnWidths: ctx.resizableColumnWidths,
      resizeIndex: resizeIndex,
      resizeMinWidth: ctx.measuredWidths[columnIndex],
      resizeMaxWidth: column.maxWidth || Infinity,
      sortIndex: ctx.sortIndex,
      sortDirection: ctx.sortDirection,
      tableHeight: ctx.tableHeight
    }))));
  }));
}

function LoadingOrEmptyMessage(props) {
  var _useStyletron7 = useStyletron(),
      _useStyletron8 = _slicedToArray(_useStyletron7, 2),
      css = _useStyletron8[0],
      theme = _useStyletron8[1];

  return /*#__PURE__*/React.createElement("p", {
    className: css(_objectSpread(_objectSpread({}, theme.typography.ParagraphSmall), {}, {
      color: theme.colors.contentPrimary,
      marginLeft: theme.sizing.scale500
    }))
  }, typeof props.children === 'function' ? props.children() : String(props.children));
} // replaces the content of the virtualized window with contents. in this case,
// we are prepending a table header row before the table rows (children to the fn).


var InnerTableElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useStyletron9 = useStyletron(),
      _useStyletron10 = _slicedToArray(_useStyletron9, 2),
      theme = _useStyletron10[1];

  var ctx = React.useContext(HeaderContext); // no need to render the cells until the columns have been measured

  if (!ctx.widths.filter(Boolean).length) {
    return null;
  }

  var RENDERING = 0;
  var LOADING = 1;
  var EMPTY = 2;
  var viewState = RENDERING;

  if (ctx.loading) {
    viewState = LOADING;
  } else if (ctx.rows.length === 0) {
    viewState = EMPTY;
  }

  var highlightedRow = ctx.rows[ctx.rowHighlightIndex - 1];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-baseweb": "data-table",
    style: props.style
  }, /*#__PURE__*/React.createElement(Headers, null), viewState === LOADING && /*#__PURE__*/React.createElement(LoadingOrEmptyMessage, null, ctx.loadingMessage), viewState === EMPTY && /*#__PURE__*/React.createElement(LoadingOrEmptyMessage, null, ctx.emptyMessage), viewState === RENDERING && props.children, ctx.rowActions && Boolean(ctx.rowActions.length) && ctx.rowHighlightIndex > 0 && Boolean(highlightedRow) && !ctx.isScrollingX && /*#__PURE__*/React.createElement("div", {
    style: {
      alignItems: 'center',
      backgroundColor: theme.colors.backgroundTertiary,
      display: 'flex',
      height: "".concat(ctx.rowHeight, "px"),
      padding: '0 16px',
      paddingLeft: theme.sizing.scale300,
      paddingRight: theme.sizing.scale300,
      position: 'absolute',
      right: theme.direction !== 'rtl' ? 0 - ctx.scrollLeft : 'initial',
      left: theme.direction === 'rtl' ? 0 : 'initial',
      top: (ctx.rowHighlightIndex - 1) * ctx.rowHeight + HEADER_ROW_HEIGHT
    }
  }, (typeof ctx.rowActions === 'function' ? ctx.rowActions(highlightedRow) : ctx.rowActions).map(function (rowAction) {
    if (rowAction.renderButton) {
      var RowActionButton = rowAction.renderButton;
      return /*#__PURE__*/React.createElement(RowActionButton, null);
    }

    var RowActionIcon = rowAction.renderIcon;
    return /*#__PURE__*/React.createElement(Button, {
      alt: rowAction.label,
      key: rowAction.label,
      onClick: function onClick(event) {
        return rowAction.onClick({
          event: event,
          row: ctx.rows[ctx.rowHighlightIndex - 1]
        });
      },
      size: BUTTON_SIZES.compact,
      kind: BUTTON_KINDS.minimal,
      shape: BUTTON_SHAPES.round,
      overrides: {
        BaseButton: {
          style: {
            marginLeft: theme.sizing.scale300,
            paddingTop: theme.sizing.scale100,
            paddingRight: theme.sizing.scale100,
            paddingBottom: theme.sizing.scale100,
            paddingLeft: theme.sizing.scale100
          }
        }
      }
    }, /*#__PURE__*/React.createElement(RowActionIcon, {
      size: 24
    }));
  })));
});
InnerTableElement.displayName = 'InnerTableElement';

function MeasureScrollbarWidth(props) {
  var _useStyletron11 = useStyletron(),
      _useStyletron12 = _slicedToArray(_useStyletron11, 1),
      css = _useStyletron12[0];

  var outerRef = React.useRef();
  var innerRef = React.useRef();
  React.useEffect(function () {
    if (outerRef.current && innerRef.current) {
      var width = outerRef.current.offsetWidth - innerRef.current.offsetWidth;
      props.onWidthChange(width);
    }
  }, [outerRef.current, innerRef.current]);
  return /*#__PURE__*/React.createElement("div", {
    className: css({
      height: 0,
      visibility: 'hidden',
      overflow: 'scroll'
    }),
    ref: outerRef
  }, /*#__PURE__*/React.createElement("div", {
    ref: innerRef
  }));
}

export function DataTable(_ref2) {
  var batchActions = _ref2.batchActions,
      columns = _ref2.columns,
      filters = _ref2.filters,
      emptyMessage = _ref2.emptyMessage,
      loading = _ref2.loading,
      loadingMessage = _ref2.loadingMessage,
      onIncludedRowsChange = _ref2.onIncludedRowsChange,
      onRowHighlightChange = _ref2.onRowHighlightChange,
      onSelectMany = _ref2.onSelectMany,
      onSelectNone = _ref2.onSelectNone,
      onSelectOne = _ref2.onSelectOne,
      onSort = _ref2.onSort,
      _ref2$resizableColumn = _ref2.resizableColumnWidths,
      resizableColumnWidths = _ref2$resizableColumn === void 0 ? false : _ref2$resizableColumn,
      allRows = _ref2.rows,
      _ref2$rowActions = _ref2.rowActions,
      rowActions = _ref2$rowActions === void 0 ? [] : _ref2$rowActions,
      _ref2$rowHeight = _ref2.rowHeight,
      rowHeight = _ref2$rowHeight === void 0 ? 36 : _ref2$rowHeight,
      rowHighlightIndexControlled = _ref2.rowHighlightIndex,
      selectedRowIds = _ref2.selectedRowIds,
      sortIndex = _ref2.sortIndex,
      sortDirection = _ref2.sortDirection,
      _ref2$textQuery = _ref2.textQuery,
      textQuery = _ref2$textQuery === void 0 ? '' : _ref2$textQuery;

  var _useStyletron13 = useStyletron(),
      _useStyletron14 = _slicedToArray(_useStyletron13, 2),
      theme = _useStyletron14[1];

  var locale = React.useContext(LocaleContext);
  var rowHeightAtIndex = React.useCallback(function (index) {
    if (index === 0) {
      return HEADER_ROW_HEIGHT;
    }

    return rowHeight;
  }, [rowHeight]);
  var gridRef = React.useRef(null);

  var _React$useState7 = React.useState(columns.map(function () {
    return 0;
  })),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      measuredWidths = _React$useState8[0],
      setMeasuredWidths = _React$useState8[1];

  var _React$useState9 = React.useState(columns.map(function () {
    return 0;
  })),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      resizeDeltas = _React$useState10[0],
      setResizeDeltas = _React$useState10[1];

  React.useEffect(function () {
    setMeasuredWidths(function (prev) {
      return columns.map(function (v, index) {
        return prev[index] || 0;
      });
    });
    setResizeDeltas(function (prev) {
      return columns.map(function (v, index) {
        return prev[index] || 0;
      });
    });
  }, [columns]);
  var resetAfterColumnIndex = React.useCallback(function (columnIndex) {
    if (gridRef.current) {
      // $FlowFixMe trigger react-window to layout the elements again
      gridRef.current.resetAfterColumnIndex(columnIndex, true);
    }
  }, [gridRef.current]);
  var handleWidthsChange = React.useCallback(function (nextWidths) {
    setMeasuredWidths(nextWidths);
    resetAfterColumnIndex(0);
  }, [setMeasuredWidths, resetAfterColumnIndex]);
  var handleColumnResize = React.useCallback(function (columnIndex, delta) {
    setResizeDeltas(function (prev) {
      prev[columnIndex] = Math.max(prev[columnIndex] + delta, 0);
      return _toConsumableArray(prev);
    });
    resetAfterColumnIndex(columnIndex);
  }, [setResizeDeltas, resetAfterColumnIndex]);

  var _React$useState11 = React.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      scrollLeft = _React$useState12[0],
      setScrollLeft = _React$useState12[1];

  var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      isScrollingX = _React$useState14[0],
      setIsScrollingX = _React$useState14[1];

  var _React$useState15 = React.useState(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      recentlyScrolledX = _React$useState16[0],
      setRecentlyScrolledX = _React$useState16[1];

  React.useLayoutEffect(function () {
    if (recentlyScrolledX !== isScrollingX) {
      setIsScrollingX(recentlyScrolledX);
    }

    if (recentlyScrolledX) {
      var timeout = setTimeout(function () {
        setRecentlyScrolledX(false);
      }, 200);
      return function () {
        return clearTimeout(timeout);
      };
    }
  }, [recentlyScrolledX]);
  var handleScroll = React.useCallback(function (params) {
    setScrollLeft(params.scrollLeft);

    if (params.scrollLeft !== scrollLeft) {
      setRecentlyScrolledX(true);
    }
  }, [scrollLeft, setScrollLeft, setRecentlyScrolledX]);
  var sortedIndices = React.useMemo(function () {
    var toSort = allRows.map(function (r, i) {
      return [r, i];
    });
    var index = sortIndex;

    if (index !== null && index !== undefined && index !== -1 && columns[index]) {
      var sortFn = columns[index].sortFn;

      var getValue = function getValue(row) {
        return columns[index].mapDataToValue(row.data);
      };

      if (sortDirection === SORT_DIRECTIONS.ASC) {
        toSort.sort(function (a, b) {
          return sortFn(getValue(a[0]), getValue(b[0]));
        });
      } else if (sortDirection === SORT_DIRECTIONS.DESC) {
        toSort.sort(function (a, b) {
          return sortFn(getValue(b[0]), getValue(a[0]));
        });
      }
    }

    return toSort.map(function (el) {
      return el[1];
    });
  }, [sortIndex, sortDirection, columns, allRows]);
  var filteredIndices = React.useMemo(function () {
    var set = new Set(allRows.map(function (_, idx) {
      return idx;
    }));
    Array.from(filters || new Set(), function (f) {
      return f;
    }).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          title = _ref4[0],
          filter = _ref4[1];

      var columnIndex = columns.findIndex(function (c) {
        return c.title === title;
      });
      var column = columns[columnIndex];

      if (!column) {
        return;
      }

      var filterFn = column.buildFilter(filter);
      Array.from(set).forEach(function (idx) {
        if (!filterFn(column.mapDataToValue(allRows[idx].data))) {
          set.delete(idx);
        }
      });
    });

    if (textQuery) {
      var stringishColumnIndices = [];

      for (var i = 0; i < columns.length; i++) {
        if (columns[i].textQueryFilter) {
          stringishColumnIndices.push(i);
        }
      }

      Array.from(set).forEach(function (idx) {
        var matches = stringishColumnIndices.some(function (cdx) {
          var column = columns[cdx];
          var textQueryFilter = column.textQueryFilter;

          if (textQueryFilter) {
            return textQueryFilter(textQuery, column.mapDataToValue(allRows[idx].data));
          }

          return false;
        });

        if (!matches) {
          set.delete(idx);
        }
      });
    }

    return set;
  }, [filters, textQuery, columns, allRows]);
  var rows = React.useMemo(function () {
    var result = sortedIndices.filter(function (idx) {
      return filteredIndices.has(idx);
    }).map(function (idx) {
      return allRows[idx];
    });

    if (onIncludedRowsChange) {
      onIncludedRowsChange(result);
    }

    return result;
  }, [sortedIndices, filteredIndices, onIncludedRowsChange, allRows]);

  var _React$useState17 = React.useState(0),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      browserScrollbarWidth = _React$useState18[0],
      setBrowserScrollbarWidth = _React$useState18[1];

  var normalizedWidths = React.useMemo(function () {
    var sum = function sum(ns) {
      return ns.reduce(function (s, n) {
        return s + n;
      }, 0);
    };

    var resizedWidths = measuredWidths.map(function (w, i) {
      return Math.floor(w) + Math.floor(resizeDeltas[i]);
    });

    if (gridRef.current) {
      // $FlowFixMe
      var gridProps = gridRef.current.props;
      var isContentTallerThanContainer = false;
      var visibleRowHeight = 0;

      for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        visibleRowHeight += rowHeightAtIndex(rowIndex);

        if (visibleRowHeight >= gridProps.height) {
          isContentTallerThanContainer = true;
          break;
        }
      }

      var scrollbarWidth = isContentTallerThanContainer ? browserScrollbarWidth : 0;
      var remainder = gridProps.width - sum(resizedWidths) - scrollbarWidth;
      var padding = Math.floor(remainder / columns.filter(function (c) {
        return c ? c.fillWidth : true;
      }).length);

      if (padding > 0) {
        var result = []; // -1 so that we loop over all but the last item

        for (var i = 0; i < resizedWidths.length - 1; i++) {
          if (columns[i] && columns[i].fillWidth) {
            result.push(resizedWidths[i] + padding);
          } else {
            result.push(resizedWidths[i]);
          }
        }

        result.push(gridProps.width - sum(result) - scrollbarWidth);
        resetAfterColumnIndex(0);
        return result;
      }
    }

    return resizedWidths;
  }, [measuredWidths, resizeDeltas, browserScrollbarWidth, rows.length, columns]);
  var isSelectable = batchActions ? !!batchActions.length : false;
  var isSelectedAll = React.useMemo(function () {
    if (!selectedRowIds) {
      return false;
    }

    return !!rows.length && selectedRowIds.size >= rows.length;
  }, [selectedRowIds, rows.length]);
  var isSelectedIndeterminate = React.useMemo(function () {
    if (!selectedRowIds) {
      return false;
    }

    return !!selectedRowIds.size && selectedRowIds.size < rows.length;
  }, [selectedRowIds, rows.length]);
  var isRowSelected = React.useCallback(function (id) {
    if (selectedRowIds) {
      return selectedRowIds.has(id);
    }

    return false;
  }, [selectedRowIds]);
  var handleSelectMany = React.useCallback(function () {
    if (onSelectMany) {
      onSelectMany(rows);
    }
  }, [rows, onSelectMany]);
  var handleSelectNone = React.useCallback(function () {
    if (onSelectNone) {
      onSelectNone();
    }
  }, [onSelectNone]);
  var handleSelectOne = React.useCallback(function (row) {
    if (onSelectOne) {
      onSelectOne(row);
    }
  }, [onSelectOne]);
  var handleSort = React.useCallback(function (columnIndex) {
    if (onSort) {
      onSort(columnIndex);
    }
  }, [onSort]);

  var _React$useState19 = React.useState(-1),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      columnHighlightIndex = _React$useState20[0],
      setColumnHighlightIndex = _React$useState20[1];

  var _React$useState21 = React.useState(-1),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      rowHighlightIndex = _React$useState22[0],
      setRowHighlightIndex = _React$useState22[1];

  function handleRowHighlightIndexChange(nextIndex) {
    setRowHighlightIndex(nextIndex);

    if (gridRef.current) {
      if (nextIndex >= 0) {
        // $FlowFixMe - unable to get react-window types
        gridRef.current.scrollToItem({
          rowIndex: nextIndex
        });
      }

      if (onRowHighlightChange) {
        onRowHighlightChange(nextIndex, rows[nextIndex - 1]);
      }
    }
  }

  var handleRowMouseEnter = React.useCallback(function (nextIndex) {
    setColumnHighlightIndex(-1);

    if (nextIndex !== rowHighlightIndex) {
      handleRowHighlightIndexChange(nextIndex);
    }
  }, [rowHighlightIndex]);

  function handleColumnHeaderMouseEnter(columnIndex) {
    setColumnHighlightIndex(columnIndex);
    handleRowHighlightIndexChange(-1);
  }

  function handleColumnHeaderMouseLeave() {
    setColumnHighlightIndex(-1);
  }

  React.useEffect(function () {
    if (typeof rowHighlightIndexControlled === 'number') {
      handleRowHighlightIndexChange(rowHighlightIndexControlled);
    }
  }, [rowHighlightIndexControlled]);
  var itemData = React.useMemo(function () {
    return {
      columnHighlightIndex: columnHighlightIndex,
      rowHighlightIndex: rowHighlightIndex,
      isRowSelected: isRowSelected,
      isSelectable: isSelectable,
      onRowMouseEnter: handleRowMouseEnter,
      onSelectOne: handleSelectOne,
      columns: columns,
      rows: rows,
      textQuery: textQuery
    };
  }, [handleRowMouseEnter, columnHighlightIndex, isRowSelected, isSelectable, rowHighlightIndex, rows, columns, handleSelectOne, textQuery]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeasureColumnWidths, {
    columns: columns,
    rows: rows,
    widths: measuredWidths,
    isSelectable: isSelectable,
    onWidthsChange: handleWidthsChange
  }), /*#__PURE__*/React.createElement(MeasureScrollbarWidth, {
    onWidthChange: function onWidthChange(w) {
      return setBrowserScrollbarWidth(w);
    }
  }), /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref5) {
    var height = _ref5.height,
        width = _ref5.width;
    return /*#__PURE__*/React.createElement(HeaderContext.Provider, {
      value: {
        columns: columns,
        columnHighlightIndex: columnHighlightIndex,
        emptyMessage: emptyMessage || locale.datatable.emptyState,
        filters: filters,
        loading: Boolean(loading),
        loadingMessage: loadingMessage || locale.datatable.loadingState,
        isScrollingX: isScrollingX,
        isSelectable: isSelectable,
        isSelectedAll: isSelectedAll,
        isSelectedIndeterminate: isSelectedIndeterminate,
        measuredWidths: measuredWidths,
        onMouseEnter: handleColumnHeaderMouseEnter,
        onMouseLeave: handleColumnHeaderMouseLeave,
        onResize: handleColumnResize,
        onSelectMany: handleSelectMany,
        onSelectNone: handleSelectNone,
        onSort: handleSort,
        resizableColumnWidths: resizableColumnWidths,
        rowActions: rowActions,
        rowHeight: rowHeight,
        rowHighlightIndex: rowHighlightIndex,
        rows: rows,
        scrollLeft: scrollLeft,
        sortDirection: sortDirection || null,
        sortIndex: typeof sortIndex === 'number' ? sortIndex : -1,
        tableHeight: height,
        widths: normalizedWidths
      }
    }, /*#__PURE__*/React.createElement(VariableSizeGrid // eslint-disable-next-line flowtype/no-weak-types
    , {
      ref: gridRef,
      overscanRowCount: 10,
      innerElementType: InnerTableElement,
      columnCount: columns.length,
      columnWidth: function columnWidth(columnIndex) {
        return normalizedWidths[columnIndex];
      },
      height: height - 2 // plus one to account for additional header row
      ,
      rowCount: rows.length + 1,
      rowHeight: rowHeightAtIndex,
      width: width - 2,
      itemData: itemData,
      onScroll: handleScroll,
      style: _objectSpread(_objectSpread({}, theme.borders.border200), {}, {
        borderColor: theme.colors.borderOpaque
      }),
      direction: theme.direction === 'rtl' ? 'rtl' : 'ltr'
    }, CellPlacementMemo));
  }));
}