var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}


// Outputs:
// 1: Undefined 
// 2: ReferenceError 
// 3: null
// 4: {model: "Honda", color: "white", year: "2010", country: "UK"}  // TRUE

// Explanation:
// In JavaScript, when you create an object using a constructor function (like Vehicle in this case), the 'new' keyword is used to create a new instance of that object. The 'new' keyword does the following:
// 1. It creates a new empty object.
// 2. It sets the prototype of this new object to the prototype property of the constructor function.
// 3. It binds 'this' to the new object within the constructor function.
// 4. It executes the constructor function, initializing properties on 'this'.
// 5. It returns the new object unless the constructor function explicitly returns a different object.

