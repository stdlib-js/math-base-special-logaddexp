// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t=Math.floor,r=Math.ceil;function e(n){return n<0?r(n):t(n)}var o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=1023;function u(n){return n===i||n===o}var a,c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),y=Object.prototype.toString,l=Object.prototype.hasOwnProperty,p="function"==typeof Symbol?Symbol.toStringTag:"",v=c&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,e,o,i;if(null==n)return y.call(n);r=n[p],i=p,t=null!=(o=n)&&l.call(o,i);try{n[p]=void 0}catch(t){return y.call(n)}return e=y.call(n),t?n[p]=r:delete n[p],e}:function(n){return y.call(n)},A="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,w="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(A&&r instanceof Uint32Array||"[object Uint32Array]"===v(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var d,U=a,m="function"==typeof Float64Array,h="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0;d=function(){var n,t,r;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),r=t,n=(m&&r instanceof Float64Array||"[object Float64Array]"===v(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var I,N=d,g="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,S="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,256,257]),r=t,n=(g&&r instanceof Uint8Array||"[object Uint8Array]"===v(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var H,O=I,T="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,E="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var n,t,r;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,65536,65537]),r=t,n=(T&&r instanceof Uint16Array||"[object Uint16Array]"===v(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?E:function(){throw new Error("not implemented")};var G,L={uint16:H,uint8:O};(G=new L.uint16(1))[0]=4660;var W,x,M=52===new L.uint8(G.buffer)[0];!0===M?(W=1,x=0):(W=0,x=1);var P={HIGH:W,LOW:x},V=new N(1),Y=new U(V.buffer),_=P.HIGH,k=P.LOW;function q(n,t){return V[0]=t,n[0]=Y[_],n[1]=Y[k],n}function z(n,t){return 1===arguments.length?q([0,0],n):q(n,t)}var B,C,D=!0===M?1:0,J=new N(1),K=new U(J.buffer);function Q(n){return J[0]=n,K[D]}!0===M?(B=1,C=0):(B=0,C=1);var R={HIGH:B,LOW:C},X=new N(1),Z=new U(X.buffer),$=R.HIGH,nn=R.LOW;function tn(n,t){return Z[$]=n,Z[nn]=t,X[0]}var rn=[0,0];function en(t,r){return n(r)||u(r)?(t[0]=r,t[1]=0,t):0!==r&&function(n){return Math.abs(n)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var on=[0,0],fn=[0,0];function un(t,r){var e,a,c,y,l;return 0===r||0===t||n(t)||u(t)?t:(function(n,t){1===arguments.length?en([0,0],n):en(n,t)}(on,t),r+=on[1],r+=function(n){var t=Q(n);return(t=(2146435072&t)>>>20)-f|0}(t=on[0]),r<-1074?(c=t,z(rn,0),y=rn[0],y&=2147483647,l=Q(c),tn(y|=l&=2147483648,rn[1])):r>1023?t<0?o:i:(r<=-1023?(r+=52,a=2220446049250313e-31):a=1,z(fn,t),e=fn[0],e&=2148532223,a*tn(e|=r+f<<20,fn[1])))}var an=1.4426950408889634,cn=1/(1<<28);function yn(t){var r;return n(t)||t===i?t:t===o?0:t>709.782712893384?i:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<cn?1+t:function(n,t,r){var e,o,i,f;return un(1-(t-(e=n-t)*(i=e-(o=e*e)*(0===(f=o)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),r)}(t-.6931471803691238*(r=e(t<0?an*t-.5:an*t+.5)),1.9082149292705877e-10*r,r)}var ln=!0===M?1:0,pn=new N(1),vn=new U(pn.buffer);function An(n,t){return pn[0]=n,vn[ln]=t>>>0,pn[0]}var bn=.6931471803691238,wn=1.9082149292705877e-10;function dn(t){var r,e,u,a,c,y,l,p,v,A;if(t<-1||n(t))return NaN;if(-1===t)return o;if(t===i)return t;if(0===t)return t;if(A=1,(u=t<0?-t:t)<.41421356237309503){if(u<1.862645149230957e-9)return u<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(A=0,a=t,e=1)}return 0!==A&&(u<9007199254740992?(c=(A=((e=Q(v=1+t))>>20)-f)>0?1-(v-t):t-(v-1),c/=v):(A=((e=Q(v=t))>>20)-f,c=0),(e&=1048575)<434334?v=An(v,1072693248|e):(A+=1,v=An(v,1071644672|e),e=1048576-e>>2),a=v-1),r=.5*a*a,0===e?0===a?A*bn+(c+=A*wn):A*bn-((p=r*(1-.6666666666666666*a))-(A*wn+c)-a):(p=(l=(y=a/(2+a))*y)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(l),0===A?a-(r-y*(r+p)):A*bn-(r-(y*(r+p)+(A*wn+c))-a))}return function(t,r){var e;return n(t)||n(r)?NaN:t===r?t+.6931471805599453:(e=t-r)>0?t+dn(yn(-e)):r+dn(yn(e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).logaddexp=t();
//# sourceMappingURL=index.js.map
