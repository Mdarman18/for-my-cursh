let input=document.querySelector("#inputbox");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
      if(string.length < 10){  // check length
                string += e.target.innerHTML;  // string mein add karo
                input.value = string;   
             }
            input.value = "error"; 
            }else if(e.target.innerHTML =="Ac"){
            string=""
            input.value=string;
        }
         else if (e.target.innerHTML.trim() === "Del") { 
    string = string.substring(0, string.length - 1);
    input.value = string; 


         }else{
        string+=e.target.innerHTML
        input.value=string;
        }
    
    })
})
