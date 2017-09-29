/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/
function getMinimum(n1,n2,n3,n4) {


if ( n1 <= n2 && n1 <= n3 && n1 <= n4 ) {

  return n1
} else if(n2 <= n1 && n2 <= n3 && n2 <= n4) {

  return n2
} else if(n3 <= n1 && n3 <= n2 && n3 <= n4){

  return n3
} else {

 return n4
}

}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*



console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
