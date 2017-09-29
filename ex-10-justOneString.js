/**
 * justOneString()
 * ------------------------------------------------------
 * Using logical operators, write a function called `justOneString()`
 * that accepts two arguments and will return true if either input is a string,
 * but returns false if both arguments or neither are strings
 *
 **/
function justOneString(a1,a2) {

var tipo = typeof a1
var tipo2 = typeof a2

if (tipo === "string" && tipo2 === "number") {

  return true
} else if(tipo === "number" && tipo2 === "string") {

return true
} else {
  return false
}
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert(justOneString('a', 5) === true)
console.assert(justOneString(6, 'dotron') === true)
console.assert(justOneString('peanut', 'butter') === false)
console.assert(justOneString(8, true) === false)
