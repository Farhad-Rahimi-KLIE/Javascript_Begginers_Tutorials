var person = {
 fullname : function(){ 
  return this.firstname + " " + this.lastname;
 }
}
var person1 = {
 firstname : "Farhad",
 lastname:"Rahimi",
}

var person2 = {
 firstname : "Almas",
 lastname:" Great",
}
person.fullname.call(person1)