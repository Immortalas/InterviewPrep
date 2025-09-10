# JavaScript Variable Declarations: `var`, `let`, and `const`

In JavaScript, variables can be declared using three different keywords: `var`, `let`, and `const`. Each has distinct behaviors regarding scope, initialization, redeclaration, reassignment, and accessibility before declaration. Understanding these differences helps avoid bugs and write clearer code.

## Comparison Table

| Behavior                      | `var`          | `let`          | `const`        |
|-------------------------------|----------------|----------------|----------------|
| Scope                         | Function/Global| Block          | Block          |
| Initialization                | Optional       | Optional       | Required       |
| Redeclaration                 | Yes            | No             | No             |
| Reassignment                  | Yes            | Yes            | No             |
| Accessing before declaration  | `undefined`    | ReferenceError | ReferenceError |

## Details

### Scope
- **`var`**: Scoped to the containing function or globally if declared outside a function. Ignores block scope (e.g., inside `if` or `for` blocks).
- **`let` and `const`**: Block-scoped. Only accessible within the nearest pair of curly braces (`{ ... }`).

### Initialization
- **`var` and `let`**: Can be declared without an initial value.
- **`const`**: Must be initialized at the time of declaration.

### Redeclaration
- **`var`**: Can be redeclared in the same scope.
- **`let` and `const`**: Cannot be redeclared in the same scope.

### Reassignment
- **`var` and `let`**: Can be reassigned after declaration.
- **`const`**: Cannot be reassigned; the value is constant.

### Accessing Before Declaration (Hoisting)
- **`var`**: Variable is "hoisted" and initialized as `undefined`. Accessing it before declaration does not throw an error.
- **`let` and `const`**: Also hoisted, but not initialized. Accessing them before declaration throws a `ReferenceError` (they are in the "temporal dead zone").

## Code Examples

```js
// var example
console.log(a); // undefined
var a = 10;

// let example
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// const example
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 10;
```

## Summary

- Use `let` for variables whose values will change.
- Use `const` for variables whose values should remain constant.
- Avoid using `var` in modern JavaScript to prevent scope-related bugs.
