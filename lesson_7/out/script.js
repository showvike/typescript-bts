"use strict";
const getUserDetails = (id, user) => {
    console.log(`id: ${id}, name: ${user.name}, age: ${user.age}`);
};
const setUserDetails = (user) => {
    console.log(`name: ${user.name}, age: ${user.age}`);
};
getUserDetails(143, { name: "showvike", age: 27 });
setUserDetails({ name: "showvike", age: 27 });
const getUserDetailsWithType = (id, user) => {
    console.log(`id: ${id}, name: ${user.name}, age: ${user.age}`);
};
const setUserDetailsWithType = (user) => {
    console.log(`name: ${user.name}, age: ${user.age}`);
};
getUserDetailsWithType(143, { name: "showvike", age: 27 });
setUserDetailsWithType({ name: "showvike", age: 27 });
