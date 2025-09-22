let box=document.querySelector('.box');
let increment=document.querySelector('.Increase');
let decrement=document.querySelector('.decrease');
let reset=document.querySelector('.Reset');
let countSpan = document.querySelector('.count');
const toggleBtn = document.querySelector(".themeToggle");
const song = new Audio("songs.mp3");
const song2 = new Audio("mixkit-doorbell-single-press-333.wav");
const song3 = new Audio("mixkit-bubble-pop-up-alert-notification-2357.wav");

let count=0;
let savedCount = localStorage.getItem("counterValue");
increment.addEventListener("click",()=>{
     song.currentTime = 0;
    song.play();
    setTimeout(() => {
        song.pause();
        song.currentTime = 0;
    }, 800);
    count++;
    if(count==100){
        alert("You have reached the maximum limit"); 
        increment.disabled = true; 
    }else if(count>0 && count<=100){
        box.style.color="green";
         box.innerHTML=count;
          countSpan.style.transform = "scale(5)";
            setTimeout(() => {              
                countSpan.style.transform = "scale(1)";
            }, 6000);

    }
    updateCounter();
     
});
decrement.addEventListener("click",()=>{
     
        song2.currentTime = 0;
        song2.play();
        setTimeout(() => {
            song2.pause();
            song2.currentTime = 0;
        }, 6000);
    count--;
     box.innerHTML=count;
     if(count== -100){
        alert("You have reached the Lowest limit");
        decrement.disabled = true;
     }if(count < 0 &&count>=-100){
        box.style.color="red";
    }else if(count==0){
        box.style.color="black";
        box.innerHTML=count;
    }
    updateCounter();
       
});
reset.addEventListener("click",()=>{
    song3.play();
    count=0;
    box.innerHTML=count;
});
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
    box.classList.toggle("dark-mode");
    buttons.forEach(btn => btn.classList.toggle("dark-mode"));

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});