/**
 * calcSpeedTicket()
 * ------------------------------------------------------
 * Write a function that calculates a speeding ticket:
 *
 * The function should take 3 arguments:
 *    (1) the speed limit
 *    (2) the user's reported speed
 *    (3) a boolean value for whether the user was in
 *        a protected area (like a school-zone or work-zone)
 *
 * fine schedule:
 *   less than speed limit             : $0
 *   speeding ticket (< 20mph)         : $150
 *   speeding ticket (>= 20mph)        : $250
 *
 * If the user is in a protected area, the fine doubles.
 *
 * Examples:
 *  calcSpeedTicket(40, 30, false)
 *    => 0
 *
 *  calcSpeedTicket(20, 30, false)
 *    => 150
 *
 *  calcSpeedTicket(20, 31, true)
 *    => 300
 *
 *  calcSpeedTicket(50, 100, true)
 *    => 500
 *
 **/

function calcSpeedTicket(lv,vu,fd) {

var fineSpeeding = vu - lv
var fineProtectedZone = fineSpeeding * 2
var sinMulta = 0
var multa1 = 0
var multa2 = 0

if (fineSpeeding <= 0) {

return sinMulta

} else if (20 > fineSpeeding > 0 && fd === false) {
  multa1 = 150

  return  multa1
} else if (fineSpeeding < 20 && fd === true) {
  multa1 = 150 * 2

    return  multa1
} else if (fineSpeeding >= 20 && fd === false) {
  multa1 = 250

  return  multa1
} else if(fineSpeeding >= 20 && fd === true) {
multa1 = 250 * 2
  
  return  multa1
}
}


//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

console.assert( calcSpeedTicket(25, 40, false) === 150  )
console.assert( calcSpeedTicket(65, 72, true) === 300  )
console.assert( calcSpeedTicket(75, 97, false) === 250 )
console.assert( calcSpeedTicket(55, 83, true) === 500  )

console.assert( calcSpeedTicket(30, 27, true) === 0  )
