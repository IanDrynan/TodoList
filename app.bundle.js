/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_resetTemplate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(456);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(653), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(499), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_resetTemplate_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --main-color-1: #333446;
  --main-color-2: #7f8caa;
  --main-color-3: #b8cfce;
  --main-color-4: #eaefef;
}
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: row;
  height: 100vh;
  color: var(--main-color-4);
}
button {
  cursor: pointer;
  border: none;
  background-color: var(--main-color-1);
  color: var(--main-color-4);

  &:hover {
    filter: brightness(0.9);
    transform: translate(1px, 1px);
  }
  &:active {
    filter: brightness(1.1);
    transform: translate(-1px, -1px);
  }
}
#sidebar {
  padding: 2rem;
  width: 300px;
  background-color: var(--main-color-1);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  .project {
    display: flex;

    .projectButton {
    text-align: left;

    &::before {
      content: ">";
      margin-right: 1rem;
    }
  }
  .projectDeleteButton {
        margin: 0;
        margin-left: auto;
        padding: 0;
        width: 1.5rem;
        height: 1.5rem;
      }
  }

}

#main {
  padding: 2rem;
  background-color: var(--main-color-2);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #display {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .todo {
      display: flex;
      flex-direction: column;

      &[data-status="complete"] {
        text-decoration: line-through;
        opacity: 0.5;
      }
    }
    .todoHeaderDiv {
      cursor: pointer;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      gap: 1rem;

      .todoTitle {
        margin-right: auto;
        cursor: pointer;
      }
      .todoEditButton {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
        background-color: transparent;
        width: 1.5rem;
        height: 1.5rem;
        background-size: contain;
      }
      .todoDeleteButton {
        background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
        background-color: transparent;
        width: 1.5rem;
        height: 1.5rem;
        background-size: contain;
      }
    }
    .todoDescription {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
    }
  }
  #mainBtns {
    margin-top: auto;
  }
}

