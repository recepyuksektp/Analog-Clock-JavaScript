const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
let hour;
let minute;
let second;
let date;
setInterval(function(){
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    secondHand.style.transform = "rotate("+(second*6)+"deg)";
    minuteHand.style.transform = "rotate("+(minute*6)+"deg";
    hourHand.style.transform = "rotate("+(hour*30)+"deg";
},1000)