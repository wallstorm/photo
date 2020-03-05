module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("div", {
  className: "jsx-731976026" + " " + "footerr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-731976026" + " " + "footer-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-731976026" + " " + "footer-section about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-731976026" + " " + "logo-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "photo", __jsx("span", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "assistence")), __jsx("p", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Descripcion de la empresa, un poco mas de espacio para chamuyar. Corto y conciso para entender las cosas."), __jsx("div", {
  className: "jsx-731976026" + " " + "contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faMobileAlt"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), "\xA0 3518195169"), __jsx("span", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelopeSquare"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), "\xA0 photoassistence@gmail.com")), __jsx("div", {
  className: "jsx-731976026" + " " + "socials",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "http://www.facebook.com",
  target: "_blank",
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookSquare"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx("a", {
  href: "http://www.instagram.com",
  target: "_blank",
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faInstagram"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})))), __jsx("div", {
  className: "jsx-731976026" + " " + "footer-section links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Quick Links"), __jsx("ul", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Nosotros")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/servicios",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Servicios")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/contacto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Contacto")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/terms",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "T\xE9rminos y condiciones")))), __jsx("div", {
  className: "jsx-731976026" + " " + "footer-section contact-form",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "\xBFSos fotogr\xE1fo?"), __jsx("p", {
  className: "jsx-731976026",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Escribir una descripcion para los fotofrafos interesados en trabajar con nosotros. Algo corto y directo. Podria ser algo asi como los requisitos y un link que lleve directo a la pagina correspondiente."))), __jsx("div", {
  className: "jsx-731976026" + " " + "footer-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "\xA9 photo-assistence.com | Designed by Wall Group"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "731976026",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');.footerr.jsx-731976026{position:relative;width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;font-family:'Open Sans',sans-serif;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:320px;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:1px;-ms-flex:1px;flex:1px;padding:25px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 h1.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 h2.jsx-731976026{color:white;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .about.jsx-731976026 h1.jsx-731976026 span.jsx-731976026{color:rgb(219,7,112);}.footerr.jsx-731976026 .footer-content.jsx-731976026 .about.jsx-731976026 .contact.jsx-731976026 span.jsx-731976026{display:block;font-size:1.1em;margin-bottom:8px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .about.jsx-731976026 .socials.jsx-731976026 a.jsx-731976026{border:1px solid gray;width:45px;height:35px;padding-top:5px;margin-right:5px;text-align:center;display:inline-block;font-size:1.3em;border-radius:5px;-webkit-transition:all .3s;transition:all .3s;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .about.jsx-731976026 .socials.jsx-731976026 a.jsx-731976026:hover{border:1px solid white;color:white;-webkit-transition:all .3s;transition:all .3s;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:50px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026 li.jsx-731976026{margin-left:-10px;-webkit-text-decoration:none;text-decoration:none;color:#d3d3d3;display:block;margin-bottom:10px;font-size:1.em;-webkit-transition:all .3s;transition:all .3s;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026 li.jsx-731976026:hover{color:white;margin-left:15px;-webkit-transition:all .3s;transition:all .3s;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .contact-form.jsx-731976026 .contact-input.jsx-731976026{background:#272727;color:#bebdbd;margin-bottom:10px;line-height:1.5rem;padding:.9rem 1.4rem;border:none;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .contact-form.jsx-731976026 .contact-input.jsx-731976026:focus{background:#1a1a1a;}.btn-big.jsx-731976026{padding:.7rem 1.3rem;line-height:1.3rem;color:white;border:1px solid white;}.btn-big.jsx-731976026:hover{color:rgb(82,199,253);border:1px solid rgb(82,199,253);}.footerr.jsx-731976026 .footer-bottom.jsx-731976026{background:#343a40;color:#a09999;height:50px;width:100%;text-align:center;position:relative;bottom:0px;left:0px;padding-top:20px;}@media screen and (min-width:320px) and (max-width:520px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:70em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:55px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-235px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-525px;height:22em;width:240px;}}@media screen and (min-width:520px) and (max-width:684px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:40em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:-5px;width:240px;}.links.jsx-731976026{position:relative;top:8px;left:-25px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:336px;left:-590px;height:22em;width:240px;}}@media screen and (min-width:685px) and (max-width:1012px){.footerr.jsx-731976026 .footer-content.jsx-731976026{height:31em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}}@media screen and (width:360px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:80em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:-5px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-297px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-590px;height:22em;width:240px;}.footer-bottom.jsx-731976026{position:relative;top:0px;}}@media screen and (width:411px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:80em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:54px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-236px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-525px;height:22em;width:240px;}.footer-bottom.jsx-731976026{position:relative;top:0px;}}@media screen and (width:320px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:80em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:5px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-282px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-567px;height:22em;width:240px;}.footer-bottom.jsx-731976026{position:relative;top:0px;}}@media screen and (width:375px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:80em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:35px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-256px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-545px;height:22em;width:240px;}.footer-bottom.jsx-731976026{position:relative;top:0px;}}@media screen and (width:414px){.footerr.jsx-731976026{position:relative;-webkit-flex-shrink:2;-ms-flex-negative:2;flex-shrink:2;}.footerr.jsx-731976026 .footer-content.jsx-731976026{height:80em;background:#303036;color:#d3d3d3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .footer-section.jsx-731976026{-webkit-flex:none;-ms-flex:none;flex:none;padding:25px;}.about.jsx-731976026{height:19em;position:relative;left:54px;width:240px;}.links.jsx-731976026{position:relative;top:400px;left:-236px;height:260px;width:240px;}.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 h2.jsx-731976026,.footerr.jsx-731976026 .footer-content.jsx-731976026 .links.jsx-731976026 ul.jsx-731976026{margin-left:0px;}.contact-form.jsx-731976026{position:relative;top:756px;left:-525px;height:22em;width:240px;}.footer-bottom.jsx-731976026{position:relative;top:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFmYWVsIGNhc3RpbGxvXFxEZXNrdG9wXFxwaG90b1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFFc0YsQUFFL0MsQUFPTCxBQVFKLEFBTUcsQUFJVyxBQUlULEFBTVEsQUFhQyxBQU9OLEFBSUMsQUFVTixBQU1PLEFBU0EsQUFJRSxBQU9HLEFBS0wsQUFZRyxBQUtOLEFBUUYsQUFLRSxBQU1NLEFBUUYsQUFHRSxBQVNBLEFBS04sQUFRRixBQUtFLEFBTU0sQUFRRixBQUdFLEFBVU4sQUFXTSxBQUtOLEFBUUYsQUFJRSxBQU1NLEFBUUYsQUFHRSxBQU9BLEFBTUEsQUFLTixBQVFGLEFBSUUsQUFNTSxBQVFGLEFBR0UsQUFPQSxBQU1BLEFBS04sQUFRRixBQUlFLEFBTU0sQUFRRixBQUdFLEFBT0EsQUFNQSxBQUtOLEFBUUYsQUFJRSxBQU1NLEFBUUYsQUFHRSxBQU9BLEFBTUEsQUFLTixBQVFGLEFBSUUsQUFNTSxBQVFGLEFBR0UsQUFPQSxZQW5hMUIsQUFnRHFCLEFBZ0RNLEFBYUQsQUErQkMsQUFhRCxBQTJCQyxBQWdCQSxBQVlELEFBbUNDLEFBWUQsQUFtQ0MsQUFZRCxBQW1DQyxBQVlELEFBbUNDLEFBWUQsQ0ExWkgsQ0FzQkgsRUFtSGhCLEFBNENBLEFBdURBLEFBK0NBLEFBK0NBLEFBK0NBLEFBK0NBLENBeFhKLENBdkRlLEFBMkRTLEFBcURGLEFBd0JMLEFBV0MsQUFTSSxBQXdCUCxBQVdHLEFBcUJJLEFBdUJMLEFBV0MsQUFPRixBQU1NLEFBdUJMLEFBV0MsQUFPRixBQU1NLEFBdUJMLEFBV0MsQUFPRixBQU1NLEFBdUJMLEFBV0MsQUFPRixBQU1NLEFBdUJMLEFBV0MsQUFPRixDQTlXRSxBQVNsQixBQWdCa0IsRUEzRWxCLEFBK0R1QixDQXJEUixBQTREd0IsQ0EvQ3ZCLEdBcUlHLEFBeUVmLEFBK0NBLEFBK0NBLEFBK0NBLEFBK0NBLEVBalRnQixBQVdBLEFBNENBLEFBNENBLEFBV0EsQUFvQ0EsQUFXQSxBQW9DQSxBQVdBLEFBb0NBLEFBV0EsQUFvQ0EsQUFXQSxDQWxiRixBQXFFSyxDQXhDRCxBQXFHSixBQTRDQSxBQXVEQSxBQStDQSxBQStDRCxBQStDQyxBQStDQSxDQTVTSSxBQTRDQSxBQXdDQSxBQWdCQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxDQTlZSixDQTRCRixBQXdDTyxBQXlCUCxFQXBETyxFQXFJSCxFQXZLSCxBQXVUZCxDQTdPYSxBQTRDYixBQUtpQixBQVdBLEFBNEJqQixBQWdCaUIsQUF1Q2pCLEFBS2lCLEFBV0EsQUErQmpCLEFBS2lCLEFBV0EsQUFvQ0EsQUFXQSxBQStCakIsQUFLaUIsQUFXQSxBQStCakIsQUFLaUIsQUFXQSxFQXZUQyxBQTRDQSxBQXdEQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxHQXhYRCxBQWlFTCxBQWlCTSxBQTRDQSxBQXdDQSxBQWdCQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxDQTlZSixFQXNCakIsRUF3Sm1CLENBK0lmLENBdFRKLEFBNkR1QixBQWFJLEFBMkN2QixBQWlCZSxBQTJCZixBQWlCZSxBQXNDZixBQWlCZSxBQThCZixBQWlCZSxBQStDQSxBQThCZixBQWlCZSxBQThCZixBQWlCZSxDQTFTQSxBQW1HQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxFQTFVbkIsQUE4QkksQUE0Q0EsQUF3REEsQUErQ0EsQUErQ0EsQUErQ0EsQUErQ0EsQ0F2VGtCLEtBakVELENBa0pqQixFQWpDQSxBQTRDQSxBQXVEQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxDQTFTQSxBQW1HQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxHQS9XYyxHQWtCTyxHQTBCSCxBQVNsQixBQTRDQSxBQXdEQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxDQTFVSixBQW9CQSxHQXBEc0IsR0FXdEIsQ0FXa0IsR0EzRHNCLE9BNkV4QixBQTBCRCxJQWpFVSxBQXNCRixPQTRDVixDQTFCYixRQTJCcUIsR0E1Q0YsRUF0QkMsRUErRUUsQUE0Q0EsQUF3Q0EsQUFnQkEsQUErQ0EsQUErQ0EsQUErQ0EsQUErQ0EsQ0FyWnRCLEFBT2tCLFNBa0dsQixDQTVDdUIsR0F0QkQsa0JBQ0Msc0JBOEVuQixBQTRDQSxBQXdDQSxBQWdCQSxBQStDQSxBQStDQSxBQStDQSxBQStDQSxDQTlZSixFQXNEQSxxQkFyQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxyYWZhZWwgY2FzdGlsbG9cXERlc2t0b3BcXHBob3RvXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhRmFjZWJvb2tTcXVhcmUsIGZhSW5zdGFncmFtIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhRW52ZWxvcGVTcXVhcmUsIGZhTW9iaWxlQWx0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlcnJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb24gYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvLXRleHRcIj5waG90bzxzcGFuPmFzc2lzdGVuY2U8L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPkRlc2NyaXBjaW9uIGRlIGxhIGVtcHJlc2EsIHVuIHBvY28gbWFzIGRlIGVzcGFjaW8gcGFyYSBjaGFtdXlhci4gQ29ydG8geSBjb25jaXNvIHBhcmEgZW50ZW5kZXIgbGFzIGNvc2FzLjwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFNb2JpbGVBbHR9IC8+Jm5ic3A7IDM1MTgxOTUxNjk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlU3F1YXJlfSAvPiZuYnNwOyBwaG90b2Fzc2lzdGVuY2VAZ21haWwuY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5mYWNlYm9vay5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2tTcXVhcmV9IC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmluc3RhZ3JhbS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb24gbGlua3NcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5RdWljayBMaW5rczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxsaT5Ob3NvdHJvczwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljaW9zXCI+PGxpPlNlcnZpY2lvczwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdG9cIj48bGk+Q29udGFjdG88L2xpPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlcm1zXCI+PGxpPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC9saT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb24gY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+wr9Tb3MgZm90b2dyw6Fmbz88L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+RXNjcmliaXIgdW5hIGRlc2NyaXBjaW9uIHBhcmEgbG9zIGZvdG9mcmFmb3MgaW50ZXJlc2Fkb3NcclxuICAgICAgICAgICAgICAgICAgICBlbiB0cmFiYWphciBjb24gbm9zb3Ryb3MuIEFsZ28gY29ydG8geSBkaXJlY3RvLlxyXG4gICAgICAgICAgICAgICAgICAgIFBvZHJpYSBzZXIgYWxnbyBhc2kgY29tbyBsb3MgcmVxdWlzaXRvcyB5IHVuIGxpbmsgcXVlIGxsZXZlIGRpcmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBhIGxhIHBhZ2luYSBjb3JyZXNwb25kaWVudGUuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cclxuICAgICAgICAgICAgJmNvcHk7IHBob3RvLWFzc2lzdGVuY2UuY29tIHwgRGVzaWduZWQgYnkgV2FsbCBHcm91cFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzNjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QzZDNkMztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IGgxLFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuYWJvdXQgaDEgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMTksIDcsIDExMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuYWJvdXQgLmNvbnRhY3Qgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuYWJvdXQgLnNvY2lhbHMgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuYWJvdXQgLnNvY2lhbHMgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAubGlua3MgaDIsXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVsIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkM2QzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyB1bCBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuY29udGFjdC1mb3JtIC5jb250YWN0LWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYmViZGJkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuOXJlbSAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmNvbnRhY3QtZm9ybSAuY29udGFjdC1pbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFhMWExYTsgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJ0bi1iaWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC43cmVtIDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJ0bi1iaWc6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoODIsIDE5OSwgMjUzKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODIsIDE5OSwgMjUzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhMDk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDNkM2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAubGlua3MgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUyMHB4KSBhbmQgKG1heC13aWR0aDogNjg0cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkM2QzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyBoMixcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDMzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNTkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjg1cHgpIGFuZCAobWF4LXdpZHRoOiAxMDEycHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDNkM2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDozNjBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDNkM2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6NDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yOTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyBoMixcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDc1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNTkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAod2lkdGg6NDExcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMDM2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2QzZDNkMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAuZm9vdGVyLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWJvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAubGlua3MgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTUyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoOjMyMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkM2QzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjgycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAubGlua3MgaDIsXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTU2N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoOjM3NXB4KXtcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkM2QzZDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTI1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIGgyLFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXJyIC5mb290ZXItY29udGVudCAubGlua3MgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNzU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC01NDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDo0MTRweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDNkM2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5mb290ZXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hYm91dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6NDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlcnIgLmZvb3Rlci1jb250ZW50IC5saW5rcyBoMixcclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyciAuZm9vdGVyLWNvbnRlbnQgLmxpbmtzIHVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDc1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtNTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\rafael castillo\\\\Desktop\\\\photo\\\\components\\\\Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo01_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logo01.png */ "./components/images/logo01.png");
/* harmony import */ var _images_logo01_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_logo01_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => __jsx("div", {
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/contacto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Contacto")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/servicios",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Servicios")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\xBFQuienes Somos?")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Inicio")), __jsx("div", {
  className: "jsx-1136887787" + " " + "logo-wall",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("img", {
  src: _images_logo01_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  width: "230px",
  alt: "logo",
  className: "jsx-1136887787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1136887787",
  __self: undefined
}, ".logo-wall.jsx-1136887787{margin-left:55px;position:absolute;}a.jsx-1136887787{color:black;-webkit-text-decoration:none;text-decoration:none;padding:20px 30px;font-size:1.3em;float:right;margin-top:30px;-webkit-transition:0.5s;transition:0.5s;}a.jsx-1136887787:hover{background:#E91E63;color:white;-webkit-transition:0.5s;transition:0.5s;}@media screen and (min-width:480px) and (max-width:950px){.logo-wall.jsx-1136887787{text-align:center;position:relative;top:-200px;}}@media screen and (max-width:480px){.logo-wall.jsx-1136887787{text-align:center;position:relative;top:-200px;margin-left:0;}}@media screen and (min-width:320px) and (max-width:950px){a.jsx-1136887787{position:relative;top:80px;display:block;width:100%;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:394px){a.jsx-1136887787{position:relative;top:80px;display:block;width:335px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:360px){a.jsx-1136887787{position:relative;top:80px;display:block;width:301px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:411px){a.jsx-1136887787{position:relative;top:80px;display:block;width:353px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:320px){a.jsx-1136887787{position:relative;top:80px;display:block;width:260px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:375px){a.jsx-1136887787{position:relative;top:80px;display:block;width:318px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}@media screen and (width:414px){a.jsx-1136887787{position:relative;top:80px;display:block;width:356px;float:none;text-align:center;margin-top:0;padding:10px 20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFmYWVsIGNhc3RpbGxvXFxEZXNrdG9wXFxwaG90b1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHa0MsQUFLTCxBQVNNLEFBT0csQUFPQyxBQVFBLEFBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLFlBdEdELEtBTEgsQ0FxQkksQUFPQSxBQVFULEFBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLENBOUZGLFFBdUJPLEFBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLElBOUZGLElBZHBCLENBcUJtQixBQU9ELEtBU0MsQUFZQyxBQVlBLEFBWUEsQUFZQSxBQVlBLEFBWUEsTUF2RmhCLEFBT2tCLEtBU0osQ0FZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLEFBWUEsUUFoRmQsQ0F6QmtCLENBa0NJLENBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLE9BaEcxQixTQVRvQixDQWtDQSxDQVlBLEFBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxZQXZFTSxDQVlBLEFBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxDQTFHVixZQUNHLElBa0NmLENBWUEsQUFZQSxBQVlBLEFBWUEsQUFZQSxBQVlBLFdBekdnQix3Q0FDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxyYWZhZWwgY2FzdGlsbG9cXERlc2t0b3BcXHBob3RvXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbWcgZnJvbSBcIi4vaW1hZ2VzL2xvZ28wMS5wbmdcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0b1wiPlxyXG4gICAgICAgICAgICA8YT5Db250YWN0bzwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNpb3NcIj5cclxuICAgICAgICAgICAgPGE+U2VydmljaW9zPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgIDxhPsK/UXVpZW5lcyBTb21vcz88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkluaWNpbzwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdhbGxcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IHdpZHRoPVwiMjMwcHhcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmxvZ28td2FsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0U5MUU2MztcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgLmxvZ28td2FsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAubG9nby13YWxsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDotMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDozOTRweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDozNjBweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDFweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDo0MTFweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDozMjBweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDozNzVweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMThweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aDo0MTRweCl7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\rafael castillo\\\\Desktop\\\\photo\\\\components\\\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\components\\MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const layoutStyle = {
  border: "1px solid #DDD",
  width: "100%",
  height: "100px",
  background: "#ed008e"
};

const Layout = props => __jsx("div", {
  className: "jsx-1935121280",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  id: "main-header",
  className: "jsx-1935121280",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1935121280",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');#main-header.jsx-1935121280{width:100%;height:100px;font-family:'Open Sans',sans-serif;margin-bottom:15px;}@media screen and (min-width:380px) and (max-width:950px){#main-header.jsx-1935121280{height:271px;}}@media screen and (min-width:320px) and (max-width:480px){#main-header.jsx-1935121280{height:271px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFmYWVsIGNhc3RpbGxvXFxEZXNrdG9wXFxwaG90b1xcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY29CLEFBRTBGLEFBRTlELEFBU00sQUFLQSxXQWJKLEVBU2IsQUFLQSxXQWJvQyxtQ0FDakIsbUJBRXZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmFmYWVsIGNhc3RpbGxvXFxEZXNrdG9wXFxwaG90b1xcY29tcG9uZW50c1xcTXlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNERERcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjZWQwMDhlXCIgICAgXHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgICAgICAjbWFpbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODBweCkgYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjbWFpbi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\rafael castillo\\\\Desktop\\\\photo\\\\components\\\\MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_camere_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/camere.jpg */ "./components/images/camere.jpg");
/* harmony import */ var _images_camere_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_camere_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\components\\card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Card = props => __jsx("div", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  style: {
    border: props.estilo.border,
    boxShadow: props.estilo.box
  },
  className: "jsx-2541004344" + " " + "containerr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  "data-before-content": props.title,
  style: {
    border: props.estilo1
  },
  className: "jsx-2541004344" + " " + "imgBx",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  src: _images_camere_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2541004344" + " " + "details",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2541004344" + " " + "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.title, __jsx("br", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.subtitle)), __jsx("p", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, props.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/servicios",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-2541004344" + " " + "link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Clic aqu\xED para ver los eventos")), __jsx("h3", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, props.price), __jsx("div", {
  className: "jsx-2541004344" + " " + "btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/contacto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("button", {
  className: "jsx-2541004344",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Cont\xE1ctanos Ahora")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2541004344",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');.containerr.jsx-2541004344{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:900px;height:600px;background:#fff;margin:0px auto;margin-bottom:30px;font-family:'Poppins',sans-serif;border-radius:0px 15px 15px 0px;}.imgBx.jsx-2541004344{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50%;height:100%;box-sizing:border-box;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.imgBx.jsx-2541004344 img.jsx-2541004344{width:100%;}.containerr.jsx-2541004344 .imgBx.jsx-2541004344:before{content:attr(data-before-content);position:absolute;top:70px;left:20px;color:#000;opacity:0.2;font-size:7em;font-weight:800;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}.containerr.jsx-2541004344 .details.jsx-2541004344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50%;height:100%;box-sizing:border-box;padding:40px;}.containerr.jsx-2541004344 .details.jsx-2541004344 h2.jsx-2541004344{margin:0;padding:0;font-size:2.5em;line-height:0.8em;color:#444;}.containerr.jsx-2541004344 .details.jsx-2541004344 h2.jsx-2541004344 span.jsx-2541004344{font-size:0.4em;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;color:#999;}.link.jsx-2541004344{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.containerr.jsx-2541004344 .details.jsx-2541004344 p.jsx-2541004344{max-width:85%;margin-left:15%;color:#333;font-size:15px;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;}.containerr.jsx-2541004344 .details.jsx-2541004344 h3.jsx-2541004344{margin:0;padding:0;font-size:2em;color:#a2a2a2;text-align:center;}.containerr.jsx-2541004344 .details.jsx-2541004344 button.jsx-2541004344{background:#006dbc;color:#fff;border:none;box-shadow:none;outline:none;padding:15px 20px;margin-top:-1px;font-size:16px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-weight:600;border-radius:40px;margin-left:auto;margin-right:auto;cursor:pointer;}.btn.jsx-2541004344{text-align:center;margin-top:2px;}@media (max-width:1080px){.containerr.jsx-2541004344{height:auto;width:auto;}.containerr.jsx-2541004344 .imgBx.jsx-2541004344{width:auto;}.containerr.jsx-2541004344 .imgBx.jsx-2541004344:before{position:absolute;top:120px;}.containerr.jsx-2541004344 .imgBx.jsx-2541004344 img.jsx-2541004344{left:initial;}.details.jsx-2541004344{width:100% !important;height:auto;padding:20px;}.containerr.jsx-2541004344 .details.jsx-2541004344 p.jsx-2541004344{max-width:100%;margin-left:0;}.containerr.jsx-2541004344 .details.jsx-2541004344 h3.jsx-2541004344{font-size:1.5em;}.containerr.jsx-2541004344 .imgBx.jsx-2541004344:before{margin:0px;font-size:5em;width:100%;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFmYWVsIGNhc3RpbGxvXFxEZXNrdG9wXFxwaG90b1xcY29tcG9uZW50c1xcY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBRXdGLEFBR3JELEFBY0EsQUFZUCxBQUd1QixBQVdyQixBQVNKLEFBT08sQUFNVSxBQUlaLEFBU0wsQUFPVSxBQWdCRCxBQUtGLEFBSUQsQUFHTyxBQUlMLEFBR1MsQUFLUCxBQUlDLEFBR04sU0EvRUosQUEwQkEsRUFqRGQsQUFpRkksQUFzQmtCLENBMUJILENBV2YsQ0FoRGdCLENBd0RFLENBbEVPLEFBc0V6QixFQTlIYSxBQWNELEFBb0ZHLEFBWUQsQ0E1REUsQUEwQkYsQUFNSCxHQW1DSyxDQWJoQixFQTBCZSxHQW5CZixDQVlBLENBeERXLEFBZ0JDLEdBTkUsQUFzQmxCLENBdEVzQixBQTBGbkIsQ0FwRW1CLENBZ0ZJLEtBMUVILEFBV0osQ0FnQkMsS0FORSxBQXlDbEIsS0F6RlMsQ0FzQkUsQ0FnRlgsRUEvRHFCLEVBZ0JSLEVBdEJsQixDQWhDZSxHQXNCZCxDQTBCQSxNQS9DZSxBQXNETyxHQTlDSyxDQXVCM0IsRUFPOEIsS0FyQ2QsT0FzREksR0F0RkQsQUFjUSxFQW1CVCxTQXFDVSxFQWlCVCxHQXJEQyxZQXNERyxJQXBEeEIsR0FtQ0MsT0FiRCxXQUFDLElBekRrQyx3QkF1Q1gsa0JBekJBLFNBcUJ2QixhQXFEb0IsZ0JBQ0csbUJBQ0YsZ0JBekZOLENBMEZPLENBbkRSLFVBdENHLEFBdUNELE9BbURHLENBN0VMLElBMkJZLENBdkNOLEtBYUosSUE2RWhCLE9BekZtQixDQWFPLElBMkIzQixXQXZDd0IsRUF1Q3ZCLEtBMUJ1QixZQVplLGlDQUNGLHdCQVlMLFFBWC9CLGlHQVl5QixxR0FDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxyYWZhZWwgY2FzdGlsbG9cXERlc2t0b3BcXHBob3RvXFxjb21wb25lbnRzXFxjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltZzEgZnJvbSAnLi9pbWFnZXMvY2FtZXJlLmpwZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJyXCIgc3R5bGU9e3tib3JkZXI6IHByb3BzLmVzdGlsby5ib3JkZXIsIGJveFNoYWRvdzogcHJvcHMuZXN0aWxvLmJveH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0J4XCIgZGF0YS1iZWZvcmUtY29udGVudD17cHJvcHMudGl0bGV9IHN0eWxlPXt7Ym9yZGVyOiBwcm9wcy5lc3RpbG8xfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nMX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntwcm9wcy50aXRsZX08YnIgLz48c3Bhbj57cHJvcHMuc3VidGl0bGV9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2lvc1wiPjxwIGNsYXNzTmFtZT1cImxpbmtcIj5DbGljIGFxdcOtIHBhcmEgdmVyIGxvcyBldmVudG9zPC9wPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb3BzLnByaWNlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj48TGluayBocmVmPVwiL2NvbnRhY3RvXCI+PGJ1dHRvbj5Db250w6FjdGFub3MgQWhvcmE8L2J1dHRvbj48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5pbWdCeCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZ0J4IGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyciAuaW1nQng6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1iZWZvcmUtY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyciAuZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcnIgLmRldGFpbHMgaDIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyciAuZGV0YWlscyBoMiBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40ZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29udGFpbmVyciAuZGV0YWlscyBwIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogLW8tcHJlLXdyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcnIgLmRldGFpbHMgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhMmEyYTI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcnIgLmRldGFpbHMgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDZkYmM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXJyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyciAuaW1nQngge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcnIgLmltZ0J4OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyciAuaW1nQnggaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXJyIC5kZXRhaWxzIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXJyIC5kZXRhaWxzIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lcnIgLmltZ0J4OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDVlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gICAgXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\rafael castillo\\\\Desktop\\\\photo\\\\components\\\\card.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\components\\head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function IndexPage(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("script", {
    src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("script", {
    src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./components/images/camere.jpg":
/*!**************************************!*\
  !*** ./components/images/camere.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/camere-764b93b698583c61c4dca540bb658f36.jpg";

/***/ }),

/***/ "./components/images/logo01.png":
/*!**************************************!*\
  !*** ./components/images/logo01.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo01-0bb483aad5193a5ba8f20cdb9450b8bb.png";

/***/ }),

/***/ "./data/card.json":
/*!************************!*\
  !*** ./data/card.json ***!
  \************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"PACK 1\",\"subtitle\":\"Cobertura completa\",\"description\":\"INCLUYE:\\n- Cobertura fotográfica y video resumen de la cena.\\n- Cobertura fotográfica de acto de colación.\\n- Book día libre.\\n- Book y video de presentación de buzos.\\n\\nBONIFICACIÓN: 2 egresados no pagan si superan los 15 estudiantes.\",\"price\":\"Consultar Precio\"},{\"title\":\"PACK 2\",\"subtitle\":\"Cobertura de 3 eventos\",\"description\":\"INCLUYE:\\n- 3 eventos elegidos por los estudiantes.\\n\\nBONIFICACIÓN: 1 egresado no paga si superan los 15 estudiantes.\",\"price\":\"Consultar Precio\"},{\"title\":\"PACK 3\",\"subtitle\":\"Cobertura de 2 eventos\",\"description\":\"INCLUYE:\\n- 2 eventos elegidos por los estudiantes.\",\"price\":\"Consultar Precio\"}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _data_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/card */ "./data/card.json");
var _data_card__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/card */ "./data/card.json", 1);
var _jsxFileName = "C:\\Users\\rafael castillo\\Desktop\\photo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const style1 = {
  box: "10px 0px 1px #006dbc",
  border: "1px solid #006dbc"
};
const style2 = {
  box: "10px 0px 1px #5882FA",
  border: "1px solid #5882FA"
};
const style3 = {
  box: "10px 0px 1px #58ACFA",
  border: "1px solid #58ACFA"
};
function Index() {
  const datos = _data_card__WEBPACK_IMPORTED_MODULE_5__[0];
  const datos1 = _data_card__WEBPACK_IMPORTED_MODULE_5__[1];
  const datos2 = _data_card__WEBPACK_IMPORTED_MODULE_5__[2];
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "photo assistence",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: datos.title,
    subtitle: datos.subtitle,
    description: datos.description,
    price: datos.price,
    estilo: style1,
    estilo1: "5px solid #006dbc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: datos1.title,
    subtitle: datos1.subtitle,
    description: datos1.description,
    estilo: style2,
    estilo1: "5px solid #5882FA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: datos2.title,
    subtitle: datos2.subtitle,
    description: datos2.description,
    estilo: style3,
    estilo1: "5px solid #58ACFA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rafael castillo\Desktop\photo\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map