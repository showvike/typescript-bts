"use strict";
/* let myFunc: () => void;

myFunc = () => console.log("hello");

myFunc(); */
const getUserDetails = (id, user) => `id: ${id}, name: ${user.name}, age: ${user.age}`;
console.log(getUserDetails("143", { name: "ovi", age: 27 }));
