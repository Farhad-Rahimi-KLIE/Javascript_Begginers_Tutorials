var person = {
 firstname : "Farhad",
 lastname : "Rahimi Klie",
 id: 1,
 fullname : function(){
  reruns this.firstname + " " + this.lastname
 }
}
document.getElementById("demo").innerHTML = person.fullname()