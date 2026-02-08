<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# logaddexp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `exp(x) + exp(y)`.

<section class="intro">

Log-domain computations are commonly used to increase accuracy and avoid underflow and overflow when very small or very large numbers are represented directly as limited-precision, floating-point numbers. For example, in statistics, evaluating `logaddexp()` is useful when probabilities are so small as to exceed the normal range of floating-point numbers.

</section>



<section class="usage">

## Usage

```javascript
import logaddexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-logaddexp@v0.2.4-deno/mod.js';
```

#### logaddexp( x, y )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `exp(x) + exp(y)`.

```javascript
var v = logaddexp( 90.0, 90.0 );
// returns ~90.6931

v = logaddexp( -20.0, 90.0 );
// returns 90.0

v = logaddexp( 0.0, -100.0 );
// returns ~3.7201e-44

v = logaddexp( NaN, 1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@deno/mod.js';
import logaddexp from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-logaddexp@v0.2.4-deno/mod.js';

var x = incrspace( -100.0, 100.0, 1.0 );

var v;
var i;
var j;
for ( i = 0; i < x.length; i++ ) {
    for ( j = i; j < x.length; j++ ) {
        v = logaddexp( x[ i ], x[ j ] );
        console.log( 'x: %d, y: %d, f(x, y): %d', x[ i ], x[ j ], v );
    }
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/exp`][@stdlib/math/base/special/exp]</span><span class="delimiter">: </span><span class="description">natural exponential function.</span>
-   <span class="package-name">[`@stdlib/math-base/special/ln`][@stdlib/math/base/special/ln]</span><span class="delimiter">: </span><span class="description">evaluate the natural logarithm of a double-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-logaddexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-logaddexp

[test-image]: https://github.com/stdlib-js/math-base-special-logaddexp/actions/workflows/test.yml/badge.svg?branch=v0.2.4
[test-url]: https://github.com/stdlib-js/math-base-special-logaddexp/actions/workflows/test.yml?query=branch:v0.2.4

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-logaddexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-logaddexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-logaddexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-logaddexp/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-logaddexp/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-logaddexp/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-logaddexp/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-logaddexp/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-logaddexp/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-logaddexp/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-logaddexp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-logaddexp/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/exp]: https://github.com/stdlib-js/math-base-special-exp/tree/deno

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
