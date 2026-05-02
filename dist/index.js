"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(c,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-exp/dist'),a=require('@stdlib/math-base-special-log1p/dist'),o=require('@stdlib/constants-float64-ln-two/dist');function p(e,r){var i;return u(e)||u(r)?NaN:e===r?e+o:(i=e-r,i>0?e+a(t(-i)):r+a(t(i)))}n.exports=p
});var q=s();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
