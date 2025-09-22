let input=document.querySelector(".inputString");
let btn=document.querySelector(".checkButton");
let p=document.querySelector(".result");
let reset=document.querySelector(".reset");
input.value="";

btn.addEventListener("click", function() {
    let inputValue = input.value.trim();
    let num = Number(inputValue);

    if (!isNaN(num) && Number.isInteger(num)) {
        console.log("✔ User entered an integer");
    } else {
        console.log("✘ User did not enter an integer");
}   
    let String=inputValue;
    for (let i = 0; i < String.length / 2; i++) {
        if (String[i] !== String[String.length - 1 - i]) {
            p.innerText = `Sorry 😔 ${inputValue} is not a palindrome`;
            return;
        }else{
            p.innerText = `Wow 😲 ${inputValue} is a palindrome 🎉`;
        }   
    }
});
reset.addEventListener("click",function(){
      input.value="";
      p.innerText="";
});