// html element by object
var x = document.forms["frm1"];
var text = "";
var i;
for(let i=0; i<x.length; i++){
 text+=x.elements[i].value + "<br>"
}
document.getElementById("demo").innerHTML = text
