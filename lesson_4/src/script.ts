/*
let num: number;

num = 1;
num = "a";

let str: string;

str = "a";
str = 1;

let arrNum: number[] = [];

arrNum.push(1, 2, 3);
arrNum.push("a");

let arrStr: string[] = [];

arrStr.push("a", "b", "c");
arrStr.push(1);

let obj: {
  name: string;
  age: number;
  isAdult: boolean;
};

obj = {
  name: "ovi",
};

obj = {
  name: "ovi",
  age: 27,
  isAdult: "true",
};

obj = {
  name: "ovi",
  age: 27,
  isAdult: true,
};

obj = {
  name: "ovi",
  age: 27,
  isAdult: true,
  others: "something",
};

let objArr: object;
// let objArr: {};

objArr = [];
*/

let num: number | string;

num = 1;
num = "a";
num = true;

let arrNum: (string | number)[] = [];

arrNum.push(1, 2, 3);
arrNum.push("a");
arrNum.push(true);
