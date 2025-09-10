# JavaScript Object Creation 

This document explains different ways to create objects in JavaScript.

## 1. Object Literal (Most Common)
- Easiest and most widely used method.
- Used when you want to create a simple object with predefined properties.
Example: 
```js
const obj = { name: "Alice", age: 25 };
```

---

## 2. Using new Object()
- Creates an empty object and then you can add properties.
- Less common in modern code, mostly replaced by literals.
Example: 
```js
const obj = new Object();
```

---

## 3. Constructor Function
- A regular function that initializes objects using "this".
- Use "new" keyword to create an instance.
- Useful for multiple similar objects before ES6 classes existed.
Example:

---

## 4. Object.create()
- Creates a new object with a specified prototype.
- Allows prototypal inheritance without using classes.
- Very powerful when you want fine-grained control of prototypes.

---

## 5. Class (ES6+)
- Modern way of creating objects and handling inheritance.
- Syntactic sugar over constructor functions and prototypes.
- Widely used in modern applications.

---

## 6. Factory Function
- A normal function that returns a new object each time it’s called.
- Does not use "new" keyword.
- Provides flexibility and avoids issues with "this".
---

## 7. Singleton Pattern
- Creates a single instance of an object.
- Useful when only one object of its kind should exist (like configuration, cache, logger).
- Often implemented with constructor functions or classes.
```

---

# Summary
- **Use Object Literals** for simple objects.
- **Use Classes** (or Constructor Functions) for multiple objects with shared structure/behavior.
- **Use Factory Functions** when you want more flexibility without "this" and "new".
- **Use Object.create()** for direct prototype-based inheritance.
- **Use Singleton** when only one object instance should exist.