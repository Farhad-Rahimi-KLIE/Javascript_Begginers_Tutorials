// ajax Function 
function loadDic(){
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function(){
  if(this.readyState==4 && this.status ==200){
   document.getElementById("demo").innerHTML = this.responseText;
  }
 }
 xhttp.open("GET","ajax.info.txt",true);
 xhttp.dend()
}
