import { toCode } from "./index";

describe("toCode()", () => {
  test("generator function yielding numbers", async () => {
    function* Example() {
      yield 1;
      yield 2;
      yield 3;
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield 1;
\tyield 2;
\tyield 3;
}`);
  });
  
  test("generator function yielding strings", async () => {
    function* Example() {
      yield "first";
      yield "second";
      yield "third";
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield "first";
\tyield "second";
\tyield "third";
}`);
  });
  
  test("generator function yielding string objects", async () => {
    function* Example() {
      yield new String("first");
      yield new String("second");
      yield new String("third");
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield new String("first");
\tyield new String("second");
\tyield new String("third");
}`);
  });
  
  test("generator function yielding null", async () => {
    function* Example() {
      yield null;
      yield null;
      yield null;
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield null;
\tyield null;
\tyield null;
}`);
  });
  
  test("generator function yielding undefined", async () => {
    function* Example() {
      yield undefined;
      yield undefined;
      yield undefined;
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield undefined;
\tyield undefined;
\tyield undefined;
}`);
  });
  
  test("generator function yielding arrays of numbers and strings", async () => {
    function* Example() {
      yield ["first", 1];
      yield [2, "second"];
      yield [3, "third", 3];
    }
    
    await expect(toCode(Example)).toEqual(
`function* Example() {
\tyield ["first",1];
\tyield [2,"second"];
\tyield [3,"third",3];
}`);
  });
  
  test("generator function yielding other generator function", async () => {
    function* Outer() {
      yield Inner;
    }
    
    function* Inner() {
      yield ["first", 1];
      yield [2, "second"];
      yield [3, "third", 3];
    }
    
    await expect(toCode(Outer)).toEqual(
`function* Outer() {
\tyield Inner;
}

function* Inner() {
\tyield ["first",1];
\tyield [2,"second"];
\tyield [3,"third",3];
}`);
  });
  
  test("generator function yielding other generator function yielding other generator function", async () => {
    function* Outer() {
      yield Middle;
    }
    
    function* Middle() {
      yield Inner;
    }
    
    function* Inner() {
      yield ["first", 1];
      yield [2, "second"];
      yield [3, "third", 3];
    }
    
    await expect(toCode(Outer)).toEqual(
`function* Outer() {
\tyield Middle;
}

function* Middle() {
\tyield Inner;
}

function* Inner() {
\tyield ["first",1];
\tyield [2,"second"];
\tyield [3,"third",3];
}`);
  });
});
