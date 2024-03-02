class Person {
  name: string;
  age: number;
  sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  printPerson() {
    console.log(`name: ${this.name} age: ${this.age} sex: ${this.sex}`);
  }
}

const ovi = new Person("ovi", 27, "male");
const showvike = new Person("showvike", 27, "male");

ovi.printPerson();
showvike.printPerson();

const persons: Person[] = [];

persons.push(ovi, showvike);
