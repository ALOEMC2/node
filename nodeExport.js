function music(song,action){

  sing(song)
}

function sing(song){
  console.log("I love to sing " + song)
}
 function hum(song){
  console.log("I love to hum " + song)
 }



// music("wonderland",hum)

module.exports ={
  music : music,
  hum : hum
}