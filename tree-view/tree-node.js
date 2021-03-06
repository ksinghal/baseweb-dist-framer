function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { StyledTreeItemList, StyledTreeItem } from './styled-components.js';
import StyledTreeLabel from './tree-label.js';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';

var TreeNode = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  var _super = _createSuper(TreeNode);

  function TreeNode() {
    var _this;

    _classCallCheck(this, TreeNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "treeItemRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onToggle", function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          node = _this$props.node;

      if (onToggle) {
        onToggle(node);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (e) {
      if (e && e.target !== _this.treeItemRef.current) return;
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus(e);
      }
    });

    return _this;
  }

  _createClass(TreeNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.addRef(this.props.getId(this.props.node), this.treeItemRef);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.removeRef(this.props.getId(this.props.node));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          indentGuides = _this$props2.indentGuides,
          node = _this$props2.node,
          getId = _this$props2.getId,
          onToggle = _this$props2.onToggle,
          _this$props2$override = _this$props2.overrides,
          overrides = _this$props2$override === void 0 ? {} : _this$props2$override,
          renderAll = _this$props2.renderAll,
          selectedNodeId = _this$props2.selectedNodeId,
          _onKeyDown = _this$props2.onKeyDown,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          addRef = _this$props2.addRef,
          removeRef = _this$props2.removeRef,
          isFocusVisible = _this$props2.isFocusVisible;
      var children = node.children,
          isExpanded = node.isExpanded,
          label = node.label;
      var hasChildren = children && children.length !== 0;
      var TreeItemListOverride = overrides.TreeItemList,
          TreeItemOverride = overrides.TreeItem,
          TreeLabelOverride = overrides.TreeLabel;
      var TreeItemList = getOverride(TreeItemListOverride) || StyledTreeItemList;
      var TreeItem = getOverride(TreeItemOverride) || StyledTreeItem;
      var TreeLabel = getOverride(TreeLabelOverride) || StyledTreeLabel;
      return /*#__PURE__*/React.createElement(TreeItem, _extends({
        role: "treeitem",
        ref: this.treeItemRef,
        "data-nodeid": getId(node),
        tabIndex: selectedNodeId === getId(node) ? 0 : -1,
        onKeyDown: function onKeyDown(e) {
          return _onKeyDown && _onKeyDown(e, node);
        },
        onBlur: onBlur,
        onFocus: this.onFocus,
        "aria-expanded": isExpanded ? true : false,
        $isLeafNode: !hasChildren
      }, getOverrideProps(TreeItemOverride)), /*#__PURE__*/React.createElement(TreeLabel, _extends({
        onClick: this.onToggle,
        node: node,
        hasChildren: hasChildren,
        isExpanded: isExpanded,
        isSelected: selectedNodeId === getId(node),
        isFocusVisible: isFocusVisible,
        label: label,
        overrides: overrides
      }, getOverrideProps(TreeLabelOverride))), children && (isExpanded || renderAll) && /*#__PURE__*/React.createElement(TreeItemList, _extends({
        role: "group",
        $indentGuides: !!indentGuides,
        $isChildNode: true,
        $expanded: !!isExpanded
      }, getOverrideProps(TreeItemListOverride)), children.map(function (node, index) {
        return /*#__PURE__*/React.createElement(TreeNode, {
          indentGuides: !!indentGuides,
          renderAll: renderAll,
          key: index,
          node: node,
          getId: getId,
          onToggle: onToggle,
          overrides: overrides,
          selectedNodeId: selectedNodeId,
          onKeyDown: _onKeyDown,
          onFocus: onFocus,
          onBlur: onBlur,
          addRef: addRef,
          removeRef: removeRef,
          isFocusVisible: isFocusVisible
        });
      })));
    }
  }]);

  return TreeNode;
}(React.Component);

export { TreeNode as default };