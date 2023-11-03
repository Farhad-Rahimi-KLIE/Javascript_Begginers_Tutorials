// javascript Tutorials
var myvar = setInterval(myTimer,3000);

function myTimer(){
 var d = new Date();
 document.getElementById("demo").innerHTML = d.toLocaleTimeString()
}
