const moment = require('moment')

const timeNow = moment() // mobile => service  
const timeAfterOneHour = moment().add(1,'hour') // service 1h 
// diff
// 55 minutes 00:05m Extend Time Pay -> 60 + 5 = 65
// Reserv Now => 17:00 = 18:00 day ? mesec ? => calendar timer
// Clock -> 30 
console.log(timeNow, timeAfterOneHour)