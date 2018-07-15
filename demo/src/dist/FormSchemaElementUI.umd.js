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
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("u837");
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

/***/ "u837":
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

var _default = function _default(Components) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var components = new Components();
  components.set('form', {
    render: function render(createElement, _ref) {
      var props = _ref.props,
          slots = _ref.slots;
      var labelWidth = options.labelWidth;
      var model = {};
      return createElement('el-form', {
        props: {
          labelWidth: labelWidth,
          model: model
        }
      }, slots().default);
    }
  });
  components.set('inputwrapper', {
    render: function render(h, _ref2) {
      var slots = _ref2.slots;
      return slots().default;
    }
  });
  components.set('email', input('el-input'));
  components.set('password', input('el-input'));
  components.set('text', input('el-input'));
  components.set('textarea', input('el-input'));
  components.set('checkbox', choice('el-checkbox'));
  components.set('switch', input('el-switch'));
  components.set('radio', choice('el-radio'));
  components.set('select', input('el-select'));
  components.set('option', {
    render: function render(createElement, _ref3) {
      var data = _ref3.data,
          props = _ref3.props;
      // http://element.eleme.io/#/en-US/component/select#option-attributes
      return createElement('el-option', {
        props: {
          value: props.value,
          label: data.field.label,
          disabled: props.disabled
        }
      });
    }
  });
  components.set('checkboxgroup', group('el-checkbox-group'));
  components.set('radiogroup', group('el-radio-group'));
  components.set('buttonswrapper', {
    render: function render(h, _ref4) {
      var slots = _ref4.slots;
      return h('el-form-item', slots().default);
    }
  });
  components.set('inputswrapper', formItem(function (h, _ref5) {
    var slots = _ref5.slots;
    return h('el-form-item', slots().default);
  }, true, true));
  components.set('arraybutton', {
    render: function render(h, _ref6) {
      var props = _ref6.props,
          listeners = _ref6.listeners;
      return h('el-button', {
        props: {
          type: 'text',
          disabled: props.disabled
        },
        on: listeners
      }, options.arrayButtonLabel);
    }
  });
  components.set('error', {
    render: function render(h, _ref7) {
      var slots = _ref7.slots;
      return h('el-alert', {
        props: {
          type: 'error'
        }
      }, slots().default);
    }
  });
  return components;
};

exports.default = _default;

var formItem = function formItem(elementInput) {
  var enableLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var isArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    render: function render(createElement, context) {
      var field = context.props.field || context.data.field;
      var type = field.schemaType === 'array' && field.attrs.type === 'radio' ? 'string' : field.schemaType;
      var required = field.attrs.required || false;
      var message = field.attrs.title;
      var trigger = ['radio', 'checkbox', 'select'].includes(field.attrs.type) ? 'change' : 'blur';
      var label = isArray || enableLabel && !field.isArrayField ? field.label : '';
      var prop = context.props.name;
      var rules = {
        type: type,
        required: required,
        message: message,
        trigger: trigger
      };
      return createElement('el-form-item', {
        // http://element.eleme.io/#/en-US/component/form#form-item-attributes
        // http://element.eleme.io/#/en-US/component/form#validation
        props: {
          label: label,
          prop: prop,
          required: required,
          rules: rules
        }
      }, [elementInput(createElement, context), field.description ? createElement('small', field.description) : undefined]);
    }
  };
};

var events = function events(listeners) {
  return _objectSpread({}, listeners, {
    input: function input(value) {
      listeners.input({
        target: {
          value: value
        }
      });
    },
    change: function change(value) {
      listeners.change({
        target: {
          value: value
        }
      });
    }
  });
};

var input = function input(tag) {
  return formItem(function (h, _ref8) {
    var data = _ref8.data,
        slots = _ref8.slots,
        listeners = _ref8.listeners;
    return h(tag, _objectSpread({}, data, {
      on: events(listeners)
    }), slots().default);
  });
};

var choice = function choice(tag) {
  return formItem(function (h, _ref9) {
    var data = _ref9.data,
        props = _ref9.props,
        slots = _ref9.slots,
        listeners = _ref9.listeners;
    return h(tag, _objectSpread({}, data, {
      props: _objectSpread({}, props, {
        label: data.field.label,
        trueLabel: props.value
      }),
      on: events(listeners)
    }), slots().default);
  }, false);
};

var group = function group(tag) {
  return formItem(function (h, _ref10) {
    var data = _ref10.data,
        props = _ref10.props,
        slots = _ref10.slots;
    return h(tag, _objectSpread({}, data, {
      props: _objectSpread({}, props, {
        label: data.field.label
      })
    }), slots().default);
  });
};

/***/ })

/******/ });
});
//# sourceMappingURL=FormSchemaElementUI.umd.js.map