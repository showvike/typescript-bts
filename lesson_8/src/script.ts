/* let myFunc: () => void;

myFunc = () => console.log("hello");

myFunc(); */

type ID = string | number;
type USER = { name: string; age: number };

/* let getUserDetails: (id: ID, user: USER) => string;

getUserDetails = (id: ID, user: USER) =>
  `id: ${id}, name: ${user.name}, age: ${user.age}`;

console.log(getUserDetails("143", { name: "ovi", age: 27 }));

getUserDetails = (id, user) =>
  `id: ${id}, name: ${user.name}, age: ${user.age}`;

console.log(getUserDetails("143", { name: "ovi", age: 27 })); */

type GET_USER_DETAILS = (id: ID, user: USER) => string;

const getUserDetails: GET_USER_DETAILS = (id, user) =>
  `id: ${id}, name: ${user.name}, age: ${user.age}`;

console.log(getUserDetails("143", { name: "ovi", age: 27 }));
