// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.1-esm/index.mjs";function n(n,m){var d;return s(n)||s(m)?NaN:n===m?n+i:(d=n-m)>0?n+e(t(-d)):m+e(t(d))}export{n as default};
//# sourceMappingURL=index.mjs.map
