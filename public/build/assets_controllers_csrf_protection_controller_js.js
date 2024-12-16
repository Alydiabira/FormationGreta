"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_controllers_csrf_protection_controller_js"],{

/***/ "./assets/controllers/csrf_protection_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/csrf_protection_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array-buffer.detached.js */ "./node_modules/core-js/modules/es.array-buffer.detached.js");
/* harmony import */ var core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_detached_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer.js */ "./node_modules/core-js/modules/es.array-buffer.transfer.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array-buffer.transfer-to-fixed-length.js */ "./node_modules/core-js/modules/es.array-buffer.transfer-to-fixed-length.js");
/* harmony import */ var core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_transfer_to_fixed_length_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-reversed.js */ "./node_modules/core-js/modules/es.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-sorted.js */ "./node_modules/core-js/modules/es.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.typed-array.with.js */ "./node_modules/core-js/modules/es.typed-array.with.js");
/* harmony import */ var core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_with_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.btoa.js */ "./node_modules/core-js/modules/web.btoa.js");
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "./node_modules/core-js/modules/web.dom-exception.constructor.js");
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js");
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_44__);













































var nameCheck = /^[-_a-zA-Z0-9]{4,22}$/;
var tokenCheck = /^[-_/+a-zA-Z0-9]{24,}$/;