#newTodoDialog {
  background-color: var(--main-color-2);
  color: var(--main-color-4);
  align-self: center;
  justify-self: center;

  form {
    display: grid;
    grid:
      "title title"
      "description description"
      "dueDate duedate"
      "project priority"
      "submit cancel";
    gap: 1rem;

    #todoFormTitle {
      grid-area: title;
    }
    #todoFormDescription {
      grid-area: description;
    }
    #todoFormDueDate {
      grid-area: dueDate;
    }
    #todoFormPriority {
      grid-area: priority;
    }
    #todoFormProject {
      grid-area: project;
    }
    #todoFormSubmit {
      grid-area: submit;
    }
    #todoFormCancel {
      grid-area: cancel;
    }
  }
}
/*
<div class="checkbox-wrapper-15">
  <input class="inp-cbx" id="cbx-15" type="checkbox" style="display: none;"/>
  <label class="cbx" for="cbx-15">
    <span>
      <svg width="12px" height="9px" viewbox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>To-do</span>
  </label>
</div>

<style>
  .checkbox-wrapper-15 .cbx {
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  .checkbox-wrapper-15 .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-15 .cbx span:first-child {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #B9B8C3;
    transition: all 0.2s ease;
  }
  .checkbox-wrapper-15 .cbx span:first-child svg {
    position: absolute;
    z-index: 1;
    top: 8px;
    left: 6px;
    fill: none;
    stroke: white;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .checkbox-wrapper-15 .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506EEC;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
    transition-delay: 0.2s;
  }
  .checkbox-wrapper-15 .cbx span:last-child {
    margin-left: 8px;
  }
  .checkbox-wrapper-15 .cbx span:last-child:after {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #B9B8C3;
    transform-origin: 0 0;
    transform: scaleX(0);
  }
  .checkbox-wrapper-15 .cbx:hover span:first-child {
    border-color: #3c53c7;
  }

  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {
    border-color: #3c53c7;
    background: #3c53c7;
    animation: check-15 0.6s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(2.2);
    opacity: 0;
    transition: all 0.6s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {
    color: #B9B8C3;
    transition: all 0.3s ease;
  }
  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {
    transform: scaleX(1);
    transition: all 0.3s ease;
  }

  @keyframes check-15 {
    50% {
      transform: scale(1.2);
    }
  }
</style>
*/
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;AACzB;AACA;EACE;wEACsE;EACtE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,YAAY;EACZ,qCAAqC;EACrC,0BAA0B;;EAE1B;IACE,uBAAuB;IACvB,8BAA8B;EAChC;EACA;IACE,uBAAuB;IACvB,gCAAgC;EAClC;AACF;AACA;EACE,aAAa;EACb,YAAY;EACZ,qCAAqC;EACrC,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,aAAa;;IAEb;IACA,gBAAgB;;IAEhB;MACE,YAAY;MACZ,kBAAkB;IACpB;EACF;EACA;QACM,SAAS;QACT,iBAAiB;QACjB,UAAU;QACV,aAAa;QACb,cAAc;MAChB;EACJ;;AAEF;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET;MACE,aAAa;MACb,sBAAsB;;MAEtB;QACE,6BAA6B;QAC7B,YAAY;MACd;IACF;IACA;MACE,eAAe;MACf,aAAa;MACb,OAAO;MACP,mBAAmB;MACnB,8BAA8B;MAC9B,SAAS;;MAET;QACE,kBAAkB;QAClB,eAAe;MACjB;MACA;QACE,yDAA4C;QAC5C,6BAA6B;QAC7B,aAAa;QACb,cAAc;QACd,wBAAwB;MAC1B;MACA;QACE,yDAA8C;QAC9C,6BAA6B;QAC7B,aAAa;QACb,cAAc;QACd,wBAAwB;MAC1B;IACF;IACA;MACE,aAAa;MACb,gBAAgB;MAChB,oCAAoC;IACtC;EACF;EACA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,qCAAqC;EACrC,0BAA0B;EAC1B,kBAAkB;EAClB,oBAAoB;;EAEpB;IACE,aAAa;IACb;;;;;qBAKiB;IACjB,SAAS;;IAET;MACE,gBAAgB;IAClB;IACA;MACE,sBAAsB;IACxB;IACA;MACE,kBAAkB;IACpB;IACA;MACE,mBAAmB;IACrB;IACA;MACE,kBAAkB;IACpB;IACA;MACE,iBAAiB;IACnB;IACA;MACE,iBAAiB;IACnB;EACF;AACF;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CA4GC","sourcesContent":["@import url(resetTemplate.css);\n\n:root {\n  --main-color-1: #333446;\n  --main-color-2: #7f8caa;\n  --main-color-3: #b8cfce;\n  --main-color-4: #eaefef;\n}\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  color: var(--main-color-4);\n}\nbutton {\n  cursor: pointer;\n  border: none;\n  background-color: var(--main-color-1);\n  color: var(--main-color-4);\n\n  &:hover {\n    filter: brightness(0.9);\n    transform: translate(1px, 1px);\n  }\n  &:active {\n    filter: brightness(1.1);\n    transform: translate(-1px, -1px);\n  }\n}\n#sidebar {\n  padding: 2rem;\n  width: 300px;\n  background-color: var(--main-color-1);\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    margin: 0;\n    padding: 0;\n  }\n\n  .project {\n    display: flex;\n\n    .projectButton {\n    text-align: left;\n\n    &::before {\n      content: \">\";\n      margin-right: 1rem;\n    }\n  }\n  .projectDeleteButton {\n        margin: 0;\n        margin-left: auto;\n        padding: 0;\n        width: 1.5rem;\n        height: 1.5rem;\n      }\n  }\n\n}\n\n#main {\n  padding: 2rem;\n  background-color: var(--main-color-2);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  #display {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n    .todo {\n      display: flex;\n      flex-direction: column;\n\n      &[data-status=\"complete\"] {\n        text-decoration: line-through;\n        opacity: 0.5;\n      }\n    }\n    .todoHeaderDiv {\n      cursor: pointer;\n      display: flex;\n      flex: 1;\n      flex-direction: row;\n      justify-content: space-between;\n      gap: 1rem;\n\n      .todoTitle {\n        margin-right: auto;\n        cursor: pointer;\n      }\n      .todoEditButton {\n        background-image: url(\"./assets/pencil.svg\");\n        background-color: transparent;\n        width: 1.5rem;\n        height: 1.5rem;\n        background-size: contain;\n      }\n      .todoDeleteButton {\n        background-image: url(\"./assets/trashbin.svg\");\n        background-color: transparent;\n        width: 1.5rem;\n        height: 1.5rem;\n        background-size: contain;\n      }\n    }\n    .todoDescription {\n      max-height: 0;\n      overflow: hidden;\n      transition: max-height 0.2s ease-out;\n    }\n  }\n  #mainBtns {\n    margin-top: auto;\n  }\n}\n\n#newTodoDialog {\n  background-color: var(--main-color-2);\n  color: var(--main-color-4);\n  align-self: center;\n  justify-self: center;\n\n  form {\n    display: grid;\n    grid:\n      \"title title\"\n      \"description description\"\n      \"dueDate duedate\"\n      \"project priority\"\n      \"submit cancel\";\n    gap: 1rem;\n\n    #todoFormTitle {\n      grid-area: title;\n    }\n    #todoFormDescription {\n      grid-area: description;\n    }\n    #todoFormDueDate {\n      grid-area: dueDate;\n    }\n    #todoFormPriority {\n      grid-area: priority;\n    }\n    #todoFormProject {\n      grid-area: project;\n    }\n    #todoFormSubmit {\n      grid-area: submit;\n    }\n    #todoFormCancel {\n      grid-area: cancel;\n    }\n  }\n}\n/*\n<div class=\"checkbox-wrapper-15\">\n  <input class=\"inp-cbx\" id=\"cbx-15\" type=\"checkbox\" style=\"display: none;\"/>\n  <label class=\"cbx\" for=\"cbx-15\">\n    <span>\n      <svg width=\"12px\" height=\"9px\" viewbox=\"0 0 12 9\">\n        <polyline points=\"1 5 4 8 11 1\"></polyline>\n      </svg>\n    </span>\n    <span>To-do</span>\n  </label>\n</div>\n\n<style>\n  .checkbox-wrapper-15 .cbx {\n    -webkit-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer;\n  }\n  .checkbox-wrapper-15 .cbx span {\n    display: inline-block;\n    vertical-align: middle;\n    transform: translate3d(0, 0, 0);\n  }\n  .checkbox-wrapper-15 .cbx span:first-child {\n    position: relative;\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n    transform: scale(1);\n    vertical-align: middle;\n    border: 1px solid #B9B8C3;\n    transition: all 0.2s ease;\n  }\n  .checkbox-wrapper-15 .cbx span:first-child svg {\n    position: absolute;\n    z-index: 1;\n    top: 8px;\n    left: 6px;\n    fill: none;\n    stroke: white;\n    stroke-width: 2;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-dasharray: 16px;\n    stroke-dashoffset: 16px;\n    transition: all 0.3s ease;\n    transition-delay: 0.1s;\n    transform: translate3d(0, 0, 0);\n  }\n  .checkbox-wrapper-15 .cbx span:first-child:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    background: #506EEC;\n    display: block;\n    transform: scale(0);\n    opacity: 1;\n    border-radius: 50%;\n    transition-delay: 0.2s;\n  }\n  .checkbox-wrapper-15 .cbx span:last-child {\n    margin-left: 8px;\n  }\n  .checkbox-wrapper-15 .cbx span:last-child:after {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background: #B9B8C3;\n    transform-origin: 0 0;\n    transform: scaleX(0);\n  }\n  .checkbox-wrapper-15 .cbx:hover span:first-child {\n    border-color: #3c53c7;\n  }\n\n  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child {\n    border-color: #3c53c7;\n    background: #3c53c7;\n    animation: check-15 0.6s ease;\n  }\n  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child svg {\n    stroke-dashoffset: 0;\n  }\n  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:first-child:before {\n    transform: scale(2.2);\n    opacity: 0;\n    transition: all 0.6s ease;\n  }\n  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child {\n    color: #B9B8C3;\n    transition: all 0.3s ease;\n  }\n  .checkbox-wrapper-15 .inp-cbx:checked + .cbx span:last-child:after {\n    transform: scaleX(1);\n    transition: all 0.3s ease;\n  }\n\n  @keyframes check-15 {\n    50% {\n      transform: scale(1.2);\n    }\n  }\n</style>\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 417:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  #root, #__next {
    isolation: isolate;
  }
  .visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px; width: 1px;
    margin: -1px; padding: 0; border: 0;
}`, "",{"version":3,"sources":["webpack://./src/resetTemplate.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;IACI,sBAAsB;EACxB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE;MACE,gCAAgC;IAClC;EACF;;EAEA;IACE,gBAAgB;IAChB,mCAAmC;EACrC;;EAEA;IACE,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW,EAAE,UAAU;IACvB,YAAY,EAAE,UAAU,EAAE,SAAS;AACvC","sourcesContent":["/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  * {\n    margin: 0;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    html {\n      interpolate-size: allow-keywords;\n    }\n  }\n\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n\n  input, button, textarea, select {\n    font: inherit;\n  }\n\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n\n  p {\n    text-wrap: pretty;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n  }\n\n  #root, #__next {\n    isolation: isolate;\n  }\n  .visually-hidden {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    height: 1px; width: 1px;\n    margin: -1px; padding: 0; border: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b985ab2c9d6d76e700cf.svg";

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0f9fd9212e301eaab84.svg";

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(208);
;// ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const src_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// ./src/Project.js
class Project {
  constructor(name, id) {
    this._id = id || crypto.randomUUID();
    this._name = name;
    this._todos = new Map();
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get todos() {
    return this._todos;
  }
  set todos(todos) {
    this._todos = todos;
  }
  addTodoToProject(todo) {
    this._todos.set(todo.id, todo);
  }
  removeTodoFromProject(todoID) {
    this._todos.delete(todoID);
  }
  getTodoById(id) {
    return this._todos.get(id);
  }
}


;// ./src/Todo.js
class Todo {
  constructor(title, description = "", priority = "p1", dueDate, status, id) {
    this._id = id || crypto.randomUUID();
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
    this._status = status || false;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority) {
    this._priority = priority;
  }
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
  toggleStatus() {
    this._status = !this._status;
  }
}



;// ./src/dataManager.js



const projectMap = new Map();
let currentProject = ""; //object of current displayed project
function getCurrentProject() {
  return currentProject;
}
function setCurrentProject(projectID) {
  currentProject = projectMap.get(projectID);
}
function getProjectMap() {
  return projectMap;
}
function changeProjectName(id, newName) {
  projectMap.get(id).name = newName;
  saveData();
}
//init data
function initData() {
  const inbox_project = new Project("inbox");
  projectMap.set(inbox_project.id, inbox_project);

  //placeholder data including default project inbox
  const test_todo = new Todo("title", "desc", "1");
  inbox_project.addTodoToProject(test_todo);
}
function getData() {
  if (localStorage.getItem("projects") === null) {
    initData();
  } else {
    const projects = JSON.parse(localStorage.getItem("projects"));
    //Need to recreate all projects and todos to restore methods
    for (let project of projects) {
      project = project[1];
      addNewProject(project._name, project._id);
      const renewTodos = project._todos;
      for (let todo of renewTodos) {
        addNewTodo(
          project._id,
          todo[1]._title,
          todo[1]._description,
          todo[1]._priority,
          todo[1]._dueDate,
          todo[1]._status,
          todo[1]._id,
        );
      }
    }
  }
  setCurrentProjectToInbox();
}
function convertProjectMap(map) {
  const convertedProjectMap = Array.from(map.entries()).map(([projectID, projectObj]) => {
    const convertedTodoMap = {...projectObj};
    convertedTodoMap._todos = Array.from(convertedTodoMap._todos.entries());
    return [projectID, convertedTodoMap];
  });
  return convertedProjectMap;
}
function saveData() {
  console.log("saving");
  const dataToStore = convertProjectMap(projectMap);
  localStorage.setItem(
    "projects",
    JSON.stringify(dataToStore)
  );
}
function addNewProject(name, id) {
  const newProject = new Project(name, id);
  projectMap.set(newProject.id, newProject);
  saveData();
}
function addNewTodo(projectID, title, desc, pri, date, status, todoID) {
  const newTodo = new Todo(title, desc, pri, date, status, todoID);
  projectMap.get(projectID).addTodoToProject(newTodo);
  saveData();
}
function deleteTodo(projectID, todoID) {
  projectMap.get(projectID).removeTodoFromProject(todoID);
  saveData();
}
function toggleTodoStatus(projectID, todoID) {
  projectMap.get(projectID).getTodoById(todoID).toggleStatus();
  saveData();
}
function deleteProject(projectID) {
  projectMap.delete(projectID);
  saveData();
}
function setCurrentProjectToInbox() {
  currentProject = projectMap.values().next().value;
}
function getInboxID() {
  return projectMap.values().next().value.id;
}
function getTodoByID(projectID, todoID) {
  return projectMap.get(projectID).getTodoById(todoID);
}
;// ./src/display.js


function updateDisplay() {
  const project = getCurrentProject();
  const projectName = document.querySelector("#projectHeader");
  if (project.id === getInboxID()) {
    projectName.removeAttribute("contenteditable");
  } else {
    projectName.setAttribute("contenteditable", "plaintext-only");
  }
  projectName.textContent = project.name;

  const display = document.querySelector("#display");
  display.innerHTML = "";

  project.todos.forEach((todo) => {
    //Parent Todo div for each todo w/ todo id
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.setAttribute("data-todo-id", todo.id);
    todoDiv.setAttribute("data-project-id", project.id);
    if (todo.status) {
      todoDiv.setAttribute("data-status", "complete");
    }
    //Parent div for todo header for toggle, title, edit, delete
    const todoHeaderDiv = document.createElement("div");
    todoHeaderDiv.className = "todoHeaderDiv";
    todoHeaderDiv.setAttribute("data-action", "expand");

    const todoToggle = document.createElement("input");
    todoToggle.classList.add("todoToggle");
    todoToggle.type = "checkbox";
    todoToggle.checked = todo.status;

    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todo.title;

    const todoEditButton = document.createElement("button");
    todoEditButton.classList.add("todoEditButton");
    todoEditButton.setAttribute("data-action", "edit-todo");

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.classList.add("todoDeleteButton");
    todoDeleteButton.setAttribute("data-action", "delete-todo");

    //Description
    const newTodoDescription = document.createElement("p");
    newTodoDescription.className = "todoDescription";
    newTodoDescription.textContent = todo.description;

    //Due Date
    const todoDueDate = document.createElement("p");
    const tempDate = new Date(todo.dueDate).toDateString();
    todoDueDate.textContent = tempDate !== "Invalid Date" ? tempDate : "";

    //Append elements to display
    display.append(todoDiv);
    todoDiv.append(todoHeaderDiv);
    todoHeaderDiv.append(todoToggle);
    todoHeaderDiv.append(todoTitle);
    todoHeaderDiv.append(todoEditButton);
    todoHeaderDiv.append(todoDeleteButton);
    todoDiv.append(newTodoDescription);
    todoDiv.append(todoDueDate);
  });
}
function updateSidebar() {
  const projectMap = getProjectMap();
  const projectsList = document.querySelector("#sidebar ul");
  projectsList.innerHTML = "";
  projectMap.values().forEach((project) => {
    //Parent project div for each project w/ project id
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.setAttribute("data-project-id", project.id);
    if (project.id === getCurrentProject().id) {
      projectDiv.classList.add("selected");
    }

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("projectButton");
    projectBtn.textContent = project.name;
    projectBtn.setAttribute("data-action", "select-project");

    let projectDeleteButton;
    if (project.id !== getInboxID()) {
      //Delete Button + svg icon
      projectDeleteButton = document.createElement("button");
      projectDeleteButton.classList.add("projectDeleteButton");
      projectDeleteButton.setAttribute("data-action", "delete-project");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("height", "24");
      svg.setAttribute("width", "24");
      svg.setAttribute("viewBox", "0 -960 960 960");
      svg.setAttribute("fill", "currentColor");
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
      );
      svg.appendChild(path);
      projectDeleteButton.appendChild(svg);
    }
    projectsList.appendChild(projectDiv);
    projectDiv.appendChild(projectBtn);
    if (project.id !== getInboxID()) {
      projectDiv.appendChild(projectDeleteButton);
    }
  });
}


;// ./src/index.js




//New Todo button
function setupNewTodoDialog() {
  const dialog = document.getElementById("newTodoDialog");
  const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
  const newTodoDescription = newTodoDialog.querySelector("#description");
  const newTodoPriority = newTodoDialog.querySelector("#priority");
  const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
  const newTodoProject = newTodoDialog.querySelector("#selectProject");

  const newTodo = document.getElementById("newTodoBtn");
  newTodo.addEventListener("click", () => {
    populateProjectSelector();
    newTodoTitle.value = "";
    newTodoDescription.value = "";
    newTodoPriority.value = "";
    newTodoDueDate.value = "";
    newTodoProject.value = getCurrentProject().id;
    newTodoTitle.dataset.todoId = "";
    dialog.showModal();
  });
}
function populateProjectSelector() {
  const options = document.getElementById("selectProject");
  options.innerHTML = "";
  const projectMap = getProjectMap();
  for (const project of projectMap.keys()) {
    const option = document.createElement("option");
    option.value = project;
    option.textContent = projectMap.get(project).name;
    options.appendChild(option);
  }
}
//New Project button
function setupNewProjectDialog() {
  const newProjectBtn = document.getElementById("newProjectBtn");
  newProjectBtn.addEventListener("click", () => {
    const projectName = prompt("Enter project name");
    addNewProject(projectName);
    updateSidebar();
  });
}
//New Todo creation
function setupCreateTodoEvent() {
  const newTodoDialog = document.getElementById("newTodoDialog");
  const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
  const newTodoDescription = newTodoDialog.querySelector("#description");
  const newTodoPriority = newTodoDialog.querySelector("#priority");
  const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
  const newTodoProject = newTodoDialog.querySelector("#selectProject");
  const confirmNewTodo = newTodoDialog.querySelector("#todoFormSubmit");

  confirmNewTodo.addEventListener("click", (event) => {
    event.preventDefault();
    const requiredFields = newTodoDialog.querySelectorAll("[required]");
    let valid = true;
    requiredFields.forEach((field) => {
      if (!field.value) {
        valid = false;
      }
    });
    if (valid) {
      addNewTodo(
        newTodoProject.value,
        newTodoTitle.value,
        newTodoDescription.value,
        newTodoPriority.value,
        newTodoDueDate.value,
        false,
        newTodoTitle.dataset.todoId
      );
      //update ui
      updateDisplay();
      newTodoDialog.close();
    } else {
      alert("Please fill in all fields");
    }
  });
}
//Cancel new todo
function setupCancelTodoEvent() {
  const cancel = newTodoDialog.querySelector("#todoFormCancel");
  cancel.addEventListener("click", (event) => {
    event.preventDefault();
    newTodoDialog.close();
  });
}
function setupClickEventsForSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      const action = actionElement.dataset.action;
      const projectID = actionElement
        .closest("[data-project-id]")
        .getAttribute("data-project-id");
      switch (action) {
        case "select-project":
          setCurrentProject(projectID);
          updateDisplay();
          break;
        case "delete-project":
          if (
            confirm(
              "Are you sure you want to delete this project and all of its todos?"
            )
          ) {
            deleteProject(projectID);
            setCurrentProjectToInbox();
            updateSidebar();
            updateDisplay();
          }
          break;
      }
    }
  });
}
function setupClickEventsForDisplay() {
  const display = document.querySelector("#display");
  display.addEventListener("click", (event) => {
    if (event.target.closest(".todoToggle")) {
      return;
    }
    const actionElement = event.target.closest("[data-action]");

    if (actionElement) {
      const todoID = actionElement
        .closest("[data-todo-id]")
        .getAttribute("data-todo-id");
      const projectID =
        actionElement.closest("[data-project-id]").dataset.projectId;
      const action = actionElement.dataset.action;
      if (todoID) {
        switch (action) {
          case "expand":
            const content = actionElement.nextElementSibling;
            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
            break;
          case "edit-todo":
            populateProjectSelector();
            const todo = getTodoByID(projectID, todoID);
            const newTodoDialog = document.getElementById("newTodoDialog");
            const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
            newTodoTitle.dataset.todoId = todoID;
            const newTodoDescription =
              newTodoDialog.querySelector("#description");
            const newTodoPriority = newTodoDialog.querySelector("#priority");
            const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
            const newTodoProject =
              newTodoDialog.querySelector("#selectProject");

            if (todo) {
              newTodoTitle.value = todo.title;
              newTodoDescription.value = todo.description;
              newTodoPriority.value = todo.priority;
              newTodoDueDate.value = todo.dueDate;
              newTodoProject.value = projectID;
            }
            newTodoDialog.showModal();
            break;
          case "delete-todo":
            if (confirm("Are you sure you want to delete this todo?")) {
              deleteTodo(
                getCurrentProject().id,
                todoID
              );
              updateDisplay();
            }

            break;
        }
      }
    }
  });
}
function setupBlurEventsForDisplay() {
  const projectHeader = document.querySelector("#projectHeader");
  projectHeader.addEventListener("blur", (event) => {
    const newName = event.target.textContent.trim();
    changeProjectName(getCurrentProject().id, newName);
    updateSidebar();
  });
  projectHeader.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  });
}
function setupChangeEventsForDisplay() {
  const display = document.querySelector("#display");
  display.addEventListener("change", (event) => {
    const toggle = event.target.closest(".todoToggle");
    if (toggle) {
      const todo = toggle.closest(".todo");
      if (!todo) {
        return;
      }
      const todoId = todo.dataset.todoId;
      const project = getCurrentProject();
      toggleTodoStatus(project.id, todoId);

      const complete = toggle.checked;

      if (complete) {
        todo.setAttribute("data-status", "complete");
      } else {
        todo.setAttribute("data-status", "incomplete");
      }
    }
  });
}
//main
function initApp() {
  getData();
  updateDisplay();
  updateSidebar();
  setupNewProjectDialog();
  setupNewTodoDialog();
  setupCreateTodoEvent();
  setupCancelTodoEvent();
  setupClickEventsForSidebar();
  setupClickEventsForDisplay();
  setupBlurEventsForDisplay();
  setupChangeEventsForDisplay();
}
document.addEventListener("DOMContentLoaded", initApp());


/******/ })()
;
//# sourceMappingURL=app.bundle.js.map