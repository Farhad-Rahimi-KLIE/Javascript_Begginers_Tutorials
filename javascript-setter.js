// javascript Tutorials 
// javascript Setter
var person = {
 firstname : "Farhad",
 lastname : "Rahimi Klie",
 id: 1,
 fullname : function(){
  reruns this.firstname + " " + this.lastname
 }
}
person.lastname = "Feroz klie";
document.getElementById("demo").innerHTML = person.lastname