// Generate and double-submit a CSRF token in a form field and a cookie, as defined by Symfony's SameOriginCsrfTokenManager
document.addEventListener('submit', function (event) {
  var csrfField = event.target.querySelector('input[data-controller="csrf-protection"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  var csrfToken = csrfField.value;
  if (!csrfCookie && nameCheck.test(csrfToken)) {
    csrfField.setAttribute('data-csrf-protection-cookie-value', csrfCookie = csrfToken);
    csrfField.value = csrfToken = btoa(String.fromCharCode.apply(null, (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(18))));
  }
  if (csrfCookie && tokenCheck.test(csrfToken)) {
    var cookie = csrfCookie + '_' + csrfToken + '=' + csrfCookie + '; path=/; samesite=strict';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
});

// When @hotwired/turbo handles form submissions, send the CSRF token in a header in addition to a cookie
// The `framework.csrf_protection.check_header` config option needs to be enabled for the header to be checked
document.addEventListener('turbo:submit-start', function (event) {
  var csrfField = event.detail.formSubmission.formElement.querySelector('input[data-controller="csrf-protection"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    event.detail.formSubmission.fetchRequest.headers[csrfCookie] = csrfField.value;
  }
});

// When @hotwired/turbo handles form submissions, remove the CSRF cookie once a form has been submitted
document.addEventListener('turbo:submit-end', function (event) {
  var csrfField = event.detail.formSubmission.formElement.querySelector('input[data-controller="csrf-protection"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    var cookie = csrfCookie + '_' + csrfField.value + '=0; path=/; samesite=strict; max-age=0';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
});

/* stimulusFetch: 'lazy' */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('csrf-protection-controller');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2NvbnRyb2xsZXJzX2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUcsdUJBQXVCO0FBQ3ZDLElBQUlDLFVBQVUsR0FBRyx3QkFBd0I7O0FBRXpDO0FBQ0FDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUNqRCxJQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxhQUFhLENBQUMsMENBQTBDLENBQUM7RUFFdEYsSUFBSSxDQUFDRixTQUFTLEVBQUU7SUFDWjtFQUNKO0VBRUEsSUFBSUcsVUFBVSxHQUFHSCxTQUFTLENBQUNJLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQztFQUM1RSxJQUFJQyxTQUFTLEdBQUdMLFNBQVMsQ0FBQ00sS0FBSztFQUUvQixJQUFJLENBQUNILFVBQVUsSUFBSVIsU0FBUyxDQUFDWSxJQUFJLENBQUNGLFNBQVMsQ0FBQyxFQUFFO0lBQzFDTCxTQUFTLENBQUNRLFlBQVksQ0FBQyxtQ0FBbUMsRUFBRUwsVUFBVSxHQUFHRSxTQUFTLENBQUM7SUFDbkZMLFNBQVMsQ0FBQ00sS0FBSyxHQUFHRCxTQUFTLEdBQUdJLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZLENBQUNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLElBQUlELE1BQU0sQ0FBQ0UsUUFBUSxFQUFFQyxlQUFlLENBQUMsSUFBSUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvSTtFQUVBLElBQUlkLFVBQVUsSUFBSVAsVUFBVSxDQUFDVyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxFQUFFO0lBQzFDLElBQUlhLE1BQU0sR0FBR2YsVUFBVSxHQUFHLEdBQUcsR0FBR0UsU0FBUyxHQUFHLEdBQUcsR0FBR0YsVUFBVSxHQUFHLDJCQUEyQjtJQUMxRk4sUUFBUSxDQUFDcUIsTUFBTSxHQUFHTCxNQUFNLENBQUNNLFFBQVEsQ0FBQ0MsUUFBUSxLQUFLLFFBQVEsR0FBRyxTQUFTLEdBQUdGLE1BQU0sR0FBRyxVQUFVLEdBQUdBLE1BQU07RUFDdEc7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBckIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVQyxLQUFLLEVBQUU7RUFDN0QsSUFBSUMsU0FBUyxHQUFHRCxLQUFLLENBQUNzQixNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsV0FBVyxDQUFDckIsYUFBYSxDQUFDLDBDQUEwQyxDQUFDO0VBRWpILElBQUksQ0FBQ0YsU0FBUyxFQUFFO0lBQ1o7RUFDSjtFQUVBLElBQUlHLFVBQVUsR0FBR0gsU0FBUyxDQUFDSSxZQUFZLENBQUMsbUNBQW1DLENBQUM7RUFFNUUsSUFBSVIsVUFBVSxDQUFDVyxJQUFJLENBQUNQLFNBQVMsQ0FBQ00sS0FBSyxDQUFDLElBQUlYLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDSixVQUFVLENBQUMsRUFBRTtJQUNoRUosS0FBSyxDQUFDc0IsTUFBTSxDQUFDQyxjQUFjLENBQUNFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDdEIsVUFBVSxDQUFDLEdBQUdILFNBQVMsQ0FBQ00sS0FBSztFQUNsRjtBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBVCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUMzRCxJQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxXQUFXLENBQUNyQixhQUFhLENBQUMsMENBQTBDLENBQUM7RUFFakgsSUFBSSxDQUFDRixTQUFTLEVBQUU7SUFDWjtFQUNKO0VBRUEsSUFBSUcsVUFBVSxHQUFHSCxTQUFTLENBQUNJLFlBQVksQ0FBQyxtQ0FBbUMsQ0FBQztFQUU1RSxJQUFJUixVQUFVLENBQUNXLElBQUksQ0FBQ1AsU0FBUyxDQUFDTSxLQUFLLENBQUMsSUFBSVgsU0FBUyxDQUFDWSxJQUFJLENBQUNKLFVBQVUsQ0FBQyxFQUFFO0lBQ2hFLElBQUllLE1BQU0sR0FBR2YsVUFBVSxHQUFHLEdBQUcsR0FBR0gsU0FBUyxDQUFDTSxLQUFLLEdBQUcsd0NBQXdDO0lBRTFGVCxRQUFRLENBQUNxQixNQUFNLEdBQUdMLE1BQU0sQ0FBQ00sUUFBUSxDQUFDQyxRQUFRLEtBQUssUUFBUSxHQUFHLFNBQVMsR0FBR0YsTUFBTSxHQUFHLFVBQVUsR0FBR0EsTUFBTTtFQUN0RztBQUNKLENBQUMsQ0FBQzs7QUFFRjtBQUNBLGlFQUFlLDRCQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmFtZUNoZWNrID0gL15bLV9hLXpBLVowLTldezQsMjJ9JC87XG52YXIgdG9rZW5DaGVjayA9IC9eWy1fLythLXpBLVowLTldezI0LH0kLztcblxuLy8gR2VuZXJhdGUgYW5kIGRvdWJsZS1zdWJtaXQgYSBDU1JGIHRva2VuIGluIGEgZm9ybSBmaWVsZCBhbmQgYSBjb29raWUsIGFzIGRlZmluZWQgYnkgU3ltZm9ueSdzIFNhbWVPcmlnaW5Dc3JmVG9rZW5NYW5hZ2VyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgY3NyZkZpZWxkID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXScpO1xuXG4gICAgaWYgKCFjc3JmRmllbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XG4gICAgdmFyIGNzcmZUb2tlbiA9IGNzcmZGaWVsZC52YWx1ZTtcblxuICAgIGlmICghY3NyZkNvb2tpZSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XG4gICAgICAgIGNzcmZGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScsIGNzcmZDb29raWUgPSBjc3JmVG9rZW4pO1xuICAgICAgICBjc3JmRmllbGQudmFsdWUgPSBjc3JmVG9rZW4gPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTgpKSkpO1xuICAgIH1cblxuICAgIGlmIChjc3JmQ29va2llICYmIHRva2VuQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBjc3JmQ29va2llICsgJ18nICsgY3NyZlRva2VuICsgJz0nICsgY3NyZkNvb2tpZSArICc7IHBhdGg9Lzsgc2FtZXNpdGU9c3RyaWN0JztcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICdfX0hvc3QtJyArIGNvb2tpZSArICc7IHNlY3VyZScgOiBjb29raWU7XG4gICAgfVxufSk7XG5cbi8vIFdoZW4gQGhvdHdpcmVkL3R1cmJvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucywgc2VuZCB0aGUgQ1NSRiB0b2tlbiBpbiBhIGhlYWRlciBpbiBhZGRpdGlvbiB0byBhIGNvb2tpZVxuLy8gVGhlIGBmcmFtZXdvcmsuY3NyZl9wcm90ZWN0aW9uLmNoZWNrX2hlYWRlcmAgY29uZmlnIG9wdGlvbiBuZWVkcyB0byBiZSBlbmFibGVkIGZvciB0aGUgaGVhZGVyIHRvIGJlIGNoZWNrZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOnN1Ym1pdC1zdGFydCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjc3JmRmllbGQgPSBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdJyk7XG5cbiAgICBpZiAoIWNzcmZGaWVsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNzcmZDb29raWUgPSBjc3JmRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnKTtcblxuICAgIGlmICh0b2tlbkNoZWNrLnRlc3QoY3NyZkZpZWxkLnZhbHVlKSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmQ29va2llKSkge1xuICAgICAgICBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZmV0Y2hSZXF1ZXN0LmhlYWRlcnNbY3NyZkNvb2tpZV0gPSBjc3JmRmllbGQudmFsdWU7XG4gICAgfVxufSk7XG5cbi8vIFdoZW4gQGhvdHdpcmVkL3R1cmJvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucywgcmVtb3ZlIHRoZSBDU1JGIGNvb2tpZSBvbmNlIGEgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOnN1Ym1pdC1lbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgY3NyZkZpZWxkID0gZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXScpO1xuXG4gICAgaWYgKCFjc3JmRmllbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XG5cbiAgICBpZiAodG9rZW5DaGVjay50ZXN0KGNzcmZGaWVsZC52YWx1ZSkgJiYgbmFtZUNoZWNrLnRlc3QoY3NyZkNvb2tpZSkpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IGNzcmZDb29raWUgKyAnXycgKyBjc3JmRmllbGQudmFsdWUgKyAnPTA7IHBhdGg9Lzsgc2FtZXNpdGU9c3RyaWN0OyBtYXgtYWdlPTAnO1xuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnX19Ib3N0LScgKyBjb29raWUgKyAnOyBzZWN1cmUnIDogY29va2llO1xuICAgIH1cbn0pO1xuXG4vKiBzdGltdWx1c0ZldGNoOiAnbGF6eScgKi9cbmV4cG9ydCBkZWZhdWx0ICdjc3JmLXByb3RlY3Rpb24tY29udHJvbGxlcic7XG4iXSwibmFtZXMiOlsibmFtZUNoZWNrIiwidG9rZW5DaGVjayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY3NyZkZpZWxkIiwidGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsImNzcmZDb29raWUiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmVG9rZW4iLCJ2YWx1ZSIsInRlc3QiLCJzZXRBdHRyaWJ1dGUiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJ3aW5kb3ciLCJjcnlwdG8iLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJjb29raWUiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiZGV0YWlsIiwiZm9ybVN1Ym1pc3Npb24iLCJmb3JtRWxlbWVudCIsImZldGNoUmVxdWVzdCIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9