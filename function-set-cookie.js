function setcookie(cname,cvalue,exday){
 var d = new Date();
 d.setTime(d.getTime() + (exday*24*60*60*1000));
 var expires = "expires" + d.toUTCString();
 document.cookie = cname + "=" + cvalue + "," + expires
}