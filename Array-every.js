// javascript Tutorials
//javascript Array every
var number = [45,4,9,16,25];
var allOver18 = number.every(myfunc)

function myfunc(value,index,array){
  return value > 18;
}
