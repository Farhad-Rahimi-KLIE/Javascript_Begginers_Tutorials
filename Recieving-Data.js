// javascript Tutorials
// Receiving Data
var myjson = '{name : "farhad", fname:"Rahimi"}';
var myobj = JSON.parse(myjson);
document.getElementById("demo").innerHTML = myobj.name
