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
import React from 'react';
import { Button, SHAPE, SIZE } from '../button/index.js';
import { Filter as FilterIcon } from '../icon/index.js';
import { Input, SIZE as INPUT_SIZE } from '../input/index.js';
import { Popover, PLACEMENT } from '../popover/index.js';
import { useStyletron } from '../styles/index.js';
import { useUIDSeed } from 'react-uid';
import { COLUMNS } from './constants.js';
import { matchesQuery } from './text-search.js';
import { LocaleContext } from '../locale/index.js';
import { isFocusVisible } from '../utils/focusVisible.js';

function ColumnIcon(props) {
  if (props.column.kind === COLUMNS.BOOLEAN) {
    return '01';
  }

  if (props.column.kind === COLUMNS.CATEGORICAL) {
    return 'abc';
  }

  if (props.column.kind === COLUMNS.DATETIME) {
    return 'dt';
  }

  if (props.column.kind === COLUMNS.NUMERICAL) {
    return '#';
  }

  return /*#__PURE__*/React.createElement(FilterIcon, null);
}

function Options(props) {
  var _useStyletron = useStyletron(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var locale = React.useContext(LocaleContext);
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      focusVisible = _React$useState2[0],
      setFocusVisible = _React$useState2[1];

  var seed = useUIDSeed();
  var buiRef = React.useRef(props.columns.map(function (col) {
    return seed(col);
  }));

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: css({
      backgroundColor: theme.colors.menuFill,
      minWidth: '320px',
      outline: focusVisible ? "3px solid ".concat(theme.colors.accent) : 'none',
      paddingTop: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600
    })
  }, /*#__PURE__*/React.createElement("p", {
    className: css(_objectSpread(_objectSpread({}, theme.typography.font100), {}, {
      marginTop: 'unset',
      paddingRight: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600
    }))
  }, locale.datatable.optionsLabel), props.searchable && /*#__PURE__*/React.createElement("div", {
    className: css({
      marginBottom: theme.sizing.scale500,
      marginRight: theme.sizing.scale600,
      marginLeft: theme.sizing.scale600
    })
  }, /*#__PURE__*/React.createElement(Input, {
    inputRef: inputRef,
    value: props.query,
    onChange: function onChange(event) {
      return props.onQueryChange(event.target.value);
    },
    placeholder: locale.datatable.optionsSearch,
    size: INPUT_SIZE.compact,
    clearable: true
  })), !props.columns.length && /*#__PURE__*/React.createElement("div", {
    className: css(_objectSpread(_objectSpread({}, theme.typography.font100), {}, {
      paddingRight: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600
    }))
  }, locale.datatable.optionsEmpty), /*#__PURE__*/React.createElement("ul", {
    onKeyDown: props.onKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    tabIndex: "0",
    role: "listbox",
    "aria-activedescendant": "bui-".concat(buiRef.current[props.highlightIndex]),
    className: css({
      listStyleType: 'none',
      marginBlockStart: 'unset',
      marginBlockEnd: 'unset',
      maxHeight: '256px',
      paddingInlineStart: 'unset',
      outline: 'none',
      overflowY: 'auto'
    })
  }, props.columns.map(function (column, index) {
    var isHighlighted = index === props.highlightIndex;
    return (
      /*#__PURE__*/
      // handled on the wrapper element
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      React.createElement("li", {
        id: "bui-".concat(buiRef.current[index]),
        role: "option",
        "aria-selected": isHighlighted,
        onMouseEnter: function onMouseEnter() {
          return props.onMouseEnter(index);
        },
        onClick: function onClick() {
          return props.onClick(column);
        },
        key: column.title,
        className: css(_objectSpread(_objectSpread({}, theme.typography.font100), {}, {
          alignItems: 'center',
          backgroundColor: isHighlighted ? theme.colors.menuFillHover : null,
          cursor: 'pointer',
          display: 'flex',
          paddingTop: theme.sizing.scale100,
          paddingRight: theme.sizing.scale600,
          paddingBottom: theme.sizing.scale100,
          paddingLeft: theme.sizing.scale600
        }))
      }, /*#__PURE__*/React.createElement("div", {
        className: css(_objectSpread(_objectSpread({}, theme.typography.font150), {}, {
          fontSize: '8px',
          alignItems: 'center',
          backgroundColor: theme.colors.backgroundTertiary,
          borderRadius: theme.borders.radius200,
          display: 'flex',
          height: theme.sizing.scale800,
          justifyContent: 'center',
          marginRight: theme.sizing.scale300,
          width: theme.sizing.scale800
        }))
      }, /*#__PURE__*/React.createElement(ColumnIcon, {
        column: column
      })), column.title)
    );
  })));
}

