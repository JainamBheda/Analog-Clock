var snd = new Audio("sound1.mp3");
var snd2 = new Audio("win.wav");
setInterval(()=>{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;
    // playSound();
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000);    //1000ms karte joa karte joa(set interval ka meaning)

setInterval(()=>{
    snd.play();
})
setInterval(()=>{
    snd2.play();
},7200000)
    