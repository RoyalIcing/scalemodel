<div align="center">
  <h1>🧍🏼‍♂️🚂🧍🏾‍♀️ Scale Model</h1>
  <p>Replicate a generator function’s code</p>
  <a href="https://bundlephobia.com/result?p=scalemodel">
    <img src="https://badgen.net/bundlephobia/minzip/scalemodel@0.1.0" alt="minified and gzipped size">
    <img src="https://badgen.net/bundlephobia/min/scalemodel@0.1.0" alt="minified size">
    <img src="https://badgen.net/bundlephobia/dependency-count/scalemodel@0.1.0" alt="zero dependencies">
  </a>
</div>

## Install

```console
npm add scalemodel
```

## Examples

```javascript
import { toCode } from "scalemodel";

function* Outer() {
  yield Inner;
}

function* Inner() {
  yield ["first", 1];
  yield [2, "second"];
  yield [3, "third", 3];
}

const jsCode = toCode(Outer);

/*
"function* Outer() {
\tyield Inner;
}

function* Inner() {
\tyield ["first",1];
\tyield [2,"second"];
\tyield [3,"third",3];
}"
*/
```

## TODO

- Regular expressions?
- Sets?
- Maps?
- Symbols?
- Minify?