function FilterMenu(props) {
  var _useStyletron3 = useStyletron(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      theme = _useStyletron4[1];

  var locale = React.useContext(LocaleContext);

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isOpen = _React$useState4[0],
      setIsOpen = _React$useState4[1];

  var _React$useState5 = React.useState(-1),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      highlightIndex = _React$useState6[0],
      setHighlightIndex = _React$useState6[1];

  var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      query = _React$useState8[0],
      setQuery = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      activeColumn = _React$useState10[0],
      setActiveColumn = _React$useState10[1];

  var handleOptionClick = React.useCallback(setActiveColumn, []);
  var handleClose = React.useCallback(function () {
    setIsOpen(false);
    setActiveColumn(null);
    setHighlightIndex(-1);
    setQuery('');
  }, []);
  var filterableColumns = React.useMemo(function () {
    return props.columns.filter(function (column) {
      return column.filterable && !props.filters.has(column.title);
    });
  }, [props.columns, props.filters]);
  var columns = React.useMemo(function () {
    return filterableColumns.filter(function (column) {
      return matchesQuery(column.title, query);
    });
  }, [filterableColumns, query]);
  var Filter = React.useMemo(function () {
    if (!activeColumn) return null;
    return activeColumn.renderFilter;
  }, [activeColumn]);
  var activeColumnData = React.useMemo(function () {
    var columnIndex = props.columns.findIndex(function (c) {
      return c === activeColumn;
    });
    if (columnIndex < 0) return [];
    return props.rows.map(function (row) {
      return props.columns[columnIndex].mapDataToValue(row.data);
    });
  }, [props.columns, props.rows, activeColumn]);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      setActiveColumn(columns[highlightIndex]);
    }

    if (event.keyCode === 38) {
      event.preventDefault();
      setHighlightIndex(Math.max(0, highlightIndex - 1));
    }

    if (event.keyCode === 40) {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
      } else {
        setHighlightIndex(Math.min(columns.length - 1, highlightIndex + 1));
      }
    }
  }

  return /*#__PURE__*/React.createElement(Popover, {
    focusLock: true,
    returnFocus: true,
    placement: PLACEMENT.bottomLeft,
    content: function content() {
      if (Filter && activeColumn) {
        return /*#__PURE__*/React.createElement(Filter, {
          data: activeColumnData,
          close: handleClose,
          setFilter: function setFilter(filterParams) {
            return props.onSetFilter(activeColumn.title, filterParams);
          }
        });
      }

      return /*#__PURE__*/React.createElement(Options, {
        columns: columns,
        highlightIndex: highlightIndex,
        onClick: handleOptionClick,
        onKeyDown: handleKeyDown,
        onMouseEnter: setHighlightIndex,
        onQueryChange: setQuery,
        query: query,
        searchable: filterableColumns.length >= 10
      });
    },
    onClick: function onClick() {
      if (isOpen) {
        handleClose();
      } else {
        setIsOpen(true);
      }
    },
    onClickOutside: handleClose,
    onEsc: handleClose,
    isOpen: isOpen,
    ignoreBoundary: true
  }, /*#__PURE__*/React.createElement(Button, {
    shape: SHAPE.pill,
    size: SIZE.compact,
    overrides: {
      BaseButton: {
        style: {
          marginLeft: theme.sizing.scale500,
          marginBottom: theme.sizing.scale500
        }
      }
    }
  }, locale.datatable.filterAdd));
}

export default FilterMenu;