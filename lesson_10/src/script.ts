/* class Person {
  private name: string;
  public age: number;
  readonly sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  printPerson() {
    console.log(`name: ${this.name} age: ${this.age} sex: ${this.sex}`);
  }
} */

class Person {
  constructor(private name: string, public age: number, readonly sex: string) {}

  printPerson() {
    console.log(`name: ${this.name} age: ${this.age} sex: ${this.sex}`);
  }
}

const ovi = new Person("ovi", 27, "male");
const showvike = new Person("showvike", 27, "male");

ovi.name = "yo";
ovi.age = 26;
ovi.sex = "n/a";

console.log(ovi.name);
console.log(ovi.age);
console.log(ovi.sex);
