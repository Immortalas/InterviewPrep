// ===================================================
// 1. Object Literal (most common)
// ===================================================
const obj1 = { name: "Alice", age: 25 };
console.log("Object literal:", obj1);

// ===================================================
// 2. Using new Object()
// ===================================================
const obj2 = new Object();
obj2.city = "Delhi";
obj2.country = "India";
console.log("new Object():", obj2);

// ===================================================
// 3. Using Constructor Function
// ===================================================
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Bob", 30);
console.log("Constructor function:", p1);

// ===================================================
// 4. Using Object.create()
// ===================================================
const proto = {
  greet: function () {
    console.log("Hello, " + this.role);
  }
};
const obj3 = Object.create(proto);
obj3.role = "Admin";
console.log("Object.create:", obj3);
obj3.greet();

// ===================================================
// 5. Using Class (ES6)
// ===================================================
class Animal {
  constructor(type) {
    this.type = type;
  }
}
const dog = new Animal("Dog");
console.log("Class:", dog);

// ===================================================
// 6. Using Factory Function
// ===================================================
function createCar(brand, model) {
  return {
    brand,
    model,
    info() {
      return `${brand} ${model}`;
    }
  };
}
const car = createCar("Tesla", "Model 3");
console.log("Factory function:", car.info());

// ===================================================
// 7. Singleton Pattern
// ===================================================
const singleton = new (function () {
  this.name = "SingletonObject";
})();
console.log("Singleton:", singleton);