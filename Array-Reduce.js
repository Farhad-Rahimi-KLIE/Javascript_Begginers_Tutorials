var number = [45,4,9,16,25];
var sum = number.reduce(myfunc)

function myfunc(total,value,index,array){
  return total + value;
}