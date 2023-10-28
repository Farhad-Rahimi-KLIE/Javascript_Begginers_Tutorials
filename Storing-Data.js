// Javascript Tutorials 
// Storing Data
// Storing Data
var myjson = '{name : "farhad", fname:"Rahimi"}';
var myobj = JSON.stringify(myjson);
LocalStorage.setItem("testJSON",myobj);


// Retrieving Data
text = LocalStorage.setItem("textJSON");
obj = JSON.parse(text)
document.getElementById("demo").innerHTML = obj.name
