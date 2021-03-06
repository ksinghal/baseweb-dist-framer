function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
var getLastLeafId = function getLastLeafId(node, getId) {
  if (node.isExpanded && node.children && node.children.length) {
    return getLastLeafId(node.children[node.children.length - 1], getId);
  }

  return getId(node);
};

export var getParentId = function getParentId(nodes, nodeId, parentId, getId) {
  for (var i = 0; i < nodes.length; i++) {
    if (getId(nodes[i]) === nodeId) {
      return parentId;
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var foundId = getParentId(nodes[i].children, nodeId, getId(nodes[i]), getId);

      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
};
export var getPrevId = function getPrevId(nodes, nodeId, parentId, getId) {
  for (var i = 0; i < nodes.length; i++) {
    if (getId(nodes[i]) === nodeId) {
      if (i === 0) {
        return parentId;
      } else {
        return getLastLeafId(nodes[i - 1], getId);
      }
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var foundId = getPrevId(nodes[i].children, nodeId, getId(nodes[i]), getId);

      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
};
export var getFirstChildId = function getFirstChildId(nodes, nodeId, getId) {
  for (var i = 0; i < nodes.length; i++) {
    if (getId(nodes[i]) === nodeId) {
      if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
        return getId(nodes[i].children[0]);
      }
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var foundId = getFirstChildId(nodes[i].children, nodeId, getId);

      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
};
export var getNextId = function getNextId(nodes, nodeId, closestOmmer, getId) {
  for (var i = 0; i < nodes.length; i++) {
    if (getId(nodes[i]) === nodeId) {
      if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
        return getId(nodes[i].children[0]);
      } else if (nodes[i + 1]) {
        return getId(nodes[i + 1]);
      } else {
        return closestOmmer;
      }
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var foundId = getNextId(nodes[i].children, nodeId, nodes[i + 1] ? getId(nodes[i + 1]) : closestOmmer, getId);

      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
};
export var getEndId = function getEndId(nodes, getId) {
  var endNode = nodes[nodes.length - 1];

  if (endNode.isExpanded && endNode.children && endNode.children.length) {
    return getEndId(endNode.children, getId);
  }

  return getId(endNode);
};
export var getExpandableSiblings = function getExpandableSiblings(nodes, nodeId, getId) {
  for (var i = 0; i < nodes.length; i++) {
    if (getId(nodes[i]) === nodeId) {
      var expandableSiblings = [];

      for (var j = 0; j < nodes.length; j++) {
        if (!nodes[j].isExpanded && nodes[j].children && nodes[j].children.length) {
          expandableSiblings.push(nodes[j]);
        }
      }

      return expandableSiblings;
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var result = getExpandableSiblings(nodes[i].children, nodeId, getId);

      if (result.length) {
        return result;
      }
    }
  }

  return [];
};
export var toggleIsExpanded = function toggleIsExpanded(arr, toggledNode) {
  var getId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (node) {
    return node.id ? node.id : '';
  };
  return arr.map(function (node) {
    var newNode = _objectSpread({}, node);

    if (getId(newNode) === getId(toggledNode)) {
      newNode.isExpanded = !newNode.isExpanded;
    }

    if (newNode.children && newNode.children.length) {
      newNode.children = toggleIsExpanded(newNode.children, toggledNode);
    }

    return newNode;
  });
};
export var getCharMatchId = function getCharMatchId(nodes, nodeId, chars, closestOmmer, getId) {
  var foundid = matchString(nodes, nodeId, chars, closestOmmer, getId, true);
  if (foundid) return foundid;
  foundid = matchString(nodes, nodeId, chars, closestOmmer, getId, false);
  return foundid;
};
export var matchString = function matchString(nodes, nodeId, chars, closestOmmer, getId, matchPrefix) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].label && typeof nodes[i].label === 'string') {
      if (matchPrefix && nodes[i].label.toUpperCase().indexOf(chars.toUpperCase()) === 0 || !matchPrefix && nodes[i].label.toUpperCase().indexOf(chars.toUpperCase()) > 0) {
        return getId(nodes[i]);
      }
    }

    if (nodes[i].isExpanded && nodes[i].children && nodes[i].children.length) {
      var foundId = matchString(nodes[i].children, nodeId, chars, nodes[i + 1] ? getId(nodes[i + 1]) : closestOmmer, getId, matchPrefix);

      if (foundId) {
        return foundId;
      }
    }
  }

  return null;
};
export var defaultGetId = function defaultGetId(node) {
  if (!node.id) {
    throw Error('There needs to be an unique node.id. You can implement a custom mapping with getId.');
  }

  return node.id;
};