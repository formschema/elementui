(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FormSchemaElementUI", [], factory);
	else if(typeof exports === 'object')
		exports["FormSchemaElementUI"] = factory();
	else
		root["FormSchemaElementUI"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "+xUi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+xUi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HrLf");
/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_setPublicPath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IG1J");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_entry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _entry__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/* harmony default export */ __webpack_exports__["default"] = (_entry__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "IG1J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  labelWidth: '120px',
  arrayButtonLabel: 'Add more item'
};
var Form = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        listeners = _ref.listeners,
        slots = _ref.slots;
    return h('el-form', {
      props: {
        value: props.value,
        labelWidth: defaultOptions.labelWidth
      },
      on: listeners
    }, slots().default);
  }
};
var FormItem = {
  functional: true,
  props: {
    label: {
      type: String
    },
    enableWrapper: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h, _ref2) {
    var data = _ref2.data,
        props = _ref2.props,
        slots = _ref2.slots;

    if (data.field.isArrayField && props.enableWrapper !== true) {
      return slots().default;
    }

    return h('el-form-item', {
      props: {
        label: props.label
      }
    }, slots().default);
  }
};

var Element = function Element(component) {
  return {
    functional: true,
    props: ['type', 'label', 'value'],
    render: function render(h, _ref3) {
      var data = _ref3.data,
          props = _ref3.props,
          listeners = _ref3.listeners,
          slots = _ref3.slots;
      var nodes = [h(component, {
        attrs: _objectSpread({}, data.attrs),
        props: _objectSpread({}, props),
        on: listeners
      }, slots().default)];
      return h(FormItem, {
        field: data.field,
        props: _objectSpread({}, props)
      }, nodes);
    }
  };
};

var ElCheckbox = function ElCheckbox(component) {
  return {
    functional: true,
    render: function render(h, _ref4) {
      var data = _ref4.data,
          props = _ref4.props,
          listeners = _ref4.listeners;

      if (!data.fieldParent.isArrayField && props.type !== 'radio') {
        return h(FormItem, {
          field: data.fieldParent,
          props: _objectSpread({}, props)
        }, [h(component, {
          props: {
            value: props.value
          },
          on: listeners
        })]);
      }

      return h(component, {
        props: {
          label: props.label,
          name: data.attrs.name
        },
        on: listeners
      });
    }
  };
};

var ElSelect = {
  functional: true,
  render: function render(h, _ref5) {
    var data = _ref5.data,
        props = _ref5.props,
        listeners = _ref5.listeners,
        slots = _ref5.slots;
    return h('el-select', {
      props: _objectSpread({}, data.attrs, {
        value: props.value
      }),
      on: listeners
    }, slots().default);
  }
};
var Option = {
  functional: true,
  render: function render(h, _ref6) {
    var data = _ref6.data,
        props = _ref6.props;
    return h('el-option', {
      props: {
        label: props.label,
        value: props.value
      }
    });
  }
};

var Input = function Input(type) {
  return {
    functional: true,
    render: function render(h, _ref7) {
      var props = _ref7.props,
          listeners = _ref7.listeners;
      return h('el-input', {
        props: {
          type: type,
          value: props.value
        },
        on: listeners
      });
    }
  };
};

var Fieldset = {
  functional: true,
  render: function render(h, _ref8) {
    var data = _ref8.data,
        props = _ref8.props,
        listeners = _ref8.listeners,
        slots = _ref8.slots;
    var nodes = slots().default || [];

    if (data.newItemButton) {
      nodes.push(h('div', [h(ArrayButton, data.newItemButton)]));
      return h(FormItem, {
        field: data.field,
        attrs: _objectSpread({}, data.attrs),
        props: {
          label: data.field.label,
          enableWrapper: true
        },
        on: listeners
      }, nodes);
    }

    var component = 'div';

    switch (data.field.attrs.type) {
      case 'radio':
      case 'checkbox':
        component = "el-".concat(data.field.attrs.type, "-group");
        break;
    }

    return h(FormItem, {
      field: data.field,
      attrs: _objectSpread({}, data.attrs),
      props: {
        label: data.field.label,
        enableWrapper: true
      },
      on: listeners
    }, [h(component, {
      props: {
        value: props.value
      },
      on: listeners
    }, nodes)]);
  }
};
var ArrayButton = {
  functional: true,
  render: function render(h, _ref9) {
    var listeners = _ref9.listeners;
    return h('el-button', {
      on: listeners,
      attrs: {
        type: 'text'
      }
    }, defaultOptions.arrayButtonLabel);
  }
};
var Error = {
  functional: true,
  render: function render(h, _ref10) {
    var slots = _ref10.slots;
    return h('el-alert', {
      props: {
        type: 'error'
      }
    }, slots().default);
  }
};
var Text = Element('el-input');
var Textarea = Element(Input('textarea'));
var Checkbox = ElCheckbox('el-checkbox');
var Radio = ElCheckbox('el-radio');
var Switch = ElCheckbox('el-switch');
var File = Element(Input('file'));
var Select = Element(ElSelect);

var _default = function _default(Components) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var components = new Components();
  components.set('form', Form);
  components.set('text', Text);
  components.set('checkbox', Checkbox);
  components.set('radio', Radio);
  components.set('file', File);
  components.set('select', Select);
  components.set('option', Option);
  components.set('switch', Switch);
  components.set('hidden', 'input');
  components.set('textarea', Textarea);
  components.set('fieldset', Fieldset);
  components.set('error', Error);
  return components;
};

exports.default = _default;

/***/ })

/******/ });
});
//# sourceMappingURL=ElementUIComponents.umd.js.map