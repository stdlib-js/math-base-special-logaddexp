// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).logaddexp=r()}(this,(function(){"use strict";var n=function(n){return n!=n},r=Math.floor,t=Math.ceil,e=r,o=t;var u=function(n){return n<0?o(n):e(n)},i=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,a=f,c=i;var y=function(n){return n===a||n===c};var v=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var l=function(){return v&&"symbol"==typeof Symbol.toStringTag},p=Object.prototype.toString,A=p;var b=function(n){return A.call(n)},w=Object.prototype.hasOwnProperty;var d=function(n,r){return null!=n&&w.call(n,r)},U="function"==typeof Symbol?Symbol.toStringTag:"",m=d,h=U,s=p;var I=b,N=function(n){var r,t,e;if(null==n)return s.call(n);t=n[h],r=m(n,h);try{n[h]=void 0}catch(r){return s.call(n)}return e=s.call(n),r?n[h]=t:delete n[h],e},g=l()?N:I,F=g,S="function"==typeof Uint32Array;var H="function"==typeof Uint32Array?Uint32Array:null,O=function(n){return S&&n instanceof Uint32Array||"[object Uint32Array]"===F(n)},T=H;var j=function(){var n,r;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,4294967296,4294967297]),n=O(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var E="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},L=j()?E:G,W=g,x="function"==typeof Float64Array;var M="function"==typeof Float64Array?Float64Array:null,P=function(n){return x&&n instanceof Float64Array||"[object Float64Array]"===W(n)},V=M;var Y=function(){var n,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,NaN]),n=P(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var _="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=Y()?_:k,z=g,B="function"==typeof Uint8Array;var C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C;var K=function(){var n,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,256,257]),n=D(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=g,$="function"==typeof Uint16Array;var nn="function"==typeof Uint16Array?Uint16Array:null,rn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},tn=nn;var en=function(){var n,r;if("function"!=typeof tn)return!1;try{r=new tn(r=[1,3.14,-3.14,65536,65537]),n=rn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var on,un="function"==typeof Uint16Array?Uint16Array:void 0,fn=function(){throw new Error("not implemented")},an={uint16:en()?un:fn,uint8:X};(on=new an.uint16(1))[0]=4660;var cn,yn,vn=52===new an.uint8(on.buffer)[0];!0===vn?(cn=1,yn=0):(cn=0,yn=1);var ln=L,pn={HIGH:cn,LOW:yn},An=new q(1),bn=new ln(An.buffer),wn=pn.HIGH,dn=pn.LOW;var Un=function(n,r){return An[0]=r,n[0]=bn[wn],n[1]=bn[dn],n};var mn=function(n,r){return 1===arguments.length?Un([0,0],n):Un(n,r)},hn=mn,sn=L,In=!0===vn?1:0,Nn=new q(1),gn=new sn(Nn.buffer);var Fn,Sn,Hn=function(n){return Nn[0]=n,gn[In]};!0===vn?(Fn=1,Sn=0):(Fn=0,Sn=1);var On=L,Tn={HIGH:Fn,LOW:Sn},jn=new q(1),En=new On(jn.buffer),Gn=Tn.HIGH,Ln=Tn.LOW;var Wn=function(n,r){return En[Gn]=n,En[Ln]=r,jn[0]},xn=hn,Mn=Hn,Pn=Wn,Vn=[0,0];var Yn=y,_n=n,kn=function(n){return Math.abs(n)};var qn=function(n,r){return _n(r)||Yn(r)?(n[0]=r,n[1]=0,n):0!==r&&kn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)};var zn=function(n,r){return 1===arguments.length?qn([0,0],n):qn(n,r)},Bn=Hn;var Cn=function(n){var r=Bn(n);return(r=(2146435072&r)>>>20)-1023|0},Dn=f,Jn=i,Kn=n,Qn=y,Rn=function(n,r){var t,e;return xn(Vn,n),t=Vn[0],t&=2147483647,e=Mn(r),Pn(t|=e&=2147483648,Vn[1])},Xn=zn,Zn=Cn,$n=hn,nr=Wn,rr=[0,0],tr=[0,0];var er=function(n,r){var t,e;return 0===r||0===n||Kn(n)||Qn(n)?n:(Xn(rr,n),r+=rr[1],(r+=Zn(n=rr[0]))<-1074?Rn(0,n):r>1023?n<0?Jn:Dn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,$n(tr,n),t=tr[0],t&=2148532223,e*nr(t|=r+1023<<20,tr[1])))};var or=er,ur=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)};var ir=n,fr=u,ar=i,cr=f,yr=function(n,r,t){var e,o,u;return u=(e=n-r)-(o=e*e)*ur(o),or(1-(r-e*u/(2-u)-n),t)},vr=1.4426950408889634,lr=1/(1<<28);var pr=function(n){var r;return ir(n)||n===cr?n:n===ar?0:n>709.782712893384?cr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<lr?1+n:(r=fr(n<0?vr*n-.5:vr*n+.5),yr(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Ar=L,br=!0===vn?1:0,wr=new q(1),dr=new Ar(wr.buffer);var Ur=function(n,r){return wr[0]=n,dr[br]=r>>>0,wr[0]};var mr=n,hr=Hn,sr=Ur,Ir=f,Nr=i,gr=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},Fr=.6931471803691238,Sr=1.9082149292705877e-10;var Hr=n,Or=pr,Tr=function(n){var r,t,e,o,u,i,f,a,c,y;if(n<-1||mr(n))return NaN;if(-1===n)return Nr;if(n===Ir)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,t=1)}return 0!==y&&(e<9007199254740992?(u=(y=((t=hr(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),u/=c):(y=((t=hr(c=n))>>20)-1023,u=0),(t&=1048575)<434334?c=sr(c,1072693248|t):(y+=1,c=sr(c,1071644672|t),t=1048576-t>>2),o=c-1),r=.5*o*o,0===t?0===o?y*Fr+(u+=y*Sr):y*Fr-((a=r*(1-.6666666666666666*o))-(y*Sr+u)-o):(a=(f=(i=o/(2+o))*i)*gr(f),0===y?o-(r-i*(r+a)):y*Fr-(r-(i*(r+a)+(y*Sr+u))-o))};return function(n,r){var t;return Hr(n)||Hr(r)?NaN:n===r?n+.6931471805599453:(t=n-r)>0?n+Tr(Or(-t)):r+Tr(Or(t))}}));
//# sourceMappingURL=bundle.js.map
