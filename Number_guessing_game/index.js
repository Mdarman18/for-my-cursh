let input=document.querySelector(".input");
let button=document.querySelector(".btn");
let box3=document.querySelector(".box3");
let attempts=document.querySelector(".attempts")

let num = Math.floor(Math.random() * 100) + 1;
console.log(num); 
input.value='';
let count = 0;
const song = new Audio("new.mp3");

button.addEventListener("click",function(){
    const guess=Number(input.value);
     count++;
     attempts.innerHTML=count;
   if (input.value.trim() === "") {
    box3.innerHTML = "❌ Please enter a valid number!";
    return; 
}
    if(isNaN(guess)){
        box3.innerHTML="❌ Only numbers are allowed!";
        input.value ="";
        return
    }
    if (guess < 1 || guess > 100) {
        box3.innerHTML="❌ Number must be between 1 and 100!";
        input.value="";
        return
        
    }

    if (guess===num) {
    
        box3.innerHTML=`🎉 You guess the number:-${count} attempt`
        song.play();
    }
    else if (guess > num) {
        box3.innerHTML=` 😢 Oops! The number is High. Please enter a lower number.`
}else{
    box3.innerHTML=`😢 Oops! The number is Low. Please enter a Higher number`
    
}

});