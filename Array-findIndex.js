var number = [1,6,8,88,25];
var allOver18 = number.findIndex(myfunc)

function myfunc(value,index,array){
  return value > 18;
}