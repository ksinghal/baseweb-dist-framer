function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import getDayStateCode from './utils/day-state.js';
import { ORIENTATION } from './constants.js';
/**
 * Main component container element
 */

export var StyledInputWrapper = styled('div', function (props) {
  var $separateRangeInputs = props.$separateRangeInputs;
  return _objectSpread({
    width: '100%'
  }, $separateRangeInputs ? {
    display: 'flex',
    justifyContent: 'center'
  } : {});
});
StyledInputWrapper.displayName = "StyledInputWrapper";
export var StyledInputLabel = styled('div', function (_ref) {
  var $theme = _ref.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.LabelMedium), {}, {
    marginBottom: $theme.sizing.scale300
  });
});
StyledInputLabel.displayName = "StyledInputLabel";
export var StyledStartDate = styled('div', function (_ref2) {
  var $theme = _ref2.$theme;
  return {
    width: '100%',
    marginRight: $theme.sizing.scale300
  };
});
StyledStartDate.displayName = "StyledStartDate";
export var StyledEndDate = styled('div', function (_ref3) {
  var $theme = _ref3.$theme;
  return {
    width: '100%'
  };
});
/**
 * Main component container element
 */

StyledEndDate.displayName = "StyledEndDate";
export var StyledRoot = styled('div', function (props) {
  var _props$$theme = props.$theme,
      typography = _props$$theme.typography,
      colors = _props$$theme.colors,
      borders = _props$$theme.borders;
  return _objectSpread(_objectSpread({}, typography.font200), {}, {
    color: colors.calendarForeground,
    backgroundColor: colors.calendarBackground,
    textAlign: 'center',
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: borders.surfaceBorderRadius,
    borderBottomLeftRadius: borders.surfaceBorderRadius,
    display: 'inline-block'
  });
});
StyledRoot.displayName = "StyledRoot";
export var StyledMonthContainer = styled('div', function (props) {
  var $orientation = props.$orientation;
  return {
    display: 'flex',
    flexDirection: $orientation === ORIENTATION.vertical ? 'column' : 'row'
  };
});
StyledMonthContainer.displayName = "StyledMonthContainer";
export var StyledCalendarContainer = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    paddingTop: sizing.scale400,
    paddingBottom: sizing.scale500,
    paddingLeft: sizing.scale600,
    paddingRight: sizing.scale600
  };
});
StyledCalendarContainer.displayName = "StyledCalendarContainer";
export var StyledSelectorContainer = styled('div', function (_ref4) {
  var $theme = _ref4.$theme;
  var textAlign = $theme.direction === 'rtl' ? 'right' : 'left';
  return {
    marginBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    textAlign: textAlign
  };
});
StyledSelectorContainer.displayName = "StyledSelectorContainer";
export var StyledCalendarHeader = styled('div', function (props) {
  var _props$$theme2 = props.$theme,
      borders = _props$$theme2.borders,
      colors = _props$$theme2.colors,
      sizing = _props$$theme2.sizing;
  return {
    color: colors.calendarHeaderForeground,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sizing.scale500,
    paddingBottom: sizing.scale500,
    paddingLeft: sizing.scale600,
    paddingRight: sizing.scale600,
    backgroundColor: colors.calendarHeaderBackground,
    borderTopLeftRadius: borders.surfaceBorderRadius,
    borderTopRightRadius: borders.surfaceBorderRadius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    // account for the left/right arrow heights
    minHeight: "calc(".concat(sizing.scale800, " + ").concat(sizing.scale0, ")")
  };
});
StyledCalendarHeader.displayName = "StyledCalendarHeader";
export var StyledMonthHeader = styled('div', function (props) {
  return {
    color: props.$theme.colors.calendarHeaderForeground,
    backgroundColor: props.$theme.colors.calendarHeaderBackground,
    whiteSpace: 'nowrap'
  };
});
StyledMonthHeader.displayName = "StyledMonthHeader";
export var StyledMonthYearSelectButton = styled('button', function (props) {
  return _objectSpread(_objectSpread({}, props.$theme.typography.font200), {}, {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    color: props.$theme.colors.calendarHeaderForeground,
    cursor: 'pointer',
    display: 'flex',
    outline: 'none',
    ':focus': {
      boxShadow: props.$isFocusVisible ? "0 0 0 3px ".concat(props.$theme.colors.accent) : 'none'
    }
  });
});
StyledMonthYearSelectButton.displayName = "StyledMonthYearSelectButton";
export var StyledMonthYearSelectIconContainer = styled('span', function (props) {
  var marginDirection = props.$theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return _defineProperty({
    alignItems: 'center',
    display: 'flex'
  }, marginDirection, props.$theme.sizing.scale500);
});
StyledMonthYearSelectIconContainer.displayName = "StyledMonthYearSelectIconContainer";

