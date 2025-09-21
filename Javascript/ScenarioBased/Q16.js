(function ()
{
var message ="IIFE";
console.log(message);
}
)
();
console.log(message); //Error: message is not defined
// explanation: The variable 'message' is defined within the IIFE's scope and is not accessible outside of it.


