let input= document.querySelector(".input");
let btn=document.querySelector(".btn");
let result=document.querySelector(".res")

   


const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
btn.addEventListener("click",()=>{
    let InputStr = input.value.trim();
    if (!InputStr) {
        alert("Please Enter a word");
        return;
    }
    fetch(`${url}${InputStr}`)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            result.innerHTML=''

          result.innerHTML = data[0].meanings[0].definitions[0].definition;
        })
        .catch(err => {
            console.error(err);
            result.innerHTML = "Word not found!";
        });
        
    
})
   