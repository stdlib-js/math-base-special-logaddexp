// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@esm/index.mjs";var n=s,m=t,r=e,a=i;var d=function(s,t){var e;return n(s)||n(t)?NaN:s===t?s+a:(e=s-t)>0?s+r(m(-e)):t+r(m(e))};export{d as default};
//# sourceMappingURL=index.mjs.map
