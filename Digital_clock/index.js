let hours=document.querySelector('.hours');
let minutes=document.querySelector('.minutes');
let second=document.querySelector('.seconds');
let milliseconds=document.querySelector('.milliseconds');
const now=new Date();
setInterval(()=>{
    const now=new Date();
    const h=now.getHours(); 
    const m=now.getMinutes();
    const s=now.getSeconds();
    hours.innerHTML=h;
    minutes.innerHTML=m;
    second.innerHTML=s;
},1000);