var d = new Date();
var timee = document.getElementById("time");
var day = document.getElementById("day");
var days = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
day.innerHTML = days[d.getDay()];
//tarikh.innerHTML += "  "+d.toLocaleDateString();//تاریخ میلادی را نمایش می دهد
 var mytimer = setInterval(mytim, 1000);
function mytim() {
    timee.innerHTML = d.toLocaleTimeString();
}
 
