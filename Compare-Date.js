// Compare Date
var today, someday, text;
today = new Date()
someday = new Date();
someday.setFullYear(2100,0, 4)

if(someday > today){
 text = "Today is before january 14, 2000";
}elss{
 text = "today is after january 14, 2000"
}
document.getElementById("demo").innerHTML = text;
