var number = [45,4,9,16,25];
var over18 = number.filter(myfunction)

function myfunction(value,index,array){
  return value > 18;
}