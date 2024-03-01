"use strict";
/* let myFunc: Function;

myFunc = () => {};
myFunc = 24; */
/* const myFunc = (a: string, b: string) => {
  console.log(`hello ${a}, ${b}`);
};

myFunc("a", "b");
myFunc(1, 2); */
/* const myFunc = (a: string, b: string, c: string) => {
  console.log(c);
  console.log(`hello ${a}, ${b}`);
};

myFunc("a", "b"); */
/* const myFunc = (a: string, b: string, c?: string) => {
  console.log(c);
  console.log(`hello ${a}, ${b}`);
};

myFunc("a", "b"); */
/* const myFunc = (a: string, b: string, c: string = "true") => {
  console.log(c);
  console.log(`hello ${a}, ${b}`);
};

myFunc("a", "b");
myFunc("a", "b", "false"); */
/* const myFunc = (a: string, b: string, c: string = "true"): string => {
  return a + b;
};

myFunc("a", "b"); */
const myFunc = (a, b, c = "true") => {
    return a + b;
};
myFunc("a", "b");
