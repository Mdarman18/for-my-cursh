let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let box=document.querySelector(".container")
let select=document.querySelector("#fav");
input.value=""
btn.addEventListener("click",function(){
    const enter=input.value.trim();
    document.body.style.backgroundColor=enter;
    box.style.backgroundColor=enter;
    if (enter) {
        document.body.style.backgroundColor=enter;
        select.style.backgroundColor=enter;
        btn.style.backgroundColor=enter;
        h1.style.color=enter;
        input.value=''
    }else{
        alert("Please Enter the color")
    }
})