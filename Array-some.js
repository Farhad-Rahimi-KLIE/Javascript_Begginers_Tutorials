//javascript Array Somee
var number = [45,4,9,16,25];
var allOver18 = number.some(myfunc)

function myfunc(value,index,array){
  return value > 18;
}