function getArrowBtnStyle(_ref6) {
  var $theme = _ref6.$theme,
      $disabled = _ref6.$disabled,
      $isFocusVisible = _ref6.$isFocusVisible;
  return {
    boxSizing: 'border-box',
    color: $disabled ? $theme.colors.calendarHeaderForegroundDisabled : $theme.colors.calendarHeaderForeground,
    cursor: $disabled ? 'default' : 'pointer',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    marginLeft: '6px',
    marginRight: '6px',
    marginBottom: 0,
    marginTop: 0,
    outline: 'none',
    ':focus': $disabled ? {} : {
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat($theme.colors.accent) : 'none'
    }
  };
}

export var StyledPrevButton = styled('button', getArrowBtnStyle);
StyledPrevButton.displayName = "StyledPrevButton";
export var StyledNextButton = styled('button', getArrowBtnStyle);
StyledNextButton.displayName = "StyledNextButton";
export var StyledMonth = styled('div', function (props) {
  return {
    display: 'inline-block'
  };
});
StyledMonth.displayName = "StyledMonth";
export var StyledWeek = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    whiteSpace: 'nowrap',
    display: 'flex',
    marginBottom: sizing.scale100
  };
});
StyledWeek.displayName = "StyledWeek";

function generateDayStyles(defaultCode, defaultStyle) {
  var _ref7;

  var codeForSM = defaultCode.substr(0, 12) + '1' + defaultCode.substr(12 + 1);
  var codeForEM = defaultCode.substr(0, 13) + '1' + defaultCode.substr(13 + 1);
  return _ref7 = {}, _defineProperty(_ref7, defaultCode, defaultStyle), _defineProperty(_ref7, codeForSM, defaultStyle), _defineProperty(_ref7, codeForEM, defaultStyle), _ref7;
} // eslint-disable-next-line flowtype/no-weak-types


