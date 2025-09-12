## JavaScript Hoisting Explained

Hoisting is a JavaScript mechanism where variable and function declarations are moved ("hoisted") to the top of their containing scope during the compile phase.

- **Variable declarations (`var`):** Declarations are hoisted, but not initializations. The value of the variable is `undefined` if accessed before initialization.
- **Variable declarations (`let` and `const`):** Declarations are hoisted, but not initialized. Accessing them results in `ReferenceError` until the actual declaration is encountered.
- **Function expressions (`var`):** Declarations are hoisted, but not initializations. The value of the variable is `undefined` if accessed before initialization.
- **Function declarations (`function`):** Both declaration and definition are fully hoisted.
- **Class declarations (`class`):** Declarations are hoisted, but not initialized. Accessing them results in `ReferenceError` until the actual declaration is encountered.
- **Import declarations (`import`):** Declarations are hoisted, and side effects of importing the module are executed before the rest of the code.

The following table summarizes the result of accessing variables before they are declared:

```
Declaration                  Accessing before declaration
var func                     undefined
let func                     ReferenceError
const func                   ReferenceError
class Func                   ReferenceError
var func = function() {...}  undefined
function func() {...}        Normal
import                      Normal
```