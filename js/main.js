let number = document.getElementById("number");
let ayir = document.getElementById("ayir");
let reset = document.getElementById("reset");
let qoshish = document.getElementById("qoshish");

let count = 0;


qoshish.addEventListener("click", ()=>{
    count++;
    number.textContent = count;
})

ayir.addEventListener("click", ()=>{
    count--;
    number.textContent = count;
})

reset.addEventListener("click", ()=>{
    count = 0;
    number.textContent = count;
})