function getDayStyles(code, _ref8) {
  var colors = _ref8.colors;
  var undefinedDayStyle = {
    ':before': {
      content: null
    },
    ':after': {
      content: null
    }
  };
  var defaultDayStyle = undefinedDayStyle;
  var disabledDateStyle = {
    color: colors.calendarForegroundDisabled,
    ':before': {
      content: null
    },
    ':after': {
      content: null
    }
  };
  var outsideMonthDateStyle = {
    color: colors.calendarForegroundDisabled,
    ':before': {
      borderTopStyle: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      backgroundColor: 'transparent'
    },
    ':after': {
      borderTopLeftRadius: '0%',
      borderTopRightRadius: '0%',
      borderBottomLeftRadius: '0%',
      borderBottomRightRadius: '0%',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      borderLeftColor: 'transparent'
    }
  };
  var highlightedStyle = {
    ':before': {
      content: null
    }
  };
  var CODE_DISABLED_INDEX = 1;

  if (code && code[CODE_DISABLED_INDEX] === '1') {
    defaultDayStyle = disabledDateStyle;
  } // See the ./utils/day-state.js file for the description of all available states
  // rdhsrSsDeDpSrHpHrRrLsMeMoM
  // '000000000000000'


  var dayStateStyle = Object.assign({}, // highlighted date
  generateDayStyles('001000000000000', {
    color: colors.calendarDayForegroundPseudoSelected
  }), // selected date
  generateDayStyles('000100000000000', {
    color: colors.calendarDayForegroundSelected
  }), // selected highlighted date
  generateDayStyles('001100000000000', {
    color: colors.calendarDayForegroundSelectedHighlighted
  }), // disabled date
  {
    '010000000000000': {
      color: colors.calendarForegroundDisabled,
      ':after': {
        content: null
      }
    }
  }, // disabled highlighted date
  {
    '011000000000000': {
      color: colors.calendarForegroundDisabled,
      ':after': {
        content: null
      }
    }
  }, // date outside of the currently displayed month (when peekNextMonth is true)
  generateDayStyles('000000000000001', outsideMonthDateStyle), // Range Datepicker
  // range: highlighted date outside of a selected range
  generateDayStyles('101000000000000', highlightedStyle), generateDayStyles('101010000000000', highlightedStyle), // range: selected date
  generateDayStyles('100100000000000', {
    color: colors.calendarDayForegroundSelected
  }), // range: selected highlighted date
  // when single date selected in a range
  generateDayStyles('101100000000000', {
    color: colors.calendarDayForegroundSelectedHighlighted,
    ':before': {
      content: null
    }
  }), // range: selected start and end dates are the same
  generateDayStyles('100111100000000', {
    color: colors.calendarDayForegroundSelected,
    ':before': {
      content: null
    }
  }), generateDayStyles('101111100000000', {
    color: colors.calendarDayForegroundSelectedHighlighted,
    ':before': {
      content: null
    }
  }), // range: selected start date
  generateDayStyles('100111000000000', {
    color: colors.calendarDayForegroundSelected
  }), // range: selected end date
  generateDayStyles('100110100000000', {
    color: colors.calendarDayForegroundSelected,
    ':before': {
      left: null,
      right: '50%'
    }
  }), // range: first selected date while a range is highlighted but no second date selected yet
  // highlighted range on the right from the selected
  generateDayStyles('100100001010000', {
    color: colors.calendarDayForegroundSelected
  }), // highlighted range on the left from the selected
  generateDayStyles('100100001001000', {
    color: colors.calendarDayForegroundSelected,
    ':before': {
      left: null,
      right: '50%'
    }
  }), // range: second date in a range that is highlighted but not selected
  generateDayStyles('101000001010000', {
    ':before': {
      left: null,
      right: '50%'
    }
  }), {
    '101000001001000': {}
  }, {
    '101000001001100': {}
  }, {
    '101000001001010': {}
  }, // range: pseudo-selected date
  generateDayStyles('100010010000000', {
    color: colors.calendarDayForegroundPseudoSelected,
    ':before': {
      left: '0',
      width: '100%'
    },
    ':after': {
      content: null
    }
  }), // range: pseudo-highlighted date (in a range where only one date is
  // selected and second date is highlighted)
  {
    '101000001100000': {
      color: colors.calendarDayForegroundPseudoSelected,
      ':before': {
        left: '0',
        width: '100%'
      },
      ':after': {
        content: null
      }
    }
  }, generateDayStyles('100000001100000', {
    color: colors.calendarDayForegroundPseudoSelected,
    ':before': {
      left: '0',
      width: '100%'
    },
    ':after': {
      content: null
    }
  }), // highlighted start date in a range
  generateDayStyles('101111000000000', {
    color: colors.calendarDayForegroundSelectedHighlighted
  }), // highlighted end date in a range
  generateDayStyles('101110100000000', {
    color: colors.calendarDayForegroundSelectedHighlighted,
    ':before': {
      left: null,
      right: '50%'
    }
  }), // range: pseudo-selected date
  generateDayStyles('101010010000000', {
    color: colors.calendarDayForegroundPseudoSelectedHighlighted,
    ':before': {
      left: '0',
      width: '100%'
    }
  }), // Range is true Date outside current month (when peekNextMonth is true)
  generateDayStyles('100000000000001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, start date is selected and range is highlighted is on right
  generateDayStyles('100000001010001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, start date is selected and range is highlighted is on left
  generateDayStyles('100000001001001', outsideMonthDateStyle), // peekNextMonth is true, date is outside month, range is selected
  generateDayStyles('100010000000001', outsideMonthDateStyle));
  return dayStateStyle[code] || defaultDayStyle;
}

export var StyledDay = styled('div', function (props) {
  var $disabled = props.$disabled,
      $isFocusVisible = props.$isFocusVisible,
      $isHighlighted = props.$isHighlighted,
      $peekNextMonth = props.$peekNextMonth,
      $pseudoSelected = props.$pseudoSelected,
      $range = props.$range,
      $selected = props.$selected,
      $outsideMonth = props.$outsideMonth,
      $outsideMonthWithinRange = props.$outsideMonthWithinRange,
      $hasDateLabel = props.$hasDateLabel,
      _props$$theme3 = props.$theme,
      colors = _props$$theme3.colors,
      sizing = _props$$theme3.sizing;
  var code = getDayStateCode(props);
  return _objectSpread(_objectSpread({
    boxSizing: 'border-box',
    position: 'relative',
    cursor: $disabled || !$peekNextMonth && $outsideMonth ? 'default' : 'pointer',
    color: colors.calendarForeground,
    display: 'inline-block',
    width: sizing.scale1000,
    height: $hasDateLabel ? '60px' : sizing.scale1000,
    lineHeight: sizing.scale800,
    textAlign: 'center',
    paddingTop: sizing.scale300,
    paddingBottom: sizing.scale300,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    outline: 'none',
    backgroundColor: 'transparent',
    // `transform` creates a stacking context so
    // a z-index used on its' children doesn't
    // interfere with anything outside the component
    transform: 'scale(1)'
  }, getDayStyles(code, props.$theme)), {}, {
    // :after pseudo element defines the selected
    // or highlighted day's circle styles
    ':after': _objectSpread(_objectSpread({
      zIndex: -1,
      content: '""',
      boxSizing: 'border-box',
      display: 'inline-block',
      boxShadow: $isFocusVisible ? "0 0 0 3px ".concat(colors.accent) : 'none',
      backgroundColor: $selected ? colors.calendarDayBackgroundSelectedHighlighted : $pseudoSelected && $isHighlighted ? colors.calendarDayBackgroundPseudoSelectedHighlighted : colors.calendarBackground,
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      borderLeftWidth: '2px',
      borderRightWidth: '2px',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderTopColor: colors.borderSelected,
      borderBottomColor: colors.borderSelected,
      borderRightColor: colors.borderSelected,
      borderLeftColor: colors.borderSelected,
      borderTopLeftRadius: $hasDateLabel ? sizing.scale700 : '100%',
      borderTopRightRadius: $hasDateLabel ? sizing.scale700 : '100%',
      borderBottomLeftRadius: $hasDateLabel ? sizing.scale700 : '100%',
      borderBottomRightRadius: $hasDateLabel ? sizing.scale700 : '100%'
    }, getDayStyles(code, props.$theme)[':after'] || {}), $outsideMonthWithinRange ? {
      content: null
    } : {})
  }, $range ? {
    // :before pseudo element defines a grey background style that extends
    // the selected/highlighted day's circle and spans through a range
    ':before': _objectSpread(_objectSpread({
      zIndex: -1,
      content: '""',
      boxSizing: 'border-box',
      display: 'inline-block',
      backgroundColor: colors.mono300,
      position: 'absolute',
      height: '100%',
      width: '50%',
      top: 0,
      left: '50%',
      borderTopWidth: '2px',
      borderBottomWidth: '2px',
      borderLeftWidth: '0',
      borderRightWidth: '0',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent'
    }, getDayStyles(code, props.$theme)[':before'] || {}), $outsideMonthWithinRange ? {
      backgroundColor: colors.mono300,
      left: '0',
      width: '100%',
      content: '""'
    } : {})
  } : // a hack to make flow happy, otherwise it complains about complexity
  // eslint-disable-next-line flowtype/no-weak-types
  {});
});
StyledDay.displayName = "StyledDay";
export var StyledDayLabel = styled('div', function (props) {
  var _props$$theme4 = props.$theme,
      typography = _props$$theme4.typography,
      colors = _props$$theme4.colors,
      $selected = props.$selected;
  return _objectSpread(_objectSpread({}, typography.ParagraphXSmall), {}, {
    color: $selected ? colors.contentInverseTertiary : colors.contentTertiary
  });
});
StyledDayLabel.displayName = "StyledDayLabel";
export var StyledWeekdayHeader = styled('div', function (props) {
  var sizing = props.$theme.sizing;
  return {
    boxSizing: 'border-box',
    position: 'relative',
    cursor: 'default',
    display: 'inline-block',
    width: sizing.scale1000,
    height: sizing.scale1000,
    lineHeight: sizing.scale800,
    textAlign: 'center',
    paddingTop: sizing.scale300,
    paddingBottom: sizing.scale300,
    paddingLeft: sizing.scale200,
    paddingRight: sizing.scale200,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit',
    backgroundColor: 'transparent'
  };
});
StyledWeekdayHeader.displayName = "StyledWeekdayHeader";