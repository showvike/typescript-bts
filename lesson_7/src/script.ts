const getUserDetails = (
  id: string | number,
  user: { name: string; age: number }
) => {
  console.log(`id: ${id}, name: ${user.name}, age: ${user.age}`);
};

const setUserDetails = (user: { name: string; age: number }) => {
  console.log(`name: ${user.name}, age: ${user.age}`);
};

getUserDetails(143, { name: "showvike", age: 27 });
setUserDetails({ name: "showvike", age: 27 });

type ID = string | number;
type USER = { name: string; age: number };

const getUserDetailsWithType = (id: ID, user: USER) => {
  console.log(`id: ${id}, name: ${user.name}, age: ${user.age}`);
};

const setUserDetailsWithType = (user: USER) => {
  console.log(`name: ${user.name}, age: ${user.age}`);
};

getUserDetailsWithType(143, { name: "showvike", age: 27 });
setUserDetailsWithType({ name: "showvike", age: 27 });